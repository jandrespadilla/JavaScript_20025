class listaAuto {
    constructor (lista) {
      
        this.lista=lista.autos ;

        
    }
    filtro(marca_) {
        this.filtroArr=Array();
        for (let index = 0; index < this.lista.length; index++) {
            

          
            if (this.lista[index].marca==marca_) {
                
                this.filtroArr.push(this.lista[index]);
            }
           /*  */
            
        }

        return this.filtroArr;
    }
} 
