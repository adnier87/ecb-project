"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVehicle = exports.getAllVehicles = void 0;
const db_controller_1 = __importDefault(require("../controllers/db.controller"));
const getAllVehicles = (req, res) => {
    db_controller_1.default.getAllVehicles()
        .then((response) => {
        res.send(response);
        console.log(`All vehicles were gotten::: ${JSON.stringify(response)}`);
    })
        .catch((e) => {
        console.log(e);
    });
};
exports.getAllVehicles = getAllVehicles;
const updateVehicle = (req, res) => {
    const { body } = req;
    const args = Object.assign(Object.assign({}, body), { id: req.params.id });
    db_controller_1.default.updateVehicle(args);
};
exports.updateVehicle = updateVehicle;
