import { MongoClient } from 'mongodb';

const _dbUri: string = "mongodb+srv://root:6c$g3WA9gKxCv2N@cluster0.6udzn.mongodb.net/db_ecb_project?retryWrites=true&w=majority";

class DBController {
    private static _instance: DBController;
    private client: MongoClient;

    private constructor() { 
        this.client = new MongoClient(process.env.DB_URI || _dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
    }

    public static getInstance(): DBController {
        if (!DBController._instance) {
            DBController._instance = new DBController();
        }

        return DBController._instance;
    }

    public async getAllVehicles(args = {}) {
        try {
            await this.client.connect();

            const cursor = this.client.db('db_ecb_project').collection("vehicles").find(args);
            const results = await cursor.toArray();
            
            return results;
        } catch (e) {
            throw `error from getAllVehicles>>> ${e}`;
        } finally {
            await this.client.close();
        }
    }

    public async getVehicle(args) {
        try {
            await this.client.connect();
            const result = await this.client.db('db_ecb_project').collection('vehicles').findOne(args);
        } catch (e) {
            throw `error from getVehicle>>> ${e}`;
        } finally {
            await this.client.close();
        }
    }
}

export default DBController.getInstance();