import Server from './server/index';
import express from 'express';

const app: express.Application = express();
const port: number | string = process.env.PORT || 5000;
const server: Server = new Server(app);

server.start(port);