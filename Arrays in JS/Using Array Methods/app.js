const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Jason Albert', age: 45, department: 'HR', salary: 450000 },
    { id: 3, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 4, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    { id: 4, name: 'Gregory Edward', age: 19, department: 'Finance', salary: 600 },
  ];

let display = '';

function DisplayEmployees(){
    employees.forEach((employee, index) => {
        display += `<p>${index + 1}. Employee Name: ${employee.name} || Employee Age: ${employee.age} ||   Employee Department: ${employee.department} ||   Employee Salary ${employee.salary} ||   Employee ID: ${employee.id}\n<p>`
    })
}

DisplayEmployees();


document.getElementById('DisplaySection').innerHTML= display

let totalSalary= 0
function salarySum(){
     totalSalary = employees.reduce((acc,employee) => acc + employee.salary, 0);
    return totalSalary
}
salarySum()

document.getElementById("Total").innerHTML = `${ totalSalary}`;



let hrdisplay = ''
function hrStaff(){
    let hrEmployees = employees.filter((employee) => employee.department === 'HR');

    console.log(hrEmployees)
    
    hrEmployees.forEach((employee,index) => 
         {
            hrdisplay += `<p>${index + 1}. Employee Name: ${employee.name} || Employee Age: ${employee.age} ||   Employee Department: ${employee.department} ||   Employee Salary ${employee.salary} ||   Employee ID: ${employee.id}\n<p>`
    })
}
hrStaff()
document.getElementById('filteredEmployees').innerHTML=hrdisplay;

// function findEmployeeById(employeeId) {
//     const foundEmployee = employees.find(employee => employee.id === employeeId);
//     if (foundEmployee) {
//     document.getElementById('Search').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
//     }
//     else{
//       document.getElementById('Search').innerHTML = 'no employee has been found with this ID';

//     }
// }


function findEmployee(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);

    if (foundEmployee) {
        document.getElementById('Search').innerHTML = 
            `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    } else {
        document.getElementById('Search').innerHTML = 'No employee has been found with this ID';
    }

    console.log(foundEmployee);
    console.log(employeeId);
    return foundEmployee;
}

findEmployee(4);






