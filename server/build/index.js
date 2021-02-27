"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("./api/index");
const knex_1 = require("./knex/knex");
const app = express_1.default();
const PORT = 5555;
// middleware
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use(express_1.default.json());
// api endpoints
app.use("/v1", index_1.Bucketlist);
console.log("Migration Initiated");
knex_1.knex.migrate
    .latest()
    .then(() => console.log("Migration Successful"))
    .catch((err) => console.error("Error in Migration", err));
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map