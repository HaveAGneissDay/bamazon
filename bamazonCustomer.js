// need inquirer
var inquirer = require('inquirer');
// need mysql
var mysql = require('mysql');

// connect to mysql database
var connection = mysql.createConnection({
    host: "bamazon",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazonDB"
});

// connection.connect(function (err) {
//     if (err) throw err;
//     console.log("connected as id " + connection.threadId + "\n");
// });

// create menu, via inquirer
inquirer.prompt([ {
    type: "list",
    name: "mainmenu",
    message: "How may I help you today?",
    choices: ["Products for Sale", "Add to Inventory", "Add New Product"]
}
]
).then(
    function () {
    switch (choices) {
        case choices === "Products for Sale":
        console.log("Here are the products for sale");
        break;
        case choices === "Add to Inventory":
        console.log("What would you like to add to the inventory?");
        break;
        default:
        console.log("Have a nice day!");
    }
});
// products for sale (functions)
// low inventory (functions)
// add to inventory (functions)
// add new product (functions)
// switch statement, call the above functions


// function currentProducts()
// query database, select every item inside db
// list ids, names, prices, and quantities

// function lowInventory()
// list all items with inventory count < 5

// function addInventory()
// prompt (inquirer) manager to add more
// items to current product
// select current item, update sql db

// function newProduct()
// add new product to db
// inquirer to prompt item name, cost, department, etc match to your db