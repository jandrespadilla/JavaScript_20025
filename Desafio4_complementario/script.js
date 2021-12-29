 

const dolarArgentinaApi = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";

 
class DolarBlueAr {
    constructor(dolarData) {
        this.sell = dolarData.venta;
        this.buy = dolarData.compra;
        this.screenText = "Dolar Blue AR"
        this.img = "https://www.andbank.es/observatoriodelinversor/wp-content/uploads/2014/01/DOLAR_blue.jpg";
    }
}



async function getDolarArData() {
    const response = await fetch(dolarArgentinaApi);
    const responseData = await response.json();
    const dolarData = responseData.map(x => x.casa)
    const filtredDolarData = dolarData.filter(dolar => ['Dolar Blue'].includes(dolar.nombre))
     
    saveDolarArData(filtredDolarData);
 
}

function saveDolarArData(filtredDolarData) {
    let dolarBlue = filtredDolarData.find(dolar => dolar.nombre == "Dolar Blue");
    dolarBlueAr = new DolarBlueAr(dolarBlue);
}

getDolarArData();

function cotisadorDolar() {
    let nombre = prompt('Ingresa el nombre del producto que queremos ver');
    let precio = parseInt(prompt('Ingrese un precio en pesos de el o la '+nombre));
    let precioSinIva = precio-(precio*0.21);
    let precioDolar = precioSinIva/parseInt(dolarBlueAr.sell);
    alert('El precio sin IVA de '+nombre+' es '+precioSinIva+' y en dolares '+precioDolar+'(Cotizacion actual '+dolarBlueAr.sell+')');
 
     
}

