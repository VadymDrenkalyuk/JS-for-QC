//task 1*****************************************************************
function propsCount(currentObject) {
    let result = currentObject.duration;
    return result;
}

let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
};


//task 2******************************************************************
let actor = {
    firstName: "Arnold",
    lastName: "Depp",
    height: 9,
    sex: "male",
    country: "USA"
};

function showProps(obj) {
    let propsList = [];
    for (let key in obj) {
        propsList.push(key);
    }
    return propsList;
}
//or using Object.keys(actor);

console.log(Object.values(actor));


//task 3********************************************************************
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        return this.name + " " + this.surname;
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    showFullName(midleName) {
        return super.showFullName() + " " + midleName;
    }
    showCourse() {
        let currentYear = new Date().getFullYear();
        let currentCourse = currentYear - this.year;
        if (currentCourse > 6) {
            console.log("Student has been graduated.");
        }
        return currentCourse;
    }
}


//task 4***********************************************************************
class Worker {
    #expirience = 1.2;
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    showSalary() {
        return `${this.fullName} salary: ${this.dayRate * this.workingDays}`;
    }
    showSalaryWithExpirience() {
        return `${this.fullName} salary: ${this.dayRate * this.workingDays * this.#expirience}`;
    }
    salaryForWorkers() {
        return `${this.dayRate * this.workingDays * this.#expirience}`;
    }
    sortWorkersSalary(workers) {
        let salarySortedByAsc = workers.sort(function (a, b) {
            return a.salaryForWorkers() - b.salaryForWorkers();
        });
        for (let i = 0; i < salarySortedByAsc.length; i++) {
            console.log(salarySortedByAsc[i].fullName + ": " + salarySortedByAsc[i].salaryForWorkers());
        }
    }
    get getExp() {
        return this.#expirience;
    }
    set setExp(value) {
        this.#expirience = value;
    }

}


let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("Experience: " + worker1.getExp);
worker1.showSalaryWithExpirience();
worker1.setExp = 1.5;
console.log("New Experience: " + worker1.getExp);
worker1.showSalaryWithExpirience();


let worker2 = new Worker("Michael Jackson", 15, 30);
worker2.setExp = 1.6;

let worker3 = new Worker("Walter White", 12, 25);
worker3.setExp = 1.7;

let worker4 = new Worker("Jessey Pinkman", 22, 40);
worker4.setExp = 1.3;

let workers = [worker1, worker2, worker3, worker4];

worker1.salaryForWorkers(workers);


//task5***************************************************************************
class GeometricFigure {
    constructor(name) {
        this.name = name;
    }
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name
    }
}

class Triangle extends GeometricFigure {
    constructor(sideA, sideB, sideC) {
        super();
        this.a = sideA;
        this.b = sideB;
        this.c = sideC;
    }
    getArea() {
        let s = (this.a + this.b + this.c) / 2;
        let area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
        return area;
    }
}

class Square extends GeometricFigure {
    constructor(sides) {
        super();
        this.sides = sides;
    }
    getArea() {
        return this.sides ** 2;
    }
}

class Circle extends GeometricFigure {
    constructor(r) {
        super();
        this.radius = r;
    }
    getArea(r) {
        return Math.PI * this.radius * this.radius;
    }
}

let triangle1 = new Triangle(2, 4, 5);
let square1 = new Square(8);
let circle1 = new Circle(13);

let figures = [triangle1, square1, circle1];

function handleFugures(figures) {
    let totalArea = 0;
    figures.forEach(function (figure) {
        if (figure instanceof GeometricFigure) {
            console.log(`Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`);
            totalArea += figure.getArea();
        } else {
            throw Error("Not an instance of the GeometricFugure class.")
        }
    });
    console.log(totalArea);
}