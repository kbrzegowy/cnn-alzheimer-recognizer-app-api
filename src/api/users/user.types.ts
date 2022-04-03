import { User } from "./user.model";

export type UserRegister = Omit<User, 'id | created_at | updated_at'>;