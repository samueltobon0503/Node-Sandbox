import express, { Router, Request, Response } from "express";


const todoRouter: Router = express.Router();

todoRouter.get('/todos', (request: Request, response:Response) => { 
        response.json({
        ok: true,
        data: [{}]
    })
});

todoRouter.post('/todos', (request: Request, response:Response) => { 
        response.json({
        ok: true,
        staus: 'created',
        data: [{}]
    })
});

export default todoRouter;