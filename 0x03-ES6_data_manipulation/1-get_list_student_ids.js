export default function getListStudentIds(students) {
  if (typeof students !== 'object') {
    return [];
  }
  return students.map((students) => students.id);
}
