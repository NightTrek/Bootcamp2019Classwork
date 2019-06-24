
var Student = require('./student');


var Classroom = function(roomNo){
this.StudentArray = [];
this.numberofStudents = this.StudentArray.length;
this.roomNumber = roomNo;


}

Classroom.prototype.AddStudent = function(name, subj, GPA){
    let newStudent = new Student(name,subj,GPA);
    this.StudentArray.push(newStudent);
    this.updateNumberOfStudents();
}
Classroom.prototype.updateNumberOfStudents = function(){
    this.numberofStudents = this.StudentArray.length;
}


let bootcampclass = new Classroom(210);

bootcampclass.AddStudent("Daniel","science","4.0")

console.log(bootcampclass)