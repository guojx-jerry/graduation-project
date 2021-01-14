import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.Verification;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.guojx.domin.Account;
import com.guojx.service.IService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.io.IOException;
import java.sql.SQLException;
import java.util.*;

public class Test {
    @org.junit.Test
    public void test() throws SQLException {
        ApplicationContext ac =  new ClassPathXmlApplicationContext("classpath:application-context.xml");
        IService accountService = (IService) ac.getBean("accountService");
        accountService.FindAll();
    }

    @org.junit.Test
    public void contextLoads() {

        HashMap<String,Object> map = new HashMap<String,Object>();
        Calendar instance = Calendar.getInstance();
        instance.add(Calendar.SECOND,60);

        String token = JWT.create()
                .withHeader(map)  //header
                .withClaim("userid", 1)  //payload
                .withClaim("username", "jerry")
                .withExpiresAt(instance.getTime())       //指定令牌的过期时间
                .sign(Algorithm.HMAC256("%LDSJFJerry"));//签名

        System.out.println(token);

    }
    @org.junit.Test
    public void testCompare(){
        //创建验证对象
        JWTVerifier jwtVerifier = JWT.require(Algorithm.HMAC256("%LDSJFJerry")).build();

        DecodedJWT verify = jwtVerifier.verify("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MDk3NDk5NzYsInVzZXJpZCI6MSwidXNlcm5hbWUiOiJqZXJyeSJ9.0UgG-jNlj1tS2lckG3t0KLMXGnrM4BC_AcqyjrqIz9Y");

        System.out.println(verify.getClaim("username").asString());

        System.out.println(verify.getClaim("userid").asInt());
    }

    @org.junit.Test
    public void jsonTest() throws IOException {
        ObjectMapper object = new ObjectMapper();
        Account account = new Account();
        account.setName("jerry");
        account.setMoney(200d);
        account.setCardID("123456");
        String jsonAccount = object.writeValueAsString(account);//java对象转换成json对象
        System.out.println(jsonAccount);
        System.out.println("------分割线------");
        Account account1 = object.readValue(jsonAccount,account.getClass());//json对象转换成java对象
        System.out.println(account1);
        System.out.println("------分割线------");

        //json转换成list对象
        String jsonAccount2List = object.writeValueAsString(Arrays.asList(account,account));
        System.out.println("jsonAccount2List:"+jsonAccount2List);
        List<Account> listAccount = object.readValue(jsonAccount2List,object.getTypeFactory().constructParametricType(List.class,Account.class));
        listAccount.forEach(item->{
            System.out.println(item);
        });









    }
}
