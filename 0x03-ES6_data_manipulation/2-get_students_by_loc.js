export default function getStudentsByLocation(studentList, city) {
  return studentList.filter((student) => studentList.location == city);  
}
