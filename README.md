# webpack-basics
Webpack-Basics

## installing and building webpack and webpack-cli
1. "npm i -D webpack webpack-cli" command to install webpack as dev
2. Update package.json file. In Script section delete test property and add "build": "webpack --mode production"
3. run "npm run build" command to build code, which will create main.js file in dist directory
4. Update dist/index.html file change "<script src="../src/index.js"></script>" to "<script src="./main.js"></script>"
