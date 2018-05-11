package WebAPIs;

import Enums.DealType;
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


@WebServlet("/estatedetail")
public class EstateDetail extends HttpServlet {

    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("application/json;charset=utf-8");
        String id = request.getParameter("id");

        JSONObject jsonEstateData = new JSONObject();
        try {
            jsonEstateData= new JSONObject(JsonParser.getJSONResponse("http://139.59.151.5:6664/khaneBeDoosh/v2/house/" + id).get("data").toString());
            PrintWriter out = response.getWriter();
            out.println(jsonEstateData);
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }

    
}
