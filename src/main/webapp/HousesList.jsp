<%@ page import="org.json.JSONObject" %>
<%@ page import="SearchEngine.JsonParser" %>
<%@ page import="java.net.URL" %>
<%@ page import="java.net.HttpURLConnection" %>
<%@ page import="java.io.BufferedReader" %>
<%@ page import="java.io.InputStreamReader" %>
<%@ page import="SearchEngine.JsonParser" %>
<%@ page import="org.json.JSONArray" %>
<%--
  Created by IntelliJ IDEA.
  User: Sahar
  Date: 2/23/2018
  Time: 3:03 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>HousesList</title>
</head>
<body>
<%
    JSONObject x = JsonParser.getJSONResponse("http://acm.ut.ac.ir/khaneBeDoosh/house");
    JSONArray y = x.getJSONArray("data");

%>
<p><%=y.length()%></p>
<p><%=y%></p>
</body>
</html>
