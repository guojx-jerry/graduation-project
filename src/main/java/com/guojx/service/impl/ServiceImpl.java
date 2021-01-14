package com.guojx.service.impl;

import com.guojx.dao.AccountDao;
import com.guojx.dao.impl.AccountDaoImpl;
import com.guojx.domin.Account;
import com.guojx.domin.LoginVO;
import com.guojx.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.sql.SQLException;
import java.util.List;

@Service("accountService")
public class ServiceImpl implements IService {
    @Autowired
    private AccountDaoImpl accountDao;

    @Override
    public List<Account> FindAll() throws SQLException {
        System.out.println("业务层：查询所有....");
        return accountDao.FindAll();
    }

    @Override
    public void SaveAccount(Account account) throws SQLException {
        System.out.println("业务层：保存账户....");
        accountDao.SaveAccount(account);
    }

    @Override
    public void Transfer(String drawee, String payee, Double money) throws SQLException {
        System.out.println("业务层，转账...");
        Account accDrawee = new Account();
        Account accPayee = new Account();
        accDrawee=accountDao.QueryAccountByCardId(drawee);
        accDrawee.setMoney(accDrawee.getMoney()-money);
        accPayee=accountDao.QueryAccountByCardId(payee);
        accPayee.setMoney(accPayee.getMoney()+money);
        accountDao.UpdateAccountByCardID(accDrawee);
        accountDao.UpdateAccountByCardID(accPayee);
    }

    @Override
    public String Login(LoginVO account) throws SQLException {
        System.out.println("业务层，登录...");
        String isLogin = "inaccurate password";
        Account realAccount = accountDao.QueryAccountByCardId(account.getCardID());
        if(realAccount==null){
            isLogin="不存在此账户";//不存在此账户
            return isLogin;
        }
        //偷懒，如果密码非空多很多工作量。。。
        if(realAccount.getPassword()!=null){
            String realPassword = realAccount.getPassword();
            if(realPassword.equals(account.getPassword())){isLogin="success";}
        }else{
            isLogin = "密码不正确";
        }


        return isLogin;

    }


}
