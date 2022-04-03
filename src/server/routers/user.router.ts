import { Router } from "express";
import { UserController } from "../../api/users/user.controller";
import { ROOT } from "./route.constatns";

export class UserRouter {
    public readonly router: Router;

    constructor(private userController: UserController) {
        const userRouter = Router();

        userRouter.post(ROOT, (req, res) => {
            const result = this.userController.register(req.body);
            res.json(result);
            return;
        });

        this.router = userRouter;
    }
}