# Creating a 2022 Update Version of the MERN Surf Shop

Create Root Folder
npx create-react-app frontend

Clean Up:
Exchange Favicon
Delete:
App.css, App.test.js, logo.svg, setupTest.js

Remove all code from index.css
Update App.js:

- convert to an arrow function and an empty fragment
- Show hidden files and folders: ls -a
- We want the Git Repository in the Root folder not the front-end
- rm -rf .git
- Move Git Ignore into the Root

# Import Tailwind CSS and dependencies ()

- npm install @heroicons/react or just use SVG is a better option
- npm install @headlessui/react

Create Header, Footer components

- create NavBar
- simple footer

Create Product Component, HomeScreen

Create Backend folder in root. Then npm init in ROOT folder to create package.json
Root - npm i express
Backend

- create data folder and copy products.js
- create Express Server
- Update products.js (module.exports = products)

HomeScreen

- UseState, useEffect Hook Added

frontend/package.JSON

- Add Proxy:

Adding Nodemon and Concurrently, DOTENV to Root
npm i -D nodemon concurrently (Dev Dependencies)
Root/package.json
    "scripts": {
    "start": "node backend/server",
    "server": "nodemon backend/server",
    "client": "npm start --prefix frontend",
    "dev": "concurrently \"npm run server\" \"npm run client\""
    },

Add .env file, Mongoose, Colors
Connect to Database
Add Mongoose Models
Created database seeder:
- npm run data:import
- npm run data:destroy -d

Create Routes for Database

Root Folder:
npm install --save express-async-handler

Create Error Middleware

Adding Redux for State Management to frontend folder
npm i react-redux redux-thunk redux redux-devtools-extension
src/store.js

Action -> Reducer -> Component


npm run dev ( to run both front and backend)
npm run server (Backend only)

Added Material UI for Styling.

- Creating the Add to Cart functionality:
Create a Submit Handler - onClick to Fab and call submit handler

- Create Reducer and Action
Add constants/cartConstant.js
Add reducers/cartReducers.js
Add cartReducer to store.js
Add action/cartActions.js

- Adding Controllers to handle functionality
- /backend/controllers/productController

- Adding User Authentication
- - Create User Controller
- - getUser function + Add Folder to Postman for User Auth

- Front End User Authentication & 
- - Create User Constants
- - Create Reducers
- - Import into Store.js
- - Create User Action





