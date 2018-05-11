package WebAPIs;

import com.sun.deploy.net.HttpRequest;
import org.json.HTTP;
import org.json.JSONException;
import org.json.JSONObject;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.ArrayList;

public class JsonAPI extends HttpServlet {

    public static JSONObject parseJson(HttpServletRequest request) throws IOException{
        StringBuffer jb = new StringBuffer();
        String line = null;
        JSONObject jsonObject;
        try {
            request.setCharacterEncoding("utf-8");
            BufferedReader reader = request.getReader();
            while ((line = reader.readLine()) != null)
                jb.append(line);
        } catch (Exception e) { /*report an error*/ }

        try {
            jsonObject =  HTTP.toJSONObject(jb.toString());
        } catch (JSONException e) {
            throw new IOException("Error parsing JSON request string");
        }
        return jsonObject;
    }
}
