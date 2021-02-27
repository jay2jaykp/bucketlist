"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const config = {
    client: "pg",
    connection: {
        host: "localhost",
        user: "postgres",
        password: "admin",
        database: "bucketlist",
    },
    migrations: {
        directory: path_1.default.join(__dirname + "/migrations"),
    },
};
module.exports = config;
//# sourceMappingURL=knexConfig.js.map