import app from './app'
import * as dotenv from "dotenv";
import path from "path";
console.log(__dirname)
dotenv.config({ path: __dirname + "/.env" });
import Connection from "./DB/connection"

console.log("Configs",dotenv.config({ path: __dirname + "/.env" }).parsed);

const port = parseInt(process.env.PORT || '3000');

new Connection().connectDB()

const server = new app().Start(port)
  .then(port => console.log(`Server running on port ${port}`))
  .catch(error => {
    console.log(error)
    process.exit(1);
  });

export default server;