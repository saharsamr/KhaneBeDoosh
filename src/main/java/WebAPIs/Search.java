package WebAPIs;

import Enums.DealType;
import Estates.Estate;
import Exceptions.SearchParametersException;
import KhaneBeDoosh.Website;
import KhaneBeDoosh.JsonParser;
import org.json.JSONArray;
import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.URL;
import java.util.ArrayList;


@WebServlet("/search")
public class Search extends HttpServlet {

    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        findStates(request, response);
    }

    public void findStates(HttpServletRequest request, HttpServletResponse response) throws IOException{
        DealType deal;
        ArrayList<Estate> result = new ArrayList<Estate>();
        response.setContentType("application/json");

        try{
            String buildingType = request.getParameter("buildingType");
            int dealType = Integer.parseInt(request.getParameter("dealType"));
            int price = Integer.parseInt(request.getParameter("price"));
            int area = Integer.parseInt(request.getParameter("area"));
            checkSearchParametersValidation(buildingType, dealType, price, area);

            deal = DealType.valueOf(dealType);

            result = findLocalEstates(buildingType, deal, price, area);
            result.addAll(findAgencyEstates(buildingType, deal, price,area));

        }catch (SearchParametersException ParametersExcep){
            response.setStatus(response.SC_BAD_REQUEST);
            return;
        } catch (NumberFormatException NonIntegerExcep){
            response.setStatus(response.SC_BAD_REQUEST);
            return;
        } catch (Exception e){}

        response.setStatus(response.SC_OK);
        sendResponse(response, result);
    }

    public void checkSearchParametersValidation(String buildingType, int dealType, int price, int area) throws SearchParametersException{
        if (!(buildingType.equals("آپارتمان") || buildingType.equals("ویلایی")) ||
                !(dealType == DealType.sell.getValue() || dealType == DealType.rent.getValue()) ||
                area < 0 ||
                price < 0)
            throw new SearchParametersException();
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
        for(int i = 0; i < estatesList.length(); i++)
            if((temp = hasConditions(estatesList.getJSONObject(i), buildingType, dealType_, price_, area_)) != null)
                result.add(temp);
        return result;
    }

    public static Estate hasConditions(JSONObject obj, String buildingType, DealType dealType, int price, int area) throws  Exception{
        String buildingType_ = obj.get("buildingType").toString();
        int dealType_ = Integer.parseInt(obj.get("dealType").toString());
        int area_ = Integer.parseInt(obj.get("area").toString());
        String id = obj.get("id").toString();
        String image = obj.get("imageURL").toString();
        DealType deal = DealType.valueOf(dealType_);
        JSONObject price_ = new JSONObject(obj.get("price").toString());
        URL url = new URL(image);
        int sellPrice, rentPrice, basePrice;
        if(deal.equals(DealType.rent)){
            sellPrice = 0;
            rentPrice = Integer.parseInt(price_.get("rentPrice").toString());
            basePrice = Integer.parseInt(price_.get("basePrice").toString());
            if((basePrice < price) && (area_ > area) && (deal.equals(dealType)) && buildingType.equals(buildingType_))
                return new Estate(id, area_, buildingType_, deal, sellPrice, rentPrice, basePrice, url);
            else
                return null;
        }
        else{
            sellPrice = Integer.parseInt(price_.get("sellPrice").toString());
            rentPrice = 0;
            basePrice = 0;
            if((sellPrice < price) && (area_ > area) && (deal.equals(dealType)) && buildingType.equals(buildingType_))
                return new Estate(id, area_, buildingType_, deal, sellPrice, rentPrice, basePrice, url);
            else
                return null;
        }
    }

    public void sendResponse(HttpServletResponse response, ArrayList<Estate> result) throws IOException{
        JSONObject instance, price;
        JSONArray estatesList = new JSONArray();
        for(Estate estate : result){
            instance = new JSONObject();
            instance.put("id", estate.getId());
            instance.put("area", estate.getArea());
            instance.put("dealType", estate.getDealType());
            instance.put("buildingType", estate.getBuildingType());
            instance.put("address", estate.getAddress());
            //TODO: create link for different websites.
            price = new JSONObject();
            if(estate.getDealType().equals(DealType.rent)){
                price.put("rentPrice", estate.getRentPrice());
                price.put("basePrice", estate.getBasePrice());
            }
            else
                price.put("sellPrice", estate.getSellPrice());
            instance.put("price", price);
            instance.put("imageURL", estate.getImageURL());
            estatesList.put(instance);
        }
        PrintWriter out = response.getWriter();
        out.println(estatesList);
    }
}
