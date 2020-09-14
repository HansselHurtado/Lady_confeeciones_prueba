var ip = '127.0.0.1:8000';

function detalles_cuello(nombre,id_diseno_cuello,modelo,material) {
    document.getElementById('nombre_modelo').innerHTML= nombre;
    document.getElementById('modelo_detalle').innerHTML= modelo;
    // document.getElementById('fondo_cuello').innerHTML= material;
    console.log(id_diseno_cuello)

    $.ajax({
        url:`http://${ip}/api/cuello/detalles/${id_diseno_cuello}`,
        success:function(data){
            console.log(data)                             
            document.getElementById('precio_cuello_detalle').innerHTML= `$${data.valor}`

        },
        error:function(error){
            console.log(error)
        }
    });
}