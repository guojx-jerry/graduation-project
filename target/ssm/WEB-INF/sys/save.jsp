<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/12/7
  Time: 16:19
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<script src="http://libs.baidu.com/jquery/2.1.4/jquery.min.js"></script>
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

                url:"account/saveAccount",
                data:JSON.stringify(data),
                dataType:"json",
                processData:false,
                type:"post",
                success:(res)=>{
                    console.log("保存成功");

                },
                complete:
                function () {
                    window.location.href="/skip/success";
                    
                }
            })
        })
    })

</script>
<head>
    <title>保存账户</title>
</head>
<body>
<form id="form">
    <tr>
        <td>名字</td>
        <td><input type="text" name="name" id="name"></td>
        <td>金额</td>
        <td><input type="text" name="money" id="money"></td>
        <td>银行账号</td>
        <td><input type="text" name="money" id="cardID"></td>
        <td align="center"><input type="button" id="save_button" value="保存"/> </td>
    </tr>
</form>



</body>
</html>
