
class Vehicle {
  constructor(make, model, year,) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  displayDetails() {
    return `Vehicle details Make:${this.make}, Model:${this.model}, Year:${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doorNumbers,wheels) {
   super(make,year,model)
    this.doorNumbers = doorNumbers;
    this.wheels = wheels
  }

  displayDetails() {
    return `Car Details: Make - ${this.make}, Model - ${this.model}, Year - ${this.year}, Doors - ${this.doorNumbers} Wheels - ${this.wheels}`;
  }
}

function displayInfo() {
  const vehicle = new Vehicle("BMW", "M4", 2018);
  const car = new Car("BMW", "X5", 2020, 4,4);

  document.getElementById("vehicle").textContent = vehicle.displayDetails();
  document.getElementById("car").textContent = car.displayDetails();
}
document.addEventListener("DOMContentLoaded", displayInfo);