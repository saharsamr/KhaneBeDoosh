package WebAPIs;

import DataManager.HouseListDataHandler;
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
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;


@WebServlet("/search")
public class Search extends HttpServlet {

    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        findStates(request, response);
    }

    public void findStates(HttpServletRequest request, HttpServletResponse response) throws IOException{
        response.setContentType("application/json;charset=utf-8");
        try{
            String buildingType = request.getParameter("buildingType"), temp = new String();
            if(buildingType.equals("ویلایی"))
                temp = "0";
            else
                temp = "1";
            int dealType = Integer.parseInt(request.getParameter("dealType"));
            int price = Integer.parseInt(request.getParameter("price"));
            int area = Integer.parseInt(request.getParameter("area"));
            checkSearchParametersValidation(buildingType, dealType, price, area);
            ResultSet result = HouseListDataHandler.search(temp, Integer.toString(dealType), Integer.toString(price), Integer.toString(area));
            response.setStatus(response.SC_OK);
            sendResponse(response, result);

        }catch (SearchParametersException ParametersExcep){
            response.setStatus(response.SC_BAD_REQUEST);
            return;
        } catch (NumberFormatException NonIntegerExcep){
            response.setStatus(response.SC_BAD_REQUEST);
            return;
        } catch (Exception e){}

    }

    public void checkSearchParametersValidation(String buildingType, int dealType, int price, int area) throws SearchParametersException{
        if (!(buildingType.equals("آپارتمان") || buildingType.equals("ویلایی")) ||
                !(dealType == DealType.sell.getValue() || dealType == DealType.rent.getValue()) ||
                area < 0 ||
                price < 0)
            throw new SearchParametersException();
    }

    public void sendResponse(HttpServletResponse response, ResultSet result) throws IOException, SQLException{
        JSONObject instance, price;
        JSONArray estatesList = new JSONArray();
        while(result.next()){
            instance = new JSONObject();
            instance.put("id", result.getString("id"));
            instance.put("area", result.getInt("area"));
            instance.put("dealType", result.getInt("dealType"));
            instance.put("buildingType", result.getString("buildingType"));
            instance.put("address", result.getString("address"));
            //TODO: create link for different websites.
            price = new JSONObject();
            if(result.getInt("dealType") == 1){
                price.put("rentPrice", result.getInt("rentPrice"));
                price.put("basePrice", result.getInt("basePrice"));
            }
            else
                price.put("sellPrice", result.getInt("sellPrice"));
            instance.put("price", price);
            instance.put("imageURL", result.getString("imageURL"));
            estatesList.put(instance);
        }
        PrintWriter out = response.getWriter();
        out.println(estatesList);
    }
}
