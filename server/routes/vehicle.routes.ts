import { Application, Response, Request } from 'express';
import { getAllVehicles } from '../middlewares/vehicles.middleware';

export default class VehiculeRoutes {
    private app: Application;

    constructor(app: Application) {
        this.app = app;
    }

    public initRoutes() {
        this.app.get('/api/vehicles', getAllVehicles);

        console.log('Info::: Vehicule Routes are configured!!!');
    }
};
