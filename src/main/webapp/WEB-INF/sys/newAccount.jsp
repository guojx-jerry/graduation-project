<%--
  Created by IntelliJ IDEA.
  User: guo
  Date: 2020/12/11
  Time: 23:11
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"/>
    <meta name="renderer" content="webkit"/>
    <meta name="force-rendering" content="webkit"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>

    <!-- MDUI CSS -->
    <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/mdui@1.0.1/dist/css/mdui.min.css"
            integrity="sha384-cLRrMq39HOZdvE0j6yBojO4+1PrHfB7a9l5qLcmRm/fiWXYY+CndJPmyu5FV/9Tw"
            crossorigin="anonymous"
    />
    <!-- MDUI JavaScript -->
    <script
            src="https://cdn.jsdelivr.net/npm/mdui@1.0.1/dist/js/mdui.min.js"
            integrity="sha384-gCMZcshYKOGRX9r6wbDrvF+TcCCswSHFucUzUPwka+Gr+uHgjlYvkABr95TCOz3A"
            crossorigin="anonymous"
    ></script>
    <script src="http://libs.baidu.com/jquery/2.1.4/jquery.min.js"></script>
    <title>Hello, world!</title>
    <script>
        $(function () {
            $("#save_button").click(function () {
                let name = $('#name').val();
                let money = $('#money').val();
                let cardID = $('#cardID').val();
                let data = {
                    'name':name,
                    'money':money,
                    'cardID':cardID
                };
                $.ajax({
                    headers:{
                        'Content-type':'application/json;charset=UTF-8'
                    },

                    url:"/account/saveAccount",
                    data:JSON.stringify(data),
                    dataType:"json",
                    processData:false,
                    type:"post",
                    success:(res)=>{
                        console.log("保存成功");
                    }
                })
            })

            $("#return_button").click(function () {
                window.location.href = "/skip/main";
            })

        })

    </script>
</head>
<body class="mdui-theme-primary-indigo mdui-theme-accent-pink">
<div class="mdui-toolbar mdui-color-theme">
    <a href="javascript:;" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">menu</i></a>
    <span class="mdui-typo-title">申请账户</span>
    <div class="mdui-toolbar-spacer"></div>
    <a href="javascript:;" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">search</i></a>
    <a href="javascript:;" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">refresh</i></a>
    <a href="javascript:;" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">more_vert</i></a>
</div>
<form id="form">
    <tr>
        <td><div class="mdui-textfield mdui-textfield-floating-label">
            <i class="mdui-icon material-icons">account_circle</i>
            <label class="mdui-textfield-label">名字</label>
            <input class="mdui-textfield-input" type="名字" id="name"/>
        </div></td>
        <td><div class="mdui-textfield mdui-textfield-floating-label">
            <i class="mdui-icon material-icons">&#xe227;</i>
            <label class="mdui-textfield-label">金额</label>
            <input class="mdui-textfield-input" type="金额" id="money"/></div></td>
        <td><div class="mdui-textfield mdui-textfield-floating-label">
            <i class="mdui-icon material-icons">&#xe850;</i>
            <label class="mdui-textfield-label">银行账号</label>
            <input class="mdui-textfield-input" type="银行账号" id="cardID"/></div></td>
        <div class="mdui-progress">
            <div class="mdui-progress-determinate" style="width: 0%;"></div>
        </div>
        <td align="center"><button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent" id="save_button">新增</button> </td>
        <td align="center">
            <a href="../../index.jsp"><button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent" id="return_button" >返回</button></a>
        </td>
    </tr>
</form>





</body>
</html>
