# webpack-basics
Webpack-Basics

## installing and building webpack and webpack-cli
1. "npm i -D webpack webpack-cli" command to install webpack as dev
2. Update package.json file. In Script section delete test property and add "build": "webpack --mode production"
3. run "npm run build" command to build code, which will create main.js file in dist directory
4. Update dist/index.html file change "<script src="../src/index.js"></script>" to "<script src="./main.js"></script>"

### optional - inatlled uuid npm module to learn how module works with webpack
1. run "npm i uuid" command to install uuid npm module/package
2. import module in src/index.js (import { v4 as uuidv4 } from "uuid" add this line in index.js file)