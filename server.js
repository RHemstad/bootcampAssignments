const express = require("express"); //Import the express dependency
const app = express(); //Instantiate an express app, the main work horse of this server
const port = 5000; //Save the port number where your server will be listening

var serveIndex = require("serve-index");

app.use(express.static(__dirname + "/src"));
app.use("/src", serveIndex(__dirname + "/1.2"));
app.use("/src", serveIndex(__dirname + "/1.5"));
app.use("/src", serveIndex(__dirname + "/1.7"));
app.use("/src", serveIndex(__dirname + "/2.1"));
app.use("/src", serveIndex(__dirname + "/2.2"));
app.use("/src", serveIndex(__dirname + "/2.3"));
app.use("/src", serveIndex(__dirname + "/2.4"));
app.use("/src", serveIndex(__dirname + "/2.5"));
app.use("/src", serveIndex(__dirname + "/2.6"));

app.listen(port, () => {
  //server starts listening for any attempts from a client to connect at port: {port}
  console.log(`Now listening on port ${port}`);
});
