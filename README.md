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
Updating Master and Main
Deleted Main Branch