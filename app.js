'use strict';
const employees = [
  {
    employeeID: 1000,
    fullName: 'Ghazi Samer',
    department: 'Administration',
    level: 'Senior',
    imageURL: 'https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1029-1024x683.jpg ',
    salary: 0
  },

  {
    employeeID: 1001,
    fullName: 'Lana Ali',
    department: 'Finance',
    level: 'Senior',
    imageURL: 'https://as1.ftcdn.net/v2/jpg/02/64/61/02/1000_F_264610201_ba3OilZlMEctW1MjgQsYz2WS4OId6zhY.jpg',
    salary: 0
  },

  {
    employeeID: 1002,
    fullName: 'Tamara Ayoub',
    department: 'Marketing',
    level: 'Senior',
    imageURL: 'https://images.squarespace-cdn.com/content/v1/572e050c4d088ea3a8f0ac9d/1652567766986-KUSNHQRZEE0914MTGA14/OKelly%26Sorohan-47-PRINT.jpg?format=1000w',
    salary: 0
  },

  {
    employeeID: 1003,
    fullName: 'Safi Walid',
    department: 'Administration',
    level: 'Mid-Senior',
    imageURL: 'https://img.freepik.com/free-photo/close-up-confident-male-employee-white-collar-shirt-smiling-camera-standing-self-assured-against-studio-background_1258-26761.jpg?w=360',
    salary: 0
  },

  {
    employeeID: 1004,
    fullName: 'Omar Zaid',
    department: 'Development',
    level: 'Senior',
    imageURL: 'https://serenabolton.com/wp-content/uploads/2020/10/Headshots-West-London-Studio-01-3-1024x683.jpg',
    salary: 0
  },

  {
    employeeID: 1005,
    fullName: 'Rana Saleh',
    department: 'Development',
    level: 'Junior',
    imageURL: 'https://img.freepik.com/premium-photo/portrait-young-smiling-muslim-businesswoman-wearing-suit-with-hijab-white-background-studio_33799-11465.jpg',
    salary: 0
  },
  {
    employeeID: 1006,
    fullName: 'Hadi Ahmad',
    department: 'Finance',
    level: 'Mid-Senior',
    imageURL: 'https://i.pinimg.com/originals/cd/26/7d/cd267d9afa3343b50c468b3daec610bc.jpg',
    salary: 0
  }
];


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

function renderEmployees() {
  const employeeList = document.getElementById('employee-list');

  employees.forEach((employee) => {
    const { fullName, salary } = employee;
    const listItem = document.createElement('li');
    listItem.textContent = `Employee name: ${fullName}\n Employee salary: ${salary}`;
    employeeList.appendChild(listItem);
  });
}

employees.forEach((employee) => {
  employee.employeeID = generateEmployeeID();
  const { salary, netSalary } = calculateSalary(employee.level);
  employee.salary = netSalary;
});

renderEmployees();