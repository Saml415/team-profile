const Employee = require("./Employee");
class Engineer extends Employee{
    constructor(name, id, email, account){
        super(name,id,email)
        this.account = account;
    }
    getGithub(){
        return this.account
    }
    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer;