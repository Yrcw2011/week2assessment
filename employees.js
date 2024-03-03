////////////////////////////////////////////////////
///////////////////EMPLOYEES.JS/////////////////////
////////////////////////////////////////////////////
/*
    In this file, you'll be writing classes to 
    store information about restaurant employees.
*/

//////////////////PROBLEM 1////////////////////
/*  
    Create a new class called `Employee`.
    Make sure to call your constructor, and 
    require these 2 parameters: name, shifts.

    Create a method on the class called 
    `getSchedule` that prints a string:
    [NAME] works on [SHIFTS]
    Where NAME and SHIFTS reference the values
    stored on the object.
*/

//CODE HERE
class Employee {
constructor(name, shifts){
    this.name = name;
    this.shifts = shifts;}
     getSchedule() {
     return this.name + ' works on ' + this.shifts;
    
     }
//console.log('Mitch works')
 //console.log('Several Shifts')


}


//str2 = this.shifts('At night')
/*
    Create a new instance of your class.
    Save it to a variable called `empOne`.

    You can use this sample data or make
    up your own:
    name: Jess
    shifts: weekday mornings, weekday afternoons
*/

//CODE HERE
const empOne = new Employee('Mitch', 'weekday mornings');

 
    

/*
    Call the `getSchedule` method on the
    `empOne` object.
*/

//CODE HERE

console.log(empOne.getSchedule());
/*
    Make a copy of the empOne object
    using the spread operator.
    Save it to a variable called `empTwo`.

    Change the name of `empTwo` to 'Nick'.

    Hint: you can do this inline with the 
    spread operator or reassign it using 
    dot or bracket notation.
*/

//CODE HERE
const empTwo = new Employee('Nick', '');
console.log(empTwo.name);


//////////////////PROBLEM 2////////////////////
/*  
    Write a class called Manager that *extends* 
    the Employee class. In the constructor, 
    make sure you require all of the parameters 
    from the Employee class as well as 1 
    new one: employees, which will be an array of 
    employees that report to this manager. 
    (Hint: don't forget to call the super function)

    Create a method called `getEmployees` that
    console.logs a string:
    [NAME] manages [EMPLOYEES]
    Where NAME and EMPLOYEES reference the values
    stored on the object.

    Create a second method called `addEmployee`
    that takes in one argument, `emp`, which
    should be a string of an employee name.
    The function should push the name into 
    the employees array. 
*///////////////////////
//write a class called Manager that extends the employee class.
//
//in constructor require all paramaters with a new employee class and 1 new one: employees

//these employees will be in an array that reports directly to the Manager.  
//Hint use a super function
//
//create a method called getEmployees that console.logs a string.

//Name manages EMPLOYEES. Where they reference the values stored on the object.
//
//create a 2nd method called addEmployee that takes in the argument emp 

//this should be a string of an employee name.

//the function should push the name into the employees array.
///////////////////////////////////
//I am soooooooo lost on this one.  I think I have several different examples mixed in with this 
// one problem and now I am so turned around I cannot think.  


//CODE HERE

let employees = Array.Employee['EmployeeOne', 'EmployeeTwo'];

class Manager extends Employee {
constructor(name, shifts, employees) {
    super(name, shifts);
    this.employees = employees;
    }

   
    getEmployees() {
        return this.name + ' Manages Employees ' + this.employees;
        }
}

const managerOne = new Manager('Nick', ' Shift ', );

/*
    Create a new instance of your class.
    Save it to a variable called `manager`.

    You can use this sample data or make
    up your own:
    name: Winston
    shifts: weekday mornings, weekday afternoons
    employees: Cece and Schmidt
*/

//CODE HERE


/*
    Call the `getEmployees` method on the
    `manager` object.  
*/

//CODE HERE

/*
    Call the `addEmployee` method on the 
    `manager` object passing in the string 
    'Coach' or whatever name you'd like.
*/

//CODE HERE 

/*
    Call the `getEmployees` method on the
    `manager` object again to confirm 
    that an employee was added.
*/

//CODE HERE