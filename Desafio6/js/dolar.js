
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