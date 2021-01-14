package com.guojx.domin;

import java.io.Serializable;
import java.util.Date;

public class Payload implements Serializable {
    private String cardID;
    private Date issueTime;
    public Payload(String cardID,Date issueTime){
        this.issueTime = issueTime;
        this.cardID = cardID;
    }

    public String getName() {
        return cardID;
    }

    public void setName(String cardID) {
        this.cardID = cardID;
    }

    public Date getIssueTime() {
        return issueTime;
    }

    public void setIssueTime(Date issueTime) {
        this.issueTime = issueTime;
    }
}
