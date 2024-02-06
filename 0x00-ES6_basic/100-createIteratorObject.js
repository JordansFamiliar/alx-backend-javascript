export default function createIteratorObject(report) {
  const iterable = {
    [Symbol.iterator]() {
      let employees = [];

      for (const department of Object.values(report.allEmployees)) {
        employees = [...employees, ...department];
      }

      let x = 0;

      return {
        next() {
          if (x < employees.length) {
            const result = { value: employees[x], done: false };
	    x += 1;
	    return result;
          }
          return { value: undefined, done: true };
        },
      };
    },
  };

  return iterable;
}
