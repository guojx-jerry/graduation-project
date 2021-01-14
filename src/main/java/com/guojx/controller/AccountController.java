package com.guojx.controller;

import com.guojx.domin.Account;
import com.guojx.domin.LoginVO;
import com.guojx.domin.Payload;
import com.guojx.domin.TransferVO;
import com.guojx.service.IService;
import com.guojx.utils.JWTUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.sql.SQLException;
import java.util.Date;
import java.util.List;


@Controller
@RequestMapping("/account")
public class AccountController {
    @Autowired
    private IService accountService;
    @RequestMapping("/findAll")
    public String findAll(Model model) throws SQLException {
        System.out.println("表现层：查询所有...");
        List<Account> list = accountService.FindAll();
        model.addAttribute("list",list);
        System.out.println(list);
        return "list";

    }
    @RequestMapping(value = "/saveAccount",method = RequestMethod.POST)
    public void saveAccount(@RequestBody Account account , HttpServletRequest request, HttpServletResponse response) throws SQLException {
        System.out.println("表现层：保存账户...");
        System.out.println(account);
        accountService.SaveAccount(account);
        System.out.println("保存成功");
        response.setHeader("status","success");
        response.setHeader("Access-Control-Expose-Headers","status");
    }
    @RequestMapping("/transfer")
    public void transfer(@RequestBody TransferVO transfer ,HttpServletRequest req , HttpServletResponse resp) throws SQLException {
        System.out.println("表现层：转账...");
        accountService.Transfer((String) req.getSession().getAttribute("cardID"), transfer.getPayee(), transfer.getMoney());
        resp.setHeader("transferStatus","success");
        resp.setHeader("Access-Control-Expose-Headers","transferStatus");
    }

    @RequestMapping("/saveAccount_react")
    public void saveAccount(String name,Double money) throws SQLException {
        System.out.println("表现层：保存账户...");
        Account account = new Account();
        account.setMoney(money);
        account.setName(name);
        accountService.SaveAccount(account);
        System.out.println("保存成功");
    }
    @RequestMapping("/login")
    public void Login(@RequestBody LoginVO account,HttpServletRequest req,HttpServletResponse resp) throws SQLException, IOException {
        System.out.println("表现层：登录....");
        String returnValue = accountService.Login(account);
        if(returnValue.equals("success")){
            //给用户jwt加密生成token
            Payload payload = new Payload(account.getCardID(),new Date());
            String token = JWTUtils.sign(payload,60* 1000* 30);

//            HttpSession session = req.getSession();
//            session.setAttribute("cardID",account.getCardID());
//            Cookie cookie = new Cookie("isLogin","yes");
//            cookie.setMaxAge(30*60);//设置为30min
//            cookie.setPath("/");
//            resp.addCookie(cookie);
            Cookie[] cookies = req.getCookies();
            for(Cookie cookie:cookies){
                if(cookie.getName().equals("token")){
                    cookie.setMaxAge(0);
                }
            }
            //跨域请求 响应头用Access-Control-Expose-Headers
            resp.setHeader("User-Token",token);
//            resp.sendRedirect("/pages/admin/index.html");
            Cookie cookie = new Cookie("token",token);
            cookie.setMaxAge(30*60);
            cookie.setPath("/");
            resp.addCookie(cookie);
        }


//        else {
//            resp.setHeader("sessionstatus","timeout");
//            resp.setHeader("Access-Control-Expose-Headers", "sessionstatus");
//
//        }

    }
    @RequestMapping("/logout")
    public void Logout(HttpServletRequest resq, HttpServletResponse resp){
        System.out.println("表现层：注销...");
        HttpSession session = resq.getSession();
        session.invalidate();
        //resq.removeAttribute(session.getAttributeNames().toString());
        resp.setHeader("logoutStatus","success");
        resp.setHeader("Access-Control-Expose-Headers", "logoutStatus");
    }
}
