package WebAPIs;

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

@WebServlet("/login")
public class Login extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        JSONObject req = JsonAPI.parseJson(request);

        String username = req.get("username").toString();
        String password = req.get("password").toString();

        String jwt = generateJWT(username, password);
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
            System.out.println(token);
            return token;
        } catch (UnsupportedEncodingException exception) {
            //UTF-8 encoding not supported
        } catch (JWTCreationException exception) {
            //Invalid Signing configuration / Couldn't convert Claims.
        }
        return token;
    }
}
