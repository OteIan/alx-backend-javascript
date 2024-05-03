const fs = require('fs');
const http = require('http');

const HOST = 'localhost';
const PORT = 1245;
const app = http.createServer();
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (data) => new Promise((resolve, reject) => {
  if (!data) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(data, (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const groups = {};
    const lines = data.toString('utf-8').trim().split('\n');
    const reportParts = [];
    const fieldNames = lines[0].split(',');
    const propNames = fieldNames.slice(0, fieldNames.length - 1);

    for (const line of lines.slice(1)) {
      const student = line.split(',');
      const propValues = student.slice(0, student.length - 1);
      const field = student[student.length - 1];

      if (!Object.keys(groups).includes(field)) {
        groups[field] = [];
      }
      const entries = propNames.map((prop, i) => [prop, propValues[i]]);

      groups[field].push(Object.fromEntries(entries));
    }

    const total = Object.values(groups).reduce((a, b) => (a || []).length + b.length);
    reportParts.push(`Number of students: ${total}`);

    for (const [fiels, group] of Object.entries(groups)) {
      reportParts.push([
                `Number of students in ${fiels}: ${group.length}.`,
                `List: ${group.map((student) => student.firstname).join(', ')}`
      ].join(' '));
    }
    resolve(reportParts.join('\n'));
  });
});

const SERVER_HANDLERS = [
  {
    route: '/',
    handler (req, res) {
      const text = 'Hello Holberton School!';
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', text.length);
      res.statusCode = 200;
      res.write(Buffer.from(text));
    }
  },
  {
    route: '/students',
    handler (req, res) {
      const response = ['This is the list of our students'];

      countStudents(DB_FILE)
        .then((report) => {
          response.push(report);
          const text = response.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', text.length);
          res.statusCode = 200;
          res.write(Buffer.from(text));
        })
        .catch((err) => {
          response.push(err instanceof Error ? err.message : err.toString());
          const text = response.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', text.length);
          res.statusCode = 200;
          res.write(Buffer.from(text));
        });
    }
  }
];

app.on('request', (req, res) => {
  for (const route of SERVER_HANDLERS) {
    if (route.route === req.url) {
      route.handler(req, res);
      return;
    }
  }
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server is running at http://${HOST}:${PORT}\n`);
});

module.exports = app;
