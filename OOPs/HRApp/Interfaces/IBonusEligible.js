const IBonusEligible = Base => class extends Base {
    CalculateBonus() {
        throw new Error("CalculateBonus() must be implemented");
    }
};

module.exports = IBonusEligible;