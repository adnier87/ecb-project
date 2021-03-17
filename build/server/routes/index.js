"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vehicle_routes_1 = __importDefault(require("./vehicle.routes"));
const path_1 = __importDefault(require("path"));
class Routes {
    constructor(app) {
        this.routeInstances = [];
        this.app = app;
        this.routeInstances.push(new vehicle_routes_1.default(app));
    }
    initRoutes() {
        this.routeInstances.forEach((instance) => {
            instance.initRoutes();
        });
        this.app.get("*", (req, res) => {
            res.sendFile(path_1.default.resolve("./") + "/build/frontend/index.html");
        });
    }
}
exports.default = Routes;
;
