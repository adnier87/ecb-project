"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VehiculeRoutes {
    constructor(app) {
        this.app = app;
    }
    initRoutes() {
        this.app.get("/api", (req, res) => {
            res.send("You have reached the API!");
        });
        console.log('Info::: Vehicule Routes are configured!!!');
    }
}
exports.default = VehiculeRoutes;
;
