import { User } from "./user.model";
import { UserRepository } from "./user.repository";

export class UserService {
    constructor(private userRepository: UserRepository) {}

    public async create(user: User): Promise<User> {
        return this.userRepository.save(user);
    }

    public async read(email: string): Promise<User | undefined> {
        return this.userRepository.findOne({ email: email });
    }
}