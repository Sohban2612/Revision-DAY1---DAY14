const employees = [
  { id: 1, name: 'John', dept: 'Engineering', salary: 80000 },
  { id: 2, name: 'Jane', dept: 'Engineering', salary: 95000 },
  { id: 3, name: 'Bob', dept: 'Marketing', salary: 65000 },
  { id: 4, name: 'Alice', dept: 'Engineering', salary: 88000 },
  { id: 5, name: 'Charlie', dept: 'Marketing', salary: 72000 },
  { id: 6, name: 'Diana', dept: 'HR', salary: 70000 }
];



// outpput = {
//   Engineering: {
//     employees: ['John', 'Jane', 'Alice'],
//     avgSalary: 87666.67,
//     totalCount: 3
//   },
//   Marketing: {
//     employees: ['Bob', 'Charlie'],
//     avgSalary: 68500,
//     totalCount: 2
//   },
//   HR: {
//     employees: ['Diana'],
//     avgSalary: 70000,
//     totalCount: 1
//   }
// }


let res = {};
for(let i=0;i<employees.length;i++){
    let emp = employees[i]
    if(!res[employees[i].dept]){

        res[employees[i].dept]={
            employees:[],
            salary:0,
            totalCount:0
        }
    }
    res[emp.dept].employees.push(emp.name)
    res[emp.dept].salary+=emp.salary
    res[emp.dept].totalCount+=1
}


for (let dep in res){
    res[dep].avgSalary=(res[dep].salary/res[dep].totalCount).toFixed(2)

}
console.log(res)