package DataManager;

import DataManager.DataBaseHandler;

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
}
