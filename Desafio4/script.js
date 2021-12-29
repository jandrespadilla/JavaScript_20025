
function cotizarCredito() {
    let nombre = prompt('Ingresa su nombre completo');
    if (nombre=='') {
        alert('Debe ingresar su nombre');
        cotizarCredito();
    }else{
        if (nombre==null) {
            alert('Hasta luego');
        } else {
            alert('Buen dia '+nombre+' las lineas de creditos disponibles son las siguientes\n'+
            'Por cada 10.000 pesos las cuotas serian las siguientes:\n'+
            '6 cuotas al 10% de interes de $ 1833.33\n'+
            '12 cuotas al 25% de interes de $ 1041.66\n'+
            '18 cuotas al 52% de interes de $ 844.44\n'+
            '24 cuotas al 76% de interes de $ 733.33\n');
            calculo();
        }

    }
}

function calculo() {
    let montoTxt = prompt('Ingrese el monto del credito que necesita.'); 
    let monto =parseFloat(montoTxt);
    if (monto<=1000) {
        alert('El monto minimo a acreditar no puede ser menor a 1000');
        calculo();   
    }else{
        if (montoTxt==null) {
            alert('Hasta luego');
         }else{
            solicitarCuota(monto);
         }
    }
}

function solicitarCuota(monto) {
        let cuotasTxt = prompt('Ingrese la cantidad de cuotas.'); 
        let cuotas = parseInt(cuotasTxt); 
        if (cuotasTxt==null) {
            alert('Hasta luego');
         }else{
            interes=buscarInteres(cuotas);
            if (interes==-1) {
                alert('La cantidad de cuotas ingresadas no corresponde a ninguno de los planes vigentes');
                solicitarCuota(monto);   
            } else {
                nuevoMonto=calcularCuotas(monto,interes);
                let cuota=nuevoMonto/cuotas;
                alert('El monto final del credito seria $ '+nuevoMonto.toFixed(2)+' y quedaria en '+cuotas+' cuotas de $ '+cuota.toFixed(2));
            }  
        }
}



function buscarInteres(cuotas) {
    switch (cuotas) {
        case 6:
            return 10;
            
        case 12:
            return 25;
        case 18:
            return 52;
        case 24:
            return 76;           
        default:
            return -1; 
    }    
}
function calcularCuotas(monto,interes) {
    return nuevoMonto=monto+((interes*monto)/100);
}