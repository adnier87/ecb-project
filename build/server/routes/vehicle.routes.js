"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vehicles_middleware_1 = require("../middlewares/vehicles.middleware");
class VehiculeRoutes {
    constructor(app) {
        this.app = app;
    }
    initRoutes() {
        this.app.get('/api/vehicles', vehicles_middleware_1.getAllVehicles);
        console.log('Info::: Vehicule Routes are configured!!!');
    }
}
exports.default = VehiculeRoutes;
;
