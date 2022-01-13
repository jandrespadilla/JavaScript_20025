class Auto {
    constructor (nombre,ano,id_marca,precio) {
        this.nombre = nombre.toUpperCase();
        this.id_marca = id_marca;
        this.ano = ano;
        this.precio = precio;
        this.vendido = false;
    }
    vender (){
        this.vendido=true;
    }
}