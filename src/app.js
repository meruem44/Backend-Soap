import express from 'express';
import cors from 'cors';

import './database/connection'; // Conexão de banco

import routes from './routes';

class App {
    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
    }

    middlewares() { // todos os middlewares
        this.server.use(cors());
        this.server.use(express.json());
    }

    routes() { // todas as rotas
        this.server.use(routes);
    }
}

export default new App().server;