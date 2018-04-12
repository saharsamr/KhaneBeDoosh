package WebAPIs;

import Exceptions.LackOfBalanceException;
import KhaneBeDoosh.Website;
import Users.User;
import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;


@WebServlet("/estatephonenumber")
public class PhoneNumView extends HttpServlet {

    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        JSONObject estateInfo = JsonAPI.parseJson(request);
        String id = estateInfo.get("id").toString();
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        JSONObject paymentStatus = new JSONObject();
        if(Website.getCurrentUser().hasPaidFor(id))
            paymentStatus.put("paid", true);
        else
            paymentStatus.put("paid", false);
        out.println(paymentStatus);
    }

    public void doPut(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        JSONObject estateInfo = JsonAPI.parseJson(request);
        String id = estateInfo.get("id").toString();
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        JSONObject paymentSuccess = new JSONObject();
        User current = Website.getCurrentUser();
        if(!current.hasPaidFor(id)){
            try{
                current.decreaseBalance();
                paymentSuccess.put("paid", true);
            } catch (LackOfBalanceException e){
                paymentSuccess.put("paid", false);
                paymentSuccess.put("message", "Lack of balance.");
            }
        }
        out.println(paymentSuccess);
    }

}
