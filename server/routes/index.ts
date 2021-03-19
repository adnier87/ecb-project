import { Application,Request, Response } from 'express';
import VehiculeRoutes from './vehicle.routes';
import path from 'path';

export default class Routes {
    private app: Application;
    private routeInstances: Array<any> = [];

    constructor(app: Application) {
        this.app = app;

        this.routeInstances.push(new VehiculeRoutes(app));
    }

    public initRoutes() {
        this.routeInstances.forEach((instance) => {
            instance.initRoutes();
        });

        this.app.get("*", (req: Request, res: Response): void => {
            res.sendFile(path.resolve("./") + "/build/frontend/index.html");
        });
    }
};
