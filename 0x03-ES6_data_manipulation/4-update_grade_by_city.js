export default function updateStudentGradeByCity(students, city, newGrades) {
  const cityStudents = students.filter((student) => student.location === city);
  
  const updatedStudents = cityStudents.map(student => {
    const gradeObject = newGrades.find((grade) => grade.studentId === student.id);
    if (gradeObject) {
      return { ...student, grade:gradeObject.grade };
    } else {
      return { ...student, grade: 'N/A' };
    }
  });

  return updatedStudents;
}
