employees=[]
function Employee(name, jobTitle, salary, status="has a job"){
this.name=name
this.jobTitle=jobTitle
this.salary=salary
this.status=status
this.printEmployeeForm=function(){
  console.log(this.jobTitle)
}
}
let person1 = new Employee("erik", "teacher", 5000, "full time" )
let person2 = new Employee("chris", "teacher", 4500,)
let person3 = new Employee("jim", "teacher", 5500, "full time" )

employees.push(person1, person2, person3)
console.log (employees)

person3.printEmployeeForm()