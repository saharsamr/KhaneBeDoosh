package DataManager;

import java.sql.*;
import java.util.ArrayList;

public class DataBaseHandler {

    static private Connection con;

    public static Connection getConnection(){
        return con;
    }

    public static void connectToDB() throws Exception{
        Class.forName("org.sqlite.JDBC");
        String dbURL = "jdbc:sqlite:E:\\testing\\src\\main\\data\\khaneBeDoosh.db";
        con = DriverManager.getConnection(dbURL);
        System.out.println("Connection to database established.");
    }

    public static void addItem(String tableName, ArrayList<String> attrs, ArrayList<String> values){
        String sqlCommand = prepareInitialCommand(tableName, attrs);
        try {
            addValuesToInsert(sqlCommand, values);
        }catch(SQLException e){
            System.out.println(e.getMessage());
        }
    }

    private static String prepareInitialCommand(String tableName, ArrayList<String> attrs){
        String sqlCommand = "INSERT INTO " + tableName + "(";
        for(String attr: attrs)
            sqlCommand += attr + ",";
        sqlCommand = sqlCommand.substring(0, sqlCommand.length()-1);
        sqlCommand += ") VALUES(";
        for(int i = 0; i < attrs.size(); i++)
            sqlCommand += "?,";
        sqlCommand = sqlCommand.substring(0, sqlCommand.length()-1);
        sqlCommand += ");";
        return sqlCommand;
    }

    private static void addValuesToInsert(String sqlCommand, ArrayList<String> values)throws SQLException{
        PreparedStatement prp = con.prepareStatement(sqlCommand);
        for(int i = 1; i <= values.size(); i++)
            prp.setString(i, values.get(i-1));
        prp.executeUpdate();
        System.out.println("Insertion run successfully.");
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
