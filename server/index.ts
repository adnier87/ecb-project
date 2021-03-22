import express from 'express';
import ProjectRoutes from './routes/index';
import path from 'path';
import dbController from './controllers/db.controller';

export default class Server {
    private app: express.Application;

    constructor(app: express.Application) {
        this.app = app;

        this.app.use(express.static(path.resolve("./") + "/build/frontend"));

        const routes: ProjectRoutes = new ProjectRoutes(app);
        routes.initRoutes();
    }

    public start(port: number | string): void {
        this.app.listen(port, () => console.log(`Server listening on port ${port}`))
    }
};
