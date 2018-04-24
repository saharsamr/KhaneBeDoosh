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
//            ArrayList<String> attr = new ArrayList<String>(), val = new ArrayList<String>();
//            attr.add("id");
//            attr.add("username");
//            attr.add("balance");
//            attr.add("name");
//            val.add("1");
//            val.add("behnam");
//            val.add("1200");
//            val.add("behn");
//            DataBaseHandler.addItem("users", attr, val);
        }catch (Exception e ){
            System.out.println(e.getMessage());
        }
    }

    public void contextDestroyed(ServletContextEvent event){

    }
}
