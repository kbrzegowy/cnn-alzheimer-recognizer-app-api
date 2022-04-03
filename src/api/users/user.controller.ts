import { User } from "./user.model";
import { UserService } from "./user.service";
import { UserRegister } from "./user.types";

export class UserController {
    constructor(private userService: UserService) {}

    public async register(user: User): Promise<User> {
        return this.userService.register(user);
    }
    
    public async login(email: string): Promise<User> {
        return this.userService.login(email);
    }
}