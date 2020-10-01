<!-- Formulario de diseño con letras-->
<form id="formulario_cuello_letras" action="#" class="container my-5 hiden animacion form ">
    <div class="row justify-content-between">
        <h4 class="my-5">Detalles del Diseño con letras</h4>
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
                    <select class="form-control" name="" id="material_fondo_letra">
                        <option value="" selected disabled>Seleccionar</option>
                        @foreach ($materiales as $material)                            
                            <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                        @endforeach
                    </select>
                </div>
                <div class="form-group">
                    <label for="material_letra">Material de letra</label>
                    <select class="form-control" name="" id="material_letra">
                        <option value="" selected disabled>Seleccionar</option>
                        @foreach ($materiales as $material)                            
                            <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                        @endforeach
                    </select>
                </div>
                <div class="form-group">
                    <label for="contenido_letra">Contenido del texto</label>
                    <input class="form-control" type="text" name="" id="contenido_letra" maxlength="50" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);">
                </div>
            </div>
            <div class=" row my-3 mx-4">
                <a class="btn btn-primary color_a agregar"  href="#tabla_diseno_letra" id="agregar_letra" onclick="tabla_cuello_letra();"> Agregar</a>
            </div>
        </div>
        <div class="d-flex w-50 flex-column px-3">
            <div class="p-3">
                <div class="form-group">
                    <label for="color_fondo_letra">Color de fondo</label>
                    <input class="form-control tamano_input_color" type="color" name="" id="color_fondo_letra">
                </div> 
                <div class="row  mx-0">
                    <div class="form-group">
                        <label for="id_tipo_fuente__letra">Tipo de fuente</label>
                        <select class="form-control" name="" id="tipo_fuente__letra">
                            <option value="" selected disabled>Seleccionar</option>
                            <option value="" >Arial</option>
                            <option value="" >Negrita</option>
                            <option value="" >Cursiva</option>
                        </select>
                    </div>                        
                </div>
                <div class="row  mx-0">
                    <div class="form-group">
                        <label for="tamano_fuente_letra">Alto de texto (cm)</label>
                        <input class="form-control tamano_input_color" type="number" name="" id="alto_letra" min="1" onkeypress="return event.keyCode!=45" pattern="^[0-9]+" maxlength="4" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);">
                    </div> 
                    <div class="form-group mx-3">
                        <label for="color_letra">Color de letra</label>
                        <input class="form-control tamano_input_color" type="color" name="" id="color_letra">
                    </div> 
                    <span id="aviso_letra_alto"></span>                            

                </div> 
                <div id="aviso_letra" class="row my-2">
    
                </div>                                    
            </div>
        </div>
    </div>
    
    
    <div class="table-users my-3 w-60 hiden animacion mr-tabla tabla_diseno" id="tabla_diseno_letra" >
        <div class="header color_a">Resumen del diseño</div>
        
        <table cellspacing="0">
            <thead>
           
                <tr class="color_thead">
                    <th class="class-th-color">Orden</th>
                    <th class="class-th-color">Material</th>
                    <th class="class-th-color">Alto</th>
                    <th class="class-th-color">Color</th>
                    <th class="class-th-color">Tipo de fuente</th>
                    <th class="class-th-color">Contenido</th>
                    <th class="class-th-color">Opción</th>
                </tr>
            </thead>
            <tfoot>
                <tr class="color_thead">
                    <th class="class-th-color"></th>
                    <th class="class-th-color"></th>
                    <th class="class-th-color"></th>
                    <th class="class-th-color"></th>
                    <th class="class-th-color"></th>
                    <th class="class-th-color">Total</th>
                    <th class="class-th-color" id="precio_letra"></th>
                </tr>
            </tfoot>
            <tbody id="tbody_letra">
                
            </tbody>
        </table>
        <div class="animacion" id="crear_diseno_letra">
            <div class=" row my-3 mx-1">                    
                <button class="btn btn-primary button_crear_diseno vaciar_talla" onclick="validar_arrays()"  data-toggle="modal">Crear Diseño</button>
            </div>
            <div id="aviso_letra_table" class="row my-2"></div>
        </div>
     </div>
    {{-- <div class=" animacion" id="crear_diseno_letra">
        <div class=" row my-3 mx-1">                    
            <button class="btn btn-primary button_crear_diseno" onclick="validar_arrays()"  data-toggle="modal">Crear Diseño</button>
        </div>
        <div id="aviso_letra_table" class="row my-2"></div>
    </div> --}}
</form>
