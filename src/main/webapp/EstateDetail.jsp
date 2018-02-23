<%--
  Created by IntelliJ IDEA.
  User: Sahar
  Date: 2/20/2018
  Time: 3:02 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="KhaneBeDoosh.Website , java.util.List , Estates.Estate, Users.User, Users.Individual" %>
<%@ page import="javax.servlet.annotation.WebServlet" %>
<%@ page import="com.sun.deploy.net.protocol.chrome.ChromeURLConnection" %>
<html>
<head>
    <title>EstateDetail</title>
</head>
<body>
    <%
        Estate currentEstate = Website.getEstate(Integer.parseInt(request.getParameter("id")));
    %>
    <p> <%
        String dealType;
        if (currentEstate.getDealType() == 0)
            dealType="اجاره‌ای";
        else
            dealType="خرید";

    %>
    <p>نوع ساختمان:<%= currentEstate.getBuildingType() %>
        <br>
        متراژ:<%= currentEstate.getArea() %>
        <br>
        نوع قرارداد:<%=  dealType%>
        <br>
        <%
            if(currentEstate.getDealType() == 0){
        %>
        قیمت پایه: <%= currentEstate.getBasePrice()%>
        <br>
        قیمت اجاره: <%= currentEstate.getRentPrice()%>
        <br>
        <%
        }
            else {
        %>
        قیمت خرید: <%= currentEstate.getSellPrice() %>
        <br>
        <%
            }
        %>
        آدرس: <%= currentEstate.getAddress()%>
        <br>
        لینک عکس: <%= currentEstate.getImageURL()%>
        <br>
        توضیحات: <%= currentEstate.getDescription()%>
        <br>
    </p>
    <button id="btn" onclick="changeButtonVal()">دریافت شماره مالک/مشاور</button>

<script>
    function changeButtonVal(int userID) {
        User currentUser = getCurrentUser();
        if(currentUser.hasPaidFor(currentEstate.getId()))
            document.getElementById("btn").innerHTML = "شماره مالک/مشاور:";
        else
            document.getElementById("btn").innerHTML = "اعتبار شما برای دریافت شماره مالک/مشاور کافی نیست.";
    }
</script>
</body>
</html>
