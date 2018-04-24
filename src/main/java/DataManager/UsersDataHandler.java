package DataManager;

import DataManager.DataBaseHandler;
import KhaneBeDoosh.Website;

import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class UsersDataHandler {

    public static void createUsersTable(){
        String sqlCommand = "CREATE TABLE IF NOT EXISTS users (\n" +
                "id TEXT PRIMARY KEY, \n" +
                "username TEXT, \n" +
                "balance REAL, \n" +
                "name TEXT \n" +
                ");";
        DataBaseHandler.executeStatement(sqlCommand);
    }

    public static ResultSet getUserByID(String id) throws Exception {
        String sqlCommand = "SELECT id, username, balance, name "
                + "FROM users WHERE id == ?";
        PreparedStatement prp = DataBaseHandler.getConnection().prepareStatement(sqlCommand);
        prp.setString(1, id);
        return prp.executeQuery();
    }
}
