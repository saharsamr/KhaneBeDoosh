package WebAPIs;

import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class JsonParser {
    public static JSONObject getJSONResponse (String url_) throws Exception{
        URL url = new URL(url_);
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("GET");
        BufferedReader response = new BufferedReader(new InputStreamReader(connection.getInputStream(), "utf-8"));
        String line;
        StringBuffer result = new StringBuffer();
        while((line = response.readLine()) != null)
            result.append(line);
        response.close();
        return new JSONObject(result.toString());
    }
}
