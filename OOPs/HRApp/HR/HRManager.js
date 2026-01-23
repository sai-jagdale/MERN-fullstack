class HRManager extends
    IInterviewPanel(
        IManagerBenefits(Employee)
    ) {

    CalculateBonus() {
        return 20000;
    }

    ConductAppraisal() {
        console.log("HR appraisal completed.");
    }

    ApproveLeave() {
        console.log("HR approved leave.");
    }

    TakeInterview() {
        console.log("HR Manager interviewing candidates.");
    }
}
