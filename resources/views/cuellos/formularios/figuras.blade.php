
<!-- Formulario de diseño con figura-->
<div id="formulario_cuello_figuras" class="container my-5 hiden animacion">
    <div class="row">
        <h4 class="my-5">Detalles del Diseño con figuras</h4>
        <div class="d-flex p-0 justify-content-center align-items-center w-60">
            <div class="mr-3">
                <img src="{{ asset('/icons/almohada.svg') }}" alt="" width="30px">
            </div>
            <div class="text-left">
                <span class="text-success"><strong>Recuerde</strong></span>
                <p>El alto maximo de un cuello es de 10 cm</p>
            </div>
        </div>
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
                    
                </div>
                <div class="row  mx-0">
                    <div class="form-group">
                        <label for="imagen_diseño">Alto (cm)</label>
                        <input class="form-control tamano_input_color" type="number" name="" id="alto_figura" maxlength="4" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" required>
                    </div> 
                    <div class="form-group mx-3">
                        <label for="imagen_diseño">Ancho (cm)</label>
                        <input class="form-control tamano_input_color" type="number" name="" id="ancho_figura" maxlength="3" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" required>
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
            <a class="btn btn-primary color_a" href="#tabla_diseno_figura" id="gregar_figura" onclick="tabla_cuello_figura();"> Agregar</a>
        </div>      
        
    </div>

    <div class="table-users my-3 w-60 hiden animacion mr-tabla" id="tabla_diseno_figura" >
        <div class="header color_a">Resumen del diseño</div>
        
        <table cellspacing="0">
            <thead>
           
                <tr class="color_thead">
                    <th class="class-th-color">Orden</th>
                    <th class="class-th-color">Material</th>
                    <th class="class-th-color">Color</th>
                    <th class="class-th-color">Alto</th>
                    <th class="class-th-color">Ancho</th>
                    <th class="class-th-color">Opción</th>
                </tr>
            </thead>
            <tfoot>
                <tr class="color_thead">
                    <th class="class-th-color"></th>
                    <th class="class-th-color"></th>
                    <th class="class-th-color"></th>
                    <th class="class-th-color"></th>
                    <th class="class-th-color">Total</th>
                    <th class="class-th-color" id="precio_figura"></th>
                </tr>
            </tfoot>
            <tbody id="tbody_figura">
                
            </tbody>
        </table>
        
     </div>
     <div class="hiden animacion" id="crear_diseno_figura">
        <div class=" row my-3 mx-1">                    
            <button class="btn btn-primary" data-toggle="modal" data-target="#Modal_mostrar_diseno_hecho" class="btn btn-primary">Crear Diseño</button>
        </div>
        <div id="aviso_figura_table" class="row my-2"></div>

    </div>
    
</div>
