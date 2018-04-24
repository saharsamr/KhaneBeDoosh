package DataManager;

import java.sql.*;
import java.util.ArrayList;

public class DataBaseHandler {

    static Connection con;

    public static void connecToDB() throws Exception{
        Class.forName("org.sqlite.JDBC");
        String dbURL = "jdbc:sqlite:E:\\testing\\src\\main\\data\\khaneBeDoosh.db";
        con = DriverManager.getConnection(dbURL);
        System.out.println("Connection to database established.");
    }

    public static void createUsersTable(){
        String sqlCommand = "CREATE TABLE IF NOT EXISTS users (\n" +
                "id TEXT PRIMARY KEY, \n" +
                "username TEXT, \n" +
                "balance REAL, \n" +
                "name TEXT \n" +
                ");";
        executeStatement(sqlCommand);
    }

    public static void addItem(String tableName, ArrayList<String> attrs, ArrayList<String> values){

        String sqlCommand = "INSERT INTO " + tableName + "(";
        for(String attr: attrs)
            sqlCommand += attr + ",";
        sqlCommand = sqlCommand.substring(0, sqlCommand.length()-1);
        sqlCommand += ") VALUES(";
        for(String val: values)
            sqlCommand += "?,";
        sqlCommand = sqlCommand.substring(0, sqlCommand.length()-1);
        sqlCommand += ");";
        try {
            PreparedStatement prp = con.prepareStatement(sqlCommand);
            for(int i = 1; i <= values.size(); i++)
                prp.setString(i, values.get(i-1));
            prp.executeUpdate();
            System.out.println("Insertion run successfully.");
        }catch(SQLException e){
            System.out.println(e.getMessage());
        }
    }

    public static void executeStatement(String cmnd){
        try{
            Statement stm = con.createStatement();
            stm.execute(cmnd);
            System.out.println("Command run successfully.");
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }
}
