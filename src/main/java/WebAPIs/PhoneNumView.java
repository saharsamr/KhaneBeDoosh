package WebAPIs;

import DataManager.DataBaseHandler;
import DataManager.UsersDataHandler;
import DataManager.HouseListDataHandler;
import Exceptions.LackOfBalanceException;
import KhaneBeDoosh.Website;
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
        String eid = request.getParameter("id").toString();
        String uid = response.getHeader("username");
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        JSONObject paymentStatus = new JSONObject();
        try {
            if(UsersDataHandler.checkIfPaid(eid, uid)) {
                paymentStatus.put("paid", true);
                paymentStatus.put("phone", HouseListDataHandler.getHouseByID(eid).getString("phone"));
            }
            else
                paymentStatus.put("paid", false);
        } catch (Exception e) {
            e.printStackTrace();
        }
        out.println(paymentStatus);
    }

    public void doPut(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        JSONObject estateInfo = new JSONObject(JsonAPI.parseJson(request).get("Method").toString());
        String eid = estateInfo.get("id").toString();
        String uid = null;
        try {
            uid = UsersDataHandler.getUserByUsername(response.getHeader("username")).getString("id");
        } catch (Exception e) {
            e.printStackTrace();
        }
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        JSONObject paymentSuccess = new JSONObject();
        int currentBalance;
        try{
            if(!UsersDataHandler.checkIfPaid(eid, uid)) {
                currentBalance = UsersDataHandler.getUserByID(uid).getInt("balance");
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
            System.out.println(e.getStackTrace());
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
