import { User } from "../Models/User";
import { Subscription } from "../Models/Subscription";

export class DatabaseConnection {

    private static instance: DatabaseConnection;

    public users: User[] = [];
    public subscriptions: Subscription[] = [];

    private constructor() {}

    public static getInstance(): DatabaseConnection {

        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }

        return DatabaseConnection.instance;
    }
}