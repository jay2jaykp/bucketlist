"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postWish = exports.getWishes = void 0;
const knex_1 = require("../knex/knex");
// import { knex } from "../knex/knex";
const apiName = "bucketlist";
const logRequest = (req, api) => {
    console.log(`⚡️${api}: ${req.method} ${req.url}`);
};
const getWishes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    logRequest(req, apiName);
    const data = yield knex_1.knex.select().from("wishes");
    res.send(data).status(200);
});
exports.getWishes = getWishes;
const postWish = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    logRequest(req, apiName);
    console.log(req.body);
    res.sendStatus(200);
});
exports.postWish = postWish;
//# sourceMappingURL=buketlist.controller.js.map