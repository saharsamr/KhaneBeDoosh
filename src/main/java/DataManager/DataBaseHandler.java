package DataManager;

import java.sql.Connection;
import java.sql.DriverManager;

public class DataBaseHandler {

    public static Connection connecToDB() throws Exception{
        Class.forName("org.sqlite.JDBC");
        Connection con = null;
        String dbURL = "jdbc:sqlite:E:\\testing\\src\\main\\data\\khaneBeDoosh.db";
        con = DriverManager.getConnection(dbURL);
        System.out.println("Connection established.");
        return con;
    }
}
