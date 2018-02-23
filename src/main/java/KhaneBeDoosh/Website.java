package KhaneBeDoosh;

import java.util.*;

import Estates.*;
import Users.User;
import Users.Individual;
import java.lang.System.*;
import Enums.*;

public class Website {

    private static ArrayList<Estate> estates;
    private static ArrayList<User> users;
    private static int logedInUserID;

    static{
        users = new ArrayList<User>();
        users.add(new Individual(1, "بهنام همایون", "بهنام همایون", "123123"));
        estates= new ArrayList<Estate>();
        estates.add(new Estate(1, 100, "vilayi", "daUs", "رهن-اجاره", 1));
        logedInUserID = 1;
    }

    public static List<Estate> getEstates() {
        return estates;
    }

    public static List<User> getUsers() {
        return users;
    }

    public static User getCurrentUser() {
        for (int i = 0; i < users.size(); i++)
            if (users.get(i).getId() == logedInUserID)
                return users.get(i);
        return null;
    }

    public static List<Estate> findEstates(String buildingType, String dealType_, String price_, String area_){
        int price = Integer.parseInt(price_);
        DealType dealType;
        if(dealType_ == "رهن-اجاره")
            dealType = DealType.rent;
        else
            dealType = DealType.sell;
        int area = Integer.parseInt(area_);
        List<Estate> result = new ArrayList<Estate>();

        for (int i = 0; i < estates.size(); i++){
            if(estates.get(i).hasConditions(buildingType, dealType, price, area))
                result.add(estates.get(i));
        }

        return result;
    }

    public static Estate getEstate(int id){
        for (int i = 0; i < estates.size(); i++){
            if(estates.get(i).getId() == id)
                estates.get(i);
        }
        return null;
    }

    public static void addEstate(String buildingType, String dealType, int price, int area, String phone, String address, String description){
        Estate newEstate = new Estate(estates.size()+1, area, buildingType, address, dealType, logedInUserID);
        if (dealType == "رهن-اجاره"){
            newEstate.setBasePrice(price);
        }
        else
            newEstate.setSellPrice(price);
        newEstate.setDescription(description);
        newEstate.setPhone(phone);
    }

    public static int getCurrentUserID (){
        return logedInUserID;
    }
}
