package com.guojx.dao.impl;

import com.guojx.component.Component;
import com.guojx.dao.AccountDao;
import com.guojx.domin.Account;
import com.guojx.utils.ConnectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Repository
public class AccountDaoImpl implements AccountDao {
    @Autowired
    private ConnectionUtils connectionUtils;
    @Override
    public List<Account> FindAll() throws SQLException {
        Connection con = connectionUtils.getCurrentThreadConn();
        String sql = "select * from account";
        PreparedStatement preparedStatement = con.prepareStatement(sql);
         ResultSet resultSet = preparedStatement.executeQuery();
        List accountlist = Component.convertList(resultSet);
        return accountlist;
    }

    @Override
    public void SaveAccount(Account account) throws SQLException {
        Connection con = connectionUtils.getCurrentThreadConn();
        String sql = "insert into account (name,money,cardID) values (?,?,?)";
        PreparedStatement preparedStatement = con.prepareStatement(sql);
        preparedStatement.setString(1,account.getName());
        preparedStatement.setDouble(2,account.getMoney());
        preparedStatement.setString(3,account.getCardID());
        preparedStatement.execute();
        preparedStatement.close();

    }

    @Override
    public void UpdateAccountByCardID(Account account) throws SQLException {
        Connection con = connectionUtils.getCurrentThreadConn();
        String sql = "update account set money = ? where cardID = ?";
        PreparedStatement preparedStatement = con.prepareStatement(sql);
        preparedStatement.setDouble(1,account.getMoney());
        preparedStatement.setString(2,account.getCardID());
        preparedStatement.executeUpdate();
        preparedStatement.close();
    }


    @Override
    public Account QueryAccountByCardId(String cardID) throws SQLException {
        Connection con = connectionUtils.getCurrentThreadConn();
        String sql = "select * from account where cardID=?";
        PreparedStatement preparedStatement = con.prepareStatement(sql);
        preparedStatement.setString(1,cardID);
        ResultSet resultSet = preparedStatement.executeQuery();

        Account account = new Account();
        while(resultSet.next()) {
            account.setCardID(resultSet.getString("CardID"));
            account.setName(resultSet.getString("name"));
            account.setMoney(resultSet.getDouble("money"));
            account.setPassword(resultSet.getString("password"));
        }

        resultSet.close();
        preparedStatement.close();
        //con.close();

        return account;
    }
}
