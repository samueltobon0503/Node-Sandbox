import http, { ServerResponse, IncomingMessage } from "http";

const PORT:number = 3000;


const server = http.createServer((req:IncomingMessage , res:ServerResponse) => {
    res.writeHead(200, {
        "content-Type":"application/json; charset-utf-8"
    });

    const response = {
        message: "Hello Samubonga",
    }

    res.end(JSON.stringify(response, null, 2));
});

server.listen(PORT, () => {
    console.log('chumpamela unas ',PORT,' veces')
})