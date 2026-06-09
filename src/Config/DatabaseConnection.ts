export class DatabaseConnection {

    private static instance: DatabaseConnection;

    public users: any[] = [];
    public subscriptions: any[] = [];

    private constructor() {}

    public static getInstance(): DatabaseConnection {

        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }

        return DatabaseConnection.instance;
    }
}