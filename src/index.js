import { v4 as uuidv4 } from "uuid";
import generateJoke from "./generatejoke";
import "./styles/main.scss";

console.log("webpack-app");
console.log(generateJoke());
console.log(uuidv4());
