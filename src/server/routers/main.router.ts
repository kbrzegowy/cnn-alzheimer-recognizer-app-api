import { Router } from "express";
import { ControllersFactory } from "../controllers.factory";
import { USER_ROUTE_MODIFIERS } from "./route.constatns";
import { UserRouter } from "./user.router";

export class MainRouter {
    public readonly router: Router;

    constructor(controllersFactory: ControllersFactory) {
        const mainRouter = Router();

        const userRouter = new UserRouter(controllersFactory.controllers.userController).router;
        
        mainRouter.use(USER_ROUTE_MODIFIERS.USERS, userRouter);

        this.router = mainRouter;
    }
}