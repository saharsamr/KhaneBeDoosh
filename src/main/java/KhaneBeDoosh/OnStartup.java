package KhaneBeDoosh;

import DataManager.DataBaseHandler;
import DataManager.HouseListDataHandler;
import DataManager.UsersDataHandler;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import java.util.ArrayList;

public class OnStartup implements ServletContextListener {

    public void contextInitialized(ServletContextEvent context) {
        try {
            DataBaseHandler.connectToDB();
            UsersDataHandler.createUsersTable();
            HouseListDataHandler.createHouseListTable();
            UsersDataHandler.createTableHasPaidFor();
            HouseListDataHandler.fillEstatesListTable();
            ArrayList<String> attr = new ArrayList<String>(), val = new ArrayList<String>();
            attr.add("id");
            attr.add("username");
            attr.add("balance");
            attr.add("password");
            attr.add("name");
            val.add("100");
            val.add("behi");
            val.add("1200");
            val.add("1234");
            val.add("behn");
            DataBaseHandler.addItem("users", attr, val);
        }catch (Exception e ){
            System.out.println(e.getMessage());
        }
    }

    public void contextDestroyed(ServletContextEvent event){

    }
}
