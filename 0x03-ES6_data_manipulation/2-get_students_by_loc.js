export default function getStudentsByLocation(students, city) {
  let result = [];

  result = students.filter((students) => students.location === city);

  return result;
}
