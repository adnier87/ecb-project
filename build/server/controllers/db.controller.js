"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const _dbUri = "mongodb+srv://root:6c$g3WA9gKxCv2N@cluster0.6udzn.mongodb.net/db_ecb_project?retryWrites=true&w=majority";
class DBController {
    constructor() {
        this.client = new mongodb_1.MongoClient(process.env.DB_URI || _dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
    }
    static getInstance() {
        if (!DBController._instance) {
            DBController._instance = new DBController();
        }
        return DBController._instance;
    }
    getAllVehicles(args = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.client.connect();
                const cursor = this.client.db('db_ecb_project').collection("vehicles").find(args);
                const results = yield cursor.toArray();
                return results;
            }
            catch (e) {
                throw `error from getAllVehicles>>> ${e}`;
            }
            finally {
                // await this.client.close();
            }
        });
    }
    getVehicle(args) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.client.connect();
                const result = yield this.client.db('db_ecb_project').collection('vehicles').findOne(args);
            }
            catch (e) {
                throw `error from getVehicle>>> ${e}`;
            }
            finally {
                // await this.client.close();
            }
        });
    }
    updateVehicle(args) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.client.connect();
                const result = yield this.client.db('db_ecb_project').collection('vehicles').update({ _id: mongodb_1.ObjectId(args.id) }, {
                    $set: { 'person': args.person, 'estimatedate': args.estimateDate },
                    $currentDate: { lastModified: true }
                });
            }
            catch (e) {
                throw `error from updateVehicle>>> ${e}`;
            }
        });
    }
}
exports.default = DBController.getInstance();
