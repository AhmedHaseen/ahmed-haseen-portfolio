const net = require("net");
const fs = require("fs");
const http = require("http");
const path = require("path");

const startPort = 3000;
const maxPort = 3010;
const buildDir = path.join(process.cwd(), "build");

function isPortFree(port) {
  return new Promise((resolve) => {
    const server = net.createServer();

    server.unref();
    server.once("error", () => resolve(false));
    server.listen(port, "0.0.0.0", () => {
      server.close(() => resolve(true));
    });
  });
}

async function findFreePort() {
  for (let port = startPort; port <= maxPort; port += 1) {
    if (await isPortFree(port)) {
      return port;
    }
  }

  throw new Error(`No free port found between ${startPort} and ${maxPort}.`);
}

function getContentType(filePath) {
  switch (path.extname(filePath).toLowerCase()) {
    case ".html":
      return "text/html; charset=utf-8";
    case ".css":
      return "text/css; charset=utf-8";
    case ".js":
      return "application/javascript; charset=utf-8";
    case ".json":
      return "application/json; charset=utf-8";
    case ".svg":
      return "image/svg+xml";
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".gif":
      return "image/gif";
    case ".ico":
      return "image/x-icon";
    case ".woff2":
      return "font/woff2";
    default:
      return "application/octet-stream";
  }
}

async function main() {
  const indexFile = path.join(buildDir, "index.html");

  if (!fs.existsSync(indexFile)) {
    throw new Error("Missing build/index.html. Run npm run build first.");
  }

  const port = await findFreePort();

  http
    .createServer((request, response) => {
      const requestPath = decodeURIComponent(
        (request.url || "/").split("?")[0],
      );
      const resolvedPath =
        requestPath === "/" ? indexFile : path.join(buildDir, requestPath);

      if (!resolvedPath.startsWith(buildDir)) {
        response.writeHead(403);
        response.end("Forbidden");
        return;
      }

      fs.stat(resolvedPath, (statError, stats) => {
        let filePath = resolvedPath;

        if (!statError && stats.isDirectory()) {
          filePath = path.join(resolvedPath, "index.html");
        }

        fs.readFile(filePath, (readError, data) => {
          if (readError) {
            fs.readFile(indexFile, (indexError, indexData) => {
              if (indexError) {
                response.writeHead(500);
                response.end("Unable to load build/index.html");
                return;
              }

              response.writeHead(200, {
                "Content-Type": "text/html; charset=utf-8",
              });
              response.end(indexData);
            });
            return;
          }

          response.writeHead(200, { "Content-Type": getContentType(filePath) });
          response.end(data);
        });
      });
    })
    .listen(port, () => {
      console.log(`Serving build at http://localhost:${port}`);
    });
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
