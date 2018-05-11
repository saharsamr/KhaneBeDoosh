package KhaneBeDoosh;

import java.util.*;
import java.util.UUID;

import DataManager.DataBaseHandler;
import DataManager.HouseListDataHandler;
import Estates.*;
import Users.User;
import DataManager.UsersDataHandler;

public class Website {

    private static ArrayList<Estate> estates;
    private static ArrayList<User> users;
    private static String bankApiKey;
    private static ArrayList<Estate> searchResult;

    static{
        bankApiKey = "d1370810-34c0-11e8-813c-81721a10cc01";
        users = new ArrayList<User>();
        estates= new ArrayList<Estate>();
        searchResult = new ArrayList<Estate>();
    }

    public static List<Estate> getEstates() {
        return estates;
    }

    public static List<User> getUsers() {
        return users;
    }

    public static Estate getEstate(String id){
        for (int i = 0; i < estates.size(); i++){
            if(estates.get(i).getId() == id)
                estates.get(i);
        }
        return null;
    }

    public static String getBankApiKey(){
        return bankApiKey;
    }

    public static void addEstate(String buildingType, String dealType,
                                 int sellPrice, int basePrice, int rentPrice, int area,
                                 String phone, String address, String description,
                                 String username) throws Exception {
        ArrayList<String> attr = HouseListDataHandler.makeEstateAttributeList();
        attr.add("phone");
        attr.add("description");
        attr.add("owner_id");
        String imageURL = "my-app/src/assests/img/home1.jpg";
        ArrayList<String> values = makeLocalEstateValues(buildingType, dealType, sellPrice, basePrice, rentPrice, area, phone, address, description, imageURL, username);
        DataBaseHandler.addItem("estatesList", attr, values);
    }

    public static ArrayList<String> makeLocalEstateValues(String buildingType, String dealType, int sellPrice,
                                                          int basePrice, int rentPrice, int area, String phone, String address,
                                                          String description, String imageURL,
                                                          String username) throws Exception {
        ArrayList<String> values = new ArrayList<String>();
        UUID id = UUID.randomUUID();
        values.add(id.toString());
        values.add(buildingType);
        values.add(dealType);
        values.add(Integer.toString(area));
        values.add(imageURL);
        values.add(Integer.toString(sellPrice));
        values.add(Integer.toString(basePrice));
        values.add(Integer.toString(rentPrice));
        values.add(address);
        values.add("1");
        values.add(phone);
        values.add(description);
        values.add(UsersDataHandler.getUserByUsername(username).getString("id"));
        return values;
    }
}
