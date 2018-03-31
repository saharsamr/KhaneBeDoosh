package KhaneBeDoosh;

import java.net.HttpURLConnection;
import java.net.URL;
import java.util.*;

import Estates.*;
import Users.User;
import Users.Individual;
import Enums.*;
import org.json.JSONArray;
import SearchEngine.JsonParser;
import org.json.JSONObject;

public class Website {

    private static ArrayList<Estate> estates;
    private static ArrayList<User> users;
    private static String logedInUserID;
    private static String bankApiKey;
    private static ArrayList<Estate> searchResult;

    static{
        bankApiKey = "d1370810-34c0-11e8-813c-81721a10cc01";
        users = new ArrayList<User>();
        users.add(new Individual("1", "بهنام همایون", "بهنام همایون", "123123"));
        estates= new ArrayList<Estate>();
        estates.add(new Estate("1", 100, "ویلایی", "daUs", "1", "1"));
        searchResult = new ArrayList<Estate>();
        logedInUserID = "1";
    }

    public static List<Estate> getEstates() {
        return estates;
    }

    public static List<User> getUsers() {
        return users;
    }

    public static User getCurrentUser() {
        for (int i = 0; i < users.size(); i++)
            if (users.get(i).getId().equals(logedInUserID))
                return users.get(i);
        return null;
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

    public static void addEstate(String buildingType, String dealType, int price, int area, String phone, String address, String description){
        Estate newEstate = new Estate(Integer.toString(estates.size()+1), area, buildingType, address, dealType, logedInUserID); //TODO: check to be unique
        if (dealType.equals("1")){
            newEstate.setBasePrice(price);
            newEstate.setSellPrice(0);
            newEstate.setRentPrice(0); //TODO: dynamic form should be implemented.
        }
        else {
            newEstate.setSellPrice(price);
            newEstate.setRentPrice(0);
            newEstate.setBasePrice(0);
        }
        newEstate.setDescription(description);
        newEstate.setPhone(phone);
        estates.add(newEstate);
    }

    public static void increaseCredit(String userId, int balance){
        for (User user : users){
            if (user.getId().equals(userId))
                user.increaseBalance(balance);
        }
    }

    public static String getCurrentUserID (){
        return logedInUserID;
    }
}
