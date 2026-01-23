const SalesManager = require("./HR/SalesManager");

const manager = new SalesManager();

// Same object, different interface views
manager.ConductAppraisal();
console.log("Bonus:", manager.CalculateBonus());
manager.TakeInterview();
manager.Train();
manager.ApproveLeave();
