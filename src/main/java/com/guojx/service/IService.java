package com.guojx.service;

import com.guojx.domin.Account;
import com.guojx.domin.LoginVO;

import java.sql.SQLException;
import java.util.List;

/**
 * 业务层接口
 */
public interface IService {
    public List<Account> FindAll() throws SQLException;

    public void SaveAccount(Account account) throws SQLException;

    public void Transfer(String drawee,String payee,Double money) throws SQLException;

    public String  Login(LoginVO account) throws SQLException;

}
