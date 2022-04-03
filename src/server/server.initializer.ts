import express from 'express';
import 'reflect-metadata';
import dotenv from 'dotenv';
import { DatabaseInitializer } from './database.initializer';
import { ROOT } from './routers/route.constatns';
import { ControllersFactory } from './controllers.factory';
import { ServicesFactory } from './services.factory';
import { MainRouter } from './routers/main.router';
import bodyParser from 'body-parser';

dotenv.config();

export class ServerInitializer {
  public static async createServer(): Promise<void> {
    try {
      const server = express();

      const servicesFactory = new ServicesFactory();
      const controllersFactory = new ControllersFactory(servicesFactory);
      const mainRouter = new MainRouter(controllersFactory);

      server.use(bodyParser.json());
      server.use(ROOT, mainRouter.router);

      server.listen(process.env.APP_PORT, () =>
      console.log(`Server is running on port ${process.env.APP_PORT}...`));
    } catch (error) {
      console.log('Server was not able to start...');
      process.exit(1);
    }
  }

  public static async startServer(): Promise<void> {
    await DatabaseInitializer.startDatabase();
    await ServerInitializer.createServer();
  }
}
