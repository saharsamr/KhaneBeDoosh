package WebAPIs;

import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@WebServlet("/search")
public class Search extends JsonAPI {

    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        JSONObject searchParameters = parseJson(request);
        System.out.println(searchParameters);
        
    }

    @Override
    public Boolean validateData(JSONObject obj) {
        return null;
    }
}
