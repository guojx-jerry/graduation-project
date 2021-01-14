package com.guojx.interceptor;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.guojx.domin.Payload;
import com.guojx.utils.JWTUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;


@Slf4j
public class NotLoggedInToIntercept implements HandlerInterceptor {
    //登录页地址
    private static final String loginUrl = "/pages/admin/login.html";

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        //取得保存在session对象中的用户信息(方法一)
//        HttpSession session = request.getSession();
//        String cardID = (String) session.getAttribute("cardID");
//        if(cardID == null){
//            response.sendRedirect(request.getContextPath()+"/index.jsp");
//            return false;
//        }
//        return true;

//        //取得保存在在Cookie对象中的用户信息（方法二）
//        Cookie[] cookies = request.getCookies();
//        for(Cookie cookie:cookies){
//            if (cookie.getName().equals("isLogin")){
//                return true;
//            }
//        }
//        return false;

        //方法三：使用jwt
        String jwt = null;
        Cookie[] cookies = request.getCookies();
        Cookie cookieNeed = null;
        if(cookies==null){
            response.sendRedirect(request.getContextPath()+loginUrl);
            return false;
        }
        for(Cookie cookie:cookies){
            String cookieName = cookie.getName();
            if(cookieName.equals("token")){
                jwt = cookie.getValue();
                cookieNeed = cookie;
            }
        }

        log.info("[登录校验拦截器]-从header中获取的jwt为:{}", jwt);
        //判断jwt是否有效
        if(jwt!=null){
            String retJson = JWTUtils.unSign(jwt);
            log.info("[登录校验拦截器]-校验JWT有效性返回结果:{}", retJson);
            if(retJson!=null){
                JSONObject jsonObject = JSON.parseObject(retJson);
//                JSONObject payload = JSONObject.parseObject(jsonObject.getString("payload"));
//                String cardID = payload.getString("cardID");
//                Payload payloadNew = new Payload(cardID,new Date());
//                String newToken = JWTUtils.sign(payloadNew,60* 1000* 30);
//                cookieNeed.setMaxAge(0);
//                response.setHeader("User-Token",newToken);
//                Cookie cookie = new Cookie("token",newToken);
//                cookie.setMaxAge(30*60);
//                cookie.setPath("/");
//                response.addCookie(cookie);


                return true;

                //校验客户端信息
                //String userAgent = request.getHeader("User-Agent");
               // if(jsonObject.getString("userAgent").equals(userAgent)){
                //    response.setHeader("User-Token",jsonObject.getString("freshToken"));
                    //将客户端编号设置到session中
                 //   request.getSession().setAttribute(GlobalConstant.SESSION_CUSTOMER_NO_KEY, jsonObject.getString("userId"));
            //    }
            }


        }


        return false;

    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}
