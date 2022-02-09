import 'dotenv/config'
import express from 'express';
import {Application} from 'express';
import Routes from './routes';

const app: Application = express();
const port = process.env.SERVER_PORT;
const BASE_URL = process.env.BASE_URL;

export default class Server {
    constructor(app: Application) {
        this.initConfig(app);
        new Routes(app);
    }

    public initConfig(app: Application) :void {
        app.use(express.json()); // body parser
    }


}