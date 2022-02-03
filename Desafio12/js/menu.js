
    menu_es=[
        ["Inicio",'./index.html'],
        ["Interpetes",'./interpretes.html'],
        ["Peliculas",'./peliculas.html'],
        ["Series",'./series.html'],
        ["Contactos",'./contacto.html']
    ]
    menu_en=[
        ["Home",'./index.html'],
        ["Interpreters",'./interpretes.html'],
        ["Movies",'./peliculas.html'],
        ["TV Shows",'./series.html'],
        ["Contacts",'./contacto.html']
    ]    
    menu = [{'es': menu_es ,'en':menu_en } ] 
    
   
      loadMenu(parametrosUrl('lang'));
function loadMenu(idioma = 'es') {
     
    $('#menu').html('');
    $('#menu').append(' <a id="logoLink" class="navbar-brand" href="./index.html"></a>');
    $('#logoLink').append('<img src="./style/images/logo.png" width="200">');
    $('#menu').append('<button id="btmBurguer" class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Navegado de tipos"></button>');
    $('#btmBurguer').append('<span class="navbar-toggler-icon bg-lignt"></span>');
    $('#menu').append('<div class="collapse navbar-collapse" id="navbarNav"><div>');
    $('#navbarNav').append('<ul id="ulMenu" class="navbar-nav ms-auto"></ul>');
    for (let item of menu[0][idioma]) {
        $('#ulMenu').append('<li id="li'+item[0]+'" class="nav-item"></li>');
        $('#li'+item[0]).append('<a class="nav-link text-white texto-menu" href="'+item[1]+'">'+item[0]+'</a>');
    } 
    
}



