package DataManager;

import DataManager.DataBaseHandler;
import KhaneBeDoosh.Website;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

public class UsersDataHandler {

    public static void createUsersTable(){
        String sqlCommand = "CREATE TABLE IF NOT EXISTS users (\n" +
                "id TEXT PRIMARY KEY, \n" +
                "username TEXT UNIQUE, \n" +
                "password TEXT, \n" +
                "balance REAL, \n" +
                "name TEXT, \n" +
                "is_admin INTEGER \n" +
                ");";
        DataBaseHandler.executeStatement(sqlCommand);
    }

    public static void createTableHasPaidFor(){
        String sqlCommand = "CREATE TABLE IF NOT EXISTS hasPaidFor (\n" +
                "uid TEXT, \n" +
                "eid TEXT, \n" +
                "PRIMARY KEY(uid, eid), \n" +
                "FOREIGN KEY (uid) REFERENCES users(id), \n" +
                "FOREIGN KEY (eid) REFERENCES estatesList(id) \n" +
                ");";
        DataBaseHandler.executeStatement(sqlCommand);
    }

    public static ResultSet ListAllUserAndTheirHouses() throws Exception{ //TODO: alan in bayad INNER JOIN bashe?
        String sqlCommand = String.format("SELECT U.uid, U.eid FROM hasPaidFor AS U");
        Statement stm = DataBaseHandler.getConnection().createStatement();
        return stm.executeQuery(sqlCommand);
    }

    public static ResultSet ListUserHouses(String id) throws Exception{ //TODO: in ro ham check kon lotfan.
        String sqlCommand = String.format("SELECT L.eid FROM hasPaidFor AS L WHERE L.uid == \"%s\"", id);
        Statement stm = DataBaseHandler.getConnection().createStatement();
        return stm.executeQuery(sqlCommand);
    }

    public static ResultSet getUserByID(String id) throws Exception {
        String sqlCommand = String.format("SELECT id, username, balance, name FROM users WHERE id == %s", id);
        Statement stm= DataBaseHandler.getConnection().createStatement();
        return stm.executeQuery(sqlCommand);
    }

    public static ResultSet getUserByUsername(String username) throws Exception {
        String sqlCommand = String.format("SELECT * FROM users WHERE username == \"%s\"", username);
        Statement stm= DataBaseHandler.getConnection().createStatement();
        return stm.executeQuery(sqlCommand);
    }

    public static Boolean checkIfPaid(String eid, String uid) throws Exception{
        String sqlCommand = "SELECT * FROM hasPaidFor P WHERE P.eid = ? AND P.uid = ?";
        PreparedStatement prp = DataBaseHandler.getConnection().prepareStatement(sqlCommand);
        prp.setString(1, eid);
        prp.setString(2, uid);
        return prp.executeQuery().next();
    }

    public static void setBalance(String id, int balance) throws Exception{
        String sqlCommand = "UPDATE users SET balance = ? WHERE id = ? ";
        PreparedStatement prp = DataBaseHandler.getConnection().prepareStatement(sqlCommand);
        prp.setInt(1, balance);
        prp.setString(2, id);
        prp.executeUpdate();
    }
}
