import Knex from "knex";
import * as config from "./knexConfig";
require("ts-node");

export const knex = Knex(config);
