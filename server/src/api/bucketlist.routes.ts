import { Bucketlist } from ".";
import { getWishes, postWish } from "./buketlist.controller";

Bucketlist.get("/wishes", getWishes);

Bucketlist.post("/wish", postWish);
