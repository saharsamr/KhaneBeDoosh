package WebAPIs;

import DataManager.UsersDataHandler;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.sql.ResultSet;
import java.util.HashMap;

@WebServlet("/login")
public class Login extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("application/json");
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        try{
            ResultSet user = UsersDataHandler.getUserByUsername(username);
            String pass = user.getString("password");
            System.out.println(pass);
            System.out.println(password);
            if(pass.equals(password)){
                String jwt = generateJWT(username, password);
                JSONObject userJWT = new JSONObject();
                userJWT.put("jwt", jwt);
            }
            else
                response.setStatus(response.SC_FORBIDDEN); //403
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }

    private String generateJWT(String username, String password) {
        String token = "";
        try {
            Algorithm algorithm = Algorithm.HMAC256("moozi-amoo");
            token = JWT.create()
                    .withClaim("username", username)
                    .withClaim("password", password)
                    .withIssuer("auth0")
                    .sign(algorithm);
            return token;
        } catch (UnsupportedEncodingException exception) {
            //UTF-8 encoding not supported
        } catch (JWTCreationException exception) {
            //Invalid Signing configuration / Couldn't convert Claims.
        }
        return token;
    }
}
