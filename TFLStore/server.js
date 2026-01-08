var express = require('express');
var path = require('path');

const app = express();
// to store user criedentials
var criedentials = [
    {"id":1,"username":"Sai","password":"sai123"},
    {"id":2,"username":"Raj","password":"raj123"},
    {"id":3,"username":"Anita","password":"anita123"},
    {"id":4,"username":"Vikram","password":"vikram123"},
    {"id":5,"username":"Neha","password":"neha123"},
    {"id":6,"username":"Amit","password":"amit123"},
    {"id":7,"username":"Pooja","password":"pooja123"},
    {"id":8,"username":"Rohit","password":"rohit123"},
    {"id":9,"username":"Sonal","password":"sonal123"},
    {"id":10,"username":"Karan","password":"karan123"}
]

// Product catlog data
var flowers = [
    {"id":1,"name":"Rose","color":"Red","price":10,"imageurl":"/images/rose.jpg","likes":4500},
    {"id":2,"name":"Jasmine","color":"White","price":12,"imageurl":"/images/jasmine.jpg","likes":3000},
    {"id":3,"name":"Tulip","color":"Pink","price":15,"imageurl":"/images/tulip.jpg","likes":2500},
    {"id":4,"name":"Lily","color":"White-Pink","price":8,"imageurl":"/images/lily.jpg","likes":4000},
    {"id":5,"name":"Orchid","color":"Purple","price":20,"imageurl":"/images/orchid.jpg","likes":1500}
];
// customer Relationship data (CRM data)
var customers =[
    {"id":1,"firstname":"Sai","lastname":"Jagdale","email":"sai.jagdale@gmail.com","contact":"9876543210"},
    {"id":2,"firstname":"Raj","lastname":"Patil","email":"raj@gmail.com","contact":"8765432109"},
    {"id":3,"firstname":"Anita","lastname":"Shah","email":"shah.anita@gmail.com","contact":"7654321098"},
    {"id":4,"firstname":"Vikram","lastname":"Deshmukh","email":"deshmukh@gmail.com","contact":"6543210987"},
    {"id":5,"firstname":"Neha","lastname":"Kumar","email":"neha.kumar@gmail.com","contact":"5432109876"},
    {"id":6,"firstname":"Amit","lastname":"Singh","email":"singh.a@gmail.com","contact":"4321098765"},
    {"id":7,"firstname":"Pooja","lastname":"Verma","email":"pooja@gmail.com","contact":"3210987654"} 
];

var orders = [];
var payements = [];

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// This web application has 5 HTTP handlers

app.get('/',function(request,response){
    response.sendFile("index.html");
});

// When Client Application invode web api and recived json data as response
// it is called as REST API - Representational State Transfer API
// it is called as Web API
// it is called as web service
// it is also called as web listner
// callback function mapped to each HTTPWebRequest is called as HTTPHandler
// HTTP Methods : GET, POST, PUT, DELETE
    // GET : to get the data from server
    // POST : to send the data to server
    // PUT : to update the data on server
    // DELETE : to delete the data from server

// Sql Query is semt to database server: SELECT * FROM flowers 
// web query is sent to web server: http://localhost:9898/api/flowers

// Web API Handlermapped with web query

app.get("/api/flowers",(request,response)=>{
    response.send(flowers);
});

// Sql Query : SELECT * FROM flowers WHERE id=1
// web query : http://localhost:9898/api/flowers/1
app.get("/api/flowers/:id",(request,response)=>{
    // important to put : before id in the route to make it as a route parameter
    // scope variable id 
    // let is used to declare block scope variable
    // params is used to get the route parameter
    let id = request.params.id;
    let flower = flowers.find(product=>product.id==id);
    response.send(flower);
    // Web Processing Logic
});

app.get("/api/customers",(request,response)=>{
    response.send(customers);
});

app.get("/api/customers/:id",(request,response)=>{
    let CustomerId = request.params.id;
    let customer = customers.find(customer=>customer.id==CustomerIdd);
    response.send(customer);
});

// HTTP POST handlers
app.post("/api/login",(request,response)=>{
    var user = request.body;
    /*if (user.username=="saijagdale@gmail.com" && user.password=="sai123"){
        response.send("valid user");
    }
    else{
        response.send("invalid user");
    }*/

    let theUser = criedentials.find(crenditial=>crenditial.username==user.username && crenditial.password==user.password);
    let messaage = "Invalid User";
    if(theUser !==undefined){
        response.send("valid user");
    }
    response.send(messaage);

    
    /* Check crendentials against MySQL Database 
     * and send proper back calling Client Application
     */
});

app.post("/api/register",(request,response)=>{
    var newCustomer = request.body;
    customer.push(newCustomer);
    response.send("Customer Registered Successfully");
});

app.delete("/api/flowers/:id",(request,response)=>{
    let id = request.params.id;
    let remainingFlower = flowers.filter(flower=>flower.id!=id);
    flowers = remainingFlower;
    response.send("Flower Deleted Successfully");
});
app.listen(9898);
console.log("Server running on port 9898")