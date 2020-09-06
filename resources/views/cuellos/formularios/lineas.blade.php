<!-- Formulario de diseño con lineas-->
<div id="formulario_cuello_lineas" class="container my-5 hiden animacion">
    <div class="row">
        <h4 class="my-5">Detalles del Diseño con lienas</h4>
    </div>
    <div class="boder_radius row">
        <div class="d-flex w-50 flex-column px-3">
            <div class="p-3">
                <div class="form-group">
                    <label for="material_fondo_linea">Material de fondo</label>
                    <select class="form-control " name="material_fondo" id="material_fondo_linea">
                        <option value="" selected disabled>Escoger Material</option>
                        @foreach ($materiales as $material)                            
                            <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                        @endforeach
                    </select>
                </div>
                <div class="form-group">
                    <label for="material_linea">Material de linea</label>
                    <select class="form-control " name="material_linea" id="material_linea">
                        <option value="" selected disabled>Escoger Material</option>
                        @foreach ($materiales as $material)                            
                            <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                        @endforeach
                    </select>
                </div>
            </div>
        </div>
        <div class="d-flex w-50 flex-column px-3">
            <div class="p-3">
                <div class="form-group">
                    <label for="color_fondo_linea">Color de fondo</label>
                    <input class="form-control tamano_input_color" type="color" name="" id="color_fondo_linea">
                </div> 
                <div class="row  mx-0">
                    <div class="form-group">
                        <label for="grosor_linea">Grosor de linea (cm)</label>
                        <input class="form-control tamano_input_color" type="number" name="" id="grosor_linea">
                    </div> 
                    <div class="form-group mx-3">
                        <label for="imagen_diseño">Color de linea</label>
                        <input class="form-control tamano_input_color" type="color" name="" id="color_linea">
                    </div>   
                </div>  
                <div id="aviso_linea" class="row my-2">
    
                </div>                
            </div>
        </div>
        <div class=" row my-3 mx-4" >
            <button class="btn btn-primary" onclick="tabla_cuello_linea();"> Agregar</button>                 
        </div>
    </div>
    <div id="tabla_diseno_lineas"  class="my-3 w-60 hiden animacion">
        <h4> Resumen del diseño</h4>
        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
                <tr>    
                    <th>Orden</th>
                    <th>Material</th>
                    <th>Color</th>
                    <th>Grosor</th>
                </tr>
            </thead>
            <tbody id="tbody_linea">
                
            </tbody>
        </table>
        <div class=" row my-3 mx-1">                    
            <button class="btn btn-primary" onclick="tabla_cuello_mandar_datos();">Guardar</button>    
        </div>                 
    </div>
</div>
