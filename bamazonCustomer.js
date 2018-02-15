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

// create menu, via inquirer
function customerService() {

    inquirer.prompt([{
        type: 'Input',
        name: 'item_id',
        message: 'Please enter the ID of the product you wish to purchase',
        validate: function (value) {
            var valid = value.match(/^[0-9]+$/)
            if (valid) {
                return true
            }
            return 'Please enter a valid Product ID'
        }
    }, {
        type: 'input',
        name: 'quantity',
        message: 'How many of this product would you like to order?',
        validate: function (value) {
            var valid = value.match(/^[0-9]+$/)
            if (valid) {
                return true
            }
            return 'Please enter a numerical value'
        }
    }]).then(function buyProducts(input) {
        var item = input.item_id;
        var quantity = input.quantity;

        // Query db to confirm that the given item ID exists in the desired quantity
        var queryStr = 'SELECT * FROM products WHERE ?';

        connection.query(queryStr, {
            item_id: item
        }, function (err, data) {
            if (err) throw err;
            console.log(data)

            if (data.length === 0) {
                console.log('ERROR: Invalid Item ID. Please select a valid Item ID.');

                console.log('Your order has been placed! Your total is ' + productData.price * quantity + 'Thank you for shopping with us!');

                connection.end();
            } else {
                console.log('Insufficent Quantity');
                currentProducts();
            }
        })
    })
};


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

        }
        console.log(output);
        console.log("--------------------------------------------")
        customerSerrvice();
    })
}


customerService();
// currentProducts();