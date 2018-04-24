package DataManager;

import Enums.DealType;
import KhaneBeDoosh.JsonParser;
import org.json.JSONArray;
import org.json.JSONObject;

import java.net.URL;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.TimerTask;


public class HouseListDataHandler {

    static long delay;

    private class UpdateHouseListPeriodicly extends TimerTask{

        @Override
        public void run(){
            try {
                JSONObject res = JsonParser.getJSONResponse("http://acm.ut.ac.ir/khaneBeDoosh/house");
                Timestamp  expireTime = new Timestamp(res.getLong("expireTime")),
                        timestamp = new Timestamp(System.currentTimeMillis());
                delay = expireTime.getTime() - timestamp.getTime();
            }catch (Exception e){
                System.out.println(e.getMessage());
            }
        }
    }

    public static void addToDatabase(JSONArray estatesList){
        for(int i = 0; i < estatesList.length(); i++){
            ArrayList<String> values = getObjectData(estatesList.getJSONObject(i));
        }
    }

    private static ArrayList<String> getObjectData(JSONObject obj){
        ArrayList<String> values = new ArrayList<String>();
        values.add(obj.get("id").toString());
        values.add(obj.get("buildingType").toString());
        values.add(obj.get("dealType").toString());
        values.add(obj.get("area").toString());
        values.add(obj.get("imageURL").toString());
        values.add(obj.get("price").toString());

        return values;
    }

    public static void createHouseListTable(){
            String sqlCommand = "CREATE TABLE IF NOT EXISTS estatesList (\n" +
                    "id TEXT PRIMARY KEY, \n" +
                    "buildingType TEXT CHECK(buildingType IN ('آپارتمان', 'ویلایی')), \n" +
                    "dealType TEXT CHECK(buildingType IN ('1', '0')), \n" +
                    "area INTEGER, \n" +
                    "imageURL TEXT, \n" +
                    "sellPrice INTEGER, \n" +
                    "basePrice INTEGER, \n" +
                    "rentPrice INTEGER" +
                    ");";
            DataBaseHandler.executeStatement(sqlCommand);
    }
}