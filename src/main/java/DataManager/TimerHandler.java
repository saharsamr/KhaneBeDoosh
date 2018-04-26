package DataManager;

import KhaneBeDoosh.JsonParser;
import org.json.JSONObject;

import java.sql.Timestamp;
import java.util.TimerTask;

public class TimerHandler extends TimerTask {
    @Override
    public void run(){
        try {
            JSONObject res = JsonParser.getJSONResponse("http://139.59.151.5:6664/khaneBeDoosh/v2/house");
            System.out.println(res.toString());
            Timestamp timestamp = new Timestamp(System.currentTimeMillis()),
                    expireTime = new Timestamp(res.getLong("expireTime"));
            HouseListDataHandler.delay = expireTime.getTime() - timestamp.getTime();
            String sqlCommand = "DELETE FROM estatesList WHERE type = 0";
            DataBaseHandler.executeStatement(sqlCommand);
            HouseListDataHandler.addToDatabase(res.getJSONArray("data"));
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }
}