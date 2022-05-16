# jwt-based-application
How to secure a Nodejs RESTful CRUD API using JSON web tokens?

This repo will demo how to use JWT with an existing bare bones API using mongodb as the database.

It consist of a User model and controller. The model defines the data, and the controller will contain all the business logic needed to interact with the database.

It has a db file which will be used to connect the app to the database, and an app file used for bootstrapping the application itself.

The server file is used to spin up the server and tells the app to listen on a specific port.

The auth folder contains the configuration for registering and logging users in, signing and verifying tokens.

## Packages Used
**jsonwebtoken** - Will handle the jwt operations for us.

**bcryptjs** - Help us to hash user passwords.

**express** - Framework for Node.js.

**mongoose** - Elegant mongodb object modeling for Node.js.

**dotenv** - Storing configuration in the environment separate from code.

## How To Run ?
 - Create Your Own MONGO_URL and TOKEN_KEY and use dotenv package.
 - Open your Terminal
 - Run ```npm install``` to install the packages.
 - Run ```cd server```.
 - Run ```npm start```.

Use ```Postman``` to test the api's.
