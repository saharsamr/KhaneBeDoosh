package Users;

import Exceptions.InvalidBalanceValueException;
import KhaneBeDoosh.Website;
import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;

@WebServlet("/IncreaseCredit")

public class IncreaseCredit extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        int balance;
        try {
            if ((balance = Integer.parseInt(request.getParameter("balance"))) < 0)
                throw new InvalidBalanceValueException();
        } catch (InvalidBalanceValueException e){
            response.sendRedirect("/"+"?msg=Invalid balance value.");
            return;
        }catch (NumberFormatException e ){
            response.sendRedirect("/"+"?msg=Invalid balance value.");
            return;
        }
        URL url = new URL("http://acm.ut.ac.ir/ieBank/pay");
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setDoInput(true);
        connection.setDoOutput(true);
        connection.setRequestMethod("POST");
        connection.setRequestProperty("Content-Type", "application/json");
        connection.setRequestProperty("apiKey", Website.getBankApiKey());
        connection.connect();
        DataOutputStream output = new DataOutputStream(connection.getOutputStream());
        String data = "{\"userId\":" + Website.getCurrentUserID() + ",\"value\":"
                + request.getParameter("balance") + "}";
        output.writeBytes(data);
        output.flush();
        output.close();

        DataInputStream input = new DataInputStream(connection.getInputStream());
        String bankResponse = input.readLine();
        JSONObject res = new JSONObject(bankResponse);
        if (res.getJSONObject("success").equals("true")){
            response.sendRedirect("/"+"?msg=Balance incremented successfully.");

        }
        else
            response.sendRedirect("/"+"?msg=" + res.getJSONObject("message"));
    }
}
