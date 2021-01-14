package com.guojx.dao;

import com.guojx.domin.Account;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;
import java.util.List;

@Repository
public interface AccountDao {
    /**
     * 查询所有
     * @return
     */
    public List<Account> FindAll() throws SQLException;

    /**
     * 保存账户信息
     * @param account
     */

    public void SaveAccount(Account account) throws SQLException;


    public void UpdateAccountByCardID(Account account)throws SQLException;

    public Account QueryAccountByCardId(String cardID) throws SQLException;

}
