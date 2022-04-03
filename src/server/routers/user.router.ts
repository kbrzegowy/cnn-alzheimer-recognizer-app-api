import { Router } from "express";
import { UserController } from "../../api/users/user.controller";
import { ROOT } from "./route.constatns";

export class UserRouter {
    public readonly router: Router;

    constructor(private userController: UserController) {
        const userRouter = Router();

        userRouter.post('/', (req, res) => {
            // const result = this.userController.create(req.body);
            // res.json(result);
            res.sendStatus(200);
            return;
        });

        userRouter.get(ROOT, (req, res)=> {
            res.sendStatus(202);
            return;
        });

        this.router = userRouter;
    }
}