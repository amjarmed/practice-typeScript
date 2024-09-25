"use strict";
const config = {
    host: "localhost",
    port: 8080,
    useSSL: false,
};
function startServer(config) {
    console.log(`Starting server on ${config.host}:${config.port} with SSL: ${config.useSSL}`);
}
startServer(config);
