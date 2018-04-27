package DataManager;

import Enums.DealType;
import KhaneBeDoosh.JsonParser;
import org.json.JSONArray;
import org.json.JSONObject;

import java.net.URL;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
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
        }
    }

    private static ArrayList<String> getObjectData(JSONObject obj){ //TODO: use map instead of simple array.
        ArrayList<String> values = new ArrayList<String>();
        values.add(obj.get("id").toString());
        String buildingType = obj.get("buildingType").toString();
        if(buildingType.equals("ویلایی"))
            values.add("0");
        else
            values.add("1");
//        values.add(obj.get("buildingType").toString());
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
            values.add("0");
            values.add(price.get("basePrice").toString());
            values.add(price.get("rentPrice").toString());
        }
        values.add(obj.get("address").toString());
        values.add("0");
        return values;
    }

    public static void createHouseListTable(){
            String sqlCommand = "CREATE TABLE IF NOT EXISTS estatesList (\n" +
                    "id TEXT PRIMARY KEY, \n" +
                    "buildingType TEXT, \n" +
                    "dealType TEXT, \n" +
                    "area INTEGER, \n" +
                    "imageURL TEXT, \n" +
                    "sellPrice INTEGER, \n" +
                    "basePrice INTEGER, \n" +
                    "rentPrice INTEGER, \n" +
                    "address TEXT, \n" +
                    "phone TEXT, \n" +
                    "description TEXT, \n" +
                    "type INTEGER \n" +
                    ");";
            DataBaseHandler.executeStatement(sqlCommand);
    }
    
    public static ResultSet search(String buildingType, String dealType, String price, String area) throws Exception{
//        String sqlCommand = "SELECT dealType, area, imageURL, sellPrice, basePrice, rentPrice, address "
//                + "FROM estateList WHERE buildingType = ? AND dealType = ? AND area >= ? AND ";
//        if(dealType.equals("1"))
//            sqlCommand += "basePrice <= ?";
//        else
//            sqlCommand += "sellPrice <= ?";
//        System.out.println("qable prepare statement");
//        PreparedStatement prp = DataBaseHandler.getConnection().prepareStatement(sqlCommand);
//        System.out.println("bade prepare statement");
//        prp.setString(1, buildingType);
//        prp.setString(2, dealType);
//        prp.setString(3, area);
//        prp.setString(4, price);
        String sqlCommand = String.format("SELECT * FROM estatesList WHERE buildingType = %s AND dealType = %s AND area >= %s AND ", buildingType, dealType, area);
        if(dealType.equals("1"))
            sqlCommand += String.format("basePrice <= %s", price);
        else
            sqlCommand += String.format("sellPrice <= %s", price);
        Statement stm = DataBaseHandler.getConnection().createStatement();
//        stm.executeQuery(sqlCommand);
        System.out.println("************");
        ResultSet x = stm.executeQuery(sqlCommand);
        System.out.println("-------");
        System.out.println(x.toString());
        return x;
    }

    public static void addToList(ArrayList<String> values){
        ArrayList<String> attrs = makeEstateAttributeList();
        DataBaseHandler.addItem("estatesList", attrs, values);
    }

    public static ArrayList<String> makeEstateAttributeList(){
        ArrayList<String> attrs = new ArrayList<String>();
        attrs.add("id");
        attrs.add("buildingType");
        attrs.add("dealType");
        attrs.add("area");
        attrs.add("imageURL");
        attrs.add("sellPrice");
        attrs.add("basePrice");
        attrs.add("rentPrice");
        attrs.add("address");
        attrs.add("type");
        return attrs;
    }
}