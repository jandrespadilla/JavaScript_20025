var autor = [
        
    {"modelo":"Fiesta","ano":2013,"marca":8,"precio":19000},
    {"modelo":"Focus","ano":2018,"marca":8,"precio":29000},
    {"modelo":"Bronco","ano":2021,"marca":8,"precio":40000},
    {"modelo":"F-150","ano":2021,"marca":8,"precio":38000},
    {"modelo":"Ranger","ano":2018,"marca":8,"precio":29000},
    {"modelo":"F100","ano":1979,"marca":8,"precio":8000},

    {"modelo":"147","ano":1993,"marca":7,"precio":10000},    
    {"modelo":"Uno","ano":1997,"marca":7,"precio":15000},
    {"modelo":"500","ano":2017,"marca":7,"precio":28000},
    {"modelo":"Palio","ano":2010,"marca":7,"precio":25000},
    {"modelo":"Argo","ano":2018,"marca":7,"precio":30000},
    {"modelo":"Fiorino","ano":2010,"marca":7,"precio":23000},
    {"modelo":"Furgon","ano":1997,"marca":7,"precio":19000},
    {"modelo":"Strada","ano":2018,"marca":7,"precio":29000},
    {"modelo":"Idea","ano":2018,"marca":7,"precio":22000},



    {"modelo":"Berlingo","ano":2015,"marca":4,"precio":26000},
    {"modelo":"C4","ano":2017,"marca":4,"precio":28000},
    {"modelo":"C3","ano":2005,"marca":4,"precio":19000},
    {"modelo":"Picasso","ano":2018,"marca":4,"precio":26000},
    {"modelo":"Xsara","ano":1997,"marca":4,"precio":15000},

    {"modelo":"Silverado","ano":1998,"marca":3,"precio":18000},
    {"modelo":"C10","ano":1997,"marca":3,"precio":15000},
    {"modelo":"Apache","ano":1969,"marca":3,"precio":5000},
    {"modelo":"Tracker","ano":2018,"marca":3,"precio":30000},
    {"modelo":"Grand Blazer","ano":2010,"marca":3,"precio":28000},
    {"modelo":"Vitara","ano":2005,"marca":3,"precio":2005},
    {"modelo":"Blazer","ano":2017,"marca":3,"precio":28000},
    {"modelo":"Captiva","ano":2013,"marca":3,"precio":26000},
    {"modelo":"Onix","ano":2005,"marca":3,"precio":26000},
    {"modelo":"Sonic","ano":2014,"marca":3,"precio":18000},
    {"modelo":"Cruze","ano":2017,"marca":3,"precio":28000},
    {"modelo":"Corsa","ano":2005,"marca":3,"precio":16000},
    {"modelo":"Aveo","ano":2004,"marca":3,"precio":18000},
    {"modelo":"Camaro","ano":2018,"marca":3,"precio":30000},
    {"modelo":"Astra","ano":2010,"marca":3,"precio":13000},


    {"modelo":"M2","ano":2019,"marca":2,"precio":40000},
    {"modelo":"1M","ano":2010,"marca":2,"precio":23000},
    {"modelo":"428i","ano":2007,"marca":2,"precio":21000},
    {"modelo":"M235","ano":2004,"marca":2,"precio":18000},
    {"modelo":"Serie 8","ano":2018,"marca":2,"precio":30000},
    {"modelo":"Serie 5","ano":2017,"marca":2,"precio":20000},
    {"modelo":"M6","ano":2003,"marca":2,"precio":20000},
    {"modelo":"Z4","ano":2005,"marca":2,"precio":16000},
    {"modelo":"Serie 7","ano":2015,"marca":2,"precio":26000},
    {"modelo":"Q2","ano":2013,"marca":1,"precio":22000},
    {"modelo":"A6","ano":2014,"marca":1,"precio":30000},
    {"modelo":"A4","ano":2010,"marca":1,"precio":28000}

];



// ordenar array de autos por a??o
  autor.sort(function (a, b) {
    if (a.ano > b.ano) {
      return 1;
    }
    if (a.ano < b.ano) {
      return -1;
    }

    return 0;
  });

  console.log(autor);