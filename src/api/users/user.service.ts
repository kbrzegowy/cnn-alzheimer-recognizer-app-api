import { BcryptService } from "../../server/services/bcrypt.service";
import { JWTService } from "../../server/services/jwt.service";
import { User, UserRole } from "./user.model";
import { UserRepository } from "./user.repository";

export class UserService {
    constructor(
        private userRepository: UserRepository, 
        private jwtService: JWTService,
        private bcryptService: BcryptService,
    ) {}

    public async register(user: User): Promise<User> {
        if (!Object.values(UserRole).includes(user.role))
            throw new Error('There is no such user role');
        
        user.password = await this.bcryptService.hash(user.password);

        return this.userRepository.save(user);
    }

    public async login(email: string): Promise<User> {
        const user =  this.userRepository.find({ where: { email } });
        if (!user) throw new Error('There is no user with such email');
        console.log(user);
        return new User();
    }
}