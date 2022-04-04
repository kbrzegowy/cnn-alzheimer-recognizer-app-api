import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../api/users/user.repository';
import { UserService } from '../api/users/user.service';
import { BcryptService } from './services/bcrypt.service';
import { JWTService } from './services/jwt.service';

export interface Services {
  userService: UserService;
  jwtService: JWTService;
  bcryptService: BcryptService;
}

export class ServicesFactory {
  public readonly services: Services;

  constructor() {
    const userRepository = getCustomRepository(UserRepository);
    const jwtService = new JWTService();
    const bcryptService = new BcryptService();

    const userService = new UserService(
      userRepository,
      jwtService,
      bcryptService
    );

    this.services = {
      userService,
      jwtService,
      bcryptService,
    };
  }
}
