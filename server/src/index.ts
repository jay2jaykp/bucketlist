import express from "express";
import { Bucketlist } from "./api/index";
import { knex } from "./knex/knex";

const app = express();
const PORT = 5555;

// middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// api endpoints
app.use("/v1", Bucketlist);

console.log("Migration Initiated");
knex.migrate
  .latest()
  .then(() => console.log("Migration Successful"))
  .catch((err) => console.error("Error in Migration", err));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
