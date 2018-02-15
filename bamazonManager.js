//HOLDING THIS STUFF HERE FOR NOW

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
function customerService() {
    inquirer.prompt([{
        type: "list",
        name: "mainmenu",
        message: "How may I help you today?",
        choices: ["Products for Sale", "Add to Inventory", "Add New Product"]
    }
    ]).then(function (userInput) {
        // Need a callback function 
        console.log(userInput.mainmenu);
        switch (userInput) {
            // choices might only take in array answers
            case "Products for Sale":
                console.log("Here are the products for sale");
                currentProducts();
                break;
            case "add to inventory":
                console.log("What would you like to add to the inventory?");
                buyProducts();
                break;
            default:
                console.log("Have a nice day!");
        }
    });

}
// products for sale (functions)
// low inventory (functions)
// add to inventory (functions)
// switch statement, call the above functions
function buyProducts() {
    var item = input.item_id;
    var quantity = input.quantity;

    // Query db to confirm that the given item ID exists in the desired quantity
    var queryStr = 'SELECT * FROM products WHERE ?';

    connection.query(queryStr, { item_id: item }, function (err, data) {
        if (err) throw err;

        if (data.length === 0) {
            console.log('ERROR: Invalid Item ID. Please select a valid Item ID.');

            console.log('Your order has been placed! Your total is ' + productData.price * quantity + 'Thank you for shopping with us!');

            connection.end();
        } else {
            console.log('Insufficent Quantity');
            currentProducts();
        }
    })
}


// function currentProducts()
// query database, select every item inside db
// list ids, names, prices, and quantities
function currentProducts() {

    queryStr = 'SELECT * FROM products';

    // Make the db query
    connection.query(queryStr, function (err, data) {
        if (err) throw err;


        var output = '';
        for (var i = 0; i < data.length; i++) {
            output = '';
            output += 'Item ID: ' + data[i].item_id + ' | ';
            output += 'Product Name: ' + data[i].product_name + ' | ';
            output += 'Department: ' + data[i].department_name + ' | ';
            output += 'Price: ' + data[i].price + ' | ';
            output += 'Quantity: ' + data[i].quantity;

            console.log(output);
        }
    })
}
// function lowInventory()
// list all items with inventory count < 5

function lowInventory() {
    queryStr = 'SELECT * FROM products';
    connection.query(queryStr, function (err, data) {
        if (err) throw err;
        for (var i = 0; i < data.length; i++) {
            if (data[i].quantity <= 5) {
                console.log(data[i].product_name + ' | ' + data[i].department_name + data[i].price + ' low stock need a restock soon' + '\n')
            }
        }

    })
}

// function addInventory()
// prompt (inquirer) manager to add more
// items to current product
// select current item, update sql db

// function newProduct()
// add new product to db
// inquirer to prompt item name, cost, department, etc match to your db

customerService();