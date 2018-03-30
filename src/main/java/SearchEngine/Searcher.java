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
import org.json.JSONArray;
import org.json.JSONObject;

@WebServlet("/Searcher")
public class Searcher extends HttpServlet {

    public void init() throws ServletException {
        // Do required initialization
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String buildingType = request.getParameter("buildingType");
        int dealType = Integer.parseInt(request.getParameter("dealType"));
        int price = Integer.parseInt(request.getParameter("price"));
        int area = Integer.parseInt(request.getParameter("area"));
        DealType deal = DealType.valueOf(dealType);

        ArrayList<Estate> result = new ArrayList<Estate>();
        try {
            result = findLocalEstates(buildingType, deal, price, area);
            result.addAll(findAgencyEstates(buildingType, deal, price,area));
        }catch (Exception e){}

        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        out.println("<table style=\"width:100%\" border=\"1\">");
        for (int i = 0; i < result.size(); i++){
            out.println("<tr>");
            if(result.get(i).getDealType() == DealType.rent){ //TODO: get it by enum
                out.println("<td>قیمت پایه :" +result.get(i).getBasePrice()+"تومن"+"</td>");
                out.println("<td>قیمت اجاره :" +result.get(i).getBasePrice()+"تومن"+"</td>");
            }
            else
               out.println("<td>قیمت :" +result.get(i).getSellPrice()+"تومن"+"</td>");
            out.println("<td>متراژ  :" +result.get(i).getArea()+"متر"+"</td>");
            out.println("<td>نوع قرارداد :" +result.get(i).getDealType()+"</td>");
            out.println("</tr>");
            out.println("<tr><td><a href=\"/AgencyEstateDetail?id="+ result.get(i).getId()+ "\">اطلاعات بیشتر </a> </td> </tr>");

//            out.println("<a href=\""++);
        }
        out.println("</table>");
    }

    public void destroy() {
        // do nothing.
    }

    public static ArrayList<Estate> findLocalEstates(String buildingType, DealType dealType, int price, int area){
        ArrayList<Estate> result = new ArrayList<Estate>();

        for (int i = 0; i < Website.getEstates().size(); i++)
            if(Website.getEstates().get(i).hasConditions(buildingType, dealType, price, area))
                result.add(Website.getEstates().get(i));

        return result;
    }

    public static ArrayList<Estate> findAgencyEstates (String buildingType, DealType dealType_, int price_, int area_) throws Exception{
        JSONArray estatesList = JsonParser.getJSONResponse("http://acm.ut.ac.ir/khaneBeDoosh/house").getJSONArray("data");
        ArrayList<Estate> result = new ArrayList<Estate>();
        Estate temp = new Estate();
        System.out.println(estatesList.length());
        for(int i = 0; i < estatesList.length(); i++)
            if((temp = hasConditions(estatesList.getJSONObject(i), buildingType, dealType_, price_, area_)) != null)
                result.add(temp);
        return result;
    }

    public static Estate hasConditions(JSONObject obj, String buildingType, DealType dealType, int price, int area){
        String buildingType_ = obj.get("buildingType").toString();
        int dealType_ = Integer.parseInt(obj.get("dealType").toString());
        int area_ = Integer.parseInt(obj.get("area").toString());
        String id = obj.get("id").toString();
        DealType deal = DealType.valueOf(dealType_);
        JSONObject price_ = new JSONObject(obj.get("price").toString());
        int sellPrice, rentPrice, basePrice;
        if(deal.equals(DealType.rent)){
            sellPrice = 0;
            rentPrice = Integer.parseInt(price_.get("rentPrice").toString());
            basePrice = Integer.parseInt(price_.get("basePrice").toString());
            if((basePrice < price) && (area_ > area) && (deal.equals(dealType)) && buildingType.equals(buildingType_))
                return new Estate(id, area_, buildingType_, deal, sellPrice, rentPrice, basePrice);
            else
                return null;
        }
        else{
            sellPrice = Integer.parseInt(price_.get("sellPrice").toString());
            rentPrice = 0;
            basePrice = 0;
            if((sellPrice < price) && (area_ > area) && (deal.equals(dealType)) && buildingType.equals(buildingType_))
                return new Estate(id, area_, buildingType_, deal, sellPrice, rentPrice, basePrice);
            else
                return null;
        }
    }


}
