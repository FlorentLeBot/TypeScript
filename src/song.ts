const valueUser = document.getElementById("in") as HTMLInputElement;

let button = <HTMLElement>document.querySelector(".btn");

let textSong = <HTMLElement>document.querySelector(".text-song");

class Song {
  
  public value: number = parseInt(valueUser.value);
  public newValue: number = this.value - 1;

  getSong() {
    return `${this.value} bolées de cidre sur le mur, ${this.value} bolées sans alcool. \nBois en un et au suivant ${this.newValue} bolées de cidre sur le mur.`;
  }
}

const myClass = new Song();
const song = myClass.getSong();
const value = myClass.value;
const newValue = myClass.newValue;

  button.addEventListener("click", () => {
    if (value > 2 && value <= 99) {
      console.log(typeof value);
      textSong.innerText = song;
    } else if (value == 0) {
      textSong.innerText = "coucou";
    } else if (value == 1) {
      textSong.innerText = "salut";
    } else if (value == 2) {
      textSong.innerText = "hello";
    } else {
      textSong.innerText = "Vous devez choisir une valeur entre 0 et 99.";
    }
  });

