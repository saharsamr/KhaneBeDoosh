package WebAPIs.Filters;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import DataManager.UsersDataHandler;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.ResultSet;

@WebFilter("/*")
public class AuthenticationFilter implements Filter {

    public void init(FilterConfig filterConfig) {

    }

    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) {
        try {
            HttpServletRequest httpRequest = (HttpServletRequest) servletRequest;
            String jwt = httpRequest.getHeader("jwt");
            verifyJWT(jwt, servletRequest, servletResponse);
            filterChain.doFilter(servletRequest, servletResponse);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ServletException e) {
            e.printStackTrace();
        } catch (NullPointerException e) {
            try {
                HttpServletResponse res = (HttpServletResponse) servletResponse;
                res.addHeader("username", null);
                filterChain.doFilter(servletRequest, servletResponse);
            } catch (IOException e1) {
                e1.printStackTrace();
            } catch (ServletException e1) {
                e1.printStackTrace();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void verifyJWT (String token, ServletRequest request, ServletResponse response) throws Exception{
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
        } catch (JWTVerificationException exception){
            res.setStatus(res.SC_FORBIDDEN);
        }
    }

    public void destroy() {

    }
}
