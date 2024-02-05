export default function createReportObject(employeesList) {
  const departments = Object.keys(employeesList);

  const obj = {
    getNumberOfDepartments() {
      return departments.length;
    },
    allEmployees: { ...employeesList },
  };

  return obj;
}
