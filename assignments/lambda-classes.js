class Person {
  constructor(personAtts) {
    this.name = personAtts.name;
    this.age = personAtts.age;
    this.location = personAtts.location;
    this.gender = personAtts.gender;
  }
  speak() {
    return `Hello, my name is ${this.name}, I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(instructorAtts) {
    super(instructorAtts);
    this.specialty = instructorAtts.specialty;
    this.favLanguage = instructorAtts.favLanguage;
    this.catchPhrase = instructorAtts.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }
  grade(student, subject) {
    return `${student} receives a perfect score on ${subject}.`;
  }
}

class Student extends Person {
  constructor(studentAtts) {
    super(studentAtts);
    this.previousBackground = studentAtts.previousBackground;
    this.className = studentAtts.className;
    this.favSubjects = studentAtts.favSubjects;
  }
  listSubject() {
    return `${this.favSubjects}`;
  }
  pRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun a sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(pmAtts) {
    super(pmAtts);
    this.gradClassName = pmAtts.gradClassName;
    this.favInstructor = pmAtts.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel} @channel standy times.`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student}'s code on ${subject}.`;
  }
}

const alex = new Instructor({
  name: "Alex Anderson",
  age: 26,
  location: "Knoxville, TN.",
  gender: "M",
  specialty: "Node",
  favLanguage: "CSS",
  catchPhrase: "Go Big"
});

const noah = new ProjectManager({
  name: "Noah Ohlsen",
  age: 24,
  location: "Miami, FL.",
  gender: "M",
  specialty: "React",
  favLanguage: "JavaScript",
  catchPhrase: "Swole and Flexy",
  gradClassName: "FSW3",
  favInstructor: "Alex Anderson"
});

const chaseG = new Student({
  name: "Chase Garsee",
  age: 26,
  location: "Hatyai, Thailand",
  gender: "M",
  previousBackground: "Technical Arts Director",
  className: "FSW18",
  favSubjects: ["HTML", "CSS", "JavaScript"]
});

const cameron_macdonald = new Student({
  name: "Cam",
  age: 58,
  location: "Port Angeles, WA",
  gender: "male",
  favLanguage: "Javascript",
  className: "WEB18",
  previousBackground:
    "martial arts instructor, Honda tech, computer support tech",
  favSubjects: ["CSS", "Javascript", "golf", "Scotland"]
});

const brellin = new Student({
  name: "Will Umstead",
  age: 26,
  location: "Tuscola, Texas",
  gender: "Male",
  previousBackground: "Army",
  className: "WEB18",
  favSubjects: ["PHP", "CSS", "JavaScript"]
});

console.log(alex.speak());
console.log(noah.speak());
console.log(chaseG.speak());
console.log(alex.demo("CSS"));
console.log(alex.grade("Chase", "JavaScript"));
console.log(noah.standUp("WEB18"));
console.log(noah.debugsCode("Chase", "JavaScript"));
console.log(chaseG.listSubject());
console.log(chaseG.pRAssignment("JS:IV"));
console.log(chaseG.sprintChallenge("JS:III"));
