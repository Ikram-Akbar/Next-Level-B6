import { config } from "dotenv";
import http, { IncomingMessage, Server, ServerResponse } from "http";
import path from "path";
import appConfig from "./config";

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log("server is running ");

    if (req.url === "/" && req.method === "GET") {
      res.writeHead(200, {
        "content-type": "application/json",
      });
      res.end(
        JSON.stringify({
          message: "Hello this is node ts server... ",
          path: req.url,
        })
      );
    }
  }
);

server.listen(appConfig.port, ()=>{
    console.log(`server is running : http://localhost:${appConfig.port}`);
});
