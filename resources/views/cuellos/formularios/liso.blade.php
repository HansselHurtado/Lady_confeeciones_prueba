

<!-- Formulario de diseño con liso-->
<div id="formulario_cuello_liso" class="container my-5 hiden animacion">
    <div class="row">
        <h4 class="my-5">Detalles del Diseño con liso</h4>
    </div>
    <div class="boder_radius row">
        <div class="d-flex w-50 flex-column px-3">
            <div class="p-3">
                <div class="form-group">
                    <label for="">Material de fondo</label>
                    <select class="form-control" name="material_fondo_liso" id="material_fondo_liso">
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
                    <label for="imagen_diseño">Color de fondo</label>
                    <input class="form-control tamano_input_color" type="color" name="color_fondo_liso" id="color_fondo_liso">
                </div>                                   
            </div>
        </div>
    </div>
    <div id="aviso_liso" class="row my-2">

    </div> 
    <div class=" row my-3">
        <button class="btn btn-primary" onclick="tabla_cuello_liso_mandar_datos()"> Crear Diseño</button>
    </div>

</div>
