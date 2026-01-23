const SalesEmployee = require("./SalesEmployee");
const IManagerBenefits = require("../Interfaces/IManagerBenefits");
const IInterviewPanel = require("../Interfaces/IInterviewPanel");
const ITrainer = require("../Interfaces/ITrainer");

class SalesManager extends
    ITrainer(
        IInterviewPanel(
            IManagerBenefits(SalesEmployee)
        )
    ) {

    CalculateBonus() {
        return this.bonus;
    }

    ConductAppraisal() {
        console.log("Manager appraisal completed.");
    }

    ApproveLeave() {
        console.log("Leave approved by Sales Manager.");
    }

    TakeInterview() {
        console.log("Sales Manager conducting interview.");
    }

    Train() {
        console.log("Sales Manager training sales team.");
    }
}

module.exports = SalesManager;
