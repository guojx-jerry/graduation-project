import React from 'react'
import 'react-mdui'
import axios from 'axios'



export default class Transfer extends React.Component{
    constructor(props) {
        super(props)
    }

    handleTransfer=()=>{
        let payee = document.getElementById("payee").value;
        let money = document.getElementById("money").value;
        let data = {
            'payee':payee,
            'money':money,
        }
        axios({
            url:'/account/transfer',
            data:data,
            dataType:"json",
            method:'post',
        })
            .then(function (XMLHttpRequest) {
                let transferStatus = XMLHttpRequest.headers['transferstatus'];
                if(transferStatus=='success'){
                    alert('转账成功！')
                }
            })
    }

    handleLogout=()=>{
        let _this = this;
        axios({
            url:'/account/logout',
            processData:false,
            type:"post",
        })
            .then(function (XMLHttpRequest) {
               let logoutStatus =  XMLHttpRequest.headers["logoutstatus"];
               if(logoutStatus=='success'){
                   _this.props.parent.setLoginState("none");

               }
            })
    }

    render() {
        return(
            <div className="mdui-theme-primary-indigo mdui-theme-accent-pink">
                <div className="mdui-toolbar mdui-color-theme">
                    <a href="javascript:;" className="mdui-btn mdui-btn-icon"><i
                        className="mdui-icon material-icons">menu</i></a>
                    <span className="mdui-typo-title">转账</span>
                    <div className="mdui-toolbar-spacer"></div>
                    <a href="javascript:;" className="mdui-btn mdui-btn-icon"><i
                        className="mdui-icon material-icons">&#xe87c;</i></a>
                </div>
                <table width="800">
                    <div>
                        <tr>
                            <td width="50000000">
                                <div className="mdui-textfield mdui-textfield-floating-label">
                                    <i className="mdui-icon material-icons">&#xe154;</i>
                                    <label className="mdui-textfield-label">收款人</label>
                                    <input className="mdui-textfield-input" type="收款人" id="payee"/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="mdui-textfield mdui-textfield-floating-label">
                                    <i className="mdui-icon material-icons">&#xe227;</i>
                                    <label className="mdui-textfield-label">金额</label>
                                    <input className="mdui-textfield-input" type="金额" id="money"/></div>
                            </td>
                        </tr>
                        <tr>
                            <div className="mdui-progress">
                                <div className="mdui-progress-determinate" style={{width: '0%'}}></div>
                            </div>
                        </tr><br/>
                        <tr>
                            <td align="center">
                                <button className="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent"
                                        onClick={this.handleTransfer}>转账
                                </button>
                            </td>
                            <td align="center">
                                <button type="button" className="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent"
                                        onClick={this.handleLogout}>注销
                                </button>
                            </td>
                        </tr>


                    </div>
                </table>
            </div>
        )
    }
}