package WebAPIs;

import DataManager.UsersDataHandler;
import Exceptions.InvalidBalanceValueException;
import KhaneBeDoosh.Website;
import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.sql.SQLException;

@WebServlet("/increaseCredit")
public class IncreaseCreditRequest extends HttpServlet {
    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        JSONObject req = JsonAPI.parseJson(request);
        JSONObject bankResponse;
        PrintWriter out = response.getWriter();
        response.setContentType("application/json");
        JSONObject method = new JSONObject(req.get("Method").toString());
        try{
            if(validateData(method)) {
                bankResponse = postBankServer(method);
                out.println(bankResponse);
//                out.flush();
                if(bankResponse.get("result").equals("OK")) {
                    int newBalance = UsersDataHandler.getUserByID(Website.getCurrentUserID()).getInt("balance") + Integer.parseInt(method.get("balance").toString());
                    UsersDataHandler.setBalance(Website.getCurrentUserID(), newBalance);
                    response.setStatus(200);
                }
                else
                    response.setStatus(500);
            }
        }catch (Exception e ){
            JSONObject res = new JSONObject();
            res.put("success", false);
            res.put("message", "Invalid parameter for increase credit");
            response.setStatus(400);
            out.println(res);
//            out.flush();
        }

    }

    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException{ //TODO: badan bayad in qesmat ro ba login handle kard.alan ba ye karbar zadim.
        String id = Website.getCurrentUserID();
        int currentBalance;
        try {
            currentBalance = UsersDataHandler.getUserByID(id).getInt("balance");
//            currentBalance = 1200;
        }catch (Exception e){
            System.out.println(e.getMessage());
            return;
        }
        response.setContentType("application/json");
        JSONObject credit = new JSONObject();
        credit.put("balance", currentBalance);
        PrintWriter out = response.getWriter();
        out.println(credit);
    }

    public Boolean validateData(JSONObject obj) throws Exception {
        try{
            int val = Integer.parseInt(obj.get("balance").toString());
            if(val < 0)
                throw new InvalidBalanceValueException();
        } catch (NumberFormatException e){
            throw new InvalidBalanceValueException();
        }
        return true;
    }

    public JSONObject postBankServer(JSONObject obj) throws Exception{
        URL url = new URL("http://139.59.151.5:6664/bank/pay");
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setDoInput(true);
        connection.setDoOutput(true);
        connection.setRequestMethod("POST");
        connection.setRequestProperty("Content-Type", "application/json");
        connection.setRequestProperty("apiKey", Website.getBankApiKey());
        connection.connect();
        DataOutputStream output = new DataOutputStream(connection.getOutputStream());
        String data = "{\"userId\":" + Website.getCurrentUserID() + ",\"value\":"
                + obj.get("balance") + "}";
        output.writeBytes(data);
        output.flush();
        output.close();
        DataInputStream input = new DataInputStream(connection.getInputStream());
        String bankResponse = input.readLine();
        JSONObject res = new JSONObject(bankResponse);
        return res;
    }
}
