"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vehicles_middleware_1 = require("../middlewares/vehicles.middleware");
class VehiculeRoutes {
    constructor(app) {
        this.app = app;
    }
    initRoutes() {
        this.app.get('/api/vehicles', vehicles_middleware_1.getAllVehicles);
        this.app.post('/api/vehicle/:id', vehicles_middleware_1.updateVehicle);
        console.log('Info::: Vehicule Routes are configured!!!');
    }
}
exports.default = VehiculeRoutes;
;
