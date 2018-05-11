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
            attr.add("is_admin");
            val.add("100");
            val.add("behi");
            val.add("1200");
            val.add("1234");
            val.add("behn");
            val.add("0");
            DataBaseHandler.addItem("users", attr, val);
            ArrayList<String> attr1 = new ArrayList<String>(), val1 = new ArrayList<String>();
            attr1.add("id");
            attr1.add("username");
            attr1.add("balance");
            attr1.add("password");
            attr1.add("name");
            attr1.add("is_admin");
            val1.add("200");
            val1.add("sahar");
            val1.add("200000");
            val1.add("1234");
            val1.add("sahar");
            val1.add("1");
            DataBaseHandler.addItem("users", attr1, val1);
        }catch (Exception e ){
            System.out.println(e.getMessage());
        }
    }

    public void contextDestroyed(ServletContextEvent event){

    }
}
