package WebAPIs;

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

@WebServlet("/increaseCredit")
public class IncreaseCreditRequest extends JsonAPI {
    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        JSONObject req = parseJson(request);
        JSONObject bankResponse;
        PrintWriter out = response.getWriter();
        response.setContentType("application/json");
        JSONObject method = new JSONObject(req.get("Method").toString());
        try{
            if(validateData(method)) {
                bankResponse = postBankServer(method);
                out.println(bankResponse);
//                out.flush();
                if(bankResponse.get("success").equals(true))
                    Website.getCurrentUser().increaseBalance(Integer.parseInt(method.get("balance").toString()));
            }
        }catch (Exception e ){
            JSONObject res = new JSONObject();
            res.put("success", false);
            res.put("message", "Invalid parameter for increase credit");
            out.println(res);
//            out.flush();
        }

    }

    @Override
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
