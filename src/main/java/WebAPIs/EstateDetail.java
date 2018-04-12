package WebAPIs;

import Enums.DealType;
import KhaneBeDoosh.JsonParser;
import org.json.JSONArray;
import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class EstateDetail extends HttpServlet {

    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("application/json");
        String id = request.getParameter("id");

        JSONObject jsonEstateData = new JSONObject();
        try {
            jsonEstateData= new JSONObject(JsonParser.getJSONResponse("http://acm.ut.ac.ir/khaneBeDoosh/house/" + id).get("data").toString());
            PrintWriter out = response.getWriter();
            out.println(jsonEstateData);
        }catch (Exception e){
            throw new ServletException();
        }
    }

    
}
