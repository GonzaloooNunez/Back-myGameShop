Back-myGameShop
Description

Back-myGameShop is a backend system developed for managing an online video game store. It provides a robust platform for handling products, managing inventory, and performing efficient CRUD operations (Create, Read, Update, Delete). Built with Node.js and Express.js, it leverages MongoDB for data storage, aiming to provide a secure and scalable API for video game stores seeking a modern and functional backend solution.

This project includes:

    Full product management through a CRUD interface.
    Input data validation.
    Flexible configuration for multiple development environments.
    Scalability for future features and implementations.

Features

    Product CRUD: Admins can create, list, update, and delete products from the inventory.
    MongoDB Integration: Uses a cloud-based MongoDB Atlas database to store product data.
    Error Handling: A robust error-handling system that returns clear responses to facilitate development and debugging.
    Authentication: The potential to integrate authentication for protecting routes and ensuring only admins can access CRUD functions.
    Flexible Deployment: Adaptable for development, production, and testing environments.

Technologies Used

    Node.js: JavaScript runtime environment for server-side applications.
    Express.js: Minimalist backend framework for building RESTful APIs.
    MongoDB: NoSQL database for flexible product storage.
    Mongoose: ODM (Object Data Modeling) for MongoDB, simplifying database interactions.
    dotenv: Secure environment variable management.
    Cors: Middleware for handling cross-origin resource sharing (CORS) policies.

Prerequisites

Before starting, make sure you have the following installed:

    Node.js v12.x or higher
    MongoDB Atlas or a local MongoDB instance
    A .env file with the following environment variables:
        MONGO_URI: Your MongoDB database URI.
        PORT: The port where the server will run (optional, defaults to 5000).

Installation

1. Clone the repository

Clone this repository to your local machine using the following command:

bash

git clone https://github.com/GonzaloooNunez/Back-myGameShop.git

2. Install dependencies

Navigate to the project folder and install the required dependencies using npm:

bash

cd Back-myGameShop
npm install

3. Set up environment variables

Create a .env file in the root of the project with the following variables:

bash

MONGO_URI=your_mongo_uri
PORT=5000

Make sure to replace your_mongo_uri with the actual URI of your MongoDB Atlas database or local instance. 4. Start the server

You can start the server in development mode using nodemon, which automatically restarts when changes are detected:

bash

npm run dev

Or, to start the server in production mode:

bash

npm start

5. Access the API

The server will be available at http://localhost:5000. Available routes include:

    GET /api/products: Fetch all products.
    POST /api/products: Create a new product.
    PUT /api/products/:id: Update an existing product.
    DELETE /api/products/:id: Delete a product.

Project Structure

The project structure is organized to separate responsibilities clearly, making maintenance and scalability easier:

bash

Back-myGameShop/

- src/
  - config/
    - db.js: MongoDB connection and configuration
  - controllers/
    - gameController.js: Business logic for products
    - opinionGameController.js: Business logic for game reviews
    - userController.js: Business logic for user management
  - models/
    - Games.js: Product (games) schema definition with Mongoose
    - Admin.js: Admin schema definition
    - Usuario.js: User schema definition
  - routes/
    - gamesRoutes.js: CRUD routes for product management
    - routes.js: General API routes
    - userRoutes.js: User management routes
  - middlewares/
    - authMiddleware.js: Authentication middleware
- index.js: Main server entry point
- .env: Environment variables
- .gitignore: Files and directories to ignore in git
- package.json: Project dependencies and scripts
- README.md: Project documentation pero con estructura para un readme

\```

API Endpoints

The API includes the following endpoints for managing products but just with the Admin role. However, as a user we can access and buy any game.

    - Fetch all products:
     https://back-my-game-shop.vercel.app/games

     -Fetch product by Id:
     https://back-my-game-shop.vercel.app/games/:id

     With the Admin role we can add and update everything about a game or even delete them.

## Resources

- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Fl0](https://fl0.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express-session](https://www.npmjs.com/package/express-session)
- [express.urlencoded](https://expressjs.com/en/api.html#express.urlencoded)
- [express.static](https://expressjs.com/en/api.html#express.static)
- [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
