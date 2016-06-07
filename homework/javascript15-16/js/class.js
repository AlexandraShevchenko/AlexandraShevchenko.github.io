function Human() {
  this.name = "Charlie";
  this.age = 23;
  this.sex = "female";
  this.height = 160;
  this.weight = 48;
}

function Worker() {
  this.job = "translator";
  this.salary = 8000;
  this.work = function () {
    alert("WORK!");
  }
}

function Student() {
  this.university = "ЛГАКИ";
  this.grant = 1000;
  this.watchTVShows = function () {
    alert("TV-SHOWS!");
  }
}

Worker.prototype = new Human();
var newWorker = new Worker();

Student.prototype = new Human();
var newStudent = new Student();

console.log(newWorker.name);
