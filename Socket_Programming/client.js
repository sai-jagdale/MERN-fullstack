const net = require("net");

// Create TCP Client
const client = new net.Socket();

// Connect to server at port no 5000 on localhost
client.connect(5000, "localhost", () => {

    console.log("Connected to server");

    // Send message to server
    client.write("Hello Server!");
});

// Receive data
client.on("data", (data) => {

    console.log("Server says:", data.toString());

    // Close connection
    client.end();
});

// On close
client.on("close", () => {
    console.log("Connection closed");
});
