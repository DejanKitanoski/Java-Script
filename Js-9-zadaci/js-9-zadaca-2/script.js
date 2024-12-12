class Person {
    constructor(name, age, country,city) {
      this.name = name;
      this.age = age;
      this.country = country;
      this.city = city
    }
  
   
    displayDetails() {
      return `Name: ${this.name}, Age: ${this.age}, Country: ${this.country} City: ${this.city}`;
    }
  }
  
  
  const person1 = new Person("Dejan", 21, "Makedonija","Vevcani");
  const person2 = new Person("Marko", 24, "Makedonija","Skopje");
  
  
//   console.log(person1.displayDetails());
//   console.log(person2.displayDetails());
  document.getElementById("person1").innerHTML = `<strong>${person1.displayDetails()}</strong>`;
  
  document.getElementById("person2").innerHTML = `<strong>${person2.displayDetails()}</strong>`;