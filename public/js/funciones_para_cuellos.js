
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
        $(".modal_aviso").attr('id','modal_mostrar_formulario')
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
    tallas:[],
}

let figura = 0
let fondo_cuello_cm = 10
let contador_alto = 0
let figura_eliminar_id = 1
let id_tbody = ''
let id_table = ''
let id_material_fondo = ''
let id_material = ''
let id_color_fondo = ''

let id_color = ''
let id_alto = ''
let id_ancho = ''
let aviso = ''
let aviso_table = ''
let aviso_alto = ''
let fondo = ''
let talla_eliminar_id = 1
let sma_cantidades = 0
const precio_total = 1200
let total = 0
// ****************************** tallas ****************************************************************************
function pintar_tabla_tallas(array){
    let total_cantiades = 0
    total = 0
    $("#tbody_tallas").html('')
    if(array.length > 0){
        array.forEach(element => {
            total_cantiades = precio_total * element.cantidad_tallas
            total = total + total_cantiades
            $("#tbody_tallas").append(`
            <tr>
                <th>${element.talla_seleccionada_nombre}</th>
                <th>${element.cantidad_tallas}</th>
                <th>${total_cantiades}</th>
                <th class="text-center "><img class="eliminar_talla" src="img/layouts/cancelar.svg" data-id="${element.talla_eliminar_id}" width="20px;" height="20px;" alt=""></th>            
            </tr>
            `
            );
       });
    }   
    
}

function agregar_tallas(){
    var talla_seleccionada = $( "#talla_seleccionada option:selected" ).val()      
    var talla_seleccionada_nombre = $( "#talla_seleccionada option:selected" ).text()  
    var cantidad_tallas = $("#cantidad_tallas").val()
    var objeto_cuello_tallas_data = {
        talla_eliminar_id,
        talla_seleccionada_nombre,
        cantidad_tallas,    
    }
    if(talla_seleccionada !== "" && cantidad_tallas > 0 ){
        $('#tabla_tallas').removeClass('hiden')
        $('#tabla_tallas').addClass('show')       
        objeto_cuello.tallas.push(objeto_cuello_tallas_data)
        pintar_tabla_tallas(objeto_cuello.tallas)
        talla_eliminar_id++
        sma_cantidades = sma_cantidades + parseInt(cantidad_tallas)
        $("#cantidad_tallas").val("") 
        $("#suma_cantidades").text(sma_cantidades) 
        $("#suma_valor_total").text(total) 
        // $("#suma_valor_total").text() 
    }
    $('.tallas').click(function(){
        if($(this).val() === "1"){
            $('#imagen_punos_fajas').removeClass('hiden')
            $('#imagen_punos_fajas').addClass('show')
        }else{
            $('#imagen_punos_fajas').addClass('hiden')
        }
    }) 
    console.log(objeto_cuello);
    $(document).ready(function(){
        $('body').on('click','.eliminar_talla', function(){
            let id = parseInt($(this).attr('data-id'))
            eliminar_talla(objeto_cuello.tallas,id)  
            pintar_tabla_tallas(objeto_cuello.tallas)
        } )   
    })
}

// *************************** cuello figura ***********************************************************

// agregar tabla cuello figura
function tabla_cuello_figura(){
    id_tbody = $('#tbody_figura').attr('id')
    id_table = $('#tabla_diseno_figura').attr('id')
    id_material_fondo = $( "#material_fondo_figura").attr('id')      
    id_material = $( "#material_figura" ).attr('id')
    id_color_fondo = $("#color_fondo_figura").attr('id')

    var material_fondo_figura = $( "#material_fondo_figura option:selected" ).val()      
    var material_fondo_figura_noombre = $( "#material_fondo_figura option:selected" ).text()      
    var color_fondo_figura = $("#color_fondo_figura").val()
    var cuello_figura_id = $("#cuello_figura_id").val()
    var nombre_cuello = $("#nombre_cuello").val()
    var descripcion_cuello = $("#descripcion_cuello").val()
    var imagen_diseno = $("#imagen_diseno").val()

    // var formData = new FormData();
    // formData.append('photo', $imagen_diseno[0].files[0]);
    // console.log(formData)

    id_color = $("#color_figura").attr('id')
    id_alto = $("#alto_figura").attr('id')
    id_ancho = $("#ancho_figura").attr('id')
    aviso_alto = $('#aviso_figura_alto').attr('id')
    aviso_table = $('#aviso_figura_table').attr('id')
    aviso = $('#aviso_figura').attr('id')

    var material_figura = parseInt($( "#material_figura option:selected" ).val())     
    var material_figura_nombre = $( "#material_figura option:selected" ).text()      
    var alto_figura = $("#alto_figura").val()
    var ancho_figura = $("#ancho_figura").val()
    var color_figura = $("#color_figura").val()
    var imagen_diseno_figura = $("#imagen_diseno_figura").val()


    if(alto_figura <= 10 && alto_figura >0 && ancho_figura >0 && ancho_figura <= 50){
        $('#aviso_figura_alto').html("")
        $('#aviso_figura_table').html("")  

        if(alto_figura.length >=3 ){

        }
        if(!validar_alto_cm(alto_figura)){
            $('#aviso_figura').html("")  
            $('#aviso_figura_table').html("<strong  class='text-danger animacion'>se excedio el numero maximo de alto</strong>")
        }else{
            var objeto_cuello_figura_data = {
                figura_eliminar_id,
                material_figura,
                alto_figura,
                ancho_figura,
                color_figura,
                imagen_diseno_figura,
            }
            if(!validate_form(material_fondo_figura, color_fondo_figura, material_figura, alto_figura, ancho_figura, color_figura)){
                if(figura === 0){
                    $('#aviso_figura').html("<strong  class='text-danger animacion'> Algunos Campos no estan completos</strong>")
                }else{
                    $('#aviso_figura_table').html("<strong  class='text-danger animacion'> Algunos Campos no están completos</strong>")
                }
            }else{                         
                if(figura === 0){  
                    fondo = `<tr>
                                <th>fondo</th>
                                <th>${material_fondo_figura_noombre}</th>
                                <th style="width: 20px;height: 10px; background: ${color_fondo_figura}"></th>
                                <th id="fondo_cuello_cm">${fondo_cuello_cm} cm</th>    
                                <th>---</th>
                                <th class="text-center "  ><img class="eliminar_fondo" src="img/layouts/cancelar.svg" width="20px;" height="20px;" alt=""></th>            
                            </tr>`
                    figura++
                    dejar_valores_in_true()
                }       
                if(figura=== 1){
                    objeto_cuello.obj_cuello_id = cuello_figura_id
                    objeto_cuello.obj_nombre_cuello = nombre_cuello
                    objeto_cuello.obj_descripcion_cuello = descripcion_cuello
                    objeto_cuello.obj_imagen_diseno = imagen_diseno
                    objeto_cuello.obj_material_fondo = material_fondo_figura
                    objeto_cuello.obj_color_fondo = color_fondo_figura
                }
                objeto_cuello.obj_datos_figura.push(objeto_cuello_figura_data)
                pintar_tr( objeto_cuello.obj_datos_figura,id_tbody,material_figura_nombre)
                dejar_campos_vacioss()
                figura_eliminar_id++            
            }   
        }
    }else{
        $('#aviso_figura_table').html("")  
        $('#aviso_figura_alto').html("<strong  class='text-danger animacion'> Estás intentado ingresar un dato mayor a 10 cm o un dato negativo o Algunos campos estan vacios</strong>")
    }
    
    if(validar_fondo_cuello_cm()){
        $("#material_figura").prop('disabled', false)
    }
    
    $(document).ready(function(){
        $('body').on('click','.eliminar_figura', function(){
            let id = parseInt($(this).attr('data-id'))
            eliminar(objeto_cuello.obj_datos_figura,id)  
            pintar_tr( objeto_cuello.obj_datos_figura,id_tbody,material_figura_nombre)
        } )   
    })
    $(document).ready(function(){
        $('body').on('click','.eliminar_fondo', function(){
            objeto_cuello.obj_material_fondo = ""
            objeto_cuello.obj_color_fondo = ""
            objeto_cuello.obj_datos_figura = []
            figura = 0
            fondo_cuello_cm = 10
            dejar_valores_in_false()
        })   
    })
    console.log(objeto_cuello)
}

function dejar_valores_in_false(){    
    $("#" + id_material_fondo).prop('disabled', false)
    $("#" + id_color_fondo).prop('disabled', false)
    $("#" + id_material).prop('disabled', false)
    $("#" + id_tbody).html("")
    $("#" + id_table).removeClass('show')
    $("#" + id_table).addClass('hiden')    
}

function dejar_valores_in_true(){    
    $("#" + id_material_fondo).prop('disabled', true)
    $("#" + id_color_fondo).prop('disabled', true)
    $("#" + id_material).prop('disabled', true)
    $("#" + aviso).html("")    
    $("#" + id_table).removeClass('hiden')
    $("#" + id_table).addClass('show')    
}

function dejar_campos_vacioss(){
    $("#" + id_alto).val("")    
    $("#" + id_color).val("")    
    $("#" + id_ancho).val("")    
    $("#" + aviso).html("")    
    $("#" + aviso_alto).html("")    
    $("#" + aviso_table).html("")  
}

function validar_alto_cm(alto_figura){
    fondo_cuello_cm = fondo_cuello_cm - parseFloat(alto_figura)
    if(fondo_cuello_cm >= 1){
        return true
    }
    fondo_cuello_cm = fondo_cuello_cm + parseFloat(alto_figura)
    return false
}

function validar_fondo_cuello_cm(){
    if(fondo_cuello_cm === 10){
        return true
    }
    return false
}
 
function validate_form(material_fondo_figura, color_fondo_figura, material_figura, alto_figura, ancho_figura, color_figura){
    if( isNaN(material_figura) || material_fondo_figura === "" || color_fondo_figura === "" || alto_figura === "" || ancho_figura === "" || color_figura === " " ){
        return false
    }
    return true
}

function eliminar_talla(array, id){
    array.forEach(talla => {
       if(talla.talla_eliminar_id === id){
           let index = array.indexOf(talla)
           if(index !== -1){
                console.log(fondo_cuello_cm)
                sma_cantidades = sma_cantidades - parseInt(talla.cantidad_tallas)
                total = total - precio_total * parseInt(talla.cantidad_tallas)
                $("#suma_cantidades").text(sma_cantidades) 
                $("#suma_valor_total").text(total) 
                array.splice(index,1)
           }
       }
    });
    console.log(objeto_cuello)
}

function eliminar(array, id){
    array.forEach(figura => {
       if(figura.figura_eliminar_id === id){
           let index = array.indexOf(figura)
           if(index !== -1){
                fondo_cuello_cm = fondo_cuello_cm + parseFloat( figura.alto_figura)
                console.log(fondo_cuello_cm)
                array.splice(index,1)
           }
       }
    });
}

function pintar_tr(array,id_tbody,material_noombre){
    $("#" + id_tbody).html('')
    $("#" + id_tbody).append(fondo)
    $(document).ready(function(){
        $('#fondo_cuello_cm').text(fondo_cuello_cm + ' cm')
    })
    if(array.length > 0){
        array.forEach(element =>{
            $("#" + id_tbody).append(`
                <tr>
                    <th>figura</th>
                    <th>${material_noombre}</th>
                    <th style="width: 20px;height: 5px; background: ${element.color_figura}"></th>
                    <th>${element.alto_figura} cm</th>
                    <th>${element.ancho_figura} cm</th>
                    <th class="text-center "  ><img class="eliminar_figura" src="img/layouts/cancelar.svg" data-id="${element.figura_eliminar_id}" width="20px;" height="20px;" alt=""></th>            
                </tr>
            `
            );
        })
    }
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
                        window.location.href = "http://127.0.0.1:8000/crear-cuello/diseno-cuellos";
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
            $("#material_linea").prop('disabled', true)
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
                $('#aviso_linea_figura_table').html("<strong  class='text-danger animacion'> Algunos Campos no estan completos</strong>")
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
        case 4:
            $("#material_fondo_figura").prop('disabled', true)
            $("#color_fondo_figura").prop('disabled', true)
            $("#material_figura").prop('disabled', true)
            $('#aviso_figura').html("")  
            $("#tabla_diseno_figura").removeClass('hiden')
            $("#tabla_diseno_figura").addClass('show') 
          break;
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
            $("#material_fondo_figura_linea").prop('disabled', true)
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
        case 4:
            $("#alto_figura").val("")
            $("#ancho_figura").val("")
            $("#color_figura").val("")
            $('#aviso_figura').html("")  
            $('#aviso_figura_table').html("")  
            $('#aviso_figura_alto').html("") 
          break;
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
                    window.location.href = "http://127.0.0.1:8000/crear-cuello/diseno-cuellos";
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

