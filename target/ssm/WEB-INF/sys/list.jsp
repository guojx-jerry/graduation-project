<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/12/7
  Time: 16:11
  To change this template use File | Settings | File Templates.
--%>

<%--isELIgnored="false"---->设置成不忽略EL表达式  --%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%--<%@ page contentType="text/html;charset=UTF-8" language="java" %>--%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>查询所有账户成功</title>
    <script src="http://libs.baidu.com/jquery/2.1.4/jquery.min.js"></script>
</head>
<body>

<%--<c:forEach items="${list}" var="account">--%>
<%--    ${account.name}--%>
<%--    ${account.money}--%>
<%--</c:forEach>--%>

<c:forEach items="${requestScope.list }" var="account">
    ${account.name }-${account.money }-${account.cardID }<br/>
</c:forEach>
</body>
</html>
