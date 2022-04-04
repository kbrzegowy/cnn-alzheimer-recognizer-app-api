import { Router } from 'express';
import { ControllersFactory } from '../controllers.factory';
import { authenticate } from '../middleware/authentication';
import { ROUTE_MODIFIERS } from './route.constatns';
import { UserRouter } from './user.router';

export class MainRouter {
  public readonly router: Router;

  constructor(controllersFactory: ControllersFactory) {
    const mainRouter = Router();

    const userRouter = new UserRouter(
      controllersFactory.controllers.userController
    ).router;

    const authenticateMiddleware = authenticate(
      controllersFactory.getServices().jwtService
    );

    mainRouter.use(ROUTE_MODIFIERS.USERS, userRouter);

    this.router = mainRouter;
  }
}
