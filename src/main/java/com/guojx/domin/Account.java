package com.guojx.domin;

import java.io.Serializable;


/**
 * 账户信息
 */
public class Account implements Serializable {
    public Account(){};

    private Integer id;
    private String name;
    private Double money;
    private String cardID;
    private String password;


    public String getCardID() {
        return cardID;
    }

    public void setCardID(String cardID) {
        this.cardID = cardID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Double getMoney() {
        return money;
    }

    public void setMoney(Double money) {
        this.money = money;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Account{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", money=" + money +
                ", cardID='" + cardID + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
