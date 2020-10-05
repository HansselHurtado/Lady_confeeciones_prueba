// var ip = "ladysconfecciones.herokuapp.com";
// var ip = '127.0.0.1:8000';
let precio = 0;
// var ips = window.location.protocol + "//" + window.location.host

function detalles_cuello(nombre,id_diseno_cuello,modelo,material) {
    document.getElementById('nombre_modelo').innerHTML= nombre;
    document.getElementById('modelo_detalle').innerHTML= modelo;
    // document.getElementById('fondo_cuello').innerHTML= material;
    console.log(id_diseno_cuello)
    console.log(ip);

    $.ajax({
        url:`${ip}/api/cuello/detalles/${id_diseno_cuello}`,
        success:function(data){
            console.log(data)                             
            document.getElementById('precio_cuello_detalle').innerHTML= `$${data.valor}`
            precio = data.valor
            id_diseno = data.id_diseno_cuello
            $("#imagen_diseno_detalle").html(`
                <img width="100%" height="400px"  src="${ip}/img/fondo_cuello/${data.imagen_inicial}" alt="">
            `)
            console.log(id_diseno);
        },
        error:function(error){
            console.log(error)
        }
    });
}


function detalles_cuello_img(nombre,id_diseno_cuello,modelo,material) {
    document.getElementById('nombre_modelo').innerHTML= nombre;
    document.getElementById('modelo_detalle').innerHTML= modelo;
    // document.getElementById('fondo_cuello').innerHTML= material;
    console.log(id_diseno_cuello)
    console.log(ip);

    $.ajax({
        url:`${ip}/api/cuello/detalles/${id_diseno_cuello}`,
        success:function(data){
            console.log(data)                             
            document.getElementById('precio_cuello_detalle').innerHTML= `$${data.valor}`
            precio = data.valor
            id_diseno = data.id_diseno_cuello
            $("#imagen_diseno_detalle_imagen_inicial").html(`
                <img width="100%" height="350px"  src="${ip}/img/fondo_cuello/${data.imagen_inicial}" alt="">
            `)
            console.log(id_diseno);
        },
        error:function(error){
            console.log(error)
        }
    });
}