"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./server/index"));
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 8080;
const server = new index_1.default(app);
server.start(port);
