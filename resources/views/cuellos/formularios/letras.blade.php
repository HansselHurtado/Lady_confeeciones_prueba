<!-- Formulario de diseño con letras-->
<div id="formulario_cuello_letras" class="container my-5 hiden animacion ">
    <div class="row">
        <h4 class="my-5">Detalles del Diseño con letras</h4>
    </div>
    <div class="boder_radius row">
        <div class="d-flex w-50 flex-column px-3">
            <div class="p-3">
                <div class="form-group">
                    <label for="">Material de fondo</label>
                    <select class="form-control" name="material_fondo_letra" id="material_fondo_letra">
                        <option value="" selected disabled>Escoger Material</option>
                        @foreach ($materiales as $material)                            
                            <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                        @endforeach
                    </select>
                </div>
                <div class="form-group">
                    <label for="material_letra">Material de letra</label>
                    <select class="form-control" name="material_letra" id="material_letra">
                        <option value="" selected disabled>Escoger Material</option>
                        @foreach ($materiales as $material)                            
                            <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                        @endforeach
                    </select>
                </div>
                <div class="form-group">
                    <label for="contenido_letra">Contenido del texto</label>
                    <input class="form-control" type="text" name="texto_letra" id="contenido_letra">
                </div>
            </div>
            <div class=" row my-3 mx-4">
                <a class="btn btn-primary color_a"  href="#tabla_diseno_letra" onclick="tabla_cuello_letra();"> Agregar</a>
            </div>
        </div>
        <div class="d-flex w-50 flex-column px-3">
            <div class="p-3">
                <div class="form-group">
                    <label for="color_fondo_letra">Color de fondo</label>
                    <input class="form-control tamano_input_color" type="color" name="color_fondo_letra" id="color_fondo_letra">
                </div> 
                <div class="row  mx-0">
                    <div class="form-group">
                        <label for="id_tipo_fuente__letra">Tipo de fuente</label>
                        <select class="form-control" name="tipo_fuente__letra" id="tipo_fuente__letra">
                            <option value="" selected disabled>Escoge una fuente </option>
                            <option value="" >Arial</option>
                            <option value="" >Negrita</option>
                            <option value="" >Cursiva</option>
                        </select>
                    </div>                        
                </div>
                <div class="row  mx-0">
                    <div class="form-group">
                        <label for="tamano_fuente_letra">Tamaño de fuente</label>
                        <input class="form-control tamano_input_color" type="number" name="tamano_fuente_letra" id="tamano_fuente_letra">
                    </div> 
                    <div class="form-group mx-3">
                        <label for="color_letra">Color de letra</label>
                        <input class="form-control tamano_input_color" type="color" name="color_letra" id="color_letra">
                    </div>   
                </div> 
                <div id="aviso_letra" class="row my-2">
    
                </div>                                    
            </div>
        </div>
    </div>
    <div id="tabla_diseno_letra" class="my-3 w-60 hiden animacion">
        <h4> Resumen del diseño</h4>
        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
                <tr>    
                    <th>Orden</th>
                    <th>Material</th>
                    <th>Color</th>
                    <th>Tamaño</th>
                    <th>Tipo de fuente</th>
                    <th>Contenido</th>
                </tr>
            </thead>
            <tbody id="tbody_letra">
                
            </tbody>
        </table>
        <div class=" row my-3 mx-1">                    
            <button class="btn btn-primary" onclick="tabla_cuello_mandar_datos();">Guardar</button>    
        </div> 
    </div>
</div>
