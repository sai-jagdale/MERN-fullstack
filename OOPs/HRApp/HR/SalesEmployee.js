const Employee = require("./Employee");
const IAppraisable = require("../Interfaces/IAppraisable");

class SalesEmployee extends IAppraisable(Employee) {

    doWork() {
        console.log(`${this.firstName} is selling products.`);
    }

    ConductAppraisal() {
        console.log("Sales Employee appraisal completed.");
    }

    computePay() {
        return this.baseSalary;
    }
}

module.exports = SalesEmployee;
