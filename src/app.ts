import express, { Application, Request, Response } from "express";
import todoRouter from "./routes/todos-routes";
import observable$ from "./observable";
import appRouter from "./routes/app-routes";

const PORT:number = 4000;
const app : Application = express();

app.use (express.json());

// app.use ("/", (request: Request, response: Response) => {
//     response.json({
//         ok: true,
//         message: 'Response from server'
//     })
// });

app.use('/api', appRouter)

observable$.subscribe({
    next: value => console.log(`Got it ${value}`),
    error: err => console.log(`Got it ${err}`),
    complete: () => console.log('Completadinho')

})

app.listen(PORT, () => {
    console.log(`Server running... at port ${PORT}`)
})