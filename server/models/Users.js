import Model from "./Model";

class User extends Model{
    constructor(){
        super();
        this.table = "users";
    }
}

export default User;