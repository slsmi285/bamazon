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

// welcome function asks what supervisor wants to do and runs corresponding function
function welcome() {
	inquirer.prompt([
		{
			name: "action",
			type: "list",
			choices: ["View Product Sales By Department", "Create New Department", "Exit"],
			message: "Please select what you would like to do."
        },
    ]).then(function(response) {
		if (response.action === "View Product Sales By Department") {
			viewSales();
		} else if (response.action === "Create New Department") {
			createDepartment();
		} else if (response.action === "Exit") {
			exit();
		}
	});
}

// function to view departmental sales
function viewSales() {
	// building query variable for inner join
	// selecting dept id, dept name, OH costs, sum(product sales) with alias product
	// sales, and sum(product sales) - OH costs with alias total profit - these will
	// be the resulting table headers
	// from departments table, inner join products table where dept names equal each 
	// other. group by dept id
	var joinQuery = "SELECT department_id, deparments.department_name, over_head_costs,"
		+ " SUM(product_sales) AS product_sales," 
		+ " SUM(product_sales) - over_head_costs AS total_profit ";
	joinQuery += "FROM deparments INNER JOIN products ";
	joinQuery += "ON deparments.department_name = products.department_name ";
    joinQuery += "GROUP BY department_id ";
    
    // query the db, throw error if error, if not, build and print console table
	// return to welcome screen
	connection.query(joinQuery, function(error, results) {
		if (error) throw error;
		consoleTableProfit("\nDepartmental Profit", results);
		welcome();
	});
}