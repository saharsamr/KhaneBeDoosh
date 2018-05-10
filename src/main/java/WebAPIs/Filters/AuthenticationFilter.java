package WebAPIs.Filters;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.sun.deploy.net.HttpRequest;
import com.sun.deploy.net.HttpResponse;
import DataManager.UsersDataHandler;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.sql.ResultSet;

public class AuthenticationFilter implements Filter {

    public void init(FilterConfig filterConfig) {

    }

    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) {
        try {
            HttpServletRequest httpRequest = (HttpServletRequest) servletRequest;
            String jwt = httpRequest.getHeader("jwt");
            HttpServletResponse res = verifyJWT(jwt, servletRequest, servletResponse);
            servletRequest = (ServletRequest)  res;
            filterChain.doFilter(servletRequest, servletResponse);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ServletException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private HttpServletResponse verifyJWT (String token, ServletRequest request, ServletResponse response) throws Exception{
        HttpServletResponse res = (HttpServletResponse) response;
        try {
            Algorithm algorithm = Algorithm.HMAC256("mozi-amoo");
            JWTVerifier verifier = JWT.require(algorithm)
                    .withIssuer("auth0")
                    .build(); //Reusable verifier instance
            DecodedJWT jwt = verifier.verify(token);
            String username = jwt.getClaim("username").asString();
            ResultSet user = UsersDataHandler.getUserByUsername(username);
            res.addHeader("username", user.getString("username"));
            res.addHeader("balance", user.getString("balance"));
            return res;
        } catch (JWTVerificationException exception){
            res.setStatus(res.SC_FORBIDDEN);
            return res;
        }
    }

    public void destroy() {

    }
}
