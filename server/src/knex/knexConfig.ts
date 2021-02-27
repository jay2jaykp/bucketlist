import { Config } from "knex";
import path from "path";

const config: Config = {
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "admin",
    database: "bucketlist",
  },
  migrations: {
    directory: path.join(__dirname + "/migrations"),
  },
};

module.exports = config;
