import { User } from './user.model';
import { UserService } from './user.service';

export class UserController {
  constructor(private userService: UserService) {}

  public async register(user: User): Promise<User> {
    return this.userService.register(user);
  }

  public async login(email: string, password: string): Promise<string> {
    return this.userService.login(email, password);
  }
}
