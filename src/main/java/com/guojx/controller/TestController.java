package com.guojx.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class TestController {

    @GetMapping("/test/test")
    public String test(String username , HttpServletRequest request){
        //认证成功之后放入session
        request.getSession().setAttribute("username",username);
        return "login ok!";
    }
    @GetMapping("/test/testSkip")
    public Map<String,String> testSkip(HttpServletRequest request){
        HashMap<String,String> rtnValue = new HashMap<>();
        String token = request.getHeader("token");
        rtnValue.put("code","SUCCESS");

        return rtnValue;
    }
}