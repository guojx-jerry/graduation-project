<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/12/8
  Time: 10:39
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <script src="http://libs.baidu.com/jquery/2.1.4/jquery.min.js"></script>
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
    <script type="text/javascript">
        $(function () {
            $("#login_button").click(function () {
                let data = {
                    'cardID':$("#cardID").val(),
                    'password':$("#password").val()
                }
                $.ajax({
                    headers:{
                        'Content-type':'application/json;charset=UTF-8'
                    },

                    url:"account/login",
                    data:JSON.stringify(data),
                    dataType:"json",
                    processData:false,
                    type:"post",
                    complete:function (XMLHttpRequest,config) {
                        let userAgent=XMLHttpRequest.getResponseHeader("User-Token");
                        localStorage.setItem("User-Token",userAgent);
                        config.headers['User-Token']=userAgent;
                        window.location.href="/skip/main";
                      //  if(sessionstatus=="timeout"){
                           // alert("登录超时，请重新登录")
                            // alert("登录超时,请重新登录！");
                            //如果超时就处理 ，指定要跳转的页面

                            // window.location.replace();
                       // }
                      //  if(sessionstatus=="success"){
                      //      window.location.href = "/skip/main";
                     //   }

                    },

                })
            })
        })
    </script>

    <style type="text/css">

        .body{
            background: url("./img/f736501ebede0d93dd3a14af4e773039.jpeg") ;
            background-size: 100% 100%;
        }
    </style>

</head>
<body class="mdui-theme-primary-indigo mdui-theme-accent-pink">
<div class="mdui-toolbar mdui-color-theme">
    <a href="javascript:;" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">menu</i></a>
    <span class="mdui-typo-title">登录</span>
    <div class="mdui-toolbar-spacer"></div>
    <a href="javascript:;" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">search</i></a>
    <a href="javascript:;" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">refresh</i></a>
    <a href="javascript:;" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">more_vert</i></a>
</div>
<div>
    <tr>
        <td><div class="mdui-textfield mdui-textfield-floating-label" >
            <i class="mdui-icon material-icons">account_circle</i>
            <label class="mdui-textfield-label">账号</label>
            <input class="mdui-textfield-input" type="转账人" id="cardID"/>
        </div></td>
        <td><div class="mdui-textfield mdui-textfield-floating-label">
            <i class="mdui-icon material-icons">lock</i>
            <label class="mdui-textfield-label">密码</label>
            <input class="mdui-textfield-input" type="密码" id="password"/>
        </div></td>
        <div class="mdui-progress">
            <div class="mdui-progress-determinate" style="width: 0%;"></div>
        </div>
        <td align="center"><button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent" id="login_button">登录</button> </td>
        <td align="center">
        </td>
    </tr>
</div>
</body>
</body>
</html>
