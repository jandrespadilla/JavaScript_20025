class Auto {
    constructor (nombre,id_marca,ano,precio) {
        this.nombre = nombre.toUpperCase();
        this.id_marca = id_marca;
        this.ano = ano;
        this.precio = precio;
        this.vendido = false;
    }
    vendido (){
        this.vendido=true;
    }
}