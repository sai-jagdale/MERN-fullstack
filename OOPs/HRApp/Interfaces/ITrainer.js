const ITrainer = Base => class extends Base {
    Train() {
        throw new Error("Train() must be implemented");
    }
};

module.exports = ITrainer;
