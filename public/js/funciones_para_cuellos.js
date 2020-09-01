//deschequear los tipos de modelo que no sean liso
$('input:checkbox[name=cuello_liso]').click(function(){
    $('.combinacion').each(function(){
        $(this).prop('checked',false)
    })
})

//deschequear los modelo liso
$('.combinacion').click(function(){
    $('input:checkbox[name=cuello_liso]').prop('checked',false)
})
// mostrar formularios
$('#mostrar_formulario').click(function(){
    let nameForm = ''
    var nombre_cuello = $("#nombre_cuello").val()
    $('input:checkbox').each(function(){
        let name = $(this).attr('name')
        $(`#formulario_${name}`).addClass('hiden');
        $(`#formulario_cuello_letrascuello_figuras`).addClass('hiden');
        $(`#formulario_cuello_letrascuello_figurascuello_lineas`).addClass('hiden');
        $(`#formulario_cuello_letrascuello_lineas`).addClass('hiden');
        $(`#formulario_cuello_figurascuello_lineas`).addClass('hiden');
        if($(this).is(':checked') ) {
            nameForm = nameForm + name 
        }
    })
    if(nameForm.length === 0 && nombre_cuello === ""){
        $('#aviso').html("<strong  class='text-danger animacion'> Por favor llene todos los campos </strong>")  
    }else if(nameForm.length === 0 ) {
        $('#aviso').html("<strong  class='text-danger animacion'> Debe escoger un tipo de cuello</strong>")  
    }else if(nombre_cuello === ""){
        $('#aviso').html("<strong  class='text-danger animacion'> Debe introducir un nombre </strong>")  
    }else {
        console.log(nameForm)
        $('#aviso').html("")  
        $(`#formulario_${nameForm}`).removeClass('hiden');
        $(`#formulario_${nameForm}`).addClass('show');
    }
    combinacion(nameForm)
})


// creacion de objeto para cuellos
var objeto_cuello = {
    obj_cuello_id: "",
    obj_nombre_cuello:"",
    obj_descripcion_cuello:"",
    obj_imagen_diseno:"",
    obj_material_fondo:"",
    obj_color_fondo:"",
    obj_datos_figura:[],
    obj_datos_letra:[],
    obj_datos_linea:[],
}

// *************************** cuello figura ***********************************************************
let figura = 0

// agregar tabla cuello figura
function tabla_cuello_figura(){
    var material_fondo_figura = $( "#material_fondo_figura option:selected" ).val()      
    var material_fondo_figura_noombre = $( "#material_fondo_figura option:selected" ).text()      
    var color_fondo_figura = $("#color_fondo_figura").val()
    var cuello_figura_id = $("#cuello_figura_id").val()
    var nombre_cuello = $("#nombre_cuello").val()
    var descripcion_cuello = $("#descripcion_cuello").val()
    var imagen_diseno = $("#imagen_diseno").val()

    var material_figura = parseInt($( "#material_figura option:selected" ).val())     
    var material_figura_nombre = $( "#material_figura option:selected" ).text()      
    var alto_figura = $("#alto_figura").val()
    var ancho_figura = $("#ancho_figura").val()
    var color_figura = $("#color_figura").val()
    var imagen_diseno_figura = $("#imagen_diseno_figura").val()


    var objeto_cuello_figura_data = {
        material_figura,
        alto_figura,
        ancho_figura,
        color_figura,
        imagen_diseno_figura,
    }
    
    if(!validate_form(material_fondo_figura, color_fondo_figura, material_figura, alto_figura, ancho_figura, color_figura)){
        $('#aviso_figura').html("<strong  class='text-danger animacion'> Algunos Campos no estan completos</strong>")
    }else{
        if(figura === 0){           
            $("#tbody_figura").append(`<tr>
                <th>fondo</th>
                <th>${material_fondo_figura_noombre}</th>
                <th style="width: 20px;height: 10px; background: ${color_fondo_figura}"></th>
                <th>---</th>
                <th>---</th>
                <th class="text-center"><img   src="img/layouts/cancelar.svg" width="20px;" height="20px;" alt=""></th>
            </tr>`); 
            figura++
            $("#material_fondo_figura").prop('disabled', true)
            $("#color_fondo_figura").prop('disabled', true)
            $('#aviso_figura').html("")  
            $("#tabla_diseno_figura").removeClass('hiden')
            $("#tabla_diseno_figura").addClass('show')
        }       
        if(figura=== 1){
            objeto_cuello.obj_cuello_id = cuello_figura_id
            objeto_cuello.obj_nombre_cuello = nombre_cuello
            objeto_cuello.obj_descripcion_cuello = descripcion_cuello
            objeto_cuello.obj_imagen_diseno = imagen_diseno
            objeto_cuello.obj_material_fondo = material_fondo_figura
            objeto_cuello.obj_color_fondo = color_fondo_figura
        }
        $("#tbody_figura").append(`
            <tr>
                <th>figura</th>
                <th>${material_figura_nombre}</th>
                <th style="width: 20px;height: 5px; background: ${color_figura}"></th>
                <th>${alto_figura}</th>
                <th>${ancho_figura}</th>
                <th class="text-center"><img   src="img/layouts/cancelar.svg" width="20px;" height="20px;" alt=""></th>
            </tr>`
        );
        $( "#material_figura selected" ).text("")  
        $("#alto_figura").val("")
        $("#ancho_figura").val("")
        $("#color_figura").val("")
        $('#aviso_figura').html("")  

        objeto_cuello.obj_datos_figura.push(objeto_cuello_figura_data)
    }   
    console.log(objeto_cuello)

}
function validate_form(material_fondo_figura, color_fondo_figura, material_figura, alto_figura, ancho_figura, color_figura){
    if( isNaN(material_figura) || material_fondo_figura === "" || color_fondo_figura === "" || alto_figura === "" || ancho_figura === "" || color_figura === " " ){
        return false
    }
    return true
}


// *****************************cuello liso*********************************************************

function tabla_cuello_liso_mandar_datos(){
    var nombre_cuello = $("#nombre_cuello").val()
    var descripcion_cuello = $("#descripcion_cuello").val()
    var imagen_diseno = $("#imagen_diseno").val()
    var cuello_liso_id = $("#cuello_liso_id").val()
    var material_fondo_liso = $( "#material_fondo_liso option:selected" ).val()    
    var color_fondo_liso = $("#color_fondo_liso").val()

    if(material_fondo_liso === ""){
        $('#aviso_liso').html("<strong  class='text-danger animacion'> Algunos Campos no estan completos</strong>")     
    }else{
        objeto_cuello.obj_cuello_id = cuello_liso_id
        objeto_cuello.obj_nombre_cuello = nombre_cuello
        objeto_cuello.obj_descripcion_cuello = descripcion_cuello
        objeto_cuello.obj_imagen_diseno = imagen_diseno
        objeto_cuello.obj_material_fondo = material_fondo_liso
        objeto_cuello.obj_color_fondo = color_fondo_liso
        $.ajax({
            url: "http://127.0.0.1:8000/api/crear-cuello/cuello",
            data: objeto_cuello,
            dataType: "json",
            method: "POST",
            success: function (e) {
                if(e){
                    swal({
                        title: "Correcto",
                        text: "se guardo correctamente",
                        icon: "success",
                        button: "Aceptar!",
                      })
                      .then((value) => {
                        window.location.href = "http://127.0.0.1:8000/crear-cuello";
                    });
                }
            },
            statusCode: {
                404: function() {
                   alert('Error, no funciona');
                }
            },
            error:function(x,xs,xt){
                window.open(JSON.stringify(x));
            }
        });
    }
   
}

//********************************cuello letra*******************************************************************

let letra = 0;

function tabla_cuello_letra(){
    var material_fondo_letra = $( "#material_fondo_letra option:selected" ).val()      
    var material_fondo_letra_noombre = $( "#material_fondo_letra option:selected" ).text()      
    var color_fondo_letra = $("#color_fondo_letra").val()
    
    var material_letra = parseInt($( "#material_letra option:selected" ).val())     
    var material_letra_nombre = $( "#material_letra option:selected" ).text()      
    var tipo_fuente__letra = $( "#tipo_fuente__letra option:selected" ).text()      
    var contenido_letra = $("#contenido_letra").val()
    var tamano_fuente_letra = $("#tamano_fuente_letra").val()
    var color_letra = $("#color_letra").val()
    
    var cuello_letra_id = $("#cuello_letra_id").val()
    var nombre_cuello = $("#nombre_cuello").val()
    var descripcion_cuello = $("#descripcion_cuello").val()
    var imagen_diseno = $("#imagen_diseno").val()


    var objeto_cuello_letra_data = {
        material_letra,
        tipo_fuente__letra,
        contenido_letra,
        color_letra,
        tamano_fuente_letra,
    }
    
    if(!validate_form(material_fondo_letra, color_fondo_letra, material_letra, tipo_fuente__letra, contenido_letra, tamano_fuente_letra)){
        $('#aviso_letra').html("<strong  class='text-danger animacion'> Algunos Campos no estan completos</strong>")
    }else{
        if(letra === 0){           
            $("#tbody_letra").append(`<tr>
                <th>fondo</th>
                <th>${material_fondo_letra_noombre}</th>
                <th style="width: 20px;height: 10px; background: ${color_fondo_letra}"></th>
                <th>---</th>
                <th>---</th>
                <th>---</th>
                <th class="text-center"><img   src="img/layouts/cancelar.svg" width="20px;" height="20px;" alt=""></th>
            </tr>`); 
            letra++;
            $("#material_fondo_letra").prop('disabled', true)
            $("#color_fondo_letra").prop('disabled', true)
            $('#aviso_letra').html("")  
            $("#tabla_diseno_letra").removeClass('hiden')
            $("#tabla_diseno_letra").addClass('show')
        }       
        if(letra === 1){
            objeto_cuello.obj_cuello_id = cuello_letra_id
            objeto_cuello.obj_nombre_cuello = nombre_cuello
            objeto_cuello.obj_descripcion_cuello = descripcion_cuello
            objeto_cuello.obj_imagen_diseno = imagen_diseno
            objeto_cuello.obj_material_fondo = material_fondo_letra
            objeto_cuello.obj_color_fondo = color_fondo_letra
        }
        $("#tbody_letra").append(`
            <tr>
                <th>letra</th>
                <th>${material_letra_nombre}</th>
                <th style="width: 20px;height: 5px; background: ${color_letra}"></th>
                <th>${tamano_fuente_letra}</th>
                <th>${tipo_fuente__letra}</th>
                <th>${contenido_letra}</th>
                <th class="text-center"><img   src="img/layouts/cancelar.svg" width="20px;" height="20px;" alt=""></th>
            </tr>`
        );
        $( "#material_letra selected" ).text("")  
        $("#contenido_letra").val("")
        $('#aviso_letra').html("")  

        objeto_cuello.obj_datos_letra.push(objeto_cuello_letra_data)
    }   
    console.log(objeto_cuello)

}


// ********************************cuello lineas*********************************************************************

let linea = 0;
let contador_linea = 1;

function tabla_cuello_linea(){
    var material_fondo_linea = $( "#material_fondo_linea option:selected" ).val()      
    var material_fondo_linea_noombre = $( "#material_fondo_linea option:selected" ).text()      
    var color_fondo_linea = $("#color_fondo_linea").val()
    
    var material_linea = parseInt($( "#material_linea option:selected" ).val())     
    var material_linea_nombre = $( "#material_linea option:selected" ).text()      
    var grosor_linea = $( "#grosor_linea" ).val()      
    var color_linea = $("#color_linea").val()
    
    var cuello_linea_id = $("#cuello_lineas_id").val()
    var nombre_cuello = $("#nombre_cuello").val()
    var descripcion_cuello = $("#descripcion_cuello").val()
    var imagen_diseno = $("#imagen_diseno").val()

    var objeto_cuello_linea_data = {
        material_linea,
        grosor_linea,
        color_linea,
    }
    
    if( isNaN(material_linea) || material_fondo_linea === "" || grosor_linea === ""){
        $('#aviso_linea').html("<strong  class='text-danger animacion'> Algunos Campos no estan completos</strong>")     
    }else{
        if(linea === 0){           
            $("#tbody_linea").append(`<tr>
                <th>fondo</th>
                <th>${material_fondo_linea_noombre}</th>
                <th style="width: 20px;height: 10px; background: ${color_fondo_linea}"></th>
                <th>---</th>
                <th class="text-center"><img   src="img/layouts/cancelar.svg" width="20px;" height="20px;" alt=""></th>
            </tr>`); 
            linea++;
            $("#material_fondo_linea").prop('disabled', true)
            $("#color_fondo_linea").prop('disabled', true)
            $('#aviso_linea').html("")  
            $("#tabla_diseno_lineas").removeClass('hiden')
            $("#tabla_diseno_lineas").addClass('show')
        }       
        if(linea === 1){
            objeto_cuello.obj_cuello_id = cuello_linea_id
            objeto_cuello.obj_nombre_cuello = nombre_cuello
            objeto_cuello.obj_descripcion_cuello = descripcion_cuello
            objeto_cuello.obj_imagen_diseno = imagen_diseno
            objeto_cuello.obj_material_fondo = material_fondo_linea
            objeto_cuello.obj_color_fondo = color_fondo_linea
        }
        $("#tbody_linea").append(`
            <tr>
                <th>linea ${contador_linea}</th>
                <th>${material_linea_nombre}</th>
                <th style="width: 20px;height: 5px; background: ${color_linea}"></th>
                <th>${grosor_linea}</th>
                <th class="text-center"><img   src="img/layouts/cancelar.svg" width="20px;" height="20px;" alt=""></th>
            </tr>`
        );
        $( "#material_linea selected" ).text("")  
        $("#contenido_linea").val("")
        $('#aviso_linea').html("")  

        objeto_cuello.obj_datos_linea.push(objeto_cuello_linea_data)
        contador_linea++
    }   
    console.log(objeto_cuello)
}


// ***********************Combinaciones*****************************************************************
let letra_figura = 0
let linea_figura = 0
let letra_linea = 0
let letra_linea_figura = 0

let contador_figura_letra = 1
let contador_figura_linea = 1
let contador_letra_linea = 1
let contador_letra_linea_figura = 1

function combinacion(Noombre_combinacion){
    switch (Noombre_combinacion) {
        case 'cuello_letrascuello_figuras':
            cuello_letra_figura()          
            break;
        case 'cuello_letrascuello_lineas':
            cuello_letra_linea()
            break;
        case 'cuello_figurascuello_lineas':
            cuello_figura_linea()          
          break;
        case 'cuello_letrascuello_figurascuello_lineas':
            cuello_letra_linea_figura()
          break;
    }
}

function cuello_letra_figura(){
    $('#agregar_combinacion_figura').click(function(){
        var nombre_cuello = $("#nombre_cuello").val()
        var descripcion_cuello = $("#descripcion_cuello").val()
        var imagen_diseno = $("#imagen_diseno").val()
        var cuello_letra_figura_id = 5
        var material_fondo_letra_figura = parseInt($( "#material_fondo_letra_figura option:selected" ).val())     
        var material_fondo_letra_figura_nombre = $( "#material_fondo_letra_figura option:selected" ).text()      
        var color_fondo_letra_figura = $( "#color_fondo_letra_figura" ).val()      
     
        //figura
        var material_combinacion_figura_5 = parseInt($( "#material_combinacion_figura_5 option:selected" ).val())     
        var material_combinacion_figura_5_nombre = $( "#material_combinacion_figura_5 option:selected" ).text() 
        var alto_combinacion_figura_5 = $("#alto_combinacion_figura_5").val()
        var ancho_combinacion_figura_5 = $("#ancho_combinacion_figura_5").val()
        var color_combinacion_figura_5 = $("#color_combinacion_figura_5").val()
        var imagen_diseno_combinacion_figura_5 = $("#imagen_diseno_combinacion_figura_5").val()

        var objeto_cuello_combinacion_figura_data = {
            //figura
            material_combinacion_figura_5,
            alto_combinacion_figura_5,
            color_combinacion_figura_5,
            ancho_combinacion_figura_5,
            imagen_diseno_combinacion_figura_5,
        }
        console.log(letra_figura)
        if(isNaN(material_fondo_letra_figura) || isNaN(material_combinacion_figura_5) || alto_combinacion_figura_5 === "" || alto_combinacion_figura_5 === "" || ancho_combinacion_figura_5 === ""){
            validar_aviso(letra_figura,cuello_letra_figura_id)   
        }else{
            if(letra_figura === 0){           
                pintar_fondo_combinacion(cuello_letra_figura_id,material_fondo_letra_figura_nombre,color_fondo_letra_figura)
                
                pintar_clases(cuello_letra_figura_id)
                letra_figura++;
            }       
            if(letra_figura === 1){
                ingresar_datos_objeto_principal(cuello_letra_figura_id,nombre_cuello,descripcion_cuello,imagen_diseno,material_fondo_letra_figura,color_fondo_letra_figura)
            }
            pintar_combinacion_figura(cuello_letra_figura_id,contador_figura_letra,material_combinacion_figura_5_nombre,color_combinacion_figura_5,alto_combinacion_figura_5,ancho_combinacion_figura_5)
            dejar_campos_vacios(cuello_letra_figura_id)
            contador_figura_letra++
            objeto_cuello.obj_datos_figura.push(objeto_cuello_combinacion_figura_data)
        }
        console.log(objeto_cuello)
    })

    $('#agregar_combinacion_letra').click(function(){
        var nombre_cuello = $("#nombre_cuello").val()
        var descripcion_cuello = $("#descripcion_cuello").val()
        var imagen_diseno = $("#imagen_diseno").val()
        var cuello_letra_figura_id = 5
        var material_fondo_letra_figura = parseInt($( "#material_fondo_letra_figura option:selected" ).val())     
        var material_fondo_letra_figura_nombre = $( "#material_fondo_letra_figura option:selected" ).text()      
        var color_fondo_letra_figura = $( "#color_fondo_letra_figura" ).val()      
        
        //letra
        var material_combinacion_letra_5 = parseInt($( "#material_combinacion_letra_5 option:selected" ).val())     
        var material_combinacion_letra_5_nombre = $( "#material_combinacion_letra_5 option:selected" ).text() 
        var tipo_fuente_combinacion_letra_5 = $( "#tipo_fuente_combinacion_letra_5 option:selected" ).text() 
        var contenido_texto_combinacion_letra_5 = $("#contenido_texto_combinacion_letra_5").val()
        var color_combinacion_letra_5 = $("#color_combinacion_letra_5").val()
        var tamano_combinacion_letra_5 = $("#tamano_combinacion_letra_5").val()
        
        var objeto_cuello_combinacion_letra_data = {
            //letra
            material_combinacion_letra_5,
            tipo_fuente_combinacion_letra_5,
            contenido_texto_combinacion_letra_5,
            color_combinacion_letra_5,
            tamano_combinacion_letra_5,
        }
                        
        if(isNaN(material_fondo_letra_figura) || isNaN(material_combinacion_letra_5) || tipo_fuente_combinacion_letra_5 === "Escoger tipo de fuente" || contenido_texto_combinacion_letra_5 === "" || tamano_combinacion_letra_5 === ""){
            validar_aviso(letra_figura,cuello_letra_figura_id)
        }else{
            if(letra_figura === 0){    
                pintar_fondo_combinacion(cuello_letra_figura_id,material_fondo_letra_figura_nombre,color_fondo_letra_figura)       
                pintar_clases(cuello_letra_figura_id)
                letra_figura++;
            }       
            if(letra_figura === 1){
                ingresar_datos_objeto_principal(cuello_letra_figura_id,nombre_cuello,descripcion_cuello,imagen_diseno,material_fondo_letra_figura,color_fondo_letra_figura)
            }
            pintar_combinacion_letra(cuello_letra_figura_id,contador_figura_letra,material_combinacion_letra_5_nombre,color_combinacion_letra_5,tamano_combinacion_letra_5,tipo_fuente_combinacion_letra_5,contenido_texto_combinacion_letra_5)
            dejar_campos_vacios(cuello_letra_figura_id)
            contador_figura_letra++
            objeto_cuello.obj_datos_letra.push(objeto_cuello_combinacion_letra_data)
        }
        console.log(objeto_cuello)
    })
}

function cuello_figura_linea(){

    $('#agregar_combinacion_figura_2').click(function(){
        var nombre_cuello = $("#nombre_cuello").val()
        var descripcion_cuello = $("#descripcion_cuello").val()
        var imagen_diseno = $("#imagen_diseno").val()
        var cuello_linea_figura_id = 8
        var material_fondo_linea_figura = parseInt($( "#material_fondo_figura_linea option:selected" ).val())     
        var material_fondo_linea_figura_nombre = $( "#material_fondo_figura_linea option:selected" ).text()      
        var color_fondo_linea_figura = $( "#color_fondo_linea_figura" ).val()      
     
        //figura
        var material_combinacion_figura_8 = parseInt($( "#material_combinacion_figura_8 option:selected" ).val())     
        var material_combinacion_figura_8_nombre = $( "#material_combinacion_figura_8 option:selected" ).text() 
        var alto_combinacion_figura_8 = $("#alto_combinacion_figura_8").val()
        var ancho_combinacion_figura_8 = $("#ancho_combinacion_figura_8").val()
        var color_combinacion_figura_8 = $("#color_combinacion_figura_8").val()
        var imagen_diseno_combinacion_figura_8 = $("#imagen_diseno_combinacion_figura_8").val()

        var objeto_cuello_combinacion_figura_data = {
            //figura
            material_combinacion_figura_8,
            alto_combinacion_figura_8,
            color_combinacion_figura_8,
            ancho_combinacion_figura_8,
            imagen_diseno_combinacion_figura_8,
        }
        if(isNaN(material_fondo_linea_figura) || isNaN(material_combinacion_figura_8) || alto_combinacion_figura_8 === "" || alto_combinacion_figura_8 === "" || ancho_combinacion_figura_8 === ""){
            validar_aviso(linea_figura,cuello_linea_figura_id)   
        }else{
            if(linea_figura === 0){           
                pintar_fondo_combinacion(cuello_linea_figura_id,material_fondo_linea_figura_nombre,color_fondo_linea_figura)
                pintar_clases(cuello_linea_figura_id)
                linea_figura++;
            }       
            if(linea_figura === 1){
                ingresar_datos_objeto_principal(cuello_linea_figura_id,nombre_cuello,descripcion_cuello,imagen_diseno,material_fondo_linea_figura,color_fondo_linea_figura)
            }
            pintar_combinacion_figura(cuello_linea_figura_id,contador_figura_linea,material_combinacion_figura_8_nombre,color_combinacion_figura_8,alto_combinacion_figura_8,ancho_combinacion_figura_8)
            dejar_campos_vacios(cuello_linea_figura_id)
            contador_figura_linea++
            objeto_cuello.obj_datos_figura.push(objeto_cuello_combinacion_figura_data)
        }
        console.log(objeto_cuello)
    })

    $('#agregar_combinacion_linea_2').click(function(){
        var nombre_cuello = $("#nombre_cuello").val()
        var descripcion_cuello = $("#descripcion_cuello").val()
        var imagen_diseno = $("#imagen_diseno").val()
        var cuello_linea_figura_id = 8
        var material_fondo_linea_figura = parseInt($( "#material_fondo_figura_linea option:selected" ).val())     
        var material_fondo_linea_figura_nombre = $( "#material_fondo_figura_linea option:selected" ).text()      
        var color_fondo_linea_figura = $( "#color_fondo_linea_figura" ).val()      
     
        //figura
        var material_combinacion_linea_8 = parseInt($( "#material_combinacion_linea_8 option:selected" ).val())     
        var material_combinacion_linea_8_nombre = $( "#material_combinacion_linea_8 option:selected" ).text() 
        var color_combinacion_linea_8 = $("#color_combinacion_linea_8").val()
        var grosor_combinacion_linea_8 = $("#grosor_combinacion_linea_8").val()

        var objeto_cuello_combinacion_linea_data = {
            //linea
            material_combinacion_linea_8,
            color_combinacion_linea_8,
            grosor_combinacion_linea_8,
        }
        if(isNaN(material_fondo_linea_figura) || isNaN(material_combinacion_linea_8) ||  grosor_combinacion_linea_8 === ""){
            validar_aviso(linea_figura,cuello_linea_figura_id)   
        }else{
            if(linea_figura === 0){           
                pintar_fondo_combinacion(cuello_linea_figura_id,material_fondo_linea_figura_nombre,color_fondo_linea_figura)
                pintar_clases(cuello_linea_figura_id)
                linea_figura++;
            }       
            if(linea_figura === 1){
                ingresar_datos_objeto_principal(cuello_linea_figura_id,nombre_cuello,descripcion_cuello,imagen_diseno,material_fondo_linea_figura,color_fondo_linea_figura)
            }
            pintar_combinacion_linea(cuello_linea_figura_id,contador_figura_linea,material_combinacion_linea_8_nombre,color_combinacion_linea_8,grosor_combinacion_linea_8)
            dejar_campos_vacios(cuello_linea_figura_id)
            contador_figura_linea++
            objeto_cuello.obj_datos_linea.push(objeto_cuello_combinacion_linea_data)
        }
        console.log(objeto_cuello)
    })
}          

function cuello_letra_linea(){
    $('#agregar_combinacion_letra_2').click(function(){
        var nombre_cuello = $("#nombre_cuello").val()
        var descripcion_cuello = $("#descripcion_cuello").val()
        var imagen_diseno = $("#imagen_diseno").val()
        var cuello_letra_linea_id = 6
        var material_fondo_letra_linea = parseInt($( "#material_fondo_letra_linea option:selected" ).val())     
        var material_fondo_letra_linea_nombre = $( "#material_fondo_letra_linea option:selected" ).text()      
        var color_fondo_letra_linea = $( "#color_fondo_letra_linea" ).val()      
        
        console.log('hola')
        //letra
        var material_combinacion_letra_6 = parseInt($( "#material_combinacion_letra_6 option:selected" ).val())     
        var material_combinacion_letra_6_nombre = $( "#material_combinacion_letra_6 option:selected" ).text() 
        var tipo_fuente_combinacion_letra_6 = $( "#tipo_fuente_combinacion_letra_6 option:selected" ).text() 
        var contenido_texto_combinacion_letra_6 = $("#contenido_texto_combinacion_letra_6").val()
        var color_combinacion_letra_6 = $("#color_combinacion_letra_6").val()
        var tamano_combinacion_letra_6 = $("#tamano_combinacion_letra_6").val()
        
        var objeto_cuello_combinacion_letra_data = {
            //letra
            material_combinacion_letra_6,
            tipo_fuente_combinacion_letra_6,
            contenido_texto_combinacion_letra_6,
            color_combinacion_letra_6,
            tamano_combinacion_letra_6,
        }
                        
        if(isNaN(material_fondo_letra_linea) || isNaN(material_combinacion_letra_6) || tipo_fuente_combinacion_letra_6 === "Escoger tipo de fuente" || contenido_texto_combinacion_letra_6 === "" || tamano_combinacion_letra_6 === ""){
            validar_aviso(letra_linea,cuello_letra_linea_id)
        }else{
            if(letra_linea === 0){    
                pintar_fondo_combinacion(cuello_letra_linea_id,material_fondo_letra_linea_nombre,color_fondo_letra_linea)       
                pintar_clases(cuello_letra_linea_id)
                letra_linea++;
            }       
            if(letra_linea === 1){
                ingresar_datos_objeto_principal(cuello_letra_linea_id,nombre_cuello,descripcion_cuello,imagen_diseno,material_fondo_letra_linea,color_fondo_letra_linea)
            }
            pintar_combinacion_letra(cuello_letra_linea_id,contador_letra_linea,material_combinacion_letra_6_nombre,color_combinacion_letra_6,tamano_combinacion_letra_6,tipo_fuente_combinacion_letra_6,contenido_texto_combinacion_letra_6)
            dejar_campos_vacios(cuello_letra_linea_id)
            contador_letra_linea++
            objeto_cuello.obj_datos_letra.push(objeto_cuello_combinacion_letra_data)
        }
        console.log(objeto_cuello)
    })

    $('#agregar_combinacion_linea_3').click(function(){
        var nombre_cuello = $("#nombre_cuello").val()
        var descripcion_cuello = $("#descripcion_cuello").val()
        var imagen_diseno = $("#imagen_diseno").val()
        var cuello_letra_linea_id = 6
        var material_fondo_letra_linea = parseInt($( "#material_fondo_letra_linea option:selected" ).val())     
        var material_fondo_letra_linea_nombre = $( "#material_fondo_letra_linea option:selected" ).text()      
        var color_fondo_letra_linea = $( "#color_fondo_letra_linea" ).val()    
     
        //linea
        var material_combinacion_linea_6 = parseInt($( "#material_combinacion_linea_6 option:selected" ).val())     
        var material_combinacion_linea_6_nombre = $( "#material_combinacion_linea_6 option:selected" ).text() 
        var color_combinacion_linea_6 = $("#color_combinacion_linea_6").val()
        var grosor_combinacion_linea_6 = $("#grosor_combinacion_linea_6").val()

        var objeto_cuello_combinacion_linea_data = {
            //linea
            material_combinacion_linea_6,
            color_combinacion_linea_6,
            grosor_combinacion_linea_6,
        }
        if(isNaN(material_fondo_letra_linea) || isNaN(material_combinacion_linea_6) ||  grosor_combinacion_linea_6 === ""){
            validar_aviso(letra_linea,cuello_letra_linea_id)   
        }else{
            if(letra_linea === 0){           
                pintar_fondo_combinacion(cuello_letra_linea_id,material_fondo_letra_linea_nombre,color_fondo_letra_linea)
                pintar_clases(cuello_letra_linea_id)
                letra_linea++;
            }       
            if(letra_linea === 1){
                ingresar_datos_objeto_principal(cuello_letra_linea_id,nombre_cuello,descripcion_cuello,imagen_diseno,material_fondo_letra_linea,color_fondo_letra_linea)
            }
            pintar_combinacion_linea(cuello_letra_linea_id,contador_letra_linea,material_combinacion_linea_6_nombre,color_combinacion_linea_6,grosor_combinacion_linea_6)
            dejar_campos_vacios(cuello_letra_linea_id)
            contador_letra_linea++
            objeto_cuello.obj_datos_linea.push(objeto_cuello_combinacion_linea_data)
        }
        console.log(objeto_cuello)
    })

}

function cuello_letra_linea_figura(){
    $('#agregar_combinacion_letra_3').click(function(){
        var nombre_cuello = $("#nombre_cuello").val()
        var descripcion_cuello = $("#descripcion_cuello").val()
        var imagen_diseno = $("#imagen_diseno").val()
        var cuello_letra_linea_id = 7
        var material_fondo_letra_linea = parseInt($( "#material_fondo_letra_linea_figura option:selected" ).val())     
        var material_fondo_letra_linea_nombre = $( "#material_fondo_letra_linea_figura option:selected" ).text()      
        var color_fondo_letra_linea = $( "#color_fondo_letra_linea_figura" ).val()      
        
        console.log('hola')
        //letra
        var material_combinacion_letra_6 = parseInt($( "#material_combinacion_letra_7 option:selected" ).val())     
        var material_combinacion_letra_6_nombre = $( "#material_combinacion_letra_7 option:selected" ).text() 
        var tipo_fuente_combinacion_letra_6 = $( "#tipo_fuente_combinacion_letra_7 option:selected" ).text() 
        var contenido_texto_combinacion_letra_6 = $("#contenido_texto_combinacion_letra_7").val()
        var color_combinacion_letra_6 = $("#color_combinacion_letra_7").val()
        var tamano_combinacion_letra_6 = $("#tamano_combinacion_letra_7").val()
        
        var objeto_cuello_combinacion_letra_data = {
            //letra
            material_combinacion_letra_6,
            tipo_fuente_combinacion_letra_6,
            contenido_texto_combinacion_letra_6,
            color_combinacion_letra_6,
            tamano_combinacion_letra_6,
        }
                        
        if(isNaN(material_fondo_letra_linea) || isNaN(material_combinacion_letra_6) || tipo_fuente_combinacion_letra_6 === "Escoger tipo de fuente" || contenido_texto_combinacion_letra_6 === "" || tamano_combinacion_letra_6 === ""){
            validar_aviso(letra_linea,cuello_letra_linea_id)
        }else{
            if(letra_linea_figura === 0){    
                pintar_fondo_combinacion(cuello_letra_linea_id,material_fondo_letra_linea_nombre,color_fondo_letra_linea)       
                pintar_clases(cuello_letra_linea_id)
                letra_linea_figura++;
            }       
            if(letra_linea_figura === 1){
                ingresar_datos_objeto_principal(cuello_letra_linea_id,nombre_cuello,descripcion_cuello,imagen_diseno,material_fondo_letra_linea,color_fondo_letra_linea)
            }
            pintar_combinacion_letra(cuello_letra_linea_id,contador_letra_linea,material_combinacion_letra_6_nombre,color_combinacion_letra_6,tamano_combinacion_letra_6,tipo_fuente_combinacion_letra_6,contenido_texto_combinacion_letra_6)
            dejar_campos_vacios(cuello_letra_linea_id)
            contador_letra_linea_figura++
            objeto_cuello.obj_datos_letra.push(objeto_cuello_combinacion_letra_data)
        }
        console.log(objeto_cuello)
    })

    $('#agregar_combinacion_linea_3').click(function(){
        var nombre_cuello = $("#nombre_cuello").val()
        var descripcion_cuello = $("#descripcion_cuello").val()
        var imagen_diseno = $("#imagen_diseno").val()
        var cuello_letra_linea_id = 6
        var material_fondo_letra_linea = parseInt($( "#material_fondo_letra_linea_figura option:selected" ).val())     
        var material_fondo_letra_linea_nombre = $( "#material_fondo_letra_linea_figura option:selected" ).text()      
        var color_fondo_letra_linea = $( "#color_fondo_letra_linea_figura" ).val()    
     
        //linea
        var material_combinacion_linea_6 = parseInt($( "#material_combinacion_linea_7 option:selected" ).val())     
        var material_combinacion_linea_6_nombre = $( "#material_combinacion_linea_7 option:selected" ).text() 
        var color_combinacion_linea_6 = $("#color_combinacion_linea_7").val()
        var grosor_combinacion_linea_6 = $("#grosor_combinacion_linea_7").val()

        var objeto_cuello_combinacion_linea_data = {
            //linea
            material_combinacion_linea_6,
            color_combinacion_linea_6,
            grosor_combinacion_linea_6,
        }
        if(isNaN(material_fondo_letra_linea) || isNaN(material_combinacion_linea_6) ||  grosor_combinacion_linea_6 === ""){
            validar_aviso(letra_linea,cuello_letra_linea_id)   
        }else{
            if(letra_linea_figura === 0){           
                pintar_fondo_combinacion(cuello_letra_linea_id,material_fondo_letra_linea_nombre,color_fondo_letra_linea)
                pintar_clases(cuello_letra_linea_id)
                letra_linea_figura++;
            }       
            if(letra_linea_figura === 1){
                ingresar_datos_objeto_principal(cuello_letra_linea_id,nombre_cuello,descripcion_cuello,imagen_diseno,material_fondo_letra_linea,color_fondo_letra_linea)
            }
            pintar_combinacion_linea(cuello_letra_linea_id,contador_letra_linea_figura,material_combinacion_linea_6_nombre,color_combinacion_linea_6,grosor_combinacion_linea_6)
            dejar_campos_vacios(cuello_letra_linea_id)
            contador_letra_linea_figura++
            objeto_cuello.obj_datos_linea.push(objeto_cuello_combinacion_linea_data)
        }
        console.log(objeto_cuello)
    })
    
    $('#agregar_combinacion_figura_3').click(function(){
        var nombre_cuello = $("#nombre_cuello").val()
        var descripcion_cuello = $("#descripcion_cuello").val()
        var imagen_diseno = $("#imagen_diseno").val()
        var cuello_linea_figura_id = 7
        var material_fondo_linea_figura = parseInt($( "#material_fondo_letra_linea_figura option:selected" ).val())     
        var material_fondo_linea_figura_nombre = $( "#material_fondo_letra_linea_figura option:selected" ).text()      
        var color_fondo_linea_figura = $( "#color_fondo_letra_linea_figura" ).val()      
     
        //figura
        var material_combinacion_figura_8 = parseInt($( "#material_combinacion_figura_7 option:selected" ).val())     
        var material_combinacion_figura_8_nombre = $( "#material_combinacion_figura_7 option:selected" ).text() 
        var alto_combinacion_figura_8 = $("#alto_combinacion_figura_7").val()
        var ancho_combinacion_figura_8 = $("#ancho_combinacion_figura_7").val()
        var color_combinacion_figura_8 = $("#color_combinacion_figura_7").val()
        var imagen_diseno_combinacion_figura_8 = $("#imagen_diseno_combinacion_figura_7").val()

        var objeto_cuello_combinacion_figura_data = {
            //figura
            material_combinacion_figura_8,
            alto_combinacion_figura_8,
            color_combinacion_figura_8,
            ancho_combinacion_figura_8,
            imagen_diseno_combinacion_figura_8,
        }
        if(isNaN(material_fondo_linea_figura) || isNaN(material_combinacion_figura_8) || alto_combinacion_figura_8 === "" || alto_combinacion_figura_8 === "" || ancho_combinacion_figura_8 === ""){
            validar_aviso(linea_figura,cuello_linea_figura_id)   
        }else{
            if(letra_linea_figura === 0){           
                pintar_fondo_combinacion(cuello_linea_figura_id,material_fondo_linea_figura_nombre,color_fondo_linea_figura)
                pintar_clases(cuello_linea_figura_id)
                letra_linea_figura++;
            }       
            if(letra_linea_figura === 1){
                ingresar_datos_objeto_principal(cuello_linea_figura_id,nombre_cuello,descripcion_cuello,imagen_diseno,material_fondo_linea_figura,color_fondo_linea_figura)
            }
            pintar_combinacion_figura(cuello_linea_figura_id,contador_figura_linea,material_combinacion_figura_8_nombre,color_combinacion_figura_8,alto_combinacion_figura_8,ancho_combinacion_figura_8)
            dejar_campos_vacios(cuello_linea_figura_id)
            contador_figura_linea++
            objeto_cuello.obj_datos_figura.push(objeto_cuello_combinacion_figura_data)
        }
        console.log(objeto_cuello)
    })
    

}
function validar_aviso(variable,cuello_combinacion_id){
    switch (cuello_combinacion_id) {
        case 5:
            if(variable === 0){
                $('#aviso_letra_figura').html("<strong  class='text-danger animacion'> Algunos Campos no estan completos</strong>")
            }else{
                $('#aviso_letra_figura_table').html("<strong  class='text-danger animacion'> Algunos Campos no estan completos</strong>")
            }  
          break;
        case 6:
            if(variable === 0){
                $('#aviso_letra_linea').html("<strong  class='text-danger animacion'> Algunos Campos no estan completos</strong>")
            }else{
                $('#aviso_letra_linea_table').html("<strong  class='text-danger animacion'> Algunos Campos no estan completos</strong>")
            }  
          break;
        case 7:
            if(variable === 0){
                $('#aviso_letra_linea_figura').html("<strong  class='text-danger animacion'> Algunos Campos no estan completos</strong>")
            }else{
                $('#aviso_letra_linea_figura_table').html("<strong  class='text-danger animacion'> Algunos Campos no estan completos</strong>")
            }  
        break;
        case 8:
            if(variable === 0){
                $('#aviso_linea_figura').html("<strong  class='text-danger animacion'> Algunos Campos no estan completos</strong>")
            }else{
                $('#aviso_figura_linea_table').html("<strong  class='text-danger animacion'> Algunos Campos no estan completos</strong>")
            }  
          break;
        case 'cuello_figurascuello_lineas':
          console.log('soy figuras y lineas');
          cuello_figura_linea()          
          break;
        case 'cuello_letrascuello_figurascuello_lineas':
          console.log('soy los tres juntos');
          break;
    }
    
    
}
function pintar_clases(cuello_combinacion_id){
    switch (cuello_combinacion_id) {
        case 5:
            $("#material_fondo_letra_figura").prop('disabled', true)
            $("#color_fondo_letra_figura").prop('disabled', true)
            $('#aviso_letra_figura').html("")  
            $('#aviso_letra_figura_table').html("")  
            $("#tabla_diseno_letra_figura").removeClass('hiden')
            $("#tabla_diseno_letra_figura").addClass('show') 
          break;
        case 6:
            $("#material_fondo_letra_linea").prop('disabled', true)
            $("#color_fondo_letra_linea").prop('disabled', true)
            $('#aviso_letra_linea').html("")  
            $('#aviso_letra_linea_table').html("")  
            $("#tabla_diseno_letra_linea").removeClass('hiden')
            $("#tabla_diseno_letra_linea").addClass('show') 
          break;
        case 7:
            $("#material_fondo_letra_linea_figura").prop('disabled', true)
            $("#color_fondo_letra_linea_figura").prop('disabled', true)
            $('#aviso_letra_linea_figura').html("")  
            $('#aviso_letra_linea__figura_table').html("")  
            $("#tabla_diseno_letra_linea_figura").removeClass('hiden')
            $("#tabla_diseno_letra_linea_figura").addClass('show') 
            break;
        case 8:
            $("#material_fondo_linea_figura").prop('disabled', true)
            $("#color_fondo_linea_figura").prop('disabled', true)
            $('#aviso_linea_figura').html("")  
            $('#aviso_linea_figura_table').html("")  
            $("#tabla_diseno_linea_figura").removeClass('hiden')
            $("#tabla_diseno_linea_figura").addClass('show') 
          break;
        case 'cuello_figurascuello_lineas':
          console.log('soy figuras y lineas');
          cuello_figura_linea()          
          break;
        case 'cuello_letrascuello_figurascuello_lineas':
          console.log('soy los tres juntos');
          break;
    }
    
}
function dejar_campos_vacios(cuello_combinacion_id){

    switch (cuello_combinacion_id) {
        case 5:
            $( "#material_letra selected" ).text("")  
            $("#contenido_texto_combinacion_letra_5").val("")
            $("#alto_combinacion_figura_5").val("")
            $("#ancho_combinacion_figura_5").val("")
            $('#aviso_letra_figura').html("") 
            $('#aviso_letra_figura_table').html("") 
          break;
        case 6:
            $( "#material_letra selected" ).text("")  
            $("#contenido_texto_combinacion_letra_6").val("")
            $("#alto_combinacion_figura_6").val("")
            $("#ancho_combinacion_figura_6").val("")
            $('#aviso_letra_linea').html("") 
            $('#aviso_letra_linea_table').html("") 
            break;
        case 7:
            $( "#material_letra selected" ).text("")  
            $("#contenido_texto_combinacion_letra_7").val("")
            $("#alto_combinacion_figura_7").val("")
            $("#ancho_combinacion_figura_7").val("")
            $('#aviso_letra_linea_figura').html("") 
            $('#aviso_letra_linea_figura_table').html("") 
            break;
        case 8:
            $("#alto_combinacion_figura_8").val("")
            $("#ancho_combinacion_figura_8").val("")
            $("#grosor_combinacion_linea_8").val("")
            $('#aviso_linea_figura').html("") 
            $('#aviso_linea_figura_table').html("") 

          break;
        case 'cuello_figurascuello_lineas':
          console.log('soy figuras y lineas');
          cuello_figura_linea()          
          break;
        case 'cuello_letrascuello_figurascuello_lineas':
          console.log('soy los tres juntos');
          break;
    }
    
}
function ingresar_datos_objeto_principal(cuello_letra_figura_id,nombre_cuello,descripcion_cuello,imagen_diseno,material_fondo_letra_figura,color_fondo_letra_figura){
    objeto_cuello.obj_cuello_id = cuello_letra_figura_id
    objeto_cuello.obj_nombre_cuello = nombre_cuello
    objeto_cuello.obj_descripcion_cuello = descripcion_cuello
    objeto_cuello.obj_imagen_diseno = imagen_diseno
    objeto_cuello.obj_material_fondo = material_fondo_letra_figura
    objeto_cuello.obj_color_fondo = color_fondo_letra_figura
}
function pintar_fondo_combinacion(cuello_combinacion_id,material_fondo_letra_figura_nombre,color_fondo_letra_figura){
    switch (cuello_combinacion_id) {
        case 5:
            $("#tbody_letra_figura").append(`
                <tr>
                    <th>fondo</th>
                    <th>${material_fondo_letra_figura_nombre}</th>
                    <th style="width: 20px;height: 10px; background: ${color_fondo_letra_figura}"></th>
                    <th>---</th>
                    <th>---</th>
                    <th>---</th>
                    <th class="text-center"><img   src="img/layouts/cancelar.svg" width="20px;" height="20px;" alt=""></th>
                </tr>`
            );
            break;
        case 6:
            $("#tbody_linea_letra").append(`
                <tr>
                    <th>fondo</th>
                    <th>${material_fondo_letra_figura_nombre}</th>
                    <th style="width: 20px;height: 10px; background: ${color_fondo_letra_figura}"></th>
                    <th>---</th>
                    <th>---</th>
                    <th>---</th>
                    <th class="text-center"><img   src="img/layouts/cancelar.svg" width="20px;" height="20px;" alt=""></th>
                </tr>`
            );
            break;
        case 7:
            $("#tbody_linea_letra_figura").append(`
                <tr>
                    <th>fondo</th>
                    <th>${material_fondo_letra_figura_nombre}</th>
                    <th style="width: 20px;height: 10px; background: ${color_fondo_letra_figura}"></th>
                    <th>---</th>
                    <th>---</th>
                    <th>---</th>
                    <th class="text-center"><img   src="img/layouts/cancelar.svg" width="20px;" height="20px;" alt=""></th>
                </tr>`
            );
            break;
        case 8:
            $("#tbody_linea_figura").append(`
                <tr>
                    <th>fondo</th>
                    <th>${material_fondo_letra_figura_nombre}</th>
                    <th style="width: 20px;height: 10px; background: ${color_fondo_letra_figura}"></th>
                    <th>---</th>
                    <th>---</th>
                    <th class="text-center"><img   src="img/layouts/cancelar.svg" width="20px;" height="20px;" alt=""></th>
                </tr>`
            );
            $("#alto_combinacion_figura_8").val("")      
          break;
        case 'cuello_figurascuello_lineas':
          console.log('soy figuras y lineas');
          cuello_figura_linea()          
          break;
        case 'cuello_letrascuello_figurascuello_lineas':
          console.log('soy los tres juntos');
          break;
    }
}

function pintar_combinacion_linea(cuello_combinacion_id,contador_figura_linea,material_combinacion_linea_8_nombre,color_combinacion_linea_8,grosor_combinacion_linea_8){  
    switch(cuello_combinacion_id) {
        case 6:
            $("#tbody_linea_letra").append(`
                <tr>
                    <th>linea ${contador_figura_linea}</th>
                    <th>${material_combinacion_linea_8_nombre}</th>
                    <th style="width: 20px;height: 5px; background: ${color_combinacion_linea_8}"></th>
                    <th>${grosor_combinacion_linea_8}</th>
                    <th>---</th>
                    <th>---</th>
                    <th class="text-center"><img   src="img/layouts/cancelar.svg" width="20px;" height="20px;" alt=""></th>
                </tr>`
            );
            $("#grosor_combinacion_linea_6").val("")
            break;
        case 7:
            $("#tbody_linea_letra_figura").append(`
                <tr>
                    <th>linea ${contador_figura_linea}</th>
                    <th>${material_combinacion_linea_8_nombre}</th>
                    <th style="width: 20px;height: 5px; background: ${color_combinacion_linea_8}"></th>
                    <th>${grosor_combinacion_linea_8}</th>
                    <th>---</th>
                    <th>---</th>
                    <th class="text-center"><img   src="img/layouts/cancelar.svg" width="20px;" height="20px;" alt=""></th>
                </tr>`
            );
            $("#grosor_combinacion_linea_6").val("")
            break;
        case 8:
            $("#tbody_linea_figura").append(`
                <tr>
                    <th>linea${contador_figura_linea}</th>
                    <th>${material_combinacion_linea_8_nombre}</th>
                    <th style="width: 20px;height: 5px; background: ${color_combinacion_linea_8}"></th>
                    <th>${grosor_combinacion_linea_8}</th>
                    <th>---</th>
                    <th class="text-center"><img   src="img/layouts/cancelar.svg" width="20px;" height="20px;" alt=""></th>
                </tr>`
            );
            $("#grosor_combinacion_linea_8").val("")     
          break;
        case 'cuello_figurascuello_lineas':
          console.log('soy figuras y lineas');
          cuello_figura_linea()          
          break;
        case 'cuello_letrascuello_figurascuello_lineas':
          console.log('soy los tres juntos');
          break;
    }
    
    
    
}
function pintar_combinacion_letra(cuello_combinacion_id,contador_figura_letra,material_combinacion_letra_5_nombre,color_combinacion_letra_5,tamano_combinacion_letra_5,tipo_fuente_combinacion_letra_5,contenido_texto_combinacion_letra_5){  
    
    switch (cuello_combinacion_id) {
        case 5:
            $("#tbody_letra_figura").append(`
                <tr>
                    <th>texto ${contador_figura_letra}</th>
                    <th>${material_combinacion_letra_5_nombre}</th>
                    <th style="width: 20px;height: 5px; background: ${color_combinacion_letra_5}"></th>
                    <th>${tamano_combinacion_letra_5}</th>
                    <th>${tipo_fuente_combinacion_letra_5}</th>
                    <th>${contenido_texto_combinacion_letra_5}</th>
                    <th class="text-center"><img   src="img/layouts/cancelar.svg" width="20px;" height="20px;" alt=""></th>
                </tr>`
            );
        $("#alto_combinacion_figura_5").val("")
          break;
        case 6:
            $("#tbody_linea_letra").append(`
                <tr>
                    <th>texto ${contador_figura_letra}</th>
                    <th>${material_combinacion_letra_5_nombre}</th>
                    <th style="width: 20px;height: 5px; background: ${color_combinacion_letra_5}"></th>
                    <th>${tamano_combinacion_letra_5}</th>
                    <th>${tipo_fuente_combinacion_letra_5}</th>
                    <th>${contenido_texto_combinacion_letra_5}</th>
                    <th class="text-center"><img   src="img/layouts/cancelar.svg" width="20px;" height="20px;" alt=""></th>
                </tr>`
            );
            $("#alto_combinacion_figura_8").val("")      
          break;
        case 7:
            $("#tbody_linea_letra_figura").append(`
            <tr>
                <th>texto ${contador_figura_letra}</th>
                <th>${material_combinacion_letra_5_nombre}</th>
                <th style="width: 20px;height: 5px; background: ${color_combinacion_letra_5}"></th>
                <th>${tamano_combinacion_letra_5}</th>
                <th>${tipo_fuente_combinacion_letra_5}</th>
                <th>${contenido_texto_combinacion_letra_5}</th>
                <th class="text-center"><img   src="img/layouts/cancelar.svg" width="20px;" height="20px;" alt=""></th>
            </tr>`
            );
            $("#alto_combinacion_figura_7").val("")      
            break;
        case 'cuello_letrascuello_figurascuello_lineas':
          console.log('soy los tres juntos');
          break;
    }

}
function pintar_combinacion_figura(cuello_combinacion_id,contador_figura_letra,material_combinacion_figura_5_nombre,color_combinacion_figura_5,alto_combinacion_figura_5,ancho_combinacion_figura_5){
    switch (cuello_combinacion_id) {
        case 5:
            $("#tbody_letra_figura").append(`
                <tr>
                    <th>figura ${contador_figura_letra}</th>
                    <th>${material_combinacion_figura_5_nombre}</th>
                    <th style="width: 20px;height: 5px; background: ${color_combinacion_figura_5}"></th>
                    <th>${alto_combinacion_figura_5}</th>
                    <th>${ancho_combinacion_figura_5}</th>
                    <th>---</th>
                    <th class="text-center"><img src="img/layouts/cancelar.svg" width="20px;" height="20px;" alt=""></th>
                </tr>`
            );
            $("#alto_combinacion_figura_5").val("")
          break;
          case 7:
            $("#tbody_letra_linea_figura").append(`
                <tr>
                    <th>figura ${contador_figura_letra}</th>
                    <th>${material_combinacion_figura_5_nombre}</th>
                    <th style="width: 20px;height: 5px; background: ${color_combinacion_figura_5}"></th>
                    <th>${alto_combinacion_figura_5}</th>
                    <th>${ancho_combinacion_figura_5}</th>
                    <th>---</th>
                    <th class="text-center"><img src="img/layouts/cancelar.svg" width="20px;" height="20px;" alt=""></th>
                </tr>`
            );
            $("#alto_combinacion_figura_7").val("")
          break;
        case 8:
            $("#tbody_linea_figura").append(`
                <tr>
                    <th>figura ${contador_figura_linea}</th>
                    <th>${material_combinacion_figura_5_nombre}</th>
                    <th style="width: 20px;height: 5px; background: ${color_combinacion_figura_5}"></th>
                    <th>${alto_combinacion_figura_5}</th>
                    <th>${ancho_combinacion_figura_5}</th>
                    <th class="text-center"><img src="img/layouts/cancelar.svg" width="20px;" height="20px;" alt=""></th>
                </tr>`
            );
            $("#alto_combinacion_figura_8").val("")      
          break;
        case 'cuello_figurascuello_lineas':
          console.log('soy figuras y lineas');
          cuello_figura_linea()          
          break;
        case 'cuello_letrascuello_figurascuello_lineas':
          console.log('soy los tres juntos');
          break;
    }
    
}

// funcion ajax mandar datos al controlador 
function tabla_cuello_mandar_datos(){
    $.ajax({
        url: "http://127.0.0.1:8000/api/crear-cuello/cuello",
        data: objeto_cuello,
        dataType: "json",
        method: "POST",
        success: function (response) {
            console.log("data recibida",response)
            if(response){
                swal({
                    title: "Correcto",
                    text: "se guardado correctamente",
                    icon: "success",
                    button: "Aceptar!",
                  })
                  .then((value) => {
                    window.location.href = "http://127.0.0.1:8000/crear-cuello";
                });
            }
        },
        statusCode: {
            404: function() {
               alert('Error, no funciona');
            }
        },
        error:function(x,xs,xt){
            window.open(JSON.stringify(x));
        }
    });
}