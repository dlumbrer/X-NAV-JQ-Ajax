$(document).ready(function() {
        $.ajax({
            type: 'GET',
            url: 'text.txt',
        
        }).done(function(data){ $('#escritura').html(data)})
    
        $('#boton').click(function(){ 
            $.ajax({
                type: 'GET',
                url: 'text2.txt',
                cache: false,
        
            }).done(function(data){ $('#escrituraboton').html(data)})
        })
});    

//PARA PROBAR HACER UN SERVER DE PYTHON DE UNA LINEA
//MODIFICA EL ARCHIVO EN DIRECTO text2.txt Y DALE AL BOTON PARA VER QUE SE CAMBIA EN DIRECTO
