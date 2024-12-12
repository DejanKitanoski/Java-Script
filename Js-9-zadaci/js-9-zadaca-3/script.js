class Pravoagolnik {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
    calculatePovrsina() {
      return this.width * this.height;
    }
    calculatePerimetar() {
      return 2 * (this.width + this.height);
    }
  }

  
  function displayPravoagolnikDetails() {
    
    const myPravoagolnik = new Pravoagolnik(5, 10);

    
    const povrsina = myPravoagolnik.calculatePovrsina();
    const perimetar = myPravoagolnik.calculatePerimetar();


    document.getElementById("povrsina").textContent = "Povrsina: " + povrsina;
    document.getElementById("perimetar").textContent = "Perimetar: " + perimetar;
  }
  displayPravoagolnikDetails()