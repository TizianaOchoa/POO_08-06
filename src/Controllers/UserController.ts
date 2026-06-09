import { User } from "../Models/User";
import { UserService } from "../Services/UserService";

export class UserController {

    constructor(
        private userService: UserService
    ) {}

    register(user: User): void {

        this.userService.register(user);
    }

    listUsers(): void {

        console.log(
            this.userService.getUsers()
        );
    }
}