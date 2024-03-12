export default function getStudentIdsSum(students) {
  return students.reduce((accumulator, current) => accumulator + current.id, 0);
}
