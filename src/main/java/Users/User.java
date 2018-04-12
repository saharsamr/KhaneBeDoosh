package Users;

import java.util.*;
import Exceptions.*;

abstract public class User {
    private String name;
    private String username;
    private String password;
    private String id;
    private List<String> paidReportsID = new ArrayList<String>();
    private int balance;

    public int getBalance() {
        return balance;
    }

    public void decreaseBalance() throws LackOfBalanceException{
        if(this.balance >= 1000) {
            this.balance = this.balance - 1000;
            return;
        }
        throw new LackOfBalanceException();
    }

    public void increaseBalance(int value){
        this.balance = this.balance + value;
    }

    public User (String id, String name, String username, String password){
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.balance = 0;
    }

    public void addPaidID(String id){
        paidReportsID.add(id);
    }

    public boolean hasPaidFor(String id){
        return paidReportsID.contains(id);
    }

    public String getName(){
        return name;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getId() {
        return id;
    }
}
