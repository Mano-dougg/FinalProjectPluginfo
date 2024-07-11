import User from "../../entities/user";

export interface IUserRepository {
    findByEmail(email: string): Promise<User>;
    save(user: User): Promise<void>;

}