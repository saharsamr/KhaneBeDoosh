//package Estates;
//
//import java.io.*;
//import javax.servlet.*;
//import javax.servlet.annotation.WebServlet;
//import javax.servlet.http.*;
//import java.lang.String;
//
//import Enums.DealType;
//import org.json.JSONObject;
//import SearchEngine.JsonParser;
//
//@WebServlet("/AgencyEstateDetail")
//public class AgencyEstateDetail extends HttpServlet {
//
//    public void init() throws ServletException {
//        // Do required initialization
//    }

//    public void doGet (HttpServletRequest request, HttpServletResponse response)
//            throws ServletException, IOException {
//        request.setCharacterEncoding("UTF-8");
//        response.setContentType("text/html;charset=UTF-8");
//        response.setCharacterEncoding("UTF-8");
//        String id = request.getParameter("id").toString();
//
//        JSONObject jsonEstateData = new JSONObject();
//        try {
//            jsonEstateData= new JSONObject(JsonParser.getJSONResponse("http://acm.ut.ac.ir/khaneBeDoosh/house/" + id).get("data").toString());
//        }catch (Exception e){}
//        String area = jsonEstateData.get("area").toString();
//        String dealTypeString = jsonEstateData.get("dealType").toString();
//        String buildingType = jsonEstateData.get("buildingType").toString();
//        String description = jsonEstateData.get("description").toString();
//        String imageLink = jsonEstateData.get("imageURL").toString();
//        String address = jsonEstateData.get("address").toString();
//        JSONObject price = jsonEstateData.getJSONObject("price");
//        DealType dealType;
//        if(dealTypeString.equals("1"))
//            dealType = DealType.rent;
//        else
//            dealType = DealType.sell;
//        response.setContentType("text/html;charset=UTF-8");
//        PrintWriter out = response.getWriter();
//        out.println("<table border = \"1\">");
//        out.println("<tr>");
//        out.println("<td>نوع ساختمان:"+buildingType+"</td>");
//        out.println("<td>متراژ:"+area+"</td>");
//        out.println("<td>نوع قرارداد:"+dealType+"</td>");
//        System.out.println(price.toString());
//        if(dealType.equals(DealType.rent)){
//            out.println("<td>قیمت پایه:"+price.get("basePrice").toString()+"</td>");
//            out.println("<td>قیمت اجاره:"+price.get("rentPrice").toString()+"</td>");
//        }
//        else
//            out.println("<td>قیمت فروش:"+price.get("sellPrice").toString()+"</td>");
//        out.println("<td>آدرس:"+address+"</td>");
//        out.println("<td>توضیحات:"+description+"</td>");
//        out.println("<td>"+ "<a href=\"" + imageLink + "\"> لینک عکس: </a>" +"</td>");
//        out.println("<td><input type=\"submit\" value=\"شماره تلفن\"></td>");
//        out.println("</table>");
//    }
//
//    public void destroy() {
//        // do nothing.
//    }
//
//}
