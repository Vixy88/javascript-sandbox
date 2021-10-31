// PARENT CLASS
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  // GETTERS
  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  // SETTER
  set numberOfStudents(newnumberOfStudents) {
    if (typeof newnumberOfStudents === "Number") {
      this._numberOfStudents = numberOfStudents;
    } else {
      alert("Invalid input: numberOfStudents must be set to a Number.");
    }
  }

  // METHODS
  quickFacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
    );
  }

  static pickSubstituteTeacher(substituteTeachers) {
    substituteTeachers = [];
    return Math.floor((substituteTeachers.length - 1) * Math.random());
  }
}

class Primary extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  // GETTER
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "high", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  // GETTER
  get sportsTeams() {
    console.log(this._sportsTeams);
  }
}

let lorraineHansbury = new Primary(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);

console.log(lorraineHansbury);
console.log("");
lorraineHansbury.quickFacts();
