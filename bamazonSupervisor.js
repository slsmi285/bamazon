// npm requirements
var inquirer = require("inquirer");
var mysql = require("mysql");
var consoleTableNPM = require("console.table");
// my password for mysql db connection - hidden
var pw = require("./pw.js");

// create mysql connection
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: pw.pw,
	database: "bamazon_db"
});

// connect to db
connection.connect(function(error){
	if (error) throw error;
	// welcome manager
	console.log("\n-----------------------------------------------------------------" 
		+ "\nWelcome Bamazon Supervisor!\n" 
		+ "-----------------------------------------------------------------\n");
	// start the app
	welcome();
});