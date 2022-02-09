import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import {Application} from 'express';

import Server from './server'

const app: Application = express();
const server: Server = new Server(app);
const port: number = process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT, 10) : 3000;

app.listen(port, () => {
    console.info(`Server running on port: ${port}`);
}).on('error', (err: any) => {
    if (err.code === 'EADDRINUSE') {
        console.log('server startup error: address already in use');
    } else {
        console.log(err);
    }
});







