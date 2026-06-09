import { DatabaseConnection } from "../Config/DatabaseConnection";
import { User } from "../Models/User";
import { IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository {

    private db = DatabaseConnection.getInstance();

    save(user: User): void {
        this.db.users.push(user);
    }

    findById(id: number): User | undefined {
        return this.db.users.find(
            user => user.id === id
        );
    }

    findAll(): User[] {
        return this.db.users;
    }
}