
<!-- Formulario de diseño con liso-->
<div id="formulario_cuello_liso" class="container my-5 hiden animacion">
    <div class="row">
        <h4 class="my-5">Detalles del Diseño con liso</h4>
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
    <div class=" row my-3 mx-1">                    
        <button class="btn btn-primary liso crear_diseno" data-toggle="modal"   onclick="cuello_liso()">Crear Diseno</button>
        <div class="divider-custom mx-2" onclick="showimagefondo()" class="cursor-pointer" data-toggle="modal" data-target="#Modal_mostrar_imagen_diseno">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon">   <img src="{{ asset('/icons/almohada.svg') }}" alt="" width="50px"></div>
            <div class="divider-custom-line"></div>
        </div>
    </div>
</div>
