class Ninja {
    constructor(nombre, salud) {
    this.nombre = nombre;
    this.salud = salud;
    this.velocidad = 3;
    this.fuerza = 3;
    }

    sayName() {
    console.log("Nombre: " + this.nombre);
    }

    showStats () {
        console.log("Stats \nNombre: " + this.nombre + "\nSalud: " + this.salud, 
        "\nVelocidad:" + this.velocidad  + "\nFuerza: " + this.fuerza);
    }

    drinkSake() {
        this.salud += 10;
    }
}


const ninja1 = new Ninja("Hyabusa", 10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

