import { Request, Response, Router } from "express";
import todoRouter from "./todos-routes";


const appRouter: Router = Router();

appRouter.get('/', (req: Request, res: Response) =>{
    res.status(200).json({
        ok: true,
        message: 'This is the app router'
    });
});

appRouter.use('/api', todoRouter);

export default appRouter;