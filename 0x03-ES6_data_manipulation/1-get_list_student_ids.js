export default function getListStudentIds(students) {
  let result = [];
  if (students instanceof Array) {
    result = students.map((student) => student.id)
  }
  return result
}
