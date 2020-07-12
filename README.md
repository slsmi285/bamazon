# bamazon
Creating an Amazon-like storefront using MySQL. The app will take in orders from customers and deplete stock from the store's inventory. 

# Bamazon

## What is it?

A CLI "storefront"

A mock storefront with deparments and products.  Customer, managers, and supervisors are able to use this app.



## System requirements: 
Must have access to computer console, nodeJS, and mySQL. Operating instructions: Open bamazonCustomer.js file and follow prompts to select an item and the quantity of the item.

This program uses node.js to create a CLI Application which allows users to interact with a MySQL database.  The application simulates a rudimentary storefront experience, allowing customers to view inventory and request(buy) items in stock.  Inquirer is used to guide users through use of the application.

### Built with

Node.js
Javascript
MySQL
inquirer
console.table

### Features
- Inquirer provides an easy to use UI with prompts asking the user what they would like to do.
- Customers may purchase products from the available products in the database.
- Managers have the ability to add inventory and new products to the databse.
- Supervisors have the ability to view profit data by department and add new departments.
- Console table organizes product, inventory, and department data in a concise manner within the CLI.
- User input validation is present to ensure that customers cannot purchase more inventory than Bamazon has in stock, managers don't add products with no inventory, and supervisors cannot add departments that already exist.
- Installation
-   Install Node js

- Clone the Bamazon repository to your machine

- Open CLI, navigate to the cloned repository, and run the following to install the npm package dependencies

  ```npm install```
- Open MySQL Workbench, SQL Pro, or your preferred database management app. Open the "bamazon.sql" script from the cloned repo, and run it to set up the database and base product/department data.

- Next, within the cloned repo, you'll need to create a pw.js file with the following code, and add your password to access your root server to that file. This file is a dependency for the app. If you do not require a password to access your root, simply leave the pw property as an empty string.

```var pwd = {```
```	pw: "YOUR PASSWORD HERE"```
```}```
	
```module.exports = pwd;```



## You're ready to go!

### How to use?

#### Customers

1. Run the following in your CLI while inside your cloned repo directory

  ```node bamazonCustomer.js```
2. Select from the resulting screen whether you would like to view items or leave.

3. If you select view items, input and enter the item id that you would like to purchase

4. Input and enter the quantity that you would like to buy

5. If you would like to buy another item, repeat

6. If you would like to leave, click exit

7. link to screenshot:

![Welcome](https://github.com/slsmi285/bamazon/blob/master/images/bamazonCust_welcome.PNG)
![View Items](https://github.com/slsmi285/bamazon/blob/master/images/bamazonCust_welcome.PNG)
![Purhcase Item](https://github.com/slsmi285/bamazon/blob/master/images/bamazonCust_view-items.PNGn)


#### Managers

Run the following in your CLI while inside your cloned repo directory

  ```node bamazonManager.js```
1. Select from the resulting screen whether you would like to view products for sale, view low inventory, add to inventory, add new product, or exit.

2. If you select add to inventory, follow the prompts for item id to increase inventory on and quantity to increase inventory

3. If you select add new product, follow the prompts for item name, department, price, and quantity in stock

4. When you are ready to leave, click exit

5. link to screenshot: 

![View Products for Sale](https://github.com/slsmi285/bamazon/blob/master/images/bamazonMgr_view-prods.PNG)
![View Low Inventory](https://github.com/slsmi285/bamazon/blob/master/images/bamazonMgr_invent.PNG)
![Add to Inventory](https://github.com/slsmi285/bamazon/blob/master/images/bamazonMgr_add-to-inventory.PNG)
![Add New Product](https://github.com/slsmi285/bamazon/blob/master/images/bamazonMgr_add-to-newprod.PNG)

#### Supervisors

1. Run the following in your CLI while inside your cloned repo directory

  ```node bamazonSupervisor.js```
2. Select from the resulting screen whether you would like to view product sales by department, create a new department, or exit.

3. If you select create new department, follow the prompts for department name and overhead costs

4. When you are ready to leave, click exit

5. link to screenshot: 

![View Product Sales](https://github.com/slsmi285/bamazon/blob/master/images/bamazonSpvr_view-prod-sales.PNG)
![Add a New Department](https://github.com/slsmi285/bamazon/blob/master/images/bamazonSpvr_add-new-depart.PNG)



