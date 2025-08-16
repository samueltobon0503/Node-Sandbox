import express, { Application, Request, Response } from "express";
import todoRouter from "./routes/todos-routes";
const PORT:number = 4000;

const app : Application = express();

app.use (express.json());

// app.use ("/", (request: Request, response: Response) => {
//     response.json({
//         ok: true,
//         message: 'Response from server'
//     })
// });

app.use('/api', todoRouter)


app.listen(PORT, () => {
    console.log(`Server running... at port ${PORT}`)
})