const IBonusEligible = require("./IBonusEligible");
const IAppraisable = require("./IAppraisable");

const IManagerBenefits = Base =>
    IBonusEligible(
        IAppraisable(Base)
    );

module.exports = IManagerBenefits;
