
<!-- Formulario de diseño con figura-->
<div id="formulario_cuello_figuras" class="container my-5 hiden animacion">
    <div class="row">
        <h4 class="my-5">Detalles del Diseño con figuras</h4>
    </div>

    <div class="boder_radius row">
        <div class="d-flex w-50 flex-column px-3">
            <div class="p-3">
                <div class="form-group">
                    <label for="">Material de fondo</label>
                    <select class="form-control" name="" id="material_fondo_figura" required>
                        <option value="" selected disabled>Escoger Material</option>
                        @foreach ($materiales as $material)                            
                            <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                        @endforeach
                    </select>
                </div>
                <div class="form-group">
                    <label for="">Material de figura</label>
                    <select class="form-control" name="" id="material_figura" required>
                        <option value="" selected disabled>Escoger Material</option>
                        @foreach ($materiales as $material)                            
                            <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                        @endforeach
                    </select>
                    <div class="my-3">
                        <label for="imagen_diseno_figura">Imagen de figura</label>
                        <input class="w-100" type="file" name="" id="imagen_diseno_figura">
                    </div>
                </div>
                <div class="row  mx-0">
                    <div class="form-group">
                        <label for="imagen_diseño">Alto (cm)</label>
                        <input class="form-control tamano_input_color" type="number" name="" id="alto_figura" maxlength="4" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" required>
                    </div> 
                    <div class="form-group mx-3">
                        <label for="imagen_diseño">Ancho (cm)</label>
                        <input class="form-control tamano_input_color" type="number" name="" id="ancho_figura" maxlength="4" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" required>
                    </div> 
                    <span id="aviso_figura_alto"></span>                            

                </div>
                
            </div>
        </div>
        <div class="d-flex w-50 flex-column px-3">
            <div class="p-3">
                <div class="form-group">
                    <label for="imagen_diseño">Color de fondo</label>
                    <input class="form-control tamano_input_color" type="color" name="" id="color_fondo_figura" required>
                </div> 
                <div class="row  mx-0">
                    <div class="form-group">
                        <label for="imagen_diseño">Color de figura</label>
                        <input class="form-control tamano_input_color" type="color" name="" id="color_figura" required>
                    </div>                        
                </div>                                     
            </div>
            <div id="aviso_figura" class="row my-2">
    
            </div>
        </div>     
        <div class=" row my-3 mx-4">                    
            <a class="btn btn-primary color_a" href="#tabla_diseno_figura" onclick="tabla_cuello_figura();"> Agregar</a>
        </div>      
        
    </div>
    <div id="tabla_diseno_figura" class="my-3 w-60 hiden animacion">
        <h4> Resumen del diseño</h4>
        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
                <tr>    
                    <th>Orden</th>
                    <th>Material</th>
                    <th>Color</th>
                    <th>Alto</th>
                    <th>Ancho</th>
                </tr>
            </thead>
            <tbody id="tbody_figura">
                
            </tbody>
            
        </table>
        <div class=" row my-3 mx-1">                    
            <button class="btn btn-primary" onclick="tabla_cuello_mandar_datos();">Guardar</button>
        </div> 
        <div id="aviso_figura_table" class="row my-2"></div>

    
    </div>
</div>
