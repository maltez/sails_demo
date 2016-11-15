# Sails demo for REST API
## Demo application for demonstrate all abilities of sails js application
Rest API demonstrates abilities of sails.js. Application shows abilities fast implementation of REST interfaces
that's using different databases and aggregates data from them via sails service. Sails policies for authorization 
demonstrated as well. Estimated time for start develop application to current state is 2-3 hours. This is very
good choice for fast API prototyping. Assets abilities and setup Grunt task runner shows is well. 

The biggest advantage of the sails.js is possibility of absence globally installed sails.js on you working pc.
You need only Node.js, npm and nothing else.

## Contact Information
* Team: Nick Lototskiy
* E-Mail: Mykola_Lototskyi@epam.com

## Environment Setup
1. Pre-Requisites:
* Installed MongoDB server 
* Installed PostgreSQL server
* Installed Node.js

## Usage
1. `npm install`
Install all node and sails dependencies
2. `mongod`
Run mongo server 
3. Start PostgreSQL server and create there user.
4. Edit config/connections.js file
  4.1 Set MongoDB connection settings
  4.2 Set PostreSQL connection settings.
5. `npm start run` 
Running your sails application in production mode.
6. `npm start debug` 
Running your application in debugging mode.


## Known Issues
1. Not working sockets.io
* Team working with this issue. We will resolve it ASAP


## Version History
1. _Version 1.0_
* **Released**: November 15, 2016
* **Notes**:
* Added simple API.
* Added one policy for token checking. 
* Added aggregation service, thats getting data from different dbs and aggregate it.
* Added simple assets for checking Grunt abilities out from box. 
1. _Version 1.1_
* **Released**: Future
* **Notes**:
* Plan fix sockets.io problem.
* _more..._
