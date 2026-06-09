import { User } from "../Models/User";
import { IUserRepository } from "../Repositories/IUserRepository";

export class UserService {

    constructor(
        private userRepository: IUserRepository
    ) {}

    register(user: User): void {

        this.userRepository.save(user);

        console.log(
            `Usuario ${user.name} registrado correctamente`
        );
    }

    getUsers(): User[] {

        return this.userRepository.findAll();
    }
}