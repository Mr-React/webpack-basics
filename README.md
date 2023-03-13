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

## create "webpack.config.js" and configure the project
1. Create a webpack.config.js file in root directory.
2. update package.json file (remove "mode production" from package file)
3. Add  `
        const path = require("path");    
        module.exports = {   
        mode: "development",   
        entry: path.resolve(__dirname, "src/index.js"),   
        output: {   
            path: path.resolve(__dirname, "dist"),  
            filename: "main.js",  
            },  
        };  `

4. webpack file properties and it's meaning
    1. `mode: 'development'` indicate build is in production mode
    2. `entry: path.resolve(__dirname, "src/index.js")` indicate entry point of project (__dirname = current directory)
    3. `output`
        - `path: path.resolve(__dirname, "dist")` indicate output file path of project
        - `filename: "main.js"` indicate output file name`

5. install sass module
    1. `npm i -D sass style-loader css-loader sass-loader` command
    2. add `module` properties in webpack.config.js file