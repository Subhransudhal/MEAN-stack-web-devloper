function employee(name, designation, department){
   this.name=name;
   this.designation=designation;
   this.department=department; 
}

employee.prototype.add=function(){
    console.log("adding to database");
}

var emp=new employee("tony","devloper","it");
console.log(emp);
emp.add();