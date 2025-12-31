<<<<<<< HEAD
// Domain : Banking 
// OPertaions : Credit , Debit
// Buisness Entity : Account
// Rule : Constarints , Taxation , Blocking account

//classical Javascript syntax
// SOC : Separation of Concerns (seperate file for handaling functions in Handler File)

// Loosely coupled , Highly Cohesive


var handlers = require("./handler");// custom module 
var events = require("events"); // builtin module available in node js

var emitter = new events.EventEmitter(); // creating the event emitter object

var Account = function(amount){

    var balance = amount;
    var getBalance = function(){      // function to get the balance outside the this function Account as balance is inside account function
        return balance;             
    };

    var monitor = function(){

        if(balance < 2000){
           // handlers.BlockAccount();
           // emit (trigger )event underBalance
           emitter.emit("underBalance");
        }
        else if(balance > 10000){
            //handlers.payIncomeTax();
            // emit (trigger event overBalance
            emitter.emit("overBalance");
        }
    }

    var withdraw = function(amount){
        monitor();
        balance = balance - amount;
        monitor();
    }

    var deposit = function(amount){
        monitor();
        balance = balance + amount;
    }

    // to make the above functions accessible to the outside world
    return{
        recieveBalance:getBalance,
        debit:withdraw,
        credit:deposit
    }
} 

// events are associated with the instances (objects)
// Set up the environment for event handaling
// Step 1 : Configuration , Initialization
// Register Eventhandlers with event using emitter object

//seperate logic for pipelining events and handlers for different scenarios

emitter.on("underBalance",handlers.BlockAccount);
emitter.on("underBalance",handlers.sendEmail);
emitter.on("overBalance",handlers.payIncomeTax);
// Step 2 : creste object
var Acc1 = Account(10000);                         // calling the Account function to create a object Acc1

// Step3 : invoke the functions
var data = Acc1.recieveBalance();                 // calling the balanece function to get the balance
console.log("Initial Balance is " + data);        // displaying the balance

var ammount = 5000;
Acc1.credit(ammount);
data = Acc1.recieveBalance();
console.log("Balance after crediting " + ammount + " is " + data);

ammount = 14000;
Acc1.debit(ammount);
data = Acc1.recieveBalance();
console.log("Balance after debiting " + ammount + " is " + data);
=======
// Domain : Banking 
// OPertaions : Credit , Debit
// Buisness Entity : Account
// Rule : Constarints , Taxation , Blocking account

//classical Javascript syntax
// SOC : Separation of Concerns (seperate file for handaling functions in Handler File)

// Loosely coupled , Highly Cohesive


var handlers = require("./handler");// custom module 
var events = require("events"); // builtin module available in node js

var emitter = new events.EventEmitter(); // creating the event emitter object

var Account = function(amount){

    var balance = amount;
    var getBalance = function(){      // function to get the balance outside the this function Account as balance is inside account function
        return balance;             
    };

    var monitor = function(){

        if(balance < 2000){
           // handlers.BlockAccount();
           // emit (trigger )event underBalance
           emitter.emit("underBalance");
        }
        else if(balance > 10000){
            //handlers.payIncomeTax();
            // emit (trigger event overBalance
            emitter.emit("overBalance");
        }
    }

    var withdraw = function(amount){
        monitor();
        balance = balance - amount;
        monitor();
    }

    var deposit = function(amount){
        monitor();
        balance = balance + amount;
    }

    // to make the above functions accessible to the outside world
    return{
        recieveBalance:getBalance,
        debit:withdraw,
        credit:deposit
    }
} 

// events are associated with the instances (objects)
// Set up the environment for event handaling
// Step 1 : Configuration , Initialization
// Register Eventhandlers with event using emitter object

//seperate logic for pipelining events and handlers for different scenarios

emitter.on("underBalance",handlers.BlockAccount);
emitter.on("underBalance",handlers.sendEmail);
emitter.on("overBalance",handlers.payIncomeTax);
// Step 2 : creste object
var Acc1 = Account(10000);                         // calling the Account function to create a object Acc1

// Step3 : invoke the functions
var data = Acc1.recieveBalance();                 // calling the balanece function to get the balance
console.log("Initial Balance is " + data);        // displaying the balance

var ammount = 5000;
Acc1.credit(ammount);
data = Acc1.recieveBalance();
console.log("Balance after crediting " + ammount + " is " + data);

ammount = 14000;
Acc1.debit(ammount);
data = Acc1.recieveBalance();
console.log("Balance after debiting " + ammount + " is " + data);
>>>>>>> 6ac402e7e8b75601b3a66ea90fdd7f0365b55284
