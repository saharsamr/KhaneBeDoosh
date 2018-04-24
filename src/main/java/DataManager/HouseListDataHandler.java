package DataManager;

import Enums.DealType;
import KhaneBeDoosh.JsonParser;
import org.json.JSONArray;
import org.json.JSONObject;

import java.net.URL;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Timer;
import java.util.TimerTask;


public class HouseListDataHandler {

    static long delay;
    static TimerTask task;

    public static void fillEstatesListTable(){
        task = new TimerHandler();
        Timer timer = new Timer();
        timer.schedule(task, delay);
    }

    public static void addToDatabase(JSONArray estatesList){
        for(int i = 0; i < estatesList.length(); i++){
            ArrayList<String> values = getObjectData(estatesList.getJSONObject(i));
            addToList(values);
            System.out.println("added.");
        }
    }

    private static ArrayList<String> getObjectData(JSONObject obj){ //TODO: use map instead of simple array.
        ArrayList<String> values = new ArrayList<String>();
        values.add(obj.get("id").toString());
        values.add(obj.get("buildingType").toString());
        String dealType = obj.get("dealType").toString();
        values.add(dealType);
        values.add(obj.get("area").toString());
        values.add(obj.get("imageURL").toString());
        JSONObject price = new JSONObject(obj.get("price").toString());
        if(dealType.equals("0")){
            values.add(price.get("sellPrice").toString());
            values.add("0");
            values.add("0");
        }
        else{
            values.add(price.get("0").toString());
            values.add(price.get("basePrice").toString());
            values.add(price.get("rentPrice").toString());
        }
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

    public static void addToList(ArrayList<String> values){
        ArrayList<String> attrs = makeEstateAttributeList();
        DataBaseHandler.addItem("estatesList", attrs, values);
    }

    private static ArrayList<String> makeEstateAttributeList(){
        ArrayList<String> attrs = new ArrayList<String>();
        attrs.add("id");
        attrs.add("buildingType");
        attrs.add("dealType");
        attrs.add("area");
        attrs.add("imageURL");
        attrs.add("sellPrice");
        attrs.add("basePrice");
        attrs.add("rentPrice");
        return attrs;
    }
}