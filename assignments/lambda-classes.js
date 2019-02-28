// CODE here for your Lambda Classes


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
};

class Instructor extends Person{
    constructor(instructorAtts){
        super(instructorAtts)
        this.specialty = instructorAtts.specialty;
        this.favLanguage = instructorAtts.favLanguage;
        this.catchPhrase = instructorAtts.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${this.subject}.`;
    }
    grade(student, subject) {
return `${this.name} receives a perfect score on ${this.subject}.`;
    }
};

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
        return `${this.name} has submitted a PR for ${this.subject}`;
    }
    sprintChallenge () {
        return `${this.student} has begun a sprint challenge on ${this.subject}`;
    }
};

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
        return `${this.name} debugs ${student.}'s code on ${subject}.`
    }
};

