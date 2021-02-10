# API Documentation - PRODUCT CATALOG

 This is a product catalog application with: title, description, price, category. In this application it is possible to perform the basic operations on database: Create, List, Update and Delete. The architecture used for the project was the MVC and to save the datas of the products, was used the MONGODB.



## Routes



These are the API Routes created to the application.

|Methods            |Routes                                      |  Description                       |
|-------------------|----------------------------------------------|----------------------------------|
|GET                |localhost:5000/productapp/                               | Aplication Name - Index                            |
|GET                |localhost:5000/productapp/products                        |List all products |           |            |
|GET                |localhost:5000/productapp/title/:{title}      |List by title       |
|GET                |localhost:5000/productapp/category/:{category} |List by category |       |
|POST               |localhost:5000/productapp/create              |Create a new product          |
|PUT                |localhost:5000/productapp/update/:{id}                  |Update a product searching by id       |
|PATCH                |localhost:5000/productapp/updatecategory/:id                  |Update a product's category searching by id       |
|DELETE             |localhost:5000/productapp/:{id}                  |Delete a product by id         |

## Technologies and tools

- NodeJS
- JavaScript
- Insomnia
- VSCode 
- NPM
- Express
- Mongoose
- mongodb
- Nodemon

## To run the app.

1. Clone this repository.

2. type  **npm install** on your termination to install the dependencies configured on the package.json.

    ~~~Shell
        npm install
    ~~~


 - and after type **npm start** to initialize the server:
    ~~~Shell
        npm start
    ~~~
