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

class Sensei extends Ninja {
    constructor(nombre){
        super(nombre);
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }
    
    speakWisdom(){
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.")
    }

    statsSensei(){
        super.showStats
    }

}

const ninja1 = new Ninja("Hyabusa", 10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();

superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"
