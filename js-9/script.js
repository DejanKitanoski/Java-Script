
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  displayDetails() {
    return `Vehicle details Make:${this.make}, Model:${this.model}, Year:${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doorNumbers) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.doorNumbers = doorNumbers;
  }

  displayDetails() {
    return `Car Details: Make - ${this.make}, Model - ${this.model}, Year - ${this.year}, Doors - ${this.doorNumbers}`;
  }
}

function displayInfo() {
  const vehicle = new Vehicle("Toyota", "Corolla", 2018);
  const car = new Car("Honda", "Civic", 2020, 4);

  document.getElementById("vehicle").textContent = vehicle.displayDetails();
  document.getElementById("car").textContent = car.displayDetails();
}
