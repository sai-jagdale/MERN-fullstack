<<<<<<< HEAD

// modularity Event Handaling Module
// event listners for emitter : a kind of dedicated functions which---
// --- are automatically called when the event is triggered.
// Event handler logic
// expose functions to be used of javascript file
// we are publishing thee functions using exports keyword
// these functions can also be called outside the banking folder using require keyword.

exports.payIncomeTax = function(){

    console.log("20% income tax applicable since Account balance is above 10000");
};

exports.BlockAccount = function(){

    console.log("Account balance low therefor Account is blocked");
};

exports.sendEmail = function(){
    console.log("Email sent reguarding low balance");
};

=======

// modularity Event Handaling Module
// event listners for emitter : a kind of dedicated functions which---
// --- are automatically called when the event is triggered.
// Event handler logic
// expose functions to be used of javascript file
// we are publishing thee functions using exports keyword
// these functions can also be called outside the banking folder using require keyword.

exports.payIncomeTax = function(){

    console.log("20% income tax applicable since Account balance is above 10000");
};

exports.BlockAccount = function(){

    console.log("Account balance low therefor Account is blocked");
};

exports.sendEmail = function(){
    console.log("Email sent reguarding low balance");
};

>>>>>>> 6ac402e7e8b75601b3a66ea90fdd7f0365b55284
