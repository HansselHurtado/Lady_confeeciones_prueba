<!-- Formulario de diseño con  cuello_figuras cuello_lineas-->
<div id="formulario_cuello_figurascuello_lineas" class="row show w-65 hiden animacion">
    <h4 class="my-5">Detalles del Diseño con figuras y lineas</h4>
    <div class="boder_radius">
        <div class="row m-0">
            <div class="d-flex w-50 flex-column w-md-80 w-md-50 justify-content-between p-3">
                <div>
                    <div class="form-group">
                        <label for="material_fondo_figura_linea">Material de fondo</label>
                        <select class="form-control" name="" id="material_fondo_figura_linea">
                            <option value="" selected disabled>Escoger Material</option>
                            @foreach ($materiales as $material)                            
                                <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                            @endforeach
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="material_combinacion_figura_8">Material de figura</label>
                        <select class="form-control" name="material_linea" id="material_combinacion_figura_8">
                            <option value="" selected disabled>Escoger Material</option>
                            @foreach ($materiales as $material)                            
                                <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                            @endforeach
                        </select>
                    </div>
                    <div class="row mx-0 justify-content-between w-100">
                        <div class="form-group">
                            <label for="alto_combinacion_figura_8">Alto de figura</label>
                            <input class="form-control tamano_input_color" type="number" name="" id="alto_combinacion_figura_8">
                        </div> 
                        <div class="form-group">
                            <label for="ancho_combinacion_figura_8">Ancho de figura</label>
                            <input class="form-control tamano_input_color" type="number" name="" id="ancho_combinacion_figura_8">
                        </div>   
                        <div class=" row my-3 mx-2">
                            <a class="btn btn-primary color_a" href="#tabla_diseno_linea_figura" id="agregar_combinacion_figura_2"> Agregar figura</a>
                        </div> 
                    </div>
                </div>
            </div>
            
            <div class="d-flex w-50 flex-column p-3 ">
                <div class="form-group">
                    <label for="color_fondo_linea_figura">Color de fondo</label>
                    <input class="form-control tamano_input_color" type="color" name="" id="color_fondo_linea_figura">
                </div> 
                <div class="row  mx-0">
                    <div class="form-group">
                        <label for="color_combinacion_figura_8">Color de figura</label>
                        <input class="form-control tamano_input_color" type="color" name="" id="color_combinacion_figura_8">
                    </div> 
                    <div>
                        <label for="imagen_diseno_combinacion_figura_8">Imagen de figura</label>
                        <input class="w-100" type="file" name="" id="imagen_diseno_combinacion_figura_8">
                    </div> 
                    <div id="aviso_linea_figura" class="row my-2"></div>                     
                </div>                                     
            </div>
        </div>

        
        <div class="row m-0">
            <div class="d-flex w-50 flex-column w-md-80 w-md-50 justify-content-between p-3">
                <div>
                    <div class="form-group">
                        <label for="material_combinacion_linea_8">Material de lineas</label>
                        <select class="form-control" name="material_fondo" id="material_combinacion_linea_8">
                            <option value="" selected disabled>Escoger Material</option>
                            @foreach ($materiales as $material)                            
                                <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                            @endforeach
                        </select>
                    </div>                    
                </div>
            </div>
            
            <div class="d-flex w-50 flex-column p-3 ">                    
                <div class="row  mx-0 justify-content-between">
                    <div class="form-group">
                        <label for="imagen_diseño">Color de linea</label>
                        <input class="form-control tamano_input_color" type="color" name="" id="color_combinacion_linea_8">
                    </div>    
                    <div class="form-group ">
                        <label for="grosor_combinacion_linea_8">Grosor de linea</label>
                        <input class="form-control tamano_input_color" type="number" name="" id="grosor_combinacion_linea_8">
                    </div>  
                    <div id="aviso_linea_figura" class="row my-2"></div>                   
                </div>                                     
            </div>
            
            <div class=" row my-3 mx-4">
                <a class="btn btn-primary color_a" href="#tabla_diseno_linea_figura" id="agregar_combinacion_linea_2"> Agregar linea</a>
            </div> 
        </div>            
    </div> 
    <div id="tabla_diseno_linea_figura" class="my-3 w-100 hiden animacion">
        <h4> Resumen del diseño</h4>
        <table class="table table-bordered w-100" id="dataTable" width="100%" cellspacing="0">
            <thead>
                <tr class="text-center">   
                    <th>Orden</th>
                    <th>Material</th>
                    <th>Color</th>
                    <th class="w-50">Alto / Grosor</th>
                    <th class="w-75">Ancho</th>
                </tr>
            </thead>
            <tbody id="tbody_linea_figura">
                
            </tbody>
        </table>
        <div class=" row my-3 mx-1">                    
            <button class="btn btn-primary" onclick="tabla_cuello_mandar_datos();">Guardar</button>
        </div>                
    </div>
    <div id="aviso_linea_figura_table" class="row my-2"></div>
</div>