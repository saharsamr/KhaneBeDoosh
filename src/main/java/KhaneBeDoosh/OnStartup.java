package KhaneBeDoosh;

import DataManager.DataBaseHandler;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

public class OnStartup implements ServletContextListener {

    public void contextInitialized(ServletContextEvent context) {
        try {
            DataBaseHandler.connecToDB();
        }catch (Exception e ){
            System.out.println(e.getMessage());
        }
    }

    public void contextDestroyed(ServletContextEvent event){

    }
}
