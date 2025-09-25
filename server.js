import https from "https";
import fs from "fs";
import app from "./app.mjs";

const PORT = 3001;

const server = https.createServer({
    key: fs.readFileSync('keys/privateKey.pem'),
    cert: fs.readFileSync('keys/certificate.pem')
})

server.listen(PORT)