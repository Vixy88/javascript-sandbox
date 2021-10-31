class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  // GETTERS
  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  // SETTERS
  set current(newisCheckedOut) {
    this._isCheckedOut = newisCheckedOut;
  }

  // METHODS
  toggleCheckOutStatus() {
    if (this._isCheckedOut === false) {
      return (this._isCheckedOut = true);
    } else {
      return (this._isCheckedOut = false);
    }
  }

  getAverageRating() {
    let ratingsSum = this.ratings.reduce(
      (currentSum, ratings) => currentSum + ratings,
      0
    );
    const lengthOfArray = this.ratings.length;
    return ratingsSum / lengthOfArray;
  }

  addRating(newRating) {
    this.ratings.push(newRating);
  }
}

class Book extends Media {
  constructor(author, pages, title) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this.author;
  }

  get pages() {
    return this.pages;
  }
}

class Movie extends Media {
  constructor(director, runTime, title) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this.director;
  }

  get runTime() {
    return this.runTime;
  }
}

let historyOfEverything = new Book(
  "Bill Bryson",
  544,
  "A Short History of Nearly Everything"
);

console.log(historyOfEverything.isCheckedOut);

historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.ratings);

console.log(historyOfEverything.getAverageRating());

let speed = new Movie("Jan de Bont", 116, "Speed");

console.log(speed.isCheckedOut);

speed.toggleCheckOutStatus();

console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());
