export default function createReportObject(employeesList) {
  const allEmployees = { ...employeesList};
  
  const reportObj = {
    allEmployees,
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  },

  return reportObj;
}
