package DataManager;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.util.ArrayList;

public class DataBaseHandler {

    static Connection con;

    public static void connecToDB() throws Exception{
        Class.forName("org.sqlite.JDBC");
        String dbURL = "jdbc:sqlite:E:\\testing\\src\\main\\data\\khaneBeDoosh.db";
        con = DriverManager.getConnection(dbURL);
        System.out.println("Connection to database established.");
    }

    public static void createUsersTable() throws Exception{
        String sqlCommand = "CREATE TABLE IF NOT EXISTS users (\n" +
                "id TEXT PRIMARY KEY, \n" +
                "username TEXT, \n" +
                "balance REAL, \n" +
                "name TEXT \n" +
                ");";
        executeStatement(sqlCommand);
    }

    public static void addItem(String tableName, ArrayList<String> attrs, ArrayList<String> values){
        String sqlCommand = "INSERT INTO " + tableName+"(";
        for(String attr: attrs)
            sqlCommand += attr + ", ";
        sqlCommand += ") VALUES(";
        for(String val: values)
            sqlCommand += val + ", ";
        sqlCommand += ")";
        executeStatement(sqlCommand);
    }

    public static void executeStatement(String cmnd){
        try{
            Statement stm = con.createStatement();
            stm.execute(cmnd);
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }
}
