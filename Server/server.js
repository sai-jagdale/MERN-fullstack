<<<<<<< HEAD
// HTTP Wed server

var http = require('http');

// this is a rule of web Programming 
// to define first parameter always as request object
//           second parameter always as response object

// onRequestHandler custom ( programmer defined ) function

var person = [
    {name : "Sai",age  : 21,city : "Pune",email : "saijagdale@gmail.com"},
    {name : "Sam",age  : 21,city : "Pune",email : "saijagdale@gmail.com"},
    {name : "Chait",age  : 21,city : "Pune",email : "saijagdale@gmail.com"},
    {name : "Arnav",age  : 21,city : "Pune",email : "saijagdale@gmail.com"},
    {name : "Jui",age  : 21,city : "Pune",email : "saijagdale@gmail.com"},
    {name : "Akau",age  : 21,city : "Pune",email : "saijagdale@gmail.com"},
];

var onRequestHandler = function (request , response){
// requst is qlways first and then response    
    console.log("Request received from browser");

    // 200 is the status code that specifies that this response is sucessfull
    // Content-Type is the meta data which specifies the type of data we are sending to browser

   // response.writeHead(200,{'Content-Type':'text/json'});
    // response.write(JSON.stringify(person));
    
    // only one wruteHead & write inbuilt function works.
    
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write("<h1>Hey this is from server ....</h1>");


          // serialization --- deserialization
 // convert json to string --- convet string to json

    response.end();
// all are in built finctions 
}

var server = http.createServer(onRequestHandler); // inbuilt function
server.listen(9999);   // inbuilt function

var server2 = http.createServer(onRequestHandler);
server2.listen(9998);
// 0 to 1024 port numbers are already takein by operating system 

=======
// HTTP Wed server

var http = require('http');

// this is a rule of web Programming 
// to define first parameter always as request object
//           second parameter always as response object

// onRequestHandler custom ( programmer defined ) function

var person = [
    {name : "Sai",age  : 21,city : "Pune",email : "saijagdale@gmail.com"},
    {name : "Sam",age  : 21,city : "Pune",email : "saijagdale@gmail.com"},
    {name : "Chait",age  : 21,city : "Pune",email : "saijagdale@gmail.com"},
    {name : "Arnav",age  : 21,city : "Pune",email : "saijagdale@gmail.com"},
    {name : "Jui",age  : 21,city : "Pune",email : "saijagdale@gmail.com"},
    {name : "Akau",age  : 21,city : "Pune",email : "saijagdale@gmail.com"},
];

var onRequestHandler = function (request , response){
// requst is qlways first and then response    
    console.log("Request received from browser");

    // 200 is the status code that specifies that this response is sucessfull
    // Content-Type is the meta data which specifies the type of data we are sending to browser

   // response.writeHead(200,{'Content-Type':'text/json'});
    // response.write(JSON.stringify(person));
    
    // only one wruteHead & write inbuilt function works.
    
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write("<h1>Hey this is from server ....</h1>");


          // serialization --- deserialization
 // convert json to string --- convet string to json

    response.end();
// all are in built finctions 
}

var server = http.createServer(onRequestHandler); // inbuilt function
server.listen(9999);   // inbuilt function

var server2 = http.createServer(onRequestHandler);
server2.listen(9998);
// 0 to 1024 port numbers are already takein by operating system 

>>>>>>> 6ac402e7e8b75601b3a66ea90fdd7f0365b55284
console.log("Server is listening on port 9999 and 9998");