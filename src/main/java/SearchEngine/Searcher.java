package SearchEngine;

import java.io.*;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.util.*;
import java.lang.String;

import Enums.DealType;
import KhaneBeDoosh.*;
import Estates.Estate;

@WebServlet("/Searcher")
public class Searcher extends HttpServlet {

    public void init() throws ServletException {
        // Do required initialization
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String buildingType = request.getHeader("buildingType");
        String dealType = request.getHeader("dealType");
        String price = request.getHeader("price");
        String area = request.getHeader("area");

        List<Estate> result;
        result = Website.findEstates(buildingType, dealType, price, area);

        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        for (int i = 0; i <= result.size(); i++){
            out.println("<div>");
            if(result.get(i).getDealType() == DealType.rent){ //TODO: get it by enum
                out.println("<p>قیمت پایه :" +result.get(i).getBasePrice()+"تومن<br>");
                out.println("<p>قیمت اجاره :" +result.get(i).getBasePrice()+"تومن<br>");
            }
            else
               out.println("<p>قیمت :" +result.get(i).getSellPrice()+"تومن<br>");
            out.println("<p>متراژ  :" +result.get(i).getDealType()+"متر<br>");
            out.println("<p>نوع قرارداد :" +result.get(i).getDealType()+"<br>");
            out.println("<a href=\"/EstateDetail.jsp?id="+ result.get(i).getId()+ "\"اطلاعات بیشتر</a>");

//            out.println("<a href=\""++);
            out.println("</div>");
        }
    }

    public void destroy() {
        // do nothing.
    }


}
