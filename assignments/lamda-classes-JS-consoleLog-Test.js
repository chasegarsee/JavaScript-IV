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
    return `${student.name} receives a perfect score on ${subject.name}.`;
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
  pRAssignment() {
    return `${this.name} has submitted a PR for ${subject.name}`;
  }
  sprintChallenge() {
    return `${student.name} has begun a sprint challenge on ${subject.name}`;
  }
}

class ProjectManager extends Instructor {
  constructor(pmAtts) {
    super(pmAtts);
    this.gradClassName = pmAtts.gradClassName;
    this.favInstructor = pmAtts.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel.name} @channel standy times.`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject.name}.`;
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

const chase = new Student({
  name: "Chase Garsee",
  age: 26,
  location: "Hatyai, Thailand",
  gender: "M",
  previousBackground: "None",
  className: "FSW18",
  favSubjects: "HTML, CSS, JavaScript"
});

console.log(noah.speak());
