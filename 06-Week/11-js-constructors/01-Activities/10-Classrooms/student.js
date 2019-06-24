
var Student = function(name, subject, GPA){
    this.name = name;
    this.favSubject = subject;
    this.currentGPA = GPA;
}

Student.prototype.RaiseGPA = function(num){
    this.currentGPA += num;
}

module.exports = Student;