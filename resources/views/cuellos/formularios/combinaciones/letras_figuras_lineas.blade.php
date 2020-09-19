<!-- Formulario de diseño con cuello_letras cuello_figuras cuello_lineas-->
<div id="formulario_cuello_letrascuello_figurascuello_lineas" class="row show w-65 hiden animacion">
    <h4 class="my-5">Detalles del Diseño con letras, figuras y lineas</h4>
    <div class="boder_radius">
        <div class="row m-0">
            <div class="d-flex w-50 flex-column w-md-80 w-md-50 justify-content-between p-3">
                <div>
                    <div class="form-group">
                        <label for="">Material de fondo</label>
                        <select class="form-control" name="" id="material_fondo_letra_linea_figura">
                            <option value="" selected disabled>Escoger Material</option>
                            @foreach ($materiales as $material)                            
                                <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                            @endforeach
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="material_combinacion_figura_7">Material de figura</label>
                        <select class="form-control" name="" id="material_combinacion_figura_7">
                            <option value="" selected disabled>Escoger Material</option>
                            @foreach ($materiales as $material)                            
                                <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                            @endforeach
                        </select>
                    </div>
                    <div class="row mx-0 justify-content-between w-100">
                        <div class="form-group">
                            <label for="alto_combinacion_figura_7">Alto de figura (cm)</label>
                            <input class="form-control tamano_input_color" type="number" name="" id="alto_combinacion_figura_7" maxlength="4" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);">
                        </div> 
                        <div class="form-group">
                            <label for="    ">Ancho de figura (cm)</label>
                            <input class="form-control tamano_input_color" type="number" name="" id="ancho_combinacion_figura_7" maxlength="3" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);">
                        </div>
                        <div class=" row my-3 mx-2">
                            <a class="btn btn-primary color_a" href="#tabla_diseno_letra_linea_figura" id="agregar_combinacion_figura_3"> Agregar figura</a>
                        </div>   
                    </div>
                </div>
            </div>
            
            <div class="d-flex w-50 flex-column p-3 ">
                <div class="form-group">
                    <label for="color_fondo_letra_linea_figura">Color de fondo</label>
                    <input class="form-control tamano_input_color" type="color" name="" id="color_fondo_letra_linea_figura">
                </div> 
                <div class="row  mx-0">
                    <div class="form-group">
                        <label for="color_combinacion_figura_7">Color de figura</label>
                        <input class="form-control tamano_input_color" type="color" name="" id="color_combinacion_figura_7">
                    </div>                        
                </div>  
                
                <div id="aviso_letra_linea_figura" class="row my-2"></div>                                     
            </div>
        </div>

        <div class="row m-0">
            <div class="d-flex w-50 flex-column w-md-80 w-md-50 justify-content-between p-3">
                <div>
                    <div class="form-group">
                        <label for="material_combinacion_letra_7">Material de letra</label>
                        <select class="form-control" name="" id="material_combinacion_letra_7">
                            <option value="" selected disabled>Escoger Material</option>
                            @foreach ($materiales as $material)                            
                                <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="contenido_texto_combinacion_letra_7">Contenido del texto</label>
                        <input class="form-control" type="text" name="" id="contenido_texto_combinacion_letra_7" maxlength="50" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);">
                    </div>                    
                </div>
            </div>
            
            <div class="d-flex w-50 flex-column p-3 ">
                <div class="form-group">
                    <label for="tipo_fuente_combinacion_letra_7">Tipo de fuente</label>
                    <select class="form-control" name="" id="tipo_fuente_combinacion_letra_7">
                        <option value="" selected disabled>Escoger tipo de fuente</option>
                        <option value="" >Arial</option>
                        <option value="" >Negrita</option>
                        <option value="" >Cursiva</option>
                    </select>
                </div>
                <div class="row  mx-0 justify-content-between">
                    <div class="form-group">
                        <label for="color_combinacion_letra_7">Color de texto</label>
                        <input class="form-control tamano_input_color" type="color" name="" id="color_combinacion_letra_7">
                    </div>    
                    <div class="form-group ">
                        <label for="tamano_combinacion_letra_7">Alto de texto (cm)</label>
                        <input class="form-control tamano_input_color" type="number" name="" id="alto_combinacion_letra_7" maxlength="4" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);">
                    </div> 
                    <div id="aviso_letra_linea_figura_alto" class="row my-2"></div>                     
                    <div id="aviso_letra_linea_figura" class="row my-2"></div>                     

                </div>                                     
            </div>
            <div class=" row my-3 mx-4">
                <a class="btn btn-primary color_a"  href="#tabla_diseno_letra_linea_figura" id="agregar_combinacion_letra_3"> Agregar texto</a>
            </div> 
        </div>

        <div class="row m-0">
            <div class="d-flex w-50 flex-column w-md-80 w-md-50 justify-content-between p-3">
                <div>
                    <div class="form-group">
                        <label for="material_combinacion_linea_7">Material de lineas</label>
                        <select class="form-control" name="" id="material_combinacion_linea_7">
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
                        <label for="color_combinacion_linea_7">Color de linea</label>
                        <input class="form-control tamano_input_color" type="color" name="" id="color_combinacion_linea_7">
                    </div>    
                    <div class="form-group ">
                        <label for="alto_combinacion_linea_7">Alto de linea (cm)</label>
                        <input class="form-control tamano_input_color" type="number" name="" id="alto_combinacion_linea_7" maxlength="4" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);">
                    </div> 
                    <div id="aviso_letra_linea_figura" class="row my-2"></div>                   
                </div>                                     
            </div>
            <div class=" row my-3 mx-4">
                <a class="btn btn-primary color_a" href="#tabla_diseno_letra_linea_figura" id="agregar_combinacion_linea_4"> Agregar linea</a>
            </div> 
        </div>            
    </div>
   

    <div class="table-users my-3 w-60 hiden animacion mr-tabla" id="tabla_diseno_letra_linea_figura" >
        <div class="header color_a">Resumen del diseño</div>
        
        <table cellspacing="0">
            <thead>
           
                <tr class="color_thead">
                    <th class="class-th-color">Orden</th>
                    <th class="class-th-color">Material</th>
                    <th class="class-th-color">Color</th>
                    <th class="class-th-color">Alto</th>
                    <th class="class-th-color">Tipo de fuente/ Ancho</th>
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
                    <th class="class-th-color">$4.500</th>
                </tr>
            </tfoot>
            <tbody id="tbody_letra_linea_figura">
                
            </tbody>
        </table>
        
     </div>
     <div class="hiden animacion" id="crear_diseno_letra_figura_linea">
        <div class=" row my-3 mx-1">                    
            <button class="btn btn-primary" id="modal_button_letra_linea_figura" data-toggle="modal"  class="btn btn-primary">Crear Diseño</button>
        </div>        
    </div>
    <div id="aviso_letra_linea_figura_table" class="row my-2"></div>                   

</div>
