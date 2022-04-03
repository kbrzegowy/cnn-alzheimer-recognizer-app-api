import { User } from "./user.model";
import { UserService } from "./user.service";

export class UserController {
    constructor(private userService: UserService) {}

    public async create(user: User): Promise<User> {
        return this.userService.create(user);
    }
}