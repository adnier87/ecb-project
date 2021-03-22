import { Application, Response, Request } from 'express';
import { getAllVehicles, updateVehicle } from '../middlewares/vehicles.middleware';

export default class VehiculeRoutes {
    private app: Application;

    constructor(app: Application) {
        this.app = app;
    }

    public initRoutes() {
        this.app.get('/api/vehicles', getAllVehicles);
        this.app.post('/api/vehicle/:id', updateVehicle)

        console.log('Info::: Vehicule Routes are configured!!!');
    }
};
