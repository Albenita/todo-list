const express = require("express");
const app = express();

app.get('/', function(req , res)
{
	res.send("Index page");
});
//runnin app
app.listen(3000,function()
{
	console.log("app running at http://localhost:3000");
});