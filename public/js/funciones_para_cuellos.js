// var ip = "ladysconfecciones.herokuapp.com";

// var ip = '127.0.0.1:8000';
//var ip = window.location.protocol + "//" + window.location.host

$(document).ready(function(){
    $(".form").submit(function(e){
        e.preventDefault();
    })    
})

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
    var imagen = $("#imagen_diseno").val()
    var extensiones = imagen.substring(imagen.lastIndexOf("."));
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
        validacion_alert() 
    }else if(nameForm.length === 0 ) {
        validacion_alert_tipo_cuello()
    }else if(nombre_cuello === ""){
        validacion_alert_tipo_cuello_nombre()
    }else if(imagen === ""){        
        validacion_alert_tipo_cuello_img()
    }else if(tipo_img(extensiones)){
        validacion_alert_tipo_img()
    }else {
        console.log(nameForm)
        $('#aviso').html("")  
        $(`#formulario_${nameForm}`).removeClass('hiden');
        $(`#formulario_${nameForm}`).addClass('show');
        fondo_cuello_cm = 10 
        vaciar_objeto()
        vaciar_variables()
        $(`#formulario_${nameForm} select`).prop('disabled', false)
        $(`#formulario_${nameForm} input`).prop('disabled', false)
        $(`#formulario_${nameForm} tbody`).html("")
        $(`#formulario_${nameForm} .tabla_diseno`).removeClass('show')
        $(`#formulario_${nameForm} .tabla_diseno`).addClass('hiden')
        $(`#formulario_${nameForm} .agregar`).text("Agregar")
        $(`#formulario_${nameForm} .agregar_figura`).text("Agregar figura")
        $(`#formulario_${nameForm} .agregar_linea`).text("Agregar linea")
        $(`#formulario_${nameForm} .agregar_texto`).text("Agregar texto")
        
        $(`#formulario_${nameForm}`)[0].reset();
        
    }
    $( "#material_fondo_liso" ).prop('disabled', false)    

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
    punos_fajas:[],
}

let figura = 0
let fondo_cuello_cm = 10
let contador_alto = 0
let figura_eliminar_id = 1
let letra_eliminar_id = 1
let linea_eliminar_id = 1
let id_tbody = ''
let id_table = ''
let id_material_fondo = ''
let id_material = ''
let id_material_letra = ''
let id_material_figura = ''
let id_material_linea = ''
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
let talla_nombre =""
let precio_diseno = 0
let button_crear = 'hola'
let array_tabla = []
let button = 'hola'
let button_combinacion_3 = 'hola'
let form_active = ''

function vaciar_variables(){
    figura_eliminar_id = 1
    letra_eliminar_id = 1
    linea_eliminar_id = 1
    figura = 0
    talla_eliminar_id = 1
    sma_cantidades = 0
    letra = 0;
    linea = 0;

    letra_figura = 0
    linea_figura = 0
    letra_linea = 0
    letra_linea_figura = 0

    eliminar_combinacion = 1
    contador_figura_linea = 1
    contador_letra_linea = 1
    contador_letra_linea_figura = 1

    array_combinacion1 = []
    array_combinacion2 = []
    array_combinacion3 = []

}

// ****************************** tallas ****************************************************************************
function pintar_tabla_tallas(array){
    let total_cantiades = 0
    total = 0
    $("#tbody_tallas").html('')
    if(array.length > 0){
        array.forEach(element => {
            total_cantiades = precio * element.cantidad_tallas
            total = total + total_cantiades
            $("#tbody_tallas").append(`
            <tr>
                <th>${element.talla_seleccionada_nombre}</th>
                <th>${element.cantidad_tallas}</th>
                <th>${precio}</th>
                <th>${total_cantiades}</th>
                <th class="text-center "><img class="eliminar_talla" title="eliminar" src="/icons/basura.svg" id="${element.talla_seleccionada_nombre}" data-id="${element.talla_eliminar_id}" width="20px;" height="20px;" alt=""></th>            
            </tr>
            `
            );
       });
    }    
}

function pintar_tabla_tallas_diseno(array){
    let total_cantiades = 0
    total = 0
    $("#tbody_tallas_diseno").html('')
    if(array.length > 0){
        array.forEach(element => {
            total_cantiades = precio_diseno * element.cantidad_tallas
            total = total + total_cantiades
            $("#tbody_tallas_diseno").append(`
            <tr>
                <th>${element.talla_seleccionada_nombre}</th>
                <th>${element.cantidad_tallas}</th>
                <th>${precio_diseno}</th>
                <th>${total_cantiades}</th>
                <th class="text-center "><img class="eliminar_talla_diseno" title="eliminar" src="/icons/basura.svg" id="${element.talla_seleccionada_nombre}" data-id="${element.talla_eliminar_id}" width="20px;" height="20px;" alt=""></th>            
            </tr>
            `
            );
       });
    }    
}

function buscar_talla(talla_seleccionada){
    for(let talla of objeto_cuello.tallas ){
        if(talla.talla_seleccionada === talla_seleccionada) return true
    }
    return false
}

function agregar_tallas(){
    var talla_seleccionada = $( "#talla_seleccionada option:selected" ).val()      
    if(!buscar_talla(talla_seleccionada)){
        var talla_seleccionada_nombre = $( "#talla_seleccionada option:selected" ).text()
        var cantidad_tallas = $("#cantidad_tallas").val()
        var objeto_cuello_tallas_data = {
            talla_eliminar_id,
            talla_seleccionada,
            talla_seleccionada_nombre,
            cantidad_tallas,   
            id_diseno, 
        }   
        
        console.log(precio);
        if(talla_seleccionada !== "" && cantidad_tallas > 0 ){
            $('#tabla_tallas').removeClass('hiden')
            $('#tabla_tallas').addClass('show')       
            objeto_cuello.tallas.push(objeto_cuello_tallas_data)
            pintar_tabla_tallas(objeto_cuello.tallas)
            talla_eliminar_id++
            sma_cantidades = sma_cantidades + parseInt(cantidad_tallas)
            $("#cantidad_tallas").val("") 
            $("#suma_cantidades").text(sma_cantidades) 
            $("#suma_valor_total").text('$'+total) 
            talla_nombre = talla_seleccionada_nombre
        }else{
            if(cantidad_tallas < 0){
                return validacion_alert_dato_invalido()
            }
            validacion_alert()
        }
        $( "#talla_seleccionada").val("") 
    }else{
        validacion_alert_talla()
    }

    console.log(objeto_cuello);  
}

// funcion de tallas crear diseño
function agregar_tallas_crear_diseno(){
    var talla_seleccionada = $( "#talla_seleccionada_diseno option:selected" ).val()      
    if(!buscar_talla(talla_seleccionada)){
        var talla_seleccionada_nombre = $( "#talla_seleccionada_diseno option:selected" ).text()
        var cantidad_tallas = $("#cantidad_tallas_diseno").val()
        var objeto_cuello_tallas_data = {
            talla_eliminar_id,
            talla_seleccionada,
            talla_seleccionada_nombre,
            cantidad_tallas,
            id_diseno,
        }    

        if(talla_seleccionada !== "" && cantidad_tallas > 0 ){
            $('#tabla_tallas_diseno').removeClass('hiden')
            $('#tabla_tallas_diseno').addClass('show')       
            objeto_cuello.tallas.push(objeto_cuello_tallas_data)
            pintar_tabla_tallas_diseno(objeto_cuello.tallas)
            talla_eliminar_id++
            sma_cantidades = sma_cantidades + parseInt(cantidad_tallas)
            $("#cantidad_tallas_diseno").val("") 
            $("#suma_cantidades_diseno").text(sma_cantidades) 
            $("#suma_valor_total_disno").text('$'+total) 
        }else{
            if(cantidad_tallas < 0){
                return validacion_alert_dato_invalido()
            }
            validacion_alert()
        }
        $( "#talla_seleccionada_diseno").val("") 
    }else{
        validacion_alert_talla()
    }
    console.log(objeto_cuello);  
}

// seleccionar la imagen del puño y faja
$('.tallas').click(function(){
    var imagen_faja = $("#faja_img").val()
    var imagen_puno = $("#puno_img").val()
    var extensiones_faja = imagen_faja.substring(imagen_faja.lastIndexOf("."));
    var extensiones_puno = imagen_puno.substring(imagen_puno.lastIndexOf("."));
    
    // if(!tipo_img(extensiones_faja)){
    //     validacion_alert_tipo_img()
    // }
    // if(!tipo_img(extensiones_puno)){
    //     validacion_alert_tipo_img()
    // }
    if($(this).val() === "1"){
        $('#imagen_punos_puno').removeClass('hiden')
        $('#imagen_punos_puno').addClass('show')
    }else if($(this).val() === "2"){
        $('#imagen_punos_puno').addClass('hiden')
    }else if($(this).val() === "3"){
        $('#imagen_punos_fajas').removeClass('hiden')
        $('#imagen_punos_fajas').addClass('show')
    }else if($(this).val() === "4"){
        $('#imagen_punos_fajas').addClass('hiden')
    }
})

function tipo_img(extension){
    console.log(extension)
    if(extension.toUpperCase() !== ".JPG" && extension.toUpperCase() !== ".JPEG" && extension.toUpperCase() !== ".PNG"){
        return true
    }
    return false
}

function precio_cuello(id_modelo, id_material, id_precio){
    $.ajax({
        url:`${ip}/api/crear-cuello/precio-modelo/${id_modelo}/${id_material}`,
        success:function(data){
            console.log("estoy en precio ",data)                             
            precio_diseno = data.valor_modelo
            console.log(precio_diseno);
            $("#"+id_precio).text('$'+precio_diseno)
        },
        error:function(error){
            console.log(error)
        }
    });
}



// validar si escogio una talla, para guardar el pedido
$(document).ready(function(){
    eliminar_talla_class()
})

function validacion_cuello(){
    if(objeto_cuello.obj_nombre_cuello !== "" ){
        return true
    }
    return false
}

$('body').on('click','.mandar_datos', function(){ 
    console.log( objeto_cuello);
    punos_fajas()
    if(validacion_cuello()) {
        if(validar_cantidades_form()){
            if(validar_checked_puno() && validar_checked_faja()){
                sumar_carrito()
                tabla_cuello_mandar_datos()
            }else{
                console.log(validar_img_puno_faja())
                if(validar_img_puno_faja()){
                    if(validar_extension_puno_faja()){
                        sumar_carrito()
                        tabla_cuello_mandar_datos()
                    }else{
                        validacion_alert_tipo_img()
                    }
                }else{
                    validacion_alert_tipo_cuello_img()
                }
            }           
        }
    }else{
        validacion_alert()
    }    
}) 

function validar_checked_puno(){

    if($("#si_puno").prop('checked')) return true
    return false
}

function validar_checked_faja(){

    if($("#si_faja").prop('checked')) return true
    return false
}

function validar_extension_puno_faja(){
    var imagen_faja = $("#faja_img").val()
    var imagen_puno = $("#puno_img").val()

    bool_puno = false
    bool_faja = false

    if(imagen_faja !== ""){
        var extensiones_faja = imagen_faja.substring(imagen_faja.lastIndexOf("."));
        console.log("faja", extensiones_faja)
        if(!tipo_img(extensiones_faja)){
            bool_faja = true
        }
    }else{
        bool_faja = true
    }

    if(imagen_puno !== ""){
        var extensiones_puno = imagen_puno.substring(imagen_puno.lastIndexOf("."));
        console.log("puno", extensiones_puno)
        
        if(!tipo_img(extensiones_puno)){
            bool_puno = true
        }
    }else{
        bool_puno = true
    }

    if(bool_puno && bool_faja) return true

    return false
}

function validar_img_puno_faja(){
    var imagen_faja = $("#faja_img").val()
    var imagen_puno = $("#puno_img").val()

    console.log(imagen_puno)

    if($("#no_puno").prop('checked')){
        if(imagen_puno === "") return false
    }else{
        return true
    }

    if($("#no_faja").prop("checked")){
        if(imagen_faja === "") return false
    }else{
        return true
    }

    return true
}

function validar_cantidades_form(){
    console.log(form_active);

    if(form_active === 'lineas' || form_active === 'liso'){
        if(cantidades_total()){
            return true
        }
        validacion_alert_carrito_diseno()
        return false
    }
    if(form_active === 'combinacion'){
        console.log(form_active);
        if(cantidades_total_combinacion()){
            return true
        }
        validacion_alert_carrito_diseno_combinacion()
        return false
    }
}

function sumar_carrito(){
    let numero_producto = localStorage.getItem("numProducts")
    let sum_puno = 0
    let sum_faja = 0 
    if(objeto_cuello.punos_fajas.length > 0){
        sum_puno =  objeto_cuello.punos_fajas[0].punos !== "" ? 1 : 0;
        sum_faja =  objeto_cuello.punos_fajas[0].fajas !== "" ? 1 : 0;
    }

    if (numero_producto === null) {
        localStorage.setItem("numProducts",(objeto_cuello.tallas.length + objeto_cuello.punos_fajas.length))
    }else{
        let auxiliar = parseInt(numero_producto) + (objeto_cuello.tallas.length + sum_puno + sum_faja)
        
        localStorage.setItem("numProducts",auxiliar)
    }
}

function validar_cantidades() {
    if(sma_cantidades === 0 && objeto_cuello.punos_fajas.length > 0 ){
        return true
    }else if(sma_cantidades >= 6 && objeto_cuello.punos_fajas.length === 0){
        return true
    }else if(sma_cantidades >= 6 && objeto_cuello.punos_fajas.length > 0 ){
        return true
    }else if(sma_cantidades > 0 && sma_cantidades < 6 && objeto_cuello.punos_fajas.length > 0){
        validacion_alert_carrito_cantidad()
        return false
    }else if(sma_cantidades > 0 && sma_cantidades < 6 && objeto_cuello.punos_fajas.length === 0){
        validacion_alert_carrito_cantidad()
        return false
    } 
    validacion_alert_carrito()
    return false
}


function cantidades_total(){
    let fajas = $('#fajas').val() === "" ? 0 : parseInt($('#fajas').val()) 
    let punos = $('#punos').val() === "" ? 0 : parseInt($('#punos').val())
   
    if((fajas + punos + sma_cantidades) >= 6){
        return true
    }
    return false
}

function cantidades_total_combinacion(){
    let fajas = $('#fajas').val() === "" ? 0 : parseInt($('#fajas').val()) 
    let punos = $('#punos').val() === "" ? 0 : parseInt($('#punos').val())
   
    if((fajas + punos + sma_cantidades) >= 12){
        return true
    }
    return false
}

function punos_fajas(){    
    let fajas = $('#fajas').val() 
    let punos = $('#punos').val() 
    if (punos > 0 || fajas > 0) {
        var objeto_cuello_punos_fajas_data = {
            punos,   
            fajas,
            id_diseno, 
        }  
        objeto_cuello.punos_fajas.push(objeto_cuello_punos_fajas_data)
    }
    console.log(objeto_cuello);
}

function anadir_carrito() {
    punos_fajas()
    if(cantidades_total()){
        sumar_carrito()
        peticion_carrito()
    }else{
        console.log("estoy dentri");
        validacion_alert_carrito_cantidad()
    }
}

// if(validar_cantidades()){
//     sumar_carrito()
//     peticion_carrito()
// } 

function peticion_carrito() {
    console.log("no tengo id",objeto_cuello.tallas);

    for(let talla of objeto_cuello.tallas){
        talla.id_diseno = id_diseno
    }
    if(objeto_cuello.punos_fajas.length > 0){
        for(let puno_faja of objeto_cuello.punos_fajas){
            puno_faja.id_diseno = id_diseno
        }  
    }
    console.log(objeto_cuello);
    $.ajax({
        url: `${ip}/api/anadir-carrito`,
        data: objeto_cuello,
        dataType: "json",
        method: "POST",
        success: function (response) {
            console.log("soy res",response);
            if(response){                
                swal({
                    title: "Añadido al carrito",
                    text: "se añadio al carrito correctamente",
                    icon: "success",
                    button: "Aceptar!",
                    })
                    .then((value) => {
                    window.location.href = `${ip}/ladys-confecciones/carrito_compras`;

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

$('body').on('click','.vaciar_talla', function(){            
    console.log("hola soy vaciar");
    objeto_cuello.tallas = []  
    sma_cantidades = 0
    $("#cantidad_tallas").val("") 
    $("#fajas").val("") 
    $("#punos").val("") 
    $("#talla_seleccionada").val("")
    $("#talla_seleccionada_diseno").val("")
    $('#tabla_tallas').removeClass('show')
    $('#tabla_tallas').addClass('hiden')
    $('#tabla_tallas_diseno').removeClass('show')
    $('#tabla_tallas_diseno').addClass('hiden')
    $('#Modal_mostrar_diseno_hecho')[0].reset();  
}) 

$('body').on('click','.quitar_target_liso', function(){            
    $(".liso").removeAttr('data-target')  
}) 

function eliminar_talla_class(){
    $('body').on('click','.eliminar_talla', function(){
        let id = parseInt($(this).attr('data-id'))
        let id_nombre = parseInt($(this).attr('id'))
        $(`#${id_nombre}`).attr('disabled',false)
        talla_nombre =""
        console.log(id_nombre);
        eliminar_talla(objeto_cuello.tallas,id)  
        pintar_tabla_tallas(objeto_cuello.tallas)

    })

    $('body').on('click','.eliminar_talla_diseno', function(){
        let id = parseInt($(this).attr('data-id'))
        let id_nombre = parseInt($(this).attr('id'))
        $(`#${id_nombre}`).attr('disabled',false)
        console.log(id_nombre);
        eliminar_talla_diseno(objeto_cuello.tallas,id)  
        pintar_tabla_tallas_diseno(objeto_cuello.tallas)
    })
    
}

// mostrar imagen
function showimagefondo(){
    console.log("soy imag");
    let img_diseno =  document.getElementById('imagen_diseno')
    console.log(img_diseno);
    $('#show_img').html("")
    $('#titulo_img').html("Imagen del diseño")
    if(img_diseno.files && img_diseno.files[0]){
        var reader = new FileReader()
        reader.onload = function(e){
            $("#show_img").append(`
                <img width="500px;" height="500px;" src="${e.target.result}"></img>
            `)
        }
        reader.readAsDataURL(img_diseno.files[0]);
        // objeto_cuello.obj_imagen_diseno = img_diseno.files[0]
    }else{
        $('#titulo_img').html("No ha subido ninguna imagen")
    }
}


function showimagefigura(img){
    console.log("soy imag figura",img);
    let img_diseno =  document.getElementById('' + img)
    console.log(img_diseno);
    $('#show_img').html("")
    $('#titulo_img').html("Imagen de la figura")
    if(img_diseno.files && img_diseno.files[0]){
        var reader = new FileReader()
        reader.onload = function(e){
            $("#show_img").append(`
                <img width="500px;" height="500px;" src="${e.target.result}"></img>
            `)
        }
        reader.readAsDataURL(img_diseno.files[0]);
        // objeto_cuello.obj_imagen_diseno = img_diseno.files[0]
    }else{
        $('#titulo_img').html("No ha subido ninguna imagen")
    }
}


// validar para que escoja más de un elemento a fabricar
function validar_arrays_combinacion(){
    if(array_combinacion1.length !== 0  && array_combinacion2.length !==0  ){
        // tabla_cuello_mandar_datos()  
        $("#Modal_mostrar_diseno_hecho").modal("show");
    }else{
        validacion_alert_combinacion()
    }
}
function validar_arrays_combinacion_3(){
    if(array_combinacion1.length !== 0  && array_combinacion2.length !==0 && array_combinacion3.length !==0 ){
        // tabla_cuello_mandar_datos()  
        $("#Modal_mostrar_diseno_hecho").modal("show");
    }else{
        validacion_alert_combinacion()
    }
}

function validar_arrays(){
    console.log('estoy en modl');    
    if(array_tabla.length !== 0){
        console.log("mando mas");
        // tabla_cuello_mandar_datos()  
        $("#Modal_mostrar_diseno_hecho").modal("show");
    }else{
        validacion_alert_tipo_cuello()
    }
}

// *************************** cuello figura ***********************************************************

// agregar tabla cuello figura
function tabla_cuello_figura(){
    form_active = 'combinacion'

    id_tbody = $('#tbody_figura').attr('id')
    id_table = $('#tabla_diseno_figura').attr('id')
    id_material_fondo = $( "#material_fondo_figura").attr('id')      
    id_material = $( "#material_figura" ).attr('id')
    id_color_fondo = $("#color_fondo_figura").attr('id')
    id_crear_diseno =  $("#crear_diseno_figura").attr('id')
    button_crear = $("#button_figura").attr('id')

    var material_fondo_figura = $( "#material_fondo_figura option:selected" ).val()      
    var material_fondo_figura_noombre = $( "#material_fondo_figura option:selected" ).text()      
    var color_fondo_figura = $("#color_fondo_figura").val()
    var cuello_figura_id = $("#cuello_figura_id").val()
    var nombre_cuello = $("#nombre_cuello").val()
    var descripcion_cuello = $("#descripcion_cuello").val()
    var imagen_diseno = $("#imagen_diseno").val()


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

    $("#gregar_figura").text("Agregar más figura")

    if(alto_figura <= 10 && alto_figura >0 && ancho_figura >0 && ancho_figura <= 50){
        $('#aviso_figura_alto').html("")
        $('#aviso_figura_table').html("")  
        if(!validar_alto_cm(alto_figura)){
            $('#aviso_figura').html("")  
            validacion_alert_alto()
            // $('#aviso_figura_table').html("<strong  class='text-danger animacion'>se excedio el numero maximo de alto</strong>")
        }else{
            var objeto_cuello_figura_data = {
                figura_eliminar_id,
                material_figura,
                alto_figura,
                ancho_figura,
                color_figura,
                cuello_figura_id,
            }
            if(!validate_form(material_fondo_figura, color_fondo_figura, material_figura, alto_figura, ancho_figura, color_figura)){
                if(figura === 0){
                    validacion_alert()
                    // $('#aviso_figura').html("<strong  class='text-danger animacion'> Algunos Campos no estan completos</strong>")
                }else{
                    validacion_alert()
                    // $('#aviso_figura_table').html("<strong  class='text-danger animacion'> Algunos Campos no están completos</strong>")
                }
            }else{    
                fondo_cuello_cm = fondo_cuello_cm - parseFloat(alto_figura)
                precio_cuello(cuello_figura_id,material_fondo_figura,"precio_figura")

                if(figura === 0){ 
                    vaciar_objeto()
                    fondo = `<tr>
                                <th onclick="showimagefondo()" class="cursor-pointer" data-toggle="modal" data-target="#Modal_mostrar_imagen_diseno"> <img src="icons/almohada.svg" alt="" width="30px"><u>fondo</u>  </th>
                                <th>${material_fondo_figura_noombre}</th>
                                <th><div style="width:50px; border-style: double; height: 50px; background: ${color_fondo_figura}" class="rounded-circle mx-auto"> </div></th>
                                <th id="fondo_cuello_cm">${fondo_cuello_cm} cm</th>    
                                <th>---</th>
                                <th class="text-center "><img class="eliminar_fondo" src="icons/basura.svg" width="30px;" height="30px;" alt="" title="eliminar fondo"> </th>            
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
        if(alto_figura >= 10){
            validacion_alert_alto()
        }else{
            validacion_alert()
        }
        // $('#aviso_figura_alto').html("<strong  class='text-danger animacion'> Estás intentado ingresar un dato mayor a 10 cm o un dato negativo o Algunos campos estan vacios</strong>") 
    }
    
    if(validar_fondo_cuello_cm()){
        $("#material_figura").prop('disabled', false)
    }
    
    $(document).ready(function(){
        $('body').on('click','.eliminar_figura', function(){
            let id = parseInt($(this).attr('data-id'))
            eliminar(objeto_cuello.obj_datos_figura,id)  
            pintar_tr( objeto_cuello.obj_datos_figura,id_tbody,material_figura_nombre)
            console.log("#" + button_crear);
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
            $("#gregar_figura").text("Agregar")
            $('#formulario_cuello_figuras')[0].reset();
        }) 
          
    })
    array_tabla = objeto_cuello.obj_datos_figura
    console.log(objeto_cuello)
    console.log(button_crear);

    
    // validar_arrays(array_tabla)    
}



function dejar_valores_in_false(){    
    $("#" + id_material_fondo).prop('disabled', false)
    $("#" + id_color_fondo).prop('disabled', false)
    $("#" + id_material).prop('disabled', false)

    $("#" + id_material_fondo).val("")  
    $("#" + id_material).val("")


    $("#" + id_tbody).html("")
    $("#" + id_table).removeClass('show')
    $("#" + id_table).addClass('hiden')    

    // $("#" + id_crear_diseno).removeClass('show')
    // $("#" + id_crear_diseno).addClass('hiden') 

}
function dejar_valores_in_false_combinacion(){    
    $("#" + id_material_figura).prop('disabled', false)
    $("#" + id_material_letra).prop('disabled', false)
    $("#" + id_material_linea).prop('disabled', false)

    $("#" + id_material_figura).val("")
    $("#" + id_material_letra).val("")
    $("#" + id_material_linea).val("")
}
function dejar_valores_in_true(){    
    $("#" + id_material_fondo).prop('disabled', true)
    $("#" + id_color_fondo).prop('disabled', true)
    $("#" + id_material).prop('disabled', true)
    
    $("#" + aviso).html("")    
    $("#" + id_table).removeClass('hiden')
    $("#" + id_table).addClass('show')   
    
    // $("#" + id_crear_diseno).removeClass('hiden')
    // $("#" + id_crear_diseno).addClass('show')    
}


function dejar_campos_vacioss(){
    $("#" + id_alto).val("")    
    $("#" + id_color).val("")    
    $("#" + aviso).html("")    
    $("#" + aviso_alto).html("")    
    $("#" + aviso_table).html("")  
}

function validar_alto_cm(alto){
    if((fondo_cuello_cm - alto ) >= 1){
        return true
    }
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
                total = total - precio * parseInt(talla.cantidad_tallas)
                $("#suma_cantidades").text(sma_cantidades) 
                $("#suma_valor_total").text('$'+total) 
                array.splice(index,1)
           }
       }
    });
    console.log(objeto_cuello)
}


function eliminar_talla_diseno(array, id){
    array.forEach(talla => {
       if(talla.talla_eliminar_id === id){
           let index = array.indexOf(talla)
           if(index !== -1){
                console.log(fondo_cuello_cm)
                sma_cantidades = sma_cantidades - parseInt(talla.cantidad_tallas)
                total = total - precio_diseno * parseInt(talla.cantidad_tallas)
                $("#suma_cantidades_diseno").text(sma_cantidades) 
                $("#suma_valor_total_disno").text('$'+total) 
                array.splice(index,1)
           }
       }
    });
    console.log(objeto_cuello)
}

function eliminar(array, id){
    array.forEach(eliminar => {
        let index = array.indexOf(eliminar)
        if(eliminar.figura_eliminar_id === id && eliminar.cuello_figura_id === "4"){
           if(index !== -1){
                fondo_cuello_cm = fondo_cuello_cm + parseFloat( eliminar.alto_figura)
                console.log(fondo_cuello_cm)
                array.splice(index,1)
           }
        }
        if(eliminar.eliminar_combinacion === id && eliminar.cuello_combinacion_id === "5"){
            if(index !== -1){
                fondo_cuello_cm = fondo_cuello_cm + parseFloat( eliminar.alto_figura)
                console.log(fondo_cuello_cm)
                array.splice(index,1)
            }
        }
        if(eliminar.eliminar_combinacion === id && eliminar.cuello_combinacion_id === "letra"){
            if(index !== -1){
                fondo_cuello_cm = fondo_cuello_cm + parseFloat( eliminar.alto_letra)
                console.log(fondo_cuello_cm)
                array.splice(index,1)
            }
        }
        if(eliminar.eliminar_combinacion === id && eliminar.cuello_combinacion_id === "figura"){
            if(index !== -1){
                fondo_cuello_cm = fondo_cuello_cm + parseFloat( eliminar.alto_figura)
                console.log(fondo_cuello_cm)
                array.splice(index,1)
            }
        }
        if(eliminar.eliminar_combinacion === id && eliminar.cuello_combinacion_id === "linea2"){
            if(index !== -1){
                fondo_cuello_cm = fondo_cuello_cm + parseFloat( eliminar.alto_linea)
                console.log(fondo_cuello_cm)
                array.splice(index,1)
            }
        }
        if(eliminar.eliminar_combinacion === id && eliminar.cuello_combinacion_id === "linea"){
            if(index !== -1){
                fondo_cuello_cm = fondo_cuello_cm + parseFloat( eliminar.alto_linea)
                console.log(fondo_cuello_cm)
                array.splice(index,1)
            }
        }
        if(eliminar.letra_eliminar_id === id && eliminar.cuello_letra_id === "3"){
            if(index !== -1){
                fondo_cuello_cm = fondo_cuello_cm + parseFloat( eliminar.alto_letra)
                console.log(fondo_cuello_cm)
                array.splice(index,1)
            }
        }
        if(eliminar.linea_eliminar_id === id && eliminar.cuello_linea_id === "2"){
            if(index !== -1){
                fondo_cuello_cm = fondo_cuello_cm + parseFloat( eliminar.alto_linea)
                console.log(fondo_cuello_cm)
                array.splice(index,1)
            }
        }

    });
}

function pintar_tr(array,id_tbody,material_noombre){
    $("#" + id_tbody).html('')
    $("#" + id_tbody).append(fondo)
    // $(document).ready(function(){
    //     console.log("entre a pegar");
    //     $('#fondo_cuello_cm').text(fondo_cuello_cm + ' cm')
    // })

    if(array.length > 0){
        array.forEach(element =>{
            if(element.cuello_linea_id === "2"){
                $("#" + id_tbody).append(`
                    <tr>
                        <th class=""><img src="icons/linea.svg" alt="" width="30px"> linea</th>
                        <th>${material_noombre}</th>
                        <th>${element.alto_linea} cm</th>
                        <th > <div style="width: 50px;height: 50px;border-style: double; background: ${element.color_linea}" class="rounded-circle mx-auto">  </div></th>
                        <th class="text-center "  ><img class="eliminar_figura"  src="icons/basura.svg" data-id="${element.linea_eliminar_id}" width="30px;" height="30px;" alt="" title="eliminar"></th>            
                    </tr>
                    `
                );
            }
            if(element.cuello_letra_id === "3"){
                $("#" + id_tbody).append(`
                    <tr>
                        <th><img src="icons/texto.svg" alt="" width="30px"> Letra</th>
                        <th>${material_noombre}</th>
                        <th>${element.alto_letra} cm</th>
                        <th><div style="width: 50px;height: 50px;border-style: double; background: ${element.color_letra}" class="rounded-circle mx-auto"></div></th>
                        <th>${element.tipo_fuente__letra}</th>
                        <th>${element.contenido_letra}</th>
                        <th class="text-center "  ><img class="eliminar_figura" src="icons/basura.svg" data-id="${element.letra_eliminar_id}" width="30px;" height="30px;" alt=""></th>            
                    </tr>
                    `
                );
            }
            if(element.cuello_figura_id === "4"){
                $("#" + id_tbody).append(`
                    <tr>
                        <th><img src="icons/figura.svg" alt="" width="30px">figura</th>
                        <th>${material_noombre}</th>
                        <th><div style="width: 50px;height: 50px;border-style: double; background: ${element.color_figura}" class="rounded-circle mx-auto"></div></th>
                        <th>${element.alto_figura} cm</th>
                        <th>${element.ancho_figura} cm</th>
                        <th class="text-center "  ><img class="eliminar_figura" src="icons/basura.svg"  data-id="${element.figura_eliminar_id}" width="30px;" height="30px;" alt=""></th>            
                    </tr>
                    `
                );
            }
            if(element.cuello_combinacion_id === "5"){
                $("#" + id_tbody).append(`
                    <tr>
                        <th><img src="icons/figura.svg" alt="" width="30px">figura</th>
                        <th>${material_noombre}</th>
                        <th><div style="width: 50px;height: 50px;border-style: double; background: ${element.color_figura}" class="rounded-circle mx-auto"</div>></th>
                        <th>${element.alto_figura} cm</th>
                        <th>${element.ancho_figura} cm</th>
                        <th>---</th>
                        <th class="text-center "  ><img class="eliminar_figura" src="icons/basura.svg" data-id="${element.eliminar_combinacion}" width="30px;" height="30px;" alt=""></th>            
                    </tr>
                    `
                );
            }
            if(element.cuello_combinacion_id === "letra"){
                $("#" + id_tbody).append(`
                    <tr>
                        <th><img src="icons/texto.svg" alt="" width="30px">letra</th>
                        <th>${material_noombre}</th>
                        <th><div style="width: 50px;height: 50px;border-style: double; background: ${element.color_letra}" class="rounded-circle mx-auto"></div></th>
                        <th>${element.alto_letra} cm</th>
                        <th>${element.tipo_fuente__letra}</th>
                        <th>${element.contenido_letra} </th>
                        <th class="text-center "  ><img class="eliminar_figura" src="icons/basura.svg" data-id="${element.eliminar_combinacion}" width="30px;" height="30px;" alt=""></th>            
                    </tr>
                    `
                );
            }
            
        })
    }
}

// pintar combinaciones 
function pintar_tr_combinacion(array,array2,id_tbody,material_noombre){
        
    $("#" + id_tbody).html('')
    $("#" + id_tbody).append(fondo)
    // $(document).ready(function(){
    //     $('#fondo_cuello_cm').text(fondo_cuello_cm + ' cm')
    // })
    if(array.length > 0){
        array.forEach(element =>{
            if(element.cuello_combinacion_id === "linea"){
                $("#" + id_tbody).append(`
                    <tr>
                        <th><img src="icons/linea.svg" alt="" width="30px">linea</th>
                        <th>${material_noombre}</th>
                        <th><div style="width: 50px;height: 50px;border-style: double; background: ${element.color_linea}" class="rounded-circle mx-auto"></div></th>
                        <th>${element.alto_linea} cm</th>
                        <th>---</th>
                        <th class="text-center "  ><img class="eliminar_figura" src="icons/basura.svg" data-id="${element.eliminar_combinacion}" width="30px;" height="30px;" alt=""></th>            
                    </tr>
                    `
                );
            } 
            if(element.cuello_combinacion_id === "letra"){
                $("#" + id_tbody).append(`
                    <tr>
                        <th><img src="icons/texto.svg" alt="" width="30px">letra</th>
                        <th>${material_noombre}</th>
                        <th><div style="width: 50px;height: 50px;border-style: double; background: ${element.color_letra}" class="rounded-circle mx-auto"></div></th>
                        <th>${element.alto_letra} cm</th>
                        <th>${element.tipo_fuente__letra}</th>
                        <th>${element.contenido_letra} </th>
                        <th class="text-center "  ><img class="eliminar_figura" src="icons/basura.svg" data-id="${element.eliminar_combinacion}" width="30px;" height="30px;" alt=""></th>            
                    </tr>
                    `
                );
            }            
        })
    }
    if(array2.length > 0){
        array2.forEach(element =>{
            if(element.cuello_combinacion_id === "5"){
                $("#" + id_tbody).append(`
                    <tr>
                        <th><img src="icons/figura.svg" alt="" width="30px">figura</th>
                        <th>${material_noombre}</th>
                        <th><div style="width: 50px;height: 50px;border-style: double; background: ${element.color_figura}" class="rounded-circle mx-auto"></div></th>
                        <th>${element.alto_figura} cm</th>
                        <th>${element.ancho_figura} cm</th>
                        <th>---</th>
                        <th class="text-center "  ><img class="eliminar_figura" src="icons/basura.svg" data-id="${element.eliminar_combinacion}" width="30px;" height="30px;" alt=""></th>            
                    </tr>
                    `
                );
            }
            if(element.cuello_combinacion_id === "figura"){
                $("#" + id_tbody).append(`
                    <tr>
                        <th><img src="icons/figura.svg" alt="" width="30px">figura</th>
                        <th>${material_noombre}</th>
                        <th><div style="width: 50px;height: 50px;border-style: double; background: ${element.color_figura}" class="rounded-circle mx-auto"></div></th>
                        <th>${element.alto_figura} cm</th>
                        <th>${element.ancho_figura} cm</th>
                        <th class="text-center "  ><img class="eliminar_figura" src="icons/basura.svg" data-id="${element.eliminar_combinacion}" width="30px;" height="30px;" alt=""></th>            
                    </tr>
                    `
                );
            }
            if(element.cuello_combinacion_id === "linea2"){
                $("#" + id_tbody).append(`
                    <tr>
                        <th><img src="icons/linea.svg" alt="" width="30px">linea</th>
                        <th>${material_noombre}</th>
                        <th><div style="width: 50px;height: 50px;border-style: double; background: ${element.color_linea}" class="rounded-circle mx-auto"></div></th>
                        <th>${element.alto_linea} cm</th>
                        <th>---</th>
                        <th>---</th>
                        <th class="text-center "  ><img class="eliminar_figura" src="icons/basura.svg" data-id="${element.eliminar_combinacion}" width="30px;" height="30px;" alt=""></th>            
                    </tr>
                    `
                );
            }              
        })
    }
}

function pintar_tr_combinacion_letra_figura_linea(array,array2,array3,id_tbody,material_noombre){
    console.log("estoy en letra cobinacion 3 hila");
    console.log(id_tbody);
    $("#" + id_tbody).html('')
    $("#" + id_tbody).append(fondo)
    // $(document).ready(function(){
    //     $('#fondo_cuello_cm').text(fondo_cuello_cm + ' cm')
    // })
    if(array.length > 0){
        array.forEach(element =>{             
            if(element.cuello_combinacion_id === "letra"){
                $("#" + id_tbody).append(`
                    <tr>
                        <th><img src="icons/texto.svg" alt="" width="30px">letra</th>
                        <th>${material_noombre}</th>
                        <th><div style="width: 50px;height: 50px;border-style: double; background: ${element.color_letra}" class="rounded-circle mx-auto"></div></th>
                        <th>${element.alto_letra} cm</th>
                        <th>${element.tipo_fuente__letra}</th>
                        <th>${element.contenido_letra} </th>
                        <th class="text-center "  ><img class="eliminar_figura" src="icons/basura.svg" data-id="${element.eliminar_combinacion}" width="30px;" height="30px;" alt=""></th>            
                    </tr>
                    `
                );
            }            
        })
    }
    if(array2.length > 0){
        array2.forEach(element =>{
            if(element.cuello_combinacion_id === "linea2"){
                $("#" + id_tbody).append(`
                    <tr>
                        <th><img src="icons/linea.svg" alt="" width="30px">linea</th>
                        <th>${material_noombre}</th>
                        <th><div style="width: 50px;height: 50px;border-style: double; background: ${element.color_linea}" class="rounded-circle mx-auto"></div></th>
                        <th>${element.alto_linea} cm</th>
                        <th>---</th>
                        <th>---</th>
                        <th class="text-center "  ><img class="eliminar_figura" src="icons/basura.svg" data-id="${element.eliminar_combinacion}" width="30px;" height="30px;" alt=""></th>            
                    </tr>
                    `
                );
            }             
        })
    }
    if(array3.length > 0){
        array3.forEach(element =>{            
            if(element.cuello_combinacion_id === "5"){
                $("#" + id_tbody).append(`
                    <tr>
                        <th><img src="icons/figura.svg" alt="" width="30px">figura</th>
                        <th>${material_noombre}</th>
                        <th><div style="width: 50px;height: 50px;border-style: double; background: ${element.color_figura}" class="rounded-circle mx-auto"></div></th>
                        <th>${element.alto_figura} cm</th>
                        <th>${element.ancho_figura} cm</th>
                        <th>---</th>
                        <th class="text-center "  ><img class="eliminar_figura" src="icons/basura.svg" data-id="${element.eliminar_combinacion}" width="30px;" height="30px;" alt=""></th>            
                    </tr>
                    `
                );
            }     
        })
    }
}




function vaciar_objeto(){
    objeto_cuello.obj_datos_figura = []
    objeto_cuello.obj_datos_letra = []
    objeto_cuello.obj_datos_linea = []
    objeto_cuello.tallas = []
}

// *****************************cuello liso*********************************************************

function cuello_liso(){
    vaciar_objeto()
    form_active = 'liso'

    var nombre_cuello = $("#nombre_cuello").val()
    var descripcion_cuello = $("#descripcion_cuello").val()
    var imagen_diseno = $("#imagen_diseno").val()
    var cuello_liso_id = $("#cuello_liso_id").val()
    var material_fondo_liso = $( "#material_fondo_liso option:selected" ).val()    
    var color_fondo_liso = $("#color_fondo_liso").val()


    if(material_fondo_liso === ""){
        validacion_alert()
        // $('#aviso_liso').html("<strong  class='text-danger animacion'>Por favor seleccione el material</strong>")     
    }else{
        precio_cuello(cuello_liso_id,material_fondo_liso,"letra")

        $(".liso").attr('data-target','#Modal_mostrar_diseno_hecho')
        $('#aviso_liso').text("")
        $( "#material_fondo_liso" ).prop('disabled', true)    

        objeto_cuello.obj_cuello_id = cuello_liso_id
        objeto_cuello.obj_nombre_cuello = nombre_cuello
        objeto_cuello.obj_descripcion_cuello = descripcion_cuello
        objeto_cuello.obj_imagen_diseno = imagen_diseno
        objeto_cuello.obj_material_fondo = material_fondo_liso
        objeto_cuello.obj_color_fondo = color_fondo_liso
    }
    console.log(objeto_cuello); 
}

//********************************cuello letra*******************************************************************

let letra = 0;

function tabla_cuello_letra(){

    form_active = 'combinacion'

    id_tbody = $('#tbody_letra').attr('id')
    id_table = $('#tabla_diseno_letra').attr('id')
    id_material_fondo = $( "#material_fondo_letra").attr('id')      
    id_material = $( "#material_letra" ).attr('id')
    id_color_fondo = $("#color_fondo_letra").attr('id')
    id_crear_diseno =  $("#crear_diseno_letra").attr('id')

    var material_fondo_letra = $( "#material_fondo_letra option:selected" ).val()      
    var material_fondo_letra_noombre = $( "#material_fondo_letra option:selected" ).text()      
    var color_fondo_letra = $("#color_fondo_letra").val()
    var cuello_letra_id = $("#cuello_letra_id").val()
    var nombre_cuello = $("#nombre_cuello").val()
    var descripcion_cuello = $("#descripcion_cuello").val()
    var imagen_diseno = $("#imagen_diseno").val()

    
    
    id_color = $("#color_letra").attr('id')
    id_alto = $("#alto_letra").attr('id')
    id_ancho = $("#ancho_letra").attr('id')
    aviso_alto = $('#aviso_letra_alto').attr('id')
    aviso_table = $('#aviso_letra_table').attr('id')
    aviso = $('#aviso_letra').attr('id')

    var material_letra = parseInt($( "#material_letra option:selected" ).val())     
    var material_letra_nombre = $( "#material_letra option:selected" ).text()      
    var tipo_fuente__letra = $( "#tipo_fuente__letra option:selected" ).text()      
    var contenido_letra = $("#contenido_letra").val()
    var alto_letra = $("#alto_letra").val()
    var color_letra = $("#color_letra").val()


    
    if (alto_letra <= 10 && alto_letra >0 && tipo_fuente__letra !== "Escoge una fuente " ){
        $('#aviso_letra_alto').html("")
        $('#aviso_letra_table').html("") 
        if(!validar_alto_cm(alto_letra)){
            $('#aviso_letra').html("") 
            validacion_alert_alto()
            // $('#aviso_letra_table').html("<strong  class='text-danger animacion'>se excedio el numero maximo de alto</strong>")
        }else{
            var objeto_cuello_letra_data = {
                cuello_letra_id,
                letra_eliminar_id,
                material_letra,
                tipo_fuente__letra,
                contenido_letra,
                color_letra,
                alto_letra,
            }
            console.log("soy contenido",contenido_letra);
            if(isNaN(material_letra) || material_fondo_letra === "" ||  alto_letra === "" || tipo_fuente__letra === "Escoge una fuente " || contenido_letra === "" ){
                if(letra === 0){
                    validacion_alert()
                    // $('#aviso_letra').html("<strong  class='text-danger animacion'> Algunos Campos no estan completos</strong>")
                }else{
                    validacion_alert()                   
                    // $('#aviso_letra_table').html("<strong  class='text-danger animacion'> Algunos Campos no están completos</strong>")
                } 
                console.log(fondo_cuello_cm);           
            }else{
                $("#agregar_letra").text("Agregar más texto")
                precio_cuello(cuello_letra_id,material_fondo_letra,"precio_letra")

                
                fondo_cuello_cm = fondo_cuello_cm - parseFloat(alto_letra)
                
                if(letra === 0){   
                    vaciar_objeto()
                    fondo = `<tr>
                                <th onclick="showimagefondo()" class="cursor-pointer" data-toggle="modal" data-target="#Modal_mostrar_imagen_diseno"> <img src="icons/almohada.svg" alt="" width="30px"><u>fondo</u> </th>
                                <th>${material_fondo_letra_noombre}</th>
                                <th id="fondo_cuello_cm">Max 10 cm</th>  
                                <th><div style="width:50px; border-style: double; height: 50px; background: ${color_fondo_letra}" class="rounded-circle mx-auto"> </div></th>
                                <th>---</th>
                                <th>---</th>
                                <th class="text-center "  ><img class="eliminar_fondo" src="icons/basura.svg" width="30px;" height="30px;" alt=""></th>            
                            </tr>`                    
                    letra++;
                    dejar_valores_in_true()
                    $("#contenido_letra").val("")
                }       
                if(letra === 1){
                    objeto_cuello.obj_cuello_id = cuello_letra_id
                    objeto_cuello.obj_nombre_cuello = nombre_cuello
                    objeto_cuello.obj_descripcion_cuello = descripcion_cuello
                    objeto_cuello.obj_imagen_diseno = imagen_diseno
                    objeto_cuello.obj_material_fondo = material_fondo_letra
                    objeto_cuello.obj_color_fondo = color_fondo_letra
                }
                objeto_cuello.obj_datos_letra.push(objeto_cuello_letra_data)
                pintar_tr( objeto_cuello.obj_datos_letra,id_tbody,material_letra_nombre)
                dejar_campos_vacioss()
                letra_eliminar_id++               
            }
        }
    }else{
        if(alto_letra >= 10){
            validacion_alert_alto()
        }else{
            validacion_alert()
        }
        $('#aviso_letra_table').html("")  
        // $('#aviso_letra_alto').html("<strong  class='text-danger animacion'> Estás intentado ingresar un dato mayor a 10 cm o un dato negativo o Algunos campos estan vacios</strong>")
    }

    $(document).ready(function(){
        $('body').on('click','.eliminar_figura', function(){
            let id = parseInt($(this).attr('data-id'))
            eliminar(objeto_cuello.obj_datos_letra,id)  
            pintar_tr( objeto_cuello.obj_datos_letra,id_tbody,material_letra_nombre)
        } )   
    })
    $(document).ready(function(){
        $('body').on('click','.eliminar_fondo', function(){
            objeto_cuello.obj_material_fondo = ""
            objeto_cuello.obj_color_fondo = ""
            objeto_cuello.obj_datos_letra = []
            letra = 0
            fondo_cuello_cm = 10
            dejar_valores_in_false()
            $("#agregar_letra").text("Agregar más texto")
            $("#agregar_letra").text("Agregar")
            $("#tipo_fuente__letra" ).val("")
            $("#contenido_letra" ).val("")
            $('#formulario_cuello_letras')[0].reset();

        })   
    })

    array_tabla = objeto_cuello.obj_datos_letra
       
    console.log(objeto_cuello)

}


// ********************************cuello lineas*********************************************************************

let linea = 0;
let contador_linea = 1;

function tabla_cuello_linea(){

    form_active = 'lineas'

    id_tbody = $('#tbody_linea').attr('id')
    id_table = $('#tabla_diseno_linea').attr('id')
    id_material_fondo = $( "#material_fondo_linea").attr('id')      
    id_material = $( "#material_linea" ).attr('id')
    id_color_fondo = $("#color_fondo_linea").attr('id')
    id_crear_diseno =  $("#crear_diseno_linea").attr('id')
    // $("#crear_diseno").removeClass('hiden')
    // $("#crear_diseno").addClass('show') 

    var cuello_linea_id = $("#cuello_lineas_id").val()
    var nombre_cuello = $("#nombre_cuello").val()
    var descripcion_cuello = $("#descripcion_cuello").val()
    var imagen_diseno = $("#imagen_diseno").val()
    var material_fondo_linea = $( "#material_fondo_linea option:selected" ).val()      
    var material_fondo_linea_noombre = $( "#material_fondo_linea option:selected" ).text()      
    var color_fondo_linea = $("#color_fondo_linea").val()

    id_color = $("#color_linea").attr('id')
    id_alto = $("#alto_linea").attr('id')
    aviso_alto = $('#aviso_linea_alto').attr('id')
    aviso_table = $('#aviso_linea_table').attr('id')
    aviso = $('#aviso_linea').attr('id')

    var material_linea = parseInt($( "#material_linea option:selected" ).val())     
    var material_linea_nombre = $( "#material_linea option:selected" ).text()      
    var alto_linea = $( "#alto_linea" ).val()      
    var color_linea = $("#color_linea").val()   
   
    if(alto_linea <= 10 && alto_linea >0){

        console.log("entré linea");

        $('#aviso_linea_alto').html("")
        $('#aviso_linea_table').html("")

        if(!validar_alto_cm(alto_linea)){
            $('#aviso_linea').html("")  
            validacion_alert_alto()
            // $('#aviso_linea_table').html("<strong  class='text-danger animacion'>se excedio el numero maximo de alto</strong>")
        }else{
            var objeto_cuello_linea_data = {
                cuello_linea_id,
                linea_eliminar_id,
                material_linea,
                alto_linea,
                color_linea,
            }
            if( isNaN(material_linea) || material_fondo_linea === "" || alto_linea === ""){
                if(linea === 0){
                    validacion_alert()                    
                    // $('#aviso_linea').html("<strong  class='text-danger animacion'> Algunos Campos no estan completos</strong>")
                }else{
                    validacion_alert()
                    // $('#aviso_linea_table').html("<strong  class='text-danger animacion'> Algunos Campos no están completos</strong>")
                } 
            }else{
                $("#agregar_linea").text("Agregar más linea")
                precio_cuello(cuello_linea_id,material_fondo_linea,"precio_linea")
                
                console.log("soy fondo cm ",fondo_cuello_cm);
                console.log("soy alto",alto_linea);
                
                fondo_cuello_cm = fondo_cuello_cm - parseFloat(alto_linea)
                
                if(linea === 0){   
                    vaciar_objeto()
                    fondo = `<tr>
                                <th onclick="showimagefondo()" class="cursor-pointer" data-toggle="modal" data-target="#Modal_mostrar_imagen_diseno"> <img src="icons/almohada.svg" alt="" width="30px"><u>fondo</u> </th>
                                <th>${material_fondo_linea_noombre}</th>
                                <th id="fondo_cuello_cm">Max 10 cm</th>  
                                <th> <div style="width:50px; border-style: double; height: 50px; background: ${color_fondo_linea}" class="rounded-circle mx-auto"> </div></th>             
                                <th class="text-center "  ><img class="eliminar_fondo" src="icons/basura.svg" width="30px;" height="30px;" alt="" title="eliminar fondo"></th>            
                            </tr>` 

                    linea++;
                    dejar_valores_in_true()
                }       
                if(linea === 1){
                    objeto_cuello.obj_cuello_id = cuello_linea_id
                    objeto_cuello.obj_nombre_cuello = nombre_cuello
                    objeto_cuello.obj_descripcion_cuello = descripcion_cuello
                    objeto_cuello.obj_imagen_diseno = imagen_diseno
                    objeto_cuello.obj_material_fondo = material_fondo_linea
                    objeto_cuello.obj_color_fondo = color_fondo_linea
                }
                objeto_cuello.obj_datos_linea.push(objeto_cuello_linea_data)
                pintar_tr( objeto_cuello.obj_datos_linea,id_tbody,material_linea_nombre)
                dejar_campos_vacioss()
                linea_eliminar_id++       
            }
            
        }
        
    }else{
        if(alto_linea >= 10){
            validacion_alert_alto()
        }else{
            validacion_alert()
        }
        $('#aviso_linea_table').html("")  
        // $('#aviso_linea_alto').html("<strong  class='text-danger animacion'> Estás intentado ingresar un dato mayor a 10 cm o un dato negativo o Algunos campos estan vacios</strong>")
    }

    $(document).ready(function(){
        $('body').on('click','.eliminar_figura', function(){
            let id = parseInt($(this).attr('data-id'))
            eliminar(objeto_cuello.obj_datos_linea,id)  
            pintar_tr( objeto_cuello.obj_datos_linea,id_tbody,material_linea_nombre)
        } )   
    })
    $(document).ready(function(){
        $('body').on('click','.eliminar_fondo', function(){
            objeto_cuello.obj_material_fondo = ""
            objeto_cuello.obj_color_fondo = ""
            objeto_cuello.obj_datos_linea = []
            linea = 0
            fondo_cuello_cm = 10
            dejar_valores_in_false()
            $("#agregar_linea").text("Agregar")
            $('#formulario_cuello_lineas')[0].reset();
        })   
    })
    array_tabla = objeto_cuello.obj_datos_linea

    console.log(objeto_cuello)
}


// ***********************Combinaciones*****************************************************************
let letra_figura = 0
let linea_figura = 0
let letra_linea = 0
let letra_linea_figura = 0

let eliminar_combinacion = 1
let contador_figura_linea = 1
let contador_letra_linea = 1
let contador_letra_linea_figura = 1


function combinacion(Noombre_combinacion){
    form_active = 'combinacion'

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

// letras figuras
let array_combinacion1 = []
let array_combinacion2 = []
let array_combinacion3 = []

let cuello_letra_figura_id = 5

function cuello_letra_figura(){

    id_table = $('#tabla_diseno_letra_figura').attr('id')
    id_material_fondo = $( "#material_fondo_letra_figura").attr('id')      
    id_material = $( "#material_combinacion_figura_53" ).attr('id')
    id_color_fondo = $("#color_fondo_letra_figura").attr('id')
    id_tbody = $('#tbody_letra_figura_combinacion').attr('id')    
    id_crear_diseno =  $("#crear_diseno_letra_figura").attr('id')
    
    id_material_figura = $( "#material_combinacion_figura_5" ).attr('id')
    id_material_letra = $( "#material_combinacion_letra_5" ).attr('id')
    id_material_linea = $( "#material_combinacion_linea_55" ).attr('id')  
}



$('#agregar_combinacion_figura').click(function(){
    console.log("soy letra figura click ",letra_figura);
        
    $('#aviso_letra_figura_alto').html("")
    $('#aviso_letra_figura_table').html("")  
    var cuello_combinacion_id = "5"

    var nombre_cuello = $("#nombre_cuello").val()
    var descripcion_cuello = $("#descripcion_cuello").val()
    var imagen_diseno = $("#imagen_diseno").val()
    var material_fondo_letra_figura = parseInt($( "#material_fondo_letra_figura option:selected" ).val())     
    var material_fondo_letra_figura_nombre = $( "#material_fondo_letra_figura option:selected" ).text()      
    var color_fondo_letra_figura = $( "#color_fondo_letra_figura" ).val()      
    
    id_color = $("#color_combinacion_figura_5").attr('id')
    id_alto = $("#alto_combinacion_figura_5").attr('id')
    id_ancho = $("#ancho_combinacion_figura_5").attr('id')
    aviso_alto = $('#aviso_letra_figura_alto').attr('id')
    aviso_table = $('#aviso_letra_figura_table').attr('id')
    aviso = $('#aviso_letra_figura').attr('id')

    //figura
    var material_combinacion_figura_5 = parseInt($( "#material_combinacion_figura_5 option:selected" ).val())     
    var material_combinacion_figura_5_nombre = $( "#material_combinacion_figura_5 option:selected" ).text() 
    var alto_figura = $("#alto_combinacion_figura_5").val()
    var ancho_figura = $("#ancho_combinacion_figura_5").val()
    var color_figura = $("#color_combinacion_figura_5").val()

    if(alto_figura <= 10 && alto_figura >0 && ancho_figura >0 && ancho_figura <= 50){
        console.log("soy alto figura",alto_figura);
        
        $('#aviso_letra_figura_alto').html("")
        $('#aviso_letra_figura_table').html("")  
        if(!validar_alto_cm(alto_figura)){
            $('#aviso_letra_figura').html("")  
            validacion_alert_alto()                
            // $('#aviso_letra_figura_table').html("<strong  class='text-danger animacion'>se excedio el numero maximo de alto</strong>")
        }else{
            var objeto_cuello_combinacion_figura_data = {
                //figura
                eliminar_combinacion,
                cuello_combinacion_id,
                material_combinacion_figura_5,
                alto_figura,
                color_figura,
                ancho_figura,
            }
            if(isNaN(material_fondo_letra_figura) || isNaN(material_combinacion_figura_5) ||  alto_figura === "" || ancho_figura === ""){
                // validar_aviso(letra_figura,cuello_letra_figura_id)   
                validacion_alert()
            }else{
                $('#agregar_combinacion_figura').text("Agregar más figura")  
                precio_cuello(cuello_letra_figura_id,material_fondo_letra_figura,"precio_letra_figura")

                fondo_cuello_cm = fondo_cuello_cm - parseFloat(alto_figura)
                if(letra_figura === 0){     
                    fondo = `<tr>
                            <th onclick="showimagefondo()" class="cursor-pointer" data-toggle="modal" data-target="#Modal_mostrar_imagen_diseno"> <img src="icons/almohada.svg" alt="" width="30px"><u>fondo</u> </th>
                            <th>${material_fondo_letra_figura_nombre}</th>
                            <th><div style="width:50px; border-style: double; height: 50px; background: ${color_fondo_letra_figura}" class="rounded-circle mx-auto"> </div></th>
                            <th id="fondo_cuello_cm">Max 10 cm</th>  
                            <th>---</th>
                            <th>---</th>
                            <th class="text-center "  ><img class="eliminar_fondo" src="icons/basura.svg" width="30px;" height="30px;" alt=""></th>            
                        </tr>` 

                    letra_figura++;
                }  
                dejar_valores_in_true()
                $("#material_combinacion_figura_5").prop('disabled', true)

                if(letra_figura === 1){
                    ingresar_datos_objeto_principal(cuello_letra_figura_id,nombre_cuello,descripcion_cuello,imagen_diseno,material_fondo_letra_figura,color_fondo_letra_figura)
                }
                objeto_cuello.obj_datos_figura.push(objeto_cuello_combinacion_figura_data)
                pintar_tr_combinacion( objeto_cuello.obj_datos_letra,objeto_cuello.obj_datos_figura,id_tbody,material_combinacion_figura_5_nombre)                    
                dejar_campos_vacios(cuello_letra_figura_id)
                eliminar_combinacion++
            }
        }
    }else{
        console.log("soy alto figura",alto_figura);
        if(alto_figura >= 10){
            validacion_alert_alto()
        }else{
            console.log("estoy barro alto", alto_figura);
            console.log( ancho_figura);
            validacion_alert()                
        }
        
        
        $('#aviso_letra_figura_table').html("")  
        // $('#aviso_letra_figura_alto').html("<strong  class='text-danger animacion'> Estás intentado ingresar un dato mayor a 10 cm o un dato negativo o Algunos campos estan vacios</strong>")
    }
    $(document).ready(function(){
        $('body').on('click','.eliminar_figura', function(){
            let id = parseInt($(this).attr('data-id'))
            eliminar(objeto_cuello.obj_datos_figura,id)  
            pintar_tr_combinacion( objeto_cuello.obj_datos_letra,objeto_cuello.obj_datos_figura,id_tbody,material_combinacion_figura_5_nombre)
        })   
    })
    $(document).ready(function(){
        $('body').on('click','.eliminar_fondo', function(){
            objeto_cuello.obj_material_fondo = ""
            objeto_cuello.obj_color_fondo = ""
            objeto_cuello.obj_datos_figura = []
            letra_figura = 0
            fondo_cuello_cm = 10
            vaciar_objeto()
            dejar_valores_in_false()
            dejar_valores_in_false_combinacion()
            $('#agregar_combinacion_figura').text("Agregar figura")  
            $('#formulario_cuello_letrascuello_figuras')[0].reset();
        })   
    })
    array_combinacion1 = objeto_cuello.obj_datos_figura
    console.log(objeto_cuello)
})

$('#agregar_combinacion_letra').click(function(){        
    $('#aviso_letra_figura_alto').html("")
    $('#aviso_letra_figura_table').html("")

    var cuello_combinacion_id = "letra"
    
    var nombre_cuello = $("#nombre_cuello").val()
    var descripcion_cuello = $("#descripcion_cuello").val()
    var imagen_diseno = $("#imagen_diseno").val()
    var material_fondo_letra_figura = parseInt($( "#material_fondo_letra_figura option:selected" ).val())     
    var material_fondo_letra_figura_nombre = $( "#material_fondo_letra_figura option:selected" ).text()      
    var color_fondo_letra_figura = $( "#color_fondo_letra_figura" ).val()      
    
    id_color = $("#color_combinacion_letra_5").attr('id')
    id_alto = $("#alto_letra").attr('id')
    id_ancho = $("#ancho_letra").attr('id')
    aviso_alto = $('#aviso_letra_alto').attr('id')
    aviso_table = $('#aviso_letra_table').attr('id')
    aviso = $('#aviso_letra').attr('id')

    //letra
    var material_letra = parseInt($( "#material_combinacion_letra_5 option:selected" ).val())     
    var material_combinacion_letra_5_nombre = $( "#material_combinacion_letra_5 option:selected" ).text() 
    var tipo_fuente__letra = $( "#tipo_fuente_combinacion_letra_5 option:selected" ).text() 
    var contenido_letra = $("#contenido_texto_combinacion_letra_5").val()
    var color_letra = $("#color_combinacion_letra_5").val()
    var alto_letra = $("#alto_combinacion_letra_5").val()
    
    if(alto_letra <= 10 && alto_letra >0 && tipo_fuente__letra !== "Escoge una fuente " ){
        $('#aviso_letra_alto').html("")
        $('#aviso_letra_figura_table').html("") 

        if(!validar_alto_cm(alto_letra)){
            $('#aviso_letra_figura').html("")  
            validacion_alert_alto()
            // $('#aviso_letra_figura_table').html("<strong  class='text-danger animacion'>se excedio el numero maximo de alto</strong>")
        }else{
            var objeto_cuello_combinacion_letra_data = {    
                //letra
                eliminar_combinacion,
                cuello_combinacion_id, 
                cuello_letra_figura_id,
                material_letra,
                tipo_fuente__letra,
                contenido_letra,
                color_letra,
                alto_letra,
            }
            
            if(isNaN(material_fondo_letra_figura) || isNaN(material_letra) || tipo_fuente__letra === "Escoger tipo de fuente" || contenido_letra === "" || alto_letra === ""){
                validacion_alert()
                // validar_aviso(letra_figura,cuello_letra_figura_id)
            }else{
                $('#agregar_combinacion_letra').text("Agregar más texto")  
                precio_cuello(cuello_letra_figura_id,material_fondo_letra_figura,"precio_letra_figura")

                fondo_cuello_cm = fondo_cuello_cm - parseFloat(alto_letra)

                if(letra_figura === 0){  
                    fondo = `<tr>
                            <th onclick="showimagefondo()" class="cursor-pointer" data-toggle="modal" data-target="#Modal_mostrar_imagen_diseno"> <img src="icons/almohada.svg" alt="" width="30px"><u>fondo</u>  </th>
                            <th>${material_fondo_letra_figura_nombre}</th>
                            <th><div style="width:50px; border-style: double; height: 50px; background: ${color_fondo_letra_figura}" class="rounded-circle mx-auto"> </div></th>
                            <th id="fondo_cuello_cm">Max 10 cm</th>  
                            <th>---</th>
                            <th>---</th>
                            <th class="text-center "  ><img class="eliminar_fondo" src="icons/basura.svg" width="30px;" height="30px;" alt=""></th>            
                        </tr>`  

                    letra_figura++;
                }  
                dejar_valores_in_true()

                $("#alto_combinacion_letra_5").val("")
                $("#material_combinacion_letra_5").prop('disabled', true)

                if(letra_figura === 1){
                    ingresar_datos_objeto_principal(cuello_letra_figura_id,nombre_cuello,descripcion_cuello,imagen_diseno,material_fondo_letra_figura,color_fondo_letra_figura)
                }
                objeto_cuello.obj_datos_letra.push(objeto_cuello_combinacion_letra_data)
                pintar_tr_combinacion( objeto_cuello.obj_datos_letra,objeto_cuello.obj_datos_figura,id_tbody,material_combinacion_letra_5_nombre)
                dejar_campos_vacios(cuello_letra_figura_id)
                eliminar_combinacion++
            }
        }           
    }else{
        if(alto_letra >= 10){
            validacion_alert_alto()
        }else{
            validacion_alert()
        }
        
        $('#aviso_letra_figura_table').html("")  
        // $('#aviso_letra_figura_alto').html("<strong  class='text-danger animacion'> Estás intentado ingresar un dato mayor a 10 cm o un dato negativo o Algunos campos estan vacios</strong>")
    }
    $(document).ready(function(){
        $('body').on('click','.eliminar_figura', function(){
            let id = parseInt($(this).attr('data-id'))
            eliminar(objeto_cuello.obj_datos_letra,id)  
            pintar_tr_combinacion( objeto_cuello.obj_datos_letra,objeto_cuello.obj_datos_figura,id_tbody,material_combinacion_letra_5_nombre)
        })   
    })
    $(document).ready(function(){
        $('body').on('click','.eliminar_fondo', function(){
            objeto_cuello.obj_material_fondo = ""
            objeto_cuello.obj_color_fondo = ""
            objeto_cuello.obj_datos_letra = []
            letra_figura = 0
            fondo_cuello_cm = 10
            dejar_valores_in_false()
            vaciar_objeto()
            dejar_valores_in_false_combinacion()

            $('#agregar_combinacion_letra').text("Agregar texto")  
            $("#tipo_fuente_combinacion_letra_5").val("")
            $('#formulario_cuello_letrascuello_figuras')[0].reset();
        })   
    })
    console.log(objeto_cuello)
    array_combinacion2 = objeto_cuello.obj_datos_letra
})





// cuello figura linea
function cuello_figura_linea(){
    var cuello_linea_figura_id = 5
    
    id_tbody = $('#tbody_linea_figura').attr('id')
    id_table = $('#tabla_diseno_linea_figura').attr('id')
    id_material_fondo = $( "#material_fondo_figura_linea").attr('id')      
    id_material = $( "#material_combinacion_figura_35" ).attr('id')
    id_material_figura = $( "#material_combinacion_figura_8" ).attr('id')
    id_material_letra = $( "#material_combinacion_letra_83" ).attr('id')
    id_material_linea = $( "#material_combinacion_linea_8" ).attr('id')
    id_color_fondo = $("#color_fondo_linea_figura").attr('id')
    id_crear_diseno =  $("#crear_diseno_figura_linea").attr('id')    
    
} 

$('#agregar_combinacion_figura_2').click(function(){


    $('#aviso_linea_figura_alto').html("")
    $('#aviso_linea_figura_table').html("")  
    var cuello_combinacion_id = "figura"

    var nombre_cuello = $("#nombre_cuello").val()
    var descripcion_cuello = $("#descripcion_cuello").val()
    var imagen_diseno = $("#imagen_diseno").val()
    var cuello_linea_figura_id = 8
    var material_fondo_linea_figura = parseInt($( "#material_fondo_figura_linea option:selected" ).val())     
    var material_fondo_linea_figura_nombre = $( "#material_fondo_figura_linea option:selected" ).text()      
    var color_fondo_linea_figura = $( "#color_fondo_linea_figura" ).val()      

    id_color = $("#color_combinacion_figura_8").attr('id')
    id_alto = $("#alto_combinacion_figura_8").attr('id')
    id_ancho = $("#ancho_combinacion_figura_8").attr('id')
    aviso_alto = $('#aviso_linea_figura_alto').attr('id')
    aviso_table = $('#aviso_linea_figura_table').attr('id')
    aviso = $('#aviso_linea_figura').attr('id')

    //figura
    var material_combinacion_figura_8 = parseInt($( "#material_combinacion_figura_8 option:selected" ).val())     
    var material_combinacion_figura_8_nombre = $( "#material_combinacion_figura_8 option:selected" ).text() 
    var alto_figura = $("#alto_combinacion_figura_8").val()
    var ancho_figura = $("#ancho_combinacion_figura_8").val()
    var color_figura = $("#color_combinacion_figura_8").val()
    
    if(alto_figura <= 10 && alto_figura >0 && ancho_figura >0 && ancho_figura <= 50){
        console.log("entré");
        $('#aviso_linea_figura_alto').html("")
        $('#aviso_linea_figura_table').html("")
        if(!validar_alto_cm(alto_figura)){
            $('#aviso_linea_figura').html("")  
            validacion_alert_alto()
            // $('#aviso_linea_figura_table').html("<strong  class='text-danger animacion'>se excedio el numero maximo de alto</strong>")
        }else{
            var objeto_cuello_combinacion_figura_data = {
                //figura
                eliminar_combinacion,
                cuello_combinacion_id,
                material_combinacion_figura_8,
                alto_figura,
                color_figura,
                ancho_figura,
            }
            if(isNaN(material_fondo_linea_figura) || isNaN(material_combinacion_figura_8) || alto_figura === "" || ancho_figura === ""){
                validacion_alert()
                // validar_aviso(linea_figura,cuello_linea_figura_id)   
            }else{
                $('#agregar_combinacion_figura_2').text("Agregar más figura")  
                precio_cuello(cuello_linea_figura_id,material_fondo_linea_figura,"precio_figuras_lineas")

                fondo_cuello_cm = fondo_cuello_cm - parseFloat(alto_figura)
                console.log("todo mal",fondo_cuello_cm);
                if(linea_figura === 0){  
                    fondo = `<tr>
                            <th onclick="showimagefondo()" class="cursor-pointer" data-toggle="modal" data-target="#Modal_mostrar_imagen_diseno"> <img src="icons/almohada.svg" alt="" width="30px"><u>fondo</u>  </th>
                            <th>${material_fondo_linea_figura_nombre}</th>
                            <th><div style="width:50px; border-style: double; height: 50px; background: ${color_fondo_linea_figura}" class="rounded-circle mx-auto"> </div></th>
                            <th id="fondo_cuello_cm">Max 10 cm</th>  
                            <th>---</th>
                            <th class="text-center "  ><img class="eliminar_fondo" src="icons/basura.svg" width="30px;" height="30px;" alt=""></th>            
                        </tr>` 
                    
                    
                    linea_figura++;
                }   
                dejar_valores_in_true()
                $("#material_combinacion_figura_8").prop('disabled', true)

                if(linea_figura === 1){
                    ingresar_datos_objeto_principal(cuello_linea_figura_id,nombre_cuello,descripcion_cuello,imagen_diseno,material_fondo_linea_figura,color_fondo_linea_figura)
                }
                objeto_cuello.obj_datos_figura.push(objeto_cuello_combinacion_figura_data)
                pintar_tr_combinacion( objeto_cuello.obj_datos_linea,objeto_cuello.obj_datos_figura,id_tbody,material_combinacion_figura_8_nombre)                  

                dejar_campos_vacios(cuello_linea_figura_id)
                eliminar_combinacion++
            }
        }
    }else{
        if(alto_figura >= 10){
            validacion_alert_alto()
        }else{
            validacion_alert()
        }
        $('#aviso_linea_figura_table').html("")  
        // $('#aviso_linea_figura_alto').html("<strong  class='text-danger animacion'> Estás intentado ingresar un dato mayor a 10 cm o un dato negativo o Algunos campos estan vacios</strong>")
    }
    $(document).ready(function(){
        $('body').on('click','.eliminar_figura', function(){
            let id = parseInt($(this).attr('data-id'))
            eliminar(objeto_cuello.obj_datos_figura,id)  
            pintar_tr_combinacion( objeto_cuello.obj_datos_linea,objeto_cuello.obj_datos_figura,id_tbody,material_combinacion_figura_8_nombre)                  

        })   
    })
    $(document).ready(function(){
        $('body').on('click','.eliminar_fondo', function(){
            objeto_cuello.obj_material_fondo = ""
            objeto_cuello.obj_color_fondo = ""
            objeto_cuello.obj_datos_figura = []
            linea_figura = 0
            fondo_cuello_cm = 10
            vaciar_objeto()
            dejar_valores_in_false()
            dejar_valores_in_false_combinacion()
            $('#agregar_combinacion_figura_2').text("Agregar figura")  
            $('#formulario_cuello_figurascuello_lineas')[0].reset();
        })   
    })  
    array_combinacion1 = objeto_cuello.obj_datos_figura
    
    console.log(objeto_cuello)
})

$('#agregar_combinacion_linea_2').click(function(){
    $('#aviso_linea_figura_alto').html("")
    $('#aviso_linea_figura_table').html("")  

    var cuello_combinacion_id = "linea"

    var nombre_cuello = $("#nombre_cuello").val()
    var descripcion_cuello = $("#descripcion_cuello").val()
    var imagen_diseno = $("#imagen_diseno").val()
    var cuello_linea_figura_id = 8
    var material_fondo_linea_figura = parseInt($( "#material_fondo_figura_linea option:selected" ).val())     
    var material_fondo_linea_figura_nombre = $( "#material_fondo_figura_linea option:selected" ).text()      
    var color_fondo_linea_figura = $( "#color_fondo_linea_figura" ).val()      
 
    
    id_color = $("#color_combinacion_linea_8").attr('id')
    id_alto = $("#alto_combinacion_linea_8").attr('id')
    aviso_alto = $('#aviso_linea_figura_alto').attr('id')
    aviso_table = $('#aviso_linea_figura_table').attr('id')
    aviso = $('#aviso_linea_figura').attr('id')


    //linea
    var material_linea = parseInt($( "#material_combinacion_linea_8 option:selected" ).val())     
    var material_combinacion_linea_8_nombre = $( "#material_combinacion_linea_8 option:selected" ).text() 
    var color_linea = $("#color_combinacion_linea_8").val()
    var alto_linea = $("#alto_combinacion_linea_8").val()

   
    if(alto_linea <= 10 && alto_linea >0){
        $('#aviso_linea_figura_alto').html("")
        $('#aviso_linea_figura_table').html("")

        if(!validar_alto_cm(alto_linea)){
            $('#aviso_linea_figura').html("")  
            validacion_alert_alto()
            // $('#aviso_linea_figura_table').html("<strong  class='text-danger animacion'>se excedio el numero maximo de alto</strong>")
        }else{
            var objeto_cuello_combinacion_linea_data = {
                //linea
                eliminar_combinacion,
                cuello_combinacion_id,
                material_linea,
                color_linea,
                alto_linea,
            }

            if(isNaN(material_fondo_linea_figura) || isNaN(material_linea) ||  alto_linea === ""){
                validacion_alert()
                // validar_aviso(linea_figura,cuello_linea_figura_id)   
            }else{
                $('#agregar_combinacion_linea_2').text("Agregar más linea")  
                precio_cuello(cuello_linea_figura_id,material_fondo_linea_figura,"precio_figuras_lineas")

                fondo_cuello_cm = fondo_cuello_cm - parseFloat(alto_linea)

                if(linea_figura === 0){   
                    fondo = `<tr>
                            <th onclick="showimagefondo()" class="cursor-pointer" data-toggle="modal" data-target="#Modal_mostrar_imagen_diseno"> <img src="icons/almohada.svg" alt="" width="30px"><u>fondo</u>  </th>
                            <th>${material_fondo_linea_figura_nombre}</th>
                            <th><div style="width:50px; border-style: double; height: 50px; background: ${color_fondo_linea_figura}" class="rounded-circle mx-auto"> </div></th>
                            <th id="fondo_cuello_cm">Max 10 cm</th>  
                            <th>---</th>
                            <th class="text-center "  ><img class="eliminar_fondo" src="icons/basura.svg" width="30px;" height="30px;" alt=""></th>            
                        </tr>`
                    
                    linea_figura++;
                }  
                dejar_valores_in_true()
                $("#material_combinacion_linea_8").prop('disabled', true)
                $("#alto_combinacion_linea_8").val("")
                if(linea_figura === 1){
                    ingresar_datos_objeto_principal(cuello_linea_figura_id,nombre_cuello,descripcion_cuello,imagen_diseno,material_fondo_linea_figura,color_fondo_linea_figura)
                }
                objeto_cuello.obj_datos_linea.push(objeto_cuello_combinacion_linea_data)
                pintar_tr_combinacion( objeto_cuello.obj_datos_linea,objeto_cuello.obj_datos_figura,id_tbody,material_combinacion_linea_8_nombre)
                dejar_campos_vacioss() 
                eliminar_combinacion++
            }
        }
    }else{

        if(alto_linea >= 10){
            validacion_alert_alto()
        }
        else{
            validacion_alert()
        }
        $('#aviso_linea_figura_table').html("")  
        // $('#aviso_linea_figura_alto').html("<strong  class='text-danger animacion'> Estás intentado ingresar un dato mayor a 10 cm o un dato negativo o Algunos campos estan vacios</strong>")
    }

    $(document).ready(function(){
        $('body').on('click','.eliminar_figura', function(){
            let id = parseInt($(this).attr('data-id'))
            eliminar(objeto_cuello.obj_datos_linea,id)  
            pintar_tr_combinacion( objeto_cuello.obj_datos_linea,objeto_cuello.obj_datos_figura,id_tbody,material_combinacion_linea_8_nombre)

        } )   
    })
    $(document).ready(function(){
        $('body').on('click','.eliminar_fondo', function(){
            objeto_cuello.obj_material_fondo = ""
            objeto_cuello.obj_color_fondo = ""
            objeto_cuello.obj_datos_linea = []
            linea_figura = 0
            fondo_cuello_cm = 10
            vaciar_objeto()
            dejar_valores_in_false()
            dejar_valores_in_false_combinacion()
            $('#agregar_combinacion_linea_2').text("Agregar linea")  
            $('#formulario_cuello_figurascuello_lineas')[0].reset();
        })   
    })
    array_combinacion2 = objeto_cuello.obj_datos_linea   
    console.log(objeto_cuello)
})


// letra linea
let cuello_letra_linea_id = 6   



function cuello_letra_linea(){
        
    id_table = $('#tabla_diseno_letra_linea').attr('id')
    id_material_fondo = $( "#material_fondo_letra_linea").attr('id')      
    id_material = $( "#material_combinacion_letra_63" ).attr('id')
    id_color_fondo = $("#color_fondo_letra_linea").attr('id')
    id_tbody = $('#tbody_linea_letra').attr('id')    
    id_crear_diseno =  $("#crear_diseno_linea_letra").attr('id')

    id_material_figura = $( "#material_combinacion_figura_83" ).attr('id')
    id_material_letra = $( "#material_combinacion_letra_6" ).attr('id')
    id_material_linea = $( "#material_combinacion_linea_6" ).attr('id')   

}

$('#agregar_combinacion_letra_2').click(function(){
        
    $('#aviso_letra_linea_alto').html("")
    $('#aviso_letra_linea_table').html("")   
    var cuello_combinacion_id = "letra"

    var nombre_cuello = $("#nombre_cuello").val()
    var descripcion_cuello = $("#descripcion_cuello").val()
    var imagen_diseno = $("#imagen_diseno").val()
    // var cuello_letra_linea_id = 6
    var material_fondo_letra_linea = parseInt($( "#material_fondo_letra_linea option:selected" ).val())     
    var material_fondo_letra_linea_nombre = $( "#material_fondo_letra_linea option:selected" ).text()      
    var color_fondo_letra_linea = $( "#color_fondo_letra_linea" ).val()      
    
    id_color = $("#color_combinacion_letra_6").attr('id')
    id_alto = $("#alto_combinacion_letra_6").attr('id')
    aviso_alto = $('#aviso_letra_alto').attr('id')
    aviso_table = $('#aviso_letra_linea_table').attr('id')
    aviso = $('#aviso_letra_linea').attr('id')

    //letra
    var material_letra = parseInt($( "#material_combinacion_letra_6 option:selected" ).val())     
    var material_combinacion_letra_6_nombre = $( "#material_combinacion_letra_6 option:selected" ).text() 
    var tipo_fuente__letra = $( "#tipo_fuente_combinacion_letra_6 option:selected" ).text() 
    var contenido_letra = $("#contenido_texto_combinacion_letra_6").val()
    var color_letra = $("#color_combinacion_letra_6").val()
    var alto_letra = $("#alto_combinacion_letra_6").val()
           
    if(alto_letra <= 10 && alto_letra >0 && tipo_fuente__letra !== "Escoge una fuente " ){
        $('#aviso_letra_alto').html("")
        $('#aviso_letra_linea_table').html("") 

        if(!validar_alto_cm(alto_letra)){
            $('#aviso_letra_linea').html("")  
            validacion_alert_alto()
            // $('#aviso_letra_linea_table').html("<strong  class='text-danger animacion'>se excedio el numero maximo de alto</strong>")
        }else{
            var objeto_cuello_combinacion_letra_data = {    
                //letra
                eliminar_combinacion,
                cuello_combinacion_id, 
                cuello_letra_linea_id,
                material_letra,
                tipo_fuente__letra,
                contenido_letra,
                color_letra,
                alto_letra,
            }

            if(isNaN(material_fondo_letra_linea) || isNaN(material_letra) || tipo_fuente__letra === "Escoger tipo de fuente" || contenido_letra === "" || alto_letra === ""){
                validacion_alert()
                // validar_aviso(letra_linea,cuello_letra_linea_id)
            }else{
                precio_cuello(cuello_letra_linea_id,material_fondo_letra_linea,"precio_letra_linea")

                $('#agregar_combinacion_letra_2').text("Agregar más texto")  

                fondo_cuello_cm = fondo_cuello_cm - parseFloat(alto_letra)

                if(letra_linea === 0){   
                    fondo = `<tr>
                            <th onclick="showimagefondo()" class="cursor-pointer" data-toggle="modal" data-target="#Modal_mostrar_imagen_diseno"> <img src="icons/almohada.svg" alt="" width="30px"><u>fondo</u>  </th>
                            <th>${material_fondo_letra_linea_nombre}</th>
                            <th><div style="width:50px; border-style: double; height: 50px; background: ${color_fondo_letra_linea}" class="rounded-circle mx-auto"> </div></th>
                            <th id="fondo_cuello_cm">Max 10 cm</th>  
                            <th>---</th>
                            <th>---</th>
                            <th class="text-center "  ><img class="eliminar_fondo" src="icons/basura.svg" width="30px;" height="30px;" alt=""></th>            
                        </tr>`
                    letra_linea++;
                    
                }      
                dejar_valores_in_true()
                $("#alto_combinacion_letra_6").val("")
                $("#contenido_texto_combinacion_letra_6").val("")
                $("#material_combinacion_letra_6").prop('disabled', true)

                 
                if(letra_linea === 1){
                    ingresar_datos_objeto_principal(cuello_letra_linea_id,nombre_cuello,descripcion_cuello,imagen_diseno,material_fondo_letra_linea,color_fondo_letra_linea)
                }
                objeto_cuello.obj_datos_letra.push(objeto_cuello_combinacion_letra_data)
                pintar_tr_combinacion( objeto_cuello.obj_datos_letra,objeto_cuello.obj_datos_linea,id_tbody,material_combinacion_letra_6_nombre)
                dejar_campos_vacios(cuello_letra_linea_id)
                eliminar_combinacion++
            }
        }        
    }else{
        if(alto_letra >= 10){
            validacion_alert_alto()
        }else{
            validacion_alert()
        }
        $('#aviso_letra_linea_table').html("")  
        // $('#aviso_letra_linea_alto').html("<strong  class='text-danger animacion'> Estás intentado ingresar un dato mayor a 10 cm o un dato negativo o Algunos campos estan vacios</strong>")
    }
    $(document).ready(function(){
        $('body').on('click','.eliminar_figura', function(){
            let id = parseInt($(this).attr('data-id'))
            eliminar(objeto_cuello.obj_datos_letra,id)  
            pintar_tr_combinacion( objeto_cuello.obj_datos_letra,objeto_cuello.obj_datos_linea,id_tbody,material_combinacion_letra_6_nombre)
        })   
    })
    $(document).ready(function(){
        $('body').on('click','.eliminar_fondo', function(){
            objeto_cuello.obj_material_fondo = ""
            objeto_cuello.obj_color_fondo = ""
            objeto_cuello.obj_datos_letra = []
            letra_linea = 0
            fondo_cuello_cm = 10
            vaciar_objeto()
            dejar_valores_in_false()
            dejar_valores_in_false_combinacion()
            $('#agregar_combinacion_letra_2').text("Agregar texto")  
            $("#tipo_fuente_combinacion_letra_6" ).val("")
            $('#formulario_cuello_letrascuello_lineas')[0].reset();
        })   
    })       
    console.log(objeto_cuello)
    array_combinacion1 = objeto_cuello.obj_datos_letra   

})

$('#agregar_combinacion_linea_3').click(function(){
    $('#aviso_letra_linea_alto').html("")
    $('#aviso_letra_linea_table').html("")  

    var cuello_combinacion_id = "linea2"


    var nombre_cuello = $("#nombre_cuello").val()
    var descripcion_cuello = $("#descripcion_cuello").val()
    var imagen_diseno = $("#imagen_diseno").val()
    var cuello_letra_linea_id = 6
    var material_fondo_letra_linea = parseInt($( "#material_fondo_letra_linea option:selected" ).val())     
    var material_fondo_letra_linea_nombre = $( "#material_fondo_letra_linea option:selected" ).text()      
    var color_fondo_letra_linea = $( "#color_fondo_letra_linea" ).val()    
 
    id_color = $("#color_combinacion_linea_6").attr('id')
    id_alto = $("#alto_combinacion_linea_6").attr('id')
    aviso_alto = $('#aviso_letra_linea_alto').attr('id')
    aviso_table = $('#aviso_letra_linea_table').attr('id')
    aviso = $('#aviso_letra_linea').attr('id')

    //linea
    var material_linea = parseInt($( "#material_combinacion_linea_6 option:selected" ).val())     
    var material_combinacion_linea_6_nombre = $( "#material_combinacion_linea_6 option:selected" ).text() 
    var color_linea = $("#color_combinacion_linea_6").val()
    var alto_linea = $("#alto_combinacion_linea_6").val()

    if(alto_linea <= 10 && alto_linea >0){
        $('#aviso_letra_linea_alto').html("")
        $('#aviso_letra_linea_table').html("")

        if(!validar_alto_cm(alto_linea)){
            $('#aviso_letra_linea').html("")  
            validacion_alert_alto()
            // $('#aviso_letra_linea_table').html("<strong  class='text-danger animacion'>se excedio el numero maximo de alto</strong>")
        }else{
            var objeto_cuello_combinacion_linea_data = {
                //linea
                eliminar_combinacion,
                cuello_combinacion_id,
                material_linea,
                color_linea,
                alto_linea,
            }

            if(isNaN(material_fondo_letra_linea) || isNaN(material_linea) ||  alto_linea === ""){
                validacion_alert()
                // validar_aviso(letra_linea,cuello_letra_linea_id)   
            }else{
                precio_cuello(cuello_letra_linea_id,material_fondo_letra_linea,"precio_letra_linea")

                $('#agregar_combinacion_linea_3').text("Agregar más linea")  

                fondo_cuello_cm = fondo_cuello_cm - parseFloat(alto_linea)

                if(letra_linea === 0){                 
                    fondo = `<tr>
                            <th onclick="showimagefondo()" class="cursor-pointer" data-toggle="modal" data-target="#Modal_mostrar_imagen_diseno"> <img src="icons/almohada.svg" alt="" width="30px"><u>fondo</u>  </th>
                            <th>${material_fondo_letra_linea_nombre}</th>
                            <th><div style="width:50px; border-style: double; height: 50px; background: ${color_fondo_letra_linea}" class="rounded-circle mx-auto"> </div></th>
                            <th id="fondo_cuello_cm">Max 10 cm</th>  
                            <th>---</th>
                            <th>---</th>
                            <th class="text-center "  ><img class="eliminar_fondo" src="icons/basura.svg" width="30px;" height="30px;" alt=""></th>            
                        </tr>`
                    letra_linea++;
                } 
                dejar_valores_in_true()
                $("#material_combinacion_linea_6").prop('disabled', true)
                $("#alto_combinacion_linea_6").val("")     
                if(letra_linea === 1){
                    ingresar_datos_objeto_principal(cuello_letra_linea_id,nombre_cuello,descripcion_cuello,imagen_diseno,material_fondo_letra_linea,color_fondo_letra_linea)
                }
                objeto_cuello.obj_datos_linea.push(objeto_cuello_combinacion_linea_data)
                pintar_tr_combinacion( objeto_cuello.obj_datos_letra,objeto_cuello.obj_datos_linea,id_tbody,material_combinacion_linea_6_nombre)
                dejar_campos_vacioss()
                eliminar_combinacion++
            }
        }        
    }else{            
        if(alto_linea >= 10){
            validacion_alert_alto()
        }else{
            validacion_alert()
        }
        $('#aviso_letra_linea_table').html("")  
        // $('#aviso_letra_linea_alto').html("<strong  class='text-danger animacion'> Estás intentado ingresar un dato mayor a 10 cm o un dato negativo o Algunos campos estan vacios</strong>")
    }

    $(document).ready(function(){
        $('body').on('click','.eliminar_figura', function(){
            let id = parseInt($(this).attr('data-id'))
            eliminar(objeto_cuello.obj_datos_linea,id)  
            pintar_tr_combinacion( objeto_cuello.obj_datos_letra,objeto_cuello.obj_datos_linea,id_tbody,material_combinacion_linea_6_nombre)
        } )   
    })
    $(document).ready(function(){
        $('body').on('click','.eliminar_fondo', function(){
            objeto_cuello.obj_material_fondo = ""
            objeto_cuello.obj_color_fondo = ""
            objeto_cuello.obj_datos_linea = []
            letra_linea = 0
            fondo_cuello_cm = 10
            vaciar_objeto()
            dejar_valores_in_false()
            dejar_valores_in_false_combinacion()
            $('#agregar_combinacion_linea_3').text("Agregar linea")  
            $('#formulario_cuello_letrascuello_lineas')[0].reset();
        })   
    })       
    console.log(objeto_cuello)
    array_combinacion2 = objeto_cuello.obj_datos_linea
})


// cuello letra_linea_figura
function cuello_letra_linea_figura(){
        
    id_table = $('#tabla_diseno_letra_linea_figura').attr('id')
    id_material_fondo = $( "#material_fondo_letra_linea_figura").attr('id')      
    id_material = $( "#material_combinacion_letra_63" ).attr('id')
    id_color_fondo = $("#color_fondo_letra_linea_figura").attr('id')
    id_tbody = $('#tbody_letra_linea_figura').attr('id')
    id_crear_diseno = $('#crear_diseno_letra_figura_linea').attr('id')
    
    id_material_figura = $( "#material_combinacion_figura_7" ).attr('id')
    id_material_letra = $( "#material_combinacion_letra_7" ).attr('id')
    id_material_linea = $( "#material_combinacion_linea_7" ).attr('id')

    aviso_alto = $('#aviso_letra_linea_figura_alto').attr('id')
    aviso_table = $('#aviso_letra_linea_figura_table').attr('id')
    aviso = $('#aviso_letra_linea_figura').attr('id')       
    
}

$('#agregar_combinacion_letra_3').click(function(){
        
    console.log("soy letra, figuras y lineas",letra_linea_figura);
    
    $('#aviso_letra_linea_figura_alto').html("")
    $('#aviso_letra_linea_table').html("")  
    var cuello_combinacion_id = "letra"

    var nombre_cuello = $("#nombre_cuello").val()
    var descripcion_cuello = $("#descripcion_cuello").val()
    var imagen_diseno = $("#imagen_diseno").val()
    var cuello_letra_linea_id = 7
    var material_fondo_letra_linea = parseInt($( "#material_fondo_letra_linea_figura option:selected" ).val())     
    var material_fondo_letra_linea_nombre = $( "#material_fondo_letra_linea_figura option:selected" ).text()      
    var color_fondo_letra_linea = $( "#color_fondo_letra_linea_figura" ).val()      
    
    id_color = $("#color_combinacion_letra_7").attr('id')
    id_alto = $("#alto_combinacion_letra_7").attr('id')
   
    //letra
    var material_letra = parseInt($( "#material_combinacion_letra_7 option:selected" ).val())     
    var material_combinacion_letra_7_nombre = $( "#material_combinacion_letra_7 option:selected" ).text() 
    var tipo_fuente__letra = $( "#tipo_fuente_combinacion_letra_7 option:selected" ).text() 
    var contenido_letra = $("#contenido_texto_combinacion_letra_7").val()
    var color_letra = $("#color_combinacion_letra_7").val()
    var alto_letra = $("#alto_combinacion_letra_7").val()
    
    if(alto_letra <= 10 && alto_letra >0 && tipo_fuente__letra !== "Escoge una fuente " ){
        $('#aviso_letra_linea_figura_alto').html("")
        $('#aviso_letra_linea_figura_table').html("") 

        if(!validar_alto_cm(alto_letra)){
            $('#aviso_letra_linea_figura').html("")  
            validacion_alert_alto()
            // $('#aviso_letra_linea_figura_table').html("<strong  class='text-danger animacion'>se excedio el numero maximo de alto</strong>")
        
        }else{
            var objeto_cuello_combinacion_letra_data = {    
                //letra
                eliminar_combinacion,
                cuello_combinacion_id, 
                cuello_letra_linea_id,
                material_letra,
                tipo_fuente__letra,
                contenido_letra,
                color_letra,
                alto_letra,
            }
            if(isNaN(material_fondo_letra_linea) || isNaN(material_letra) || tipo_fuente__letra === "Escoger tipo de fuente " || contenido_letra === "" || alto_letra === ""){
                validacion_alert()
                // validar_aviso(letra_linea,cuello_letra_linea_id)
            }else{
                precio_cuello(cuello_letra_linea_id,material_fondo_letra_linea,"precio_letra_linea_figura")

                $('#agregar_combinacion_letra_3').text("Agregar más texto")  

                fondo_cuello_cm = fondo_cuello_cm - parseFloat(alto_letra)

                if(letra_linea_figura === 0){                        
                    fondo = `<tr>
                            <th onclick="showimagefondo()" class="cursor-pointer" data-toggle="modal" data-target="#Modal_mostrar_imagen_diseno"> <img src="icons/almohada.svg" alt="" width="30px"><u>fondo</u>  </th>
                            <th>${material_fondo_letra_linea_nombre}</th>
                            <th><div style="width:50px; border-style: double; height: 50px; background: ${color_fondo_letra_linea}" class="rounded-circle mx-auto"> </div></th>
                            <th id="fondo_cuello_cm">Max 10 cm</th>  
                            <th>---</th>
                            <th>---</th>
                            <th class="text-center "  ><img class="eliminar_fondo" src="icons/basura.svg" width="30px;" height="30px;" alt=""></th>            
                        </tr>`
                    letra_linea_figura++;
                }      
                dejar_valores_in_true()
                $("#alto_combinacion_letra_7").val("")
                $("#contenido_texto_combinacion_letra_7").val("")
                $("#material_combinacion_letra_7").prop('disabled', true)

                if(letra_linea_figura === 1){
                    ingresar_datos_objeto_principal(cuello_letra_linea_id,nombre_cuello,descripcion_cuello,imagen_diseno,material_fondo_letra_linea,color_fondo_letra_linea)
                }
                objeto_cuello.obj_datos_letra.push(objeto_cuello_combinacion_letra_data)
                pintar_tr_combinacion_letra_figura_linea( objeto_cuello.obj_datos_letra,objeto_cuello.obj_datos_linea,objeto_cuello.obj_datos_figura,id_tbody,material_combinacion_letra_7_nombre)
                dejar_campos_vacios(cuello_letra_linea_id)                   
                eliminar_combinacion++
            }
        }
    }else{            
        if(alto_letra >= 10){
            validacion_alert_alto()
        }else{
            validacion_alert()
        }
        $('#aviso_letra_linea_figura_table').html("")  
        // $('#aviso_letra_linea_figura_alto').html("<strong  class='text-danger animacion'> Estás intentado ingresar un dato mayor a 10 cm o un dato negativo o Algunos campos estan vacios</strong>")
    }
    $(document).ready(function(){
        $('body').on('click','.eliminar_figura', function(){
            let id = parseInt($(this).attr('data-id'))
            eliminar(objeto_cuello.obj_datos_letra,id)  
            pintar_tr_combinacion_letra_figura_linea( objeto_cuello.obj_datos_letra,objeto_cuello.obj_datos_linea,objeto_cuello.obj_datos_figura,id_tbody,material_combinacion_letra_7_nombre)
        })   
    })
    $(document).ready(function(){
        $('body').on('click','.eliminar_fondo', function(){
            objeto_cuello.obj_material_fondo = ""
            objeto_cuello.obj_color_fondo = ""
            objeto_cuello.obj_datos_letra = []
            letra_linea_figura = 0
            fondo_cuello_cm = 10
            vaciar_objeto()
            dejar_valores_in_false()
            dejar_valores_in_false_combinacion()
            $('#agregar_combinacion_letra_3').text("Agregar texto")  
            $("#tipo_fuente_combinacion_letra_7").val("") 
            $('#formulario_cuello_letrascuello_figurascuello_lineas')[0].reset();
        })   
    })  
    array_combinacion1 = objeto_cuello.obj_datos_letra
    console.log(objeto_cuello)
})


$('#agregar_combinacion_linea_4').click(function(){
    $('#aviso_letra_linea_figura_alto').html("")
    $('#aviso_letra_linea_figura_table').html("")

    var cuello_combinacion_id = "linea2"

    var nombre_cuello = $("#nombre_cuello").val()
    var descripcion_cuello = $("#descripcion_cuello").val()
    var imagen_diseno = $("#imagen_diseno").val()
    var cuello_letra_linea_id = 7
    var material_fondo_letra_linea = parseInt($( "#material_fondo_letra_linea_figura option:selected" ).val())     
    var material_fondo_letra_linea_nombre = $( "#material_fondo_letra_linea_figura option:selected" ).text()      
    var color_fondo_letra_linea = $( "#color_fondo_letra_linea_figura" ).val()    
 

    id_color = $("#color_combinacion_linea_7").attr('id')
    id_alto = $("#alto_combinacion_linea_7").attr('id')
    

    //linea
    var material_linea = parseInt($( "#material_combinacion_linea_7 option:selected" ).val())     
    var material_combinacion_linea_6_nombre = $( "#material_combinacion_linea_7 option:selected" ).text() 
    var color_linea = $("#color_combinacion_linea_7").val()
    var alto_linea = $("#alto_combinacion_linea_7").val()

    

    if(alto_linea <= 10 && alto_linea >0){
        $('#aviso_letra_linea_figura_alto').html("")
        $('#aviso_letra_linea_figura_table').html("")

        if(!validar_alto_cm(alto_linea)){
            $('#aviso_letra_linea_figura').html("")  
            validacion_alert_alto()
            // $('#aviso_letra_linea_figura_table').html("<strong  class='text-danger animacion'>se excedio el numero maximo de alto</strong>")
        }else{
            var objeto_cuello_combinacion_linea_data = {
                //linea
                eliminar_combinacion,
                cuello_combinacion_id,
                material_linea,
                color_linea,
                alto_linea,
            }
            if(isNaN(material_fondo_letra_linea) || isNaN(material_linea) ||  alto_linea === ""){
                validacion_alert()
                // validar_aviso(letra_linea_figura,cuello_letra_linea_id)   
            }else{
                precio_cuello(cuello_letra_linea_id,material_fondo_letra_linea,"precio_letra_linea_figura")

                $('#agregar_combinacion_linea_4').text("Agregar más linea")  

                fondo_cuello_cm = fondo_cuello_cm - parseFloat(alto_linea)

                if(letra_linea_figura === 0){  
                    fondo = `<tr>
                            <th onclick="showimagefondo()" class="cursor-pointer" data-toggle="modal" data-target="#Modal_mostrar_imagen_diseno"> <img src="icons/almohada.svg" alt="" width="30px"><u>fondo</u>  </th>
                            <th>${material_fondo_letra_linea_nombre}</th>
                            <th><div style="width:50px; border-style: double; height: 50px; background: ${color_fondo_letra_linea}" class="rounded-circle mx-auto"> </div></th>
                            <th id="fondo_cuello_cm">Max 10 cm</th>  
                            <th>---</th>
                            <th>---</th>
                            <th class="text-center "  ><img class="eliminar_fondo" src="icons/basura.svg" width="30px;" height="30px;" alt=""></th>            
                        </tr>`         
                    
                    letra_linea_figura++;
                } 
                dejar_valores_in_true()
                $("#material_combinacion_linea_7").prop('disabled', true)
                $("#alto_combinacion_linea_7").val("")   
                if(letra_linea_figura === 1){
                    ingresar_datos_objeto_principal(cuello_letra_linea_id,nombre_cuello,descripcion_cuello,imagen_diseno,material_fondo_letra_linea,color_fondo_letra_linea)
                }
                objeto_cuello.obj_datos_linea.push(objeto_cuello_combinacion_linea_data)
                pintar_tr_combinacion_letra_figura_linea( objeto_cuello.obj_datos_letra,objeto_cuello.obj_datos_linea,objeto_cuello.obj_datos_figura,id_tbody,material_combinacion_linea_6_nombre)
                dejar_campos_vacioss()
                eliminar_combinacion++
            }
        }
    }else{            
        if(alto_linea >= 10){
            validacion_alert_alto()
        }else{
            validacion_alert()
        }
        $('#aviso_letra_linea_figura_table').html("")  
        // $('#aviso_letra_linea_figura_alto').html("<strong  class='text-danger animacion'> Estás intentado ingresar un dato mayor a 10 cm o un dato negativo o Algunos campos estan vacios</strong>")
    }

    $(document).ready(function(){
        $('body').on('click','.eliminar_figura', function(){
            let id = parseInt($(this).attr('data-id'))
            eliminar(objeto_cuello.obj_datos_linea,id)  
            pintar_tr_combinacion_letra_figura_linea( objeto_cuello.obj_datos_letra,objeto_cuello.obj_datos_linea,objeto_cuello.obj_datos_figura,id_tbody,material_combinacion_linea_6_nombre)

        } )   
    })
    $(document).ready(function(){
        $('body').on('click','.eliminar_fondo', function(){
            objeto_cuello.obj_material_fondo = ""
            objeto_cuello.obj_color_fondo = ""
            objeto_cuello.obj_datos_linea = []
            letra_linea_figura = 0
            fondo_cuello_cm = 10
            vaciar_objeto()
            dejar_valores_in_false()
            dejar_valores_in_false_combinacion()
            $('#agregar_combinacion_linea_4').text("Agregar linea")  
            $('#formulario_cuello_letrascuello_figurascuello_lineas')[0].reset();
        })   
    })     

    array_combinacion2 = objeto_cuello.obj_datos_linea
    
    console.log(objeto_cuello)
})

$('#agregar_combinacion_figura_3').click(function(){
    $('#aviso_letra_linea_figura_alto').html("")
    $('#aviso_letra_linea_figura_table').html("")

    var cuello_combinacion_id = "5"

    var nombre_cuello = $("#nombre_cuello").val()
    var descripcion_cuello = $("#descripcion_cuello").val()
    var imagen_diseno = $("#imagen_diseno").val()
    var cuello_letra_linea_id = 7
    var material_fondo_linea_figura = parseInt($( "#material_fondo_letra_linea_figura option:selected" ).val())     
    var material_fondo_linea_figura_nombre = $( "#material_fondo_letra_linea_figura option:selected" ).text()      
    var color_fondo_linea_figura = $( "#color_fondo_letra_linea_figura" ).val()      
    
    id_color = $("#color_combinacion_figura_7").attr('id')
    id_alto = $("#alto_combinacion_figura_7").attr('id')
    id_ancho = $("#ancho_combinacion_figura_7").attr('id')

    //figura
    var material_combinacion_figura_8 = parseInt($( "#material_combinacion_figura_7 option:selected" ).val())     
    var material_combinacion_figura_8_nombre = $( "#material_combinacion_figura_7 option:selected" ).text() 
    var alto_figura = $("#alto_combinacion_figura_7").val()
    var ancho_figura = $("#ancho_combinacion_figura_7").val()
    var color_figura = $("#color_combinacion_figura_7").val()

    if(alto_figura <= 10 && alto_figura >0 && ancho_figura >0 && ancho_figura <= 50){
        $('#aviso_letra_linea_figura_alto').html("")
        $('#aviso_letra_linea_figura_table').html("") 
        if(!validar_alto_cm(alto_figura)){
            $('#aviso_letra_linea_figura').html("")  
            validacion_alert_alto()
            // $('#aviso_letra_linea_figura_table').html("<strong  class='text-danger animacion'>se excedio el numero maximo de alto</strong>")
        }else{
            var objeto_cuello_combinacion_figura_data = {
                //figura
                eliminar_combinacion,
                cuello_combinacion_id,
                material_combinacion_figura_8,
                alto_figura,
                color_figura,
                ancho_figura,
            }
            if(isNaN(material_fondo_linea_figura) || isNaN(material_combinacion_figura_8) || alto_figura === "" ||  ancho_figura === ""){
                validacion_alert()
                // validar_aviso(linea_figura,cuello_linea_figura_id)   
            }else{
                precio_cuello(cuello_letra_linea_id,material_fondo_linea_figura,"precio_letra_linea_figura")

                $('#agregar_combinacion_figura_3').text("Agregar más figura")  

                fondo_cuello_cm = fondo_cuello_cm - parseFloat(alto_figura)

                if(letra_linea_figura === 0){                           
                    fondo = `<tr>
                            <th onclick="showimagefondo()" class="cursor-pointer" data-toggle="modal" data-target="#Modal_mostrar_imagen_diseno"> <img src="icons/almohada.svg" alt="" width="30px"><u>fondo</u>  </th>
                            <th>${material_fondo_linea_figura_nombre}</th>
                            <th><div style="width:50px; border-style: double; height: 50px; background: ${color_fondo_linea_figura}" class="rounded-circle mx-auto"> </div></th>
                            <th id="fondo_cuello_cm">Max 10 cm</th>  
                            <th>---</th>
                            <th>---</th>
                            <th class="text-center "  ><img class="eliminar_fondo" src="icons/basura.svg" width="30px;" height="30px;" alt=""></th>            
                        </tr>`  
                    
                    letra_linea_figura++;
                }    
                dejar_valores_in_true()
                $("#material_combinacion_figura_7").prop('disabled', true)

                if(letra_linea_figura === 1){
                    ingresar_datos_objeto_principal(cuello_letra_linea_id,nombre_cuello,descripcion_cuello,imagen_diseno,material_fondo_linea_figura,color_fondo_linea_figura)
                }
                objeto_cuello.obj_datos_figura.push(objeto_cuello_combinacion_figura_data)
                pintar_tr_combinacion_letra_figura_linea( objeto_cuello.obj_datos_letra,objeto_cuello.obj_datos_linea,objeto_cuello.obj_datos_figura,id_tbody,material_combinacion_figura_8_nombre)
                dejar_campos_vacioss()
                eliminar_combinacion++
            }
        }
    }else{
        if(alto_figura >= 10){
            validacion_alert_alto()
        }else{
            validacion_alert()
        }
        $('#aviso_letra_linea_figura_table').html("")  
        // $('#aviso_letra_linea_figura_alto').html("<strong  class='text-danger animacion'> Estás intentado ingresar un dato mayor a 10 cm o un dato negativo o Algunos campos estan vacios</strong>")
    }
    $(document).ready(function(){
        $('body').on('click','.eliminar_figura', function(){
            let id = parseInt($(this).attr('data-id'))
            eliminar(objeto_cuello.obj_datos_figura,id)  
            pintar_tr_combinacion_letra_figura_linea( objeto_cuello.obj_datos_letra,objeto_cuello.obj_datos_linea,objeto_cuello.obj_datos_figura,id_tbody,material_combinacion_figura_8_nombre)
        })   
    })
    $(document).ready(function(){
        $('body').on('click','.eliminar_fondo', function(){
            objeto_cuello.obj_material_fondo = ""
            objeto_cuello.obj_color_fondo = ""
            objeto_cuello.obj_datos_figura = []
            letra_linea_figura = 0
            fondo_cuello_cm = 10
            vaciar_objeto()
            dejar_valores_in_false()
            dejar_valores_in_false_combinacion()
            $('#agregar_combinacion_figura_3').text("Agregar figura")  
            $('#formulario_cuello_letrascuello_figurascuello_lineas')[0].reset();
        })   
    })       
    console.log(objeto_cuello)
    array_combinacion3 = objeto_cuello.obj_datos_figura
})


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

let id_diseno = 0

// funcion ajax mandar datos al controlador 
function tabla_cuello_mandar_datos(){
    $.ajax({
        url: `${ip}/api/crear-cuello/cuello`,
        data: objeto_cuello,
        dataType: "json",
        method: "POST",
        success: function (response) {
            console.log("data recibida",response)
            id_diseno = response
            console.log(id_diseno);
            if(response){  
                peticion_carrito()
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

function validacion_alert(){
    swal({
        title: "Algunos campos por llenar",
        text: "Algunos campos por llenar, por favor verifique",
        icon: "warning",
        button: "Cerrar!",
    })
}

function validacion_alert_alto(){
    swal({
        title: "Excede el numero maximo de alto",
        text: "El cuello tiene un alto maximo de 10 cm",
        icon: "warning",
        button: "Cerrar!",
    })
}

function validacion_alert_tipo_cuello(){
    swal({
        title: "Debe escoger un tipo de cuello",
        text: "seleccione un tipo de cuello en los checkbox",
        icon: "warning",
        button: "Cerrar!",
    })
}
function validacion_alert_tipo_cuello_nombre(){
    swal({
        title: "Nombre del diseño",
        text: "Debe ingresar un nombre al diseño",
        icon: "warning",
        button: "Cerrar!",
    })
}
function validacion_alert_tipo_cuello_img(){
    swal({
        title: "Imagen del diseño",
        text: "Debe ingresar una imagen para el diseño",
        icon: "warning",
        button: "Cerrar!",
    })
}
function validacion_alert_talla(){
    swal({
        title: "Ya has seleccionado esta talla",
        text: "si te equivocaste y quieres seleccionar más, por favor eliminala de la tabla y vuelve a seleccionar",
        icon: "warning",
        button: "Cerrar!",
    })
}
function validacion_alert_dato_invalido(){
    swal({
        title: "Dato invalido",
        text: "Por favor revisa todos los campos y vuelve a ingresar",
        icon: "warning",
        button: "Cerrar!",
    })
}
function validacion_alert_mandar_carrito(){
    swal({
        title: "Seleccione una talla",
        text: "Por favor seleccione la cantidad de tallas a comprar",
        icon: "warning",
        button: "Cerrar!",
    })
}

function validacion_alert_carrito(){
    swal({
        title: "No hay nada que añadir",
        text: "Por favor seleccione las cantidades del producto",
        icon: "warning",
        button: "Cerrar!",
    })
}

function validacion_alert_carrito_cantidad(){
    swal({
        title: "Pedido incorrecto!",
        text: "Por favor selecciona minimo una cantiad de 6",
        icon: "warning",
        button: "Cerrar!",
    })
}

function validacion_alert_carrito_diseno(){
    swal({
        title: "Error en el Pedido!",
        text: "Este tipo de diseño tiene un pedido minimo de 6 unidades",
        icon: "warning",
        button: "Cerrar!",
    })
}

function validacion_alert_carrito_diseno_combinacion(){
    swal({
        title: "Error en el Pedido!",
        text: "Este tipo de diseño tiene un pedido minimo de 12 unidades",
        icon: "warning",
        button: "Cerrar!",
    })
}

function validacion_alert_combinacion(){
    swal({
        title: "Debe añadir por lo menos uno de cada uno",
        text: "Por favor seleccione por lo menos uno de cada uno",
        icon: "warning",
        button: "Cerrar!",
    })
}

function validacion_alert_tipo_cuello(){
    swal({
        title: "Debe añadir por lo menos un tipo",
        text: "No se puede crear Diseño con solo fondo, seleccione un tipo",
        icon: "warning",
        button: "Cerrar!",
    })
}

function validacion_alert_tipo_img(){
    swal({
        title: "El tipo de archivo no es valido",
        text: "Solo tipos de imagenes, PNG, JPG",
        icon: "warning",
        button: "Cerrar!",
    })
}  

function validacion_alert_checked_puno_faja(){
    swal({
        title: "Chequear valores!",
        text: "Por favor elija si el puño o la faja conserva el diseño",
        icon: "warning",
        button: "Cerrar!",
    })
}
 



// validar si quiere cerrar el modal
// $('body').on('click','.button_cerrar_modal', function(){ 
    
//     if(validar_cantidades()){
//         swal({
//             title: "Quiere abandorar su Pedido?",
//             text: "Si abandona el pedido, se perdera todo lo que ha seleccionado",
//             icon: "warning",
//             buttons: true,
//             dangerMode: true,
//           })
//           .then((willDelete) => {
//             if (willDelete) {
//                 $("#Modal_mostrar_diseno_hecho").modal('hide');
//                 $('.modal-backdrop').hide();           
//             }
//         });
//     }else{
//         $("#Modal_mostrar_diseno_hecho").modal('hide');
//         $('.modal-backdrop').hide();   
//     }
//     $("#Modal_mostrar_diseno_hecho").modal('show');
//     $('.modal-backdrop').hide();   

// }) 
