const IAppraisable = Base => class extends Base {
    ConductAppraisal() {
        throw new Error("ConductAppraisal() must be implemented");
    }
};

module.exports = IAppraisable;