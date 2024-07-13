import { IUserRepository } from "../../repositories/IUsersRepository";
import ICreateUserRequestDTO from "./createUserDTO";
import User from "../../../entities/user";

class CreateUserUseCase {

    constructor(
        private userRepository: IUserRepository
    ) {}


    async execute(data: ICreateUserRequestDTO) {
        const userAlredyExists = await this.userRepository.findByEmail(data.email);

        if (userAlredyExists) {
            throw new Error ('User already exists');
        }

        const user = new User(data);

        await this.userRepository.save(user)
    };
}

export default CreateUserUseCase;