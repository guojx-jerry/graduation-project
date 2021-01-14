<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/12/8
  Time: 18:10
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>转账</title>
    <script src="http://libs.baidu.com/jquery/2.1.4/jquery.min.js"></script>
    <!-- MDUI CSS -->
    <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/mdui@1.0.1/dist/css/mdui.min.css"
            integrity="sha384-cLRrMq39HOZdvE0j6yBojO4+1PrHfB7a9l5qLcmRm/fiWXYY+CndJPmyu5FV/9Tw"
            crossorigin="anonymous"
    />
    <style type="text/css">

        body{
            background: url("../../img/5c42f6d538e27da8a217819202b8e763.jpg") ;
            background-size: 100% 100%;
        }
    </style>
    <!-- MDUI JavaScript -->
    <script
            src="https://cdn.jsdelivr.net/npm/mdui@1.0.1/dist/js/mdui.min.js"
            integrity="sha384-gCMZcshYKOGRX9r6wbDrvF+TcCCswSHFucUzUPwka+Gr+uHgjlYvkABr95TCOz3A"
            crossorigin="anonymous"
    ></script>

</head>
<script>
    $(function () {
        $("#transfer_button").click (function () {
            let drawee = $("#drawee").val();
            let payee = $("#payee").val();
            let money = $("#money").val();
            let data = {
                'payee':payee,
                'money':money,
                'drawee':drawee
            }
            $.ajax({
                headers:{
                    'Content-type':'application/json;charset=UTF-8'
                },
                url:'/account/transfer',
                data:JSON.stringify(data),
                dataType:"json",
                processData:false,
                type:"post",
                success:(res)=>{
                    console.log("转账成功");
                },
                complete:
                function (XMLHttpRequest) {
                    let transferStatus = XMLHttpRequest.getResponseHeader("transferStatus");
                    if(transferStatus == "success"){
                        alert("转账成功！")
                    }

                }
            })
        })
        $("#logout").click(function () {

            $.ajax({
                headers:{
                    'Content-type':'application/json;charset=UTF-8'
                },
                url:'/account/logout',

                dataType:"json",
                processData:false,
                type:"post",
                complete:function (XMLHttpRequest) {
                    let logoutStatus = XMLHttpRequest.getResponseHeader("logoutStatus");
                    if(logoutStatus=="success") {
                        window.location.href = "../../index.jsp"
                    }else{
                        alert("注销失败");
                    }
                }
            })
        })
    })
</script>
<body class="mdui-theme-primary-indigo mdui-theme-accent-pink">
<div class="mdui-toolbar mdui-color-theme">
    <a href="javascript:;" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">menu</i></a>
    <span class="mdui-typo-title">转账</span>
    <div class="mdui-toolbar-spacer"></div>
    <a href="javascript:;" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">&#xe87c;</i></a>
</div>
<div style="background: #71d4ff">

<tr>
    <td><div class="mdui-textfield mdui-textfield-floating-label">
        <i class="mdui-icon material-icons">&#xe154;</i>
        <label class="mdui-textfield-label">收款人</label>
        <input class="mdui-textfield-input" type="收款人" id="payee"/>
    </div></td>
</tr>
    <tr>
    <td><div class="mdui-textfield mdui-textfield-floating-label">
        <i class="mdui-icon material-icons">&#xe227;</i>
        <label class="mdui-textfield-label">金额</label>
        <input class="mdui-textfield-input" type="金额" id="money"/></div></td>
    </tr>
    <tr>
    <div class="mdui-progress">
        <div class="mdui-progress-determinate" style="width: 0%;"></div>
    </div>
    </tr>
    <tr>
    <td align="center"><button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent" id="transfer_button">转账</button> </td>
    <td align="center">
        <button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent" id="logout">注销</button>
    </td>
    </tr>
</tr>
</div>
</body>
</html>
