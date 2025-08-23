import express, { Router, Request, Response } from "express";
import { todoParamsValidation } from "../middlewares/todosValidators";


const todoRouter: Router = express.Router();

interface todoResponse {
    title: string,
    body: string,
    isDone: boolean,
    createdAt: string
}

const todo: todoResponse = {
    title: "Test todo",
    body: "Hacer la cama",
    isDone: false,
    createdAt: "10/12/24"
}

todoRouter.get('/todos', (request: Request, response:Response) => { 
        response.json({
        ok: true,
        data: [{todo}]
    })
});

todoRouter.post('/todos', todoParamsValidation, (request: Request, response:Response) => { 
        response.json({
        ok: true,
        staus: 'created',
        data: [{}]
    })
});

export default todoRouter;