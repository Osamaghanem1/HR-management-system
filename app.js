'use strict';

// Constructor function for Employee
function Employee(employeeID, fullName, department, level, imageURL, salary) {
  this.employeeID = employeeID;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageURL = imageURL;
  this.salary = salary;
}

function generateEmployeeID() {
  const min = 1000;
  const max = 9999;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function calculateSalary(level) {
  let minSalary, maxSalary;

  switch (level) {
    case 'Senior':
      minSalary = 1500;
      maxSalary = 2000;
      break;
    case 'Mid-Senior':
      minSalary = 1000;
      maxSalary = 1500;
      break;
    case 'Junior':
      minSalary = 500;
      maxSalary = 1000;
      break;
    default:
      minSalary = 0;
      maxSalary = 0;
  }

  const salary = Math.floor(Math.random() * (maxSalary - minSalary + 1) + minSalary);
  const netSalary = salary - (salary * 0.075);

  return { salary, netSalary };
}

Employee.prototype.render = function () {
  document.write(`<li>
    <p>Employee name: ${this.fullName}</p>
    <p>Department: ${this.department}</p>
    <p>Salary: ${this.salary}</p>
  </li>`);
};

const employees = [
  new Employee(generateEmployeeID(), 'Ghazi Samer', 'Administration', 'Senior', 0),
  new Employee(generateEmployeeID(), 'Lana Ali', 'Finance', 'Senior', 0),
  new Employee(generateEmployeeID(), 'Tamara Ayoub', 'Marketing', 'Senior', 0),
  new Employee(generateEmployeeID(), 'Safi Walid', 'Administration', 'Mid-Senior', 0),
  new Employee(generateEmployeeID(), 'Omar Zaid', 'Development', 'Senior', 0),
  new Employee(generateEmployeeID(), 'Rana Saleh', 'Development', 'Junior', 0),
  new Employee(generateEmployeeID(), 'Hadi Ahmad', 'Finance', 'Mid-Senior', 0)
];

employees.forEach((employee) => {
  const { salary, netSalary } = calculateSalary(employee.level);
  employee.salary = netSalary;
});

employees.forEach((employee) => {
  employee.render();
});