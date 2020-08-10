import express, { text } from 'express';
import ClassesCrontroller from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();

const classesControler = new ClassesCrontroller();
const connectionsController = new ConnectionsController();

routes.post("/classes", classesControler.create);
routes.get("/classes", classesControler.index);

routes.get("/connections", connectionsController.index);
routes.post("/connections", connectionsController.create);

export default routes