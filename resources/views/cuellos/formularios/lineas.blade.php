<!-- Formulario de diseño con lineas-->
<div id="formulario_cuello_lineas" class="container my-5 hiden animacion">
    <div class="row">
        <h4 class="my-5">Detalles del Diseño con lienas</h4>
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
                        <label for="grosor_linea">Alto de linea (cm)</label>
                        <input class="form-control tamano_input_color" type="number" name="" id="alto_linea" maxlength="4" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);">
                    </div> 
                    <div class="form-group mx-3">
                        <label for="imagen_diseño">Color de linea</label>
                        <input class="form-control tamano_input_color" type="color" name="" id="color_linea">
                    </div> 
                    <span id="aviso_linea_alto"></span>                            

                </div>  
                <div id="aviso_linea" class="row my-2">
    
                </div>                
            </div>
        </div>
        <div class=" row my-3 mx-4" >
            <a class="btn btn-primary color_a" href="#tabla_diseno_linea" onclick="tabla_cuello_linea();"> Agregar</a>                 
        </div>
    </div>
    

    <div class="table-users my-3 w-60 hiden animacion mr-tabla" id="tabla_diseno_linea" >
        <div class="header color_a">Resumen del diseño</div>
        
        <table cellspacing="0">
            <thead>
           
                <tr class="color_thead">
                    <th class="class-th-color">Orden</th>
                    <th class="class-th-color">Material</th>
                    <th class="class-th-color">Alto</th>
                    <th class="class-th-color">Color</th>
                    <th class="class-th-color">Opción</th>
                </tr>
            </thead>
            <tfoot>
                <tr class="color_thead">
                    <th class="class-th-color"></th>
                    <th class="class-th-color"></th>
                    <th class="class-th-color"></th>
                    <th class="class-th-color">Total</th>
                    <th class="class-th-color">$4.500</th>
                </tr>
            </tfoot>
            <tbody id="tbody_linea">        
                
            </tbody>

        </table>
        
     </div>
     <div class="hiden animacion" id="crear_diseno_linea">
        <div class=" row my-3 mx-1">                    
            <button class="btn btn-primary" data-toggle="modal" data-target="#Modal_mostrar_diseno_hecho" class="btn btn-primary">Crear Diseño</button>
        </div>
        <div id="aviso_linea_table" class="row my-2"></div>
    </div>
     



</div>
