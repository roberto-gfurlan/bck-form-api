import dotenv from "dotenv";
import { DataSource } from "typeorm";

dotenv.config();
const connectDB = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: process.env.MYSQLDB_PASSWORD,
  database: process.env.MYSQLDB_DATABASE,
  entities: ["./src/models/**/*.ts"],
})

connectDB
    .initialize()
    .then(() => {
        console.log(`Data Source has been initialized`);
    })
    .catch((err) => {
        console.error(`Data Source initialization error`, err);
    })


export default connectDB