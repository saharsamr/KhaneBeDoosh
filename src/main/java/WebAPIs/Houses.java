package WebAPIs;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import DataManager.UsersDataHandler;
import org.json.JSONArray;
import org.json.JSONObject;

@WebServlet("/houses")
public class Houses extends HttpServlet {

    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            String username = response.getHeader("username");
            if (username != null) {
                ResultSet user = UsersDataHandler.getUserByUsername(username);
                if(user.getInt("is_admin") == 1)
                    ListHousesForAdmin(request, response);
                else
                    ListUserHouses(request, response, user);
            }
            //TODO: Redirect in the other case.
        } catch (Exception e){
            System.out.println(e.getMessage());
        }
    }

    private void ListHousesForAdmin(HttpServletRequest request, HttpServletResponse response) throws Exception{
        ResultSet list = UsersDataHandler.ListAllUserAndTheirHouses();
        JSONObject instance;
        JSONArray estatesList = new JSONArray();
        while(list.next()){
            instance = new JSONObject();
            instance.put("uid", list.getString("uid"));
            instance.put("eid", list.getString("eid"));
            estatesList.put(instance);
        }
        PrintWriter out = response.getWriter();
        out.println(estatesList);
    }

    private void ListUserHouses(HttpServletRequest request, HttpServletResponse response, ResultSet user) throws Exception{
        ResultSet list = UsersDataHandler.ListUserHouses(user.getString("id"));
        JSONObject instance;
        JSONArray estatesList = new JSONArray();
        while(list.next()){
            instance = new JSONObject();
            instance.put("eid", list.getString("eid"));
            estatesList.put(instance);
        }
        PrintWriter out = response.getWriter();
        out.println(estatesList);
    }

}
