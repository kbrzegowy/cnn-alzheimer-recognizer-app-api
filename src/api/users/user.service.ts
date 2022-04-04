import { BcryptService } from '../../server/services/bcrypt.service';
import { JWTService } from '../../server/services/jwt.service';
import { User, UserRole } from './user.model';
import { UserRepository } from './user.repository';

export class UserService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JWTService,
    private bcryptService: BcryptService
  ) {}

  public async register(user: User): Promise<User> {
    if (!Object.values(UserRole).includes(user.role))
      throw new Error('Incorrect user role');

    user.password = await this.bcryptService.hash(user.password);

    return this.userRepository.save(user);
  }

  public async login(email: string, password: string): Promise<string> {
    const [user] = await this.userRepository.find({ where: { email } });

    if (!user) throw new Error('Incorrect user credentials');

    const isValid = this.bcryptService.compare(password, user.password);

    if (!isValid) throw new Error('Incorrect user credentials');

    return this.jwtService.sign(email);
  }
}
