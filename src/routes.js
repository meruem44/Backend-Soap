import { Router } from 'express';

import DealeController from './app/controllers/DealeController';
import ProductController from './app/controllers/ProductsController';
import TransactionController from './app/controllers/TransactionController';
import SessionsController from './app/controllers/SessionsController';
import InformationUser from './app/controllers/InformationUser';
import TaxController from './app/controllers/TaxController';

const routes = Router();

routes.post('/sessions', SessionsController.store);
routes.post('/deale', DealeController.store);
routes.post('/product', ProductController.store);
routes.get('/product', ProductController.index);
routes.post('/transaction', TransactionController.store);
routes.get('/transaction', TransactionController.index);
routes.post('/information', InformationUser.store);
routes.get('/information', InformationUser.index);
routes.post('/tax', TaxController.store);
routes.get('/tax', TaxController.index);
routes.put('/tax', TaxController.updated);


export default routes;