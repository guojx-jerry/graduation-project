package com.guojx.controller;

import com.guojx.domin.Account;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/skip")
public class SkipController {

    @RequestMapping("/success")
    public String test(){

        return "success";
    }

    @RequestMapping("/main")
    public String SkipMain(){ return "main"; }


    @RequestMapping("/transfer")
    public String SkipTransfer(){return "transfer";}

    @RequestMapping("/newAccount")
    public String newAccount(){ return "newAccount";}

    @RequestMapping("/account")
    public String Accoun(){return "Account";}
}
