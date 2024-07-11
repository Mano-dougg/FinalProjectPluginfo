import { uuid } from 'uuidv4';

class User {
    public readonly id: string;

    public nome: string;
    public email: string;
    public senha: string;

    constructor(props: Omit<User, 'id'>, id?: string) {
        Object.assign(this, props);


        if (!id) {
            this.id = uuid();
        }
    }

}

export default User;