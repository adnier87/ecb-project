import { Response, Request, response } from 'express';
import dbController from '../controllers/db.controller';

const getAllVehicles = (req: Request, res: Response): void => {
    dbController.getAllVehicles()
        .then((response) => {
            res.send(response);
            console.log(`All vehicles were gotten::: ${JSON.stringify(response)}`);
        })
        .catch((e) => {
            console.log(e);
        })
}

export {
    getAllVehicles,
}
