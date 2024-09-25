interface ServerConfig {
  host: string;
  port: number;
  useSSL: boolean;
}

const config: ServerConfig = {
  host: "localhost",
  port: 8080,
  useSSL: false,
};

function startServer(config: ServerConfig) {
  console.log(`Starting server on ${config.host}:${config.port} with SSL: ${config.useSSL}`);
}

startServer(config);
