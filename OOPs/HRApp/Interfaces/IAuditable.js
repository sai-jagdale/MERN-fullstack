// Interfaces/IAuditable.js
const IAuditable = Base => class extends Base {
    Audit() {
        throw new Error("Audit() must be implemented");
    }
};

module.exports = IAuditable;
