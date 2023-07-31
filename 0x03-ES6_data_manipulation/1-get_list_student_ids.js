export default function getListStudentIds(studentList) {
  if (!Array.isarray(studentList)) {
     return [];
  }
  return studentList.map((student) => student.id);
}
