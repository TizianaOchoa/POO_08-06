import { User } from "./Models/User";
import { UserRepository } from "./Repositories/UserRepository";

const repository = new UserRepository();

const user = new User(
    1,
    "Tiziana",
    "tizi@gmail.com",
    "email"
);

repository.save(user);

console.log(repository.findAll());