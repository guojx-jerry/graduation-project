import React from 'react'
import 'react-mdui'
import axios from 'axios'
import PropTypes from 'prop-types'
import Main from "./main";
import Parent from "../test/components/coms/parent";





export default class Login extends React.Component{
    constructor(props) {
        super(props);
    }

    loginClick=()=>{
        let _this = this;
        let cardID = window.document.getElementById("cardID").value;
        let password = window.document.getElementById("password").value;
        let data = {
            'cardID':cardID,
            'password':password
        }

        axios({
            method: 'post',
            url: '/account/login',
            data: data,})
            .then(function (XMLHttpRequest){
                let sessionstatus=XMLHttpRequest.headers['sessionstatus']
                if(sessionstatus=="timeout"){
                    alert("登录超时，请重新登录")
                    // alert("登录超时,请重新登录！");
                    //如果超时就处理 ，指定要跳转的页面
                    // window.location.replace();
                }
                if(sessionstatus=="success"){
                    _this.props.parent.setLoginState("login");
                    let loginState = _this.props.parent.getLoginState();
                }
            })
    }

    render() {
        return(<div className="mdui-theme-primary-indigo mdui-theme-accent-pink"><div className="mdui-toolbar mdui-color-theme">
            <a href="javascript:;" className="mdui-btn mdui-btn-icon"><i
                className="mdui-icon material-icons">menu</i></a>
            <span className="mdui-typo-title">登录</span>
            <div className="mdui-toolbar-spacer"></div>
            <a href="javascript:;" className="mdui-btn mdui-btn-icon"><i className="mdui-icon material-icons">search</i></a>
            <a href="javascript:;" className="mdui-btn mdui-btn-icon"><i
                className="mdui-icon material-icons">refresh</i></a>
            <a href="javascript:;" className="mdui-btn mdui-btn-icon"><i
                className="mdui-icon material-icons">more_vert</i></a>
        </div>
        <div>
            <table width="600">
            <tr>
                <td>
                    <div className="mdui-textfield mdui-textfield-floating-label">
                        <i className="mdui-icon material-icons">account_circle</i>
                        <label className="mdui-textfield-label">账号</label>
                        <input className="mdui-textfield-input" type="账号" id="cardID"/>
                    </div>
                </td>
            </tr>
                <tr>
                <td>
                    <div className="mdui-textfield mdui-textfield-floating-label">
                        <i className="mdui-icon material-icons">lock</i>
                        <label className="mdui-textfield-label">密码</label>
                        <input className="mdui-textfield-input" type="密码" id="password"/>
                    </div>
                </td>
                </tr>
                <tr>
                <td>
                <div className="mdui-progress">
                    <div className="mdui-progress-determinate" style={{width: '0%'}}></div>
                </div>
                </td>
                </tr>
                <tr>
                <td>
                    <button className="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent"
                            onClick={this.loginClick}>登录
                    </button>
                </td>
                </tr>
                <Parent/>

            </table>
        </div>
        </div>)
    }
}