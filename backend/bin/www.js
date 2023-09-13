import http from "http";
import app from "../app";

const port = +process.env.PORT || 8000;
app.set("port", port);
console.log("\n... running on port ", port, " 🔥 \n");

const server = http.createServer(app);
server.listen(port);
