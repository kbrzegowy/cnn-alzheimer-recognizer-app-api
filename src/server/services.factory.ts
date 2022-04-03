import { getCustomRepository } from "typeorm";
import { UserRepository } from "../api/users/user.repository";
import { UserService } from "../api/users/user.service";

export interface Services {
    userService: UserService,
}

export class ServicesFactory {
    public readonly services: Services; 

    constructor() {
        const userRepository =  getCustomRepository(UserRepository);

        const userService = new UserService(userRepository);

        this.services = {
            userService,
        }
    }

}