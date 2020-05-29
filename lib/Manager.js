// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOffice () {
        return this.officeNumber;
     };

    getRole () {
        return "Manager";
    }
}
const newManager = new Manager("Jerry", 23, "Jerry@seinfeld.com", "88");
console.log(newManager)

module.exports = Manager