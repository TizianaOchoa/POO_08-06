import { User } from "../Models/User";

export interface IUserRepository {

    save(user: User): void;

    findById(id: number): User | undefined;

    findAll(): User[];
}