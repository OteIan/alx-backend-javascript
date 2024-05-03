const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }

  const lines = fs
    .readFileSync(path, 'utf8')
    .toString('utf-8')
    .trim()
    .split('\n');

  const groups = {};
  const dbNames = lines[0].split(',');
  const propNames = dbNames.slice(0, dbNames.length - 1);

  for (const line of lines.slice(1)) {
    const record = line.split(',');
    const propValues = record.slice(0, record.length - 1);
    const field = record[record.length - 1];

    if (!Object.keys(groups).includes(field)) {
      groups[field] = [];
    }

    const entries = propNames
      .map((propName, i) => [propName, propValues[i]]);
    groups[field].push(Object.fromEntries(entries));
  }

  const total = Object
    .values(groups)
    .reduce((a, b) => (a || []).length + b.length);

  console.log(`Number of students: ${total}`);

  for (const [field, group] of Object.entries(groups)) {
    const names = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${names}`);
  }
};

module.exports = countStudents;
