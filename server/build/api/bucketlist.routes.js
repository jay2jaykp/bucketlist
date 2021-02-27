"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const buketlist_controller_1 = require("./buketlist.controller");
_1.Bucketlist.get("/wishes", buketlist_controller_1.getWishes);
_1.Bucketlist.post("/wish", buketlist_controller_1.postWish);
//# sourceMappingURL=bucketlist.routes.js.map