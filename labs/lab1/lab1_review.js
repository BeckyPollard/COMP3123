/*

 _    _ _____ _____ _   __     __  
| |  | |  ___|  ___| | / /    /  | 
| |  | | |__ | |__ | |/ /     `| | 
| |/\| |  __||  __||    \      | | 
\  /\  / |___| |___| |\  \    _| |_
 \/  \/\____/\____/\_| \_/    \___/
                                   
                                   
 PURPOSE: to reviewq JS concepts
  - prototypes vs classes
  - functions
  - callback functions
  - MERN stack
*/

// var vs let, global vs local
// var is global
// let is local
// let can be overwritten
// const is constant value
var globalVariable = 'global'
let localVariable = 'local'

// regular function
function functionName() {
  let varInFunc = 'local function'
}
// console.log(varInFunc); // fail, undefined/undeclared

// prototype
// const oneTimeUseObj = new Object();
const oneTimeUseObj = {
  prop1: "what",
  prop2: 22,
  method1: (prop) => {
    console.log(prop);
  },
  method2: function (prop) {
    console.log(prop);
  }
}
console.log(oneTimeUseObj.prop1);
console.log(oneTimeUseObj.method1("test"));
console.log(oneTimeUseObj);

// prototype with constructor
function Student (name, course, lunch) {
  this.name = name;
  this.course = course;
  this.lunch = lunch;
  this.method1 = (word) => {
    console.log(word);
    return word
  }
  this.method2 = () => {
    console.log(`Good morning ${name}, you go to ${course} and have lunch at ${lunch}`);
  }
}
const student1 = new Student('becky', 'comp3123', '2:30PM')
console.log(student1.name);
console.log(student1.course);
console.log(student1.lunch);
student1.method1('potato')
student1.method1(student1.name)
student1.method2()

// classes always have constructors
class Prof {
  constructor(name){
    this.fullname = name
  }
  method1(lunch) {
    console.log(lunch);
  }
}
const morningProf = new Prof('Laily')
console.log(morningProf.fullname);
morningProf.method1("2:30PM");
