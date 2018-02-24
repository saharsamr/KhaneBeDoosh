<%--
  Created by IntelliJ IDEA.
  User: Sadaf
  Date: 2/18/2018
  Time: 3:16 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="java.util.*" %>
<%@ page import="static KhaneBeDoosh.Website.*" %>
<%@ page import="KhaneBeDoosh.Website" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>خانه به دوش</title>
</head>
<body>
<header>
    <h3 align="right"> <%=getCurrentUser().getUsername()%> </h3>
    <h3 align="left">اعتبار: 1000</h3>
</header>
    <%
        if(request.getParameter("msg") != null){
    %>
<div>
    <p><%= request.getParameter("msg")%></p>
</div>
<%
    }
    response.setCharacterEncoding("UTF-8");
%>
<div class="searchForm" align="center">
    <select name="buildingType" form="searchForm">
        <option value="آپارتمان">آپارتمان</option>
        <option value="ویلایی">ویلایی</option>
    </select>
    <select name="dealType" form="searchForm">
        <option value=0>رهن-اجاره</option>
        <option value=1>خرید</option>
    </select>
    <br><br>
    <form id = "searchForm" action="/Searcher" method="get">
        <input name="area" type="text" value="حداقل متراژ" id="myBtn">

        <br><br>

        <input name="price" type="text" value="حداکثر قیمت">

        <br><br>

        <input type="submit" value="جست و جو">
    </form>
</div>

<div align="center">
    <select name="buildingType" form="registerForm">
        <option value="آپارتمان">آپارتمان</option>
        <option value="ویلایی">ویلایی</option>
    </select>
    <select name="dealType" form="registerForm">
        <option value=0>رهن-اجاره</option>
        <option value=1>خرید</option>
    </select>
    <br><br>
    <form id="registerForm" action="/AddNewEstate"  method="get">
        <input name="area" type="text" value="متراژ">

        <br><br>
        <input name="sellPrice" type="text" value="قیمت فروش">

        <br><br>

        <input name="address" type="text" value="آدرس">
        <input name="phone" type="text" value="شماره تلفن">
        <br><br>

        <input name="description" type="text" value="توضیحات">

        <br><br>
        <input type="submit" value="ثبت آگهی جدید">
    </form>

</div>
<div align="center">
    <form>
        <input type="submit" value="افزایش اعتبار">
        <input name="balance" type="text" value="اعتبار">
        <br><br>
    </form>
</div>
</body>
</html>
