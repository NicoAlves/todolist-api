import 'dotenv/config'
import { Application } from 'express';
import authRouter from './authRoutes';

const BASE_URL = process.env.BASE_URL;

export default class Routes {

    constructor(app: Application) {
        // auth routes
        app.use(`/`, authRouter);
    }
}