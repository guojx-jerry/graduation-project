import React from 'react'
import 'react-mdui'
import axios from 'axios'

export default class NewAccount extends React.Component{
    constructor(props) {
        super(props)
    }

    newAccount=()=>{
        let name = document.getElementById("name").value;
        let money = document.getElementById("money").value;
        let cardID = document.getElementById("cardID").value;
        let password = document.getElementById("password").value;

        let data = {
            'name':name,
            'money':money,
            'cardID':cardID,
            'password':password
        };
        // if(isNaN(money)){
        //     console.log(this.props.parent.getLoginState())
        //     //alert('金额要为数字！！');
        //     // return;
        // }else{

        axios({
            url: "/account/saveAccount",
            data:data,
            dataType:"json",
            processData:false,
            method:"post",
        })
            .then(function (XMLHttpRequest) {
                let status = XMLHttpRequest.headers['status'];
                if(status=='success'){
                    alert('新增成功！')
                }else{
                    alert('新增失败！')
                }
            })

    }

    render() {
        return(
            <div className="mdui-theme-primary-indigo mdui-theme-accent-pink">
            <div className="mdui-toolbar mdui-color-theme">
                <a href="javascript:;" className="mdui-btn mdui-btn-icon"><i
                    className="mdui-icon material-icons">menu</i></a>
                <span className="mdui-typo-title">申请账户</span>
                <div className="mdui-toolbar-spacer"></div>
                <a href="javascript:;" className="mdui-btn mdui-btn-icon"><i
                    className="mdui-icon material-icons">search</i></a>
                <a href="javascript:;" className="mdui-btn mdui-btn-icon"><i
                    className="mdui-icon material-icons">refresh</i></a>
                <a href="javascript:;" className="mdui-btn mdui-btn-icon"><i
                    className="mdui-icon material-icons">more_vert</i></a>
            </div>
            <form id="form" >
                <table width={600}>
                <tr>
                    <td>
                        <div className="mdui-textfield mdui-textfield-floating-label">
                            <i className="mdui-icon material-icons">account_circle</i>
                            <label className="mdui-textfield-label">名字</label>
                            <input className="mdui-textfield-input" type="名字" id="name"/>
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
                    <td>
                        <div className="mdui-textfield mdui-textfield-floating-label">
                            <i className="mdui-icon material-icons">&#xe850;</i>
                            <label className="mdui-textfield-label">银行账号</label>
                            <input className="mdui-textfield-input" type="银行账号" id="cardID"/></div>
                    </td>
                </tr>
                    <tr>
                        <td>
                            <div className="mdui-textfield mdui-textfield-floating-label">
                                <i className="mdui-icon material-icons">lock</i>
                                <label className="mdui-textfield-label">密码</label>
                                <input className="mdui-textfield-input" type="密码" id="password"/></div>
                        </td>
                    </tr>
                <tr>
                    <div className="mdui-progress">
                        <div className="mdui-progress-determinate" style={{width: '0%'}}></div>
                    </div>
                </tr>
                <tr>
                    <td>
                        <button className="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent"
                                onClick={this.newAccount}>新增
                        </button>
                            <button className="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent"
                                    onClick={()=>{alert('暂无此功能')}}>返回
                            </button>

                    </td>
                </tr>
                </table>
            </form>


            </div>

        )
    }
}