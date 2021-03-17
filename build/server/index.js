"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const path_1 = __importDefault(require("path"));
class Server {
    constructor(app) {
        this.app = app;
        this.app.use(express_1.default.static(path_1.default.resolve("./") + "/build/frontend"));
        const routes = new index_1.default(app);
        routes.initRoutes();
    }
    start(port) {
        this.app.listen(port, () => console.log(`Server listening on port ${port}`));
    }
}
exports.default = Server;
;
