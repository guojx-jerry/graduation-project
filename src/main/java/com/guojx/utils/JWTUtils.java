package com.guojx.utils;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTCreator;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.*;

public class JWTUtils {

    private static final String SECRET  = "%!!LDSJFJerry";
    private static final String EXP = "exp";
    private static final String PAYLOAD = "payload";
    private static final ObjectMapper MAPPER = new ObjectMapper();
    private static final Base64.Decoder decoder = Base64.getDecoder();

    /**
     * 生成token header.payload.sign
     */
    public static String getToken(Map<String,Object> map){

        Calendar instance = Calendar.getInstance();
        instance.add(Calendar.DATE,7);  //默认7天过期

        JWTCreator.Builder builder = JWT.create();

        map.forEach((k,v)->{
            builder.withClaim(k,(String)v);
        });

        String token = builder.withExpiresAt(instance.getTime())     //指定令牌的过期时间
                .sign(Algorithm.HMAC256(SECRET));         //签名

        return token;
    }

    public static <T> String sign(T object,int maxAge){
        try{
            HashMap<String, Object> claims = new HashMap<>();

            JWTCreator.Builder builder = JWT.create();

            String jsonPayload = MAPPER.writeValueAsString(object);

            claims.put(PAYLOAD,jsonPayload);

//            claims.put(EXP,Long.toString(System.currentTimeMillis() + maxAge));

            claims.forEach((k,v)->{
                builder.withClaim(k,(String)v);
            });

            Calendar instance = Calendar.getInstance();
            instance.add(Calendar.MINUTE,maxAge);

            builder.withExpiresAt(instance.getTime());
            String sign = builder.sign(Algorithm.HMAC256(SECRET));
            return sign;

        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    /**
     * 验证token 合法性
     */

    public static void verify(String token){
        //创建验证对象
        JWT.require(Algorithm.HMAC256(SECRET)).build().verify(token);

    }

    /**
     * 获取token信息
     */
    public static DecodedJWT getTokenInfo(String token){
        //创建验证对象
        return JWT.require(Algorithm.HMAC256(SECRET)).build().verify(token);
    }

    public static String unSign(String sign){
        final JWTVerifier jwtVerifier = JWT.require(Algorithm.HMAC256(SECRET)).build();
        try{
            final DecodedJWT verify = jwtVerifier.verify(sign);
            Map<String,Object> claims = new HashMap<>();
            claims.put(PAYLOAD,verify.getPayload());
            claims.put(EXP,verify.getExpiresAt());
            claims.put("header",verify.getHeader());
            if(claims.containsKey(EXP)&&claims.containsKey(PAYLOAD)){
                Date exp = (Date)claims.get(EXP);
                Date now = new Date();
                if(exp.after(now)){

                    String json = new String(decoder.decode((claims.get(PAYLOAD).toString().replace("\r\n\\", ""))),"UTF-8");

                    return json;
                }
            }
            return null;


        }catch (Exception e){
            e.printStackTrace();
        }

    return null;
    }
}
