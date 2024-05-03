const http = require('http');

const HOST = 'localhost';
const PORT = 1245;
const app = http.createServer();

app.on('request', (req, res) => {
  const text = 'Hello Holberton School!';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', text.length);
  res.statusCode = 200;
  res.write(Buffer.from(text));
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server running at http://${HOST}:${PORT}/\n`);
});

module.exports = app;
