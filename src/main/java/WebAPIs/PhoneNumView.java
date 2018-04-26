package WebAPIs;

import DataManager.DataBaseHandler;
import DataManager.UsersDataHandler;
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
import java.util.ArrayList;


@WebServlet("/estatephonenumber")
public class PhoneNumView extends HttpServlet {

    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String id = request.getParameter("id").toString();
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
        String eid = estateInfo.get("id").toString();
        String uid = Website.getCurrentUserID();
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        JSONObject paymentSuccess = new JSONObject();
        int currentBalance;
        try{
            if(!UsersDataHandler.checkIfPaid(eid, uid)) {
                currentBalance = UsersDataHandler.getUserByID(Website.getCurrentUserID()).getInt("balance");
                if(currentBalance < 1000)
                    throw new LackOfBalanceException();
                UsersDataHandler.setBalance(uid, currentBalance-1000);
                addPaymentRecord(uid, eid);
                paymentSuccess.put("paid", true);
                response.setStatus(200);
            }
        } catch (LackOfBalanceException e){
            paymentSuccess.put("paid", false);
            paymentSuccess.put("message", "Lack of balance.");
            response.setStatus(400);
        } catch (Exception e){
            System.out.println(e.getMessage());
        }
        out.println(paymentSuccess);
    }

    private static void addPaymentRecord(String uid, String eid){
        ArrayList<String> attr = new ArrayList<String>(), values = new ArrayList<String>();
        attr.add("uid");
        attr.add("eid");
        values.add(uid);
        values.add(eid);
        DataBaseHandler.addItem("hasPaidFor", attr, values);
    }

}
