const IInterviewPanel = Base => class extends Base {
    TakeInterview() {
        throw new Error("TakeInterview() must be implemented");
    }
};

module.exports = IInterviewPanel;
