import { Router } from 'express';
import { UserController } from '../../api/users/user.controller';
import { ROUTE_MODIFIERS } from './route.constatns';

export class UserRouter {
  public readonly router: Router;

  constructor(private userController: UserController) {
    const userRouter = Router();

    userRouter.post(ROUTE_MODIFIERS.REGISTER, async (req, res) => {
      try {
        const result = await this.userController.register(req.body);
        res.json(result);
        return;
      } catch (error) {
        res.sendStatus(500);
        return;
      }
    });

    userRouter.post(ROUTE_MODIFIERS.LOGIN, async (req, res) => {
      try {
        const result = await this.userController.login(
          req.body.email,
          req.body.password
        );
        res.json(result);
        return;
      } catch (error) {
        res.sendStatus(500);
        return;
      }
    });

    this.router = userRouter;
  }
}
