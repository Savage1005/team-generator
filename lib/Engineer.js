// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

import Employee from "./Employee.js";

class Engineer extends Employee {
    constructor (name, id, email, github){
        super(name, id, email);
        this.github = github;


    }

    getGitHub () {
        return this.github;
     };

    getRole () {
        return "Engineer";
    }



}

const newEngineer = new Engineer("George", 7, "George@seinfeld.com", "pretzelsthirsty");
console.log(newEngineer)

module.exports = Engineer