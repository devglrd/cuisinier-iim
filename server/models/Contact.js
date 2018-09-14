import Model from "./Model";

class Contact extends Model{
    constructor(){
        super();
        this.table = "cms_contacts";
    }
}

export default Contact;