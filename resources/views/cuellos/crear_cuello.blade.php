@extends('layouts.App_ladys')
<style>
    .container_cuello {
        width: 22%;
        height: max-content;
        margin-right: 10px;
        margin-bottom: 20px;
    }
    .item_cuello {
        height: 260px;
    }
    .item_description {
        height: max-content;
    }
    h2{
        vertical-align: center;
    }
    .content_category {
        width: 20%;
        height: max-content;
        margin-left: 20px
    }
    .content_cuellos {
        width: 75%;
    }
    li {
        list-style: none;
    }

    li a {
        text-decoration: none;
    }
    .nav_solicitud {
        width: 40%;
    }
    .color {
        background-color: #27326d;
    }
    .text-color{
        color: #27326d;
    }
    .border-formulario{
        border: 1px solid #27326d;
        background: #FCFCFC !important;

    }

</style>
@section('content_solicitud')
    <div class="solicitud w-100 d-flex justify-content-end p-2">
        <nav class="nav_solicitud d-flex justify-content-around mr-3">
            <li><a href="" class="text-color text-uppercase">solicitud</a></li>
            <li><a href="{{route('pedidos')}}" class="text-color text-uppercase">mis pedidos</a></li>
            <li><a href="{{route('mis_diseno_cuello')}}"" class="text-color text-uppercase">Mis diseños</a></li>
        </nav>
    </div>
@endsection
@section('content')
    <div id="formulario_completo" class="container  container_principal border-formulario">
        <div class="w-65 mb-4">
            <div class="row">
                  <h4 class="my-5">Nuevo diseño</h4>
            </div>
            <div class="boder_radius row">
                <div class="d-flex w-50 flex-column p-3 w-md-80">
                    <div>
                        <div class="form-group">
                            <label for="nombre_cuello">Nombre de Diseño</label>
                            <input class="form-control" type="text" name="nombre" id="nombre_cuello" maxlength="80" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" required>
                            <span class="text-danger" id="nombre_error"></span>
                        </div>
                        <div class="form-group">
                            <label for="descripcion_cuello">Descripción</label>
                            <textarea class="form-control" type="text" name="descripcion" id="descripcion_cuello" maxlength="150" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"></textarea>
                        </div>
                    </div>
                </div>

                <div class="d-flex w-50 flex-column p-3 w-md-80">
                    <div>
                        <label for="imagen_diseño">Imagen del diseño</label>
                        <input class="w-100 " type="file" name="imagen_diseno" id="imagen_diseno" accept="image/gif,image/jpeg,image/jpg,image/png">
                    </div>
                    <div class="my-4">                             
                        <label for="">Tipo de cuello</label>
                        <div class="d-flex justify-content-between">
                            <div class="d-flex align-items-center">
                                <label for="cuello_liso_id" class="m-0" >Liso</label>
                                <input  class="ml-1" type="checkbox" name="cuello_liso" value="1" id="cuello_liso_id">
                            </div>
                            <div class="d-flex align-items-center">
                                <label for="cuello_letra_id" class="m-0">Letras</label>
                                <input class="ml-1 combinacion" type="checkbox" name="cuello_letras" value="3" id="cuello_letra_id">
                            </div>
                            <div class="d-flex align-items-center">
                                <label for="cuello_figura_id" class="m-0">Figuras</label>
                                <input class="ml-1 combinacion" type="checkbox" name="cuello_figuras" value="4" id="cuello_figura_id">
                            </div>
                            <div class="d-flex align-items-center">
                                <label for="cuello_lineas_id" class="m-0">Lineas</label>
                                <input class="ml-1 combinacion" type="checkbox" name="cuello_lineas" value="2" id="cuello_lineas_id">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="aviso" class="row my-2">
                
            </div>
            <div class="row my-4">
                <button id="mostrar_formulario" data-toggle="modal" data-target="#modal_mostrar_formulario" class="btn btn-primary  imagen continuar vaciar_talla quitar_target_liso" >Continuar</button>
            </div>
        </div>

        {{-- incluimos formularios de cuellos --}}
        @include('cuellos/formularios/liso')
        @include('cuellos/formularios/combinaciones/letras_figura')
        @include('cuellos/formularios/combinaciones/letras_figuras_lineas')
        @include('cuellos/formularios/combinaciones/letras_lineas')
        @include('cuellos/formularios/combinaciones/figuras_lineas')  
        @include('cuellos/formularios/lineas')
        @include('cuellos/formularios/letras')
        @include('cuellos/formularios/figuras')
          
    </div>        
    @include('cuellos/modal_cuellos/modal_crear_cuello')  
@endsection

@section('scripts')
    <script  src="{!! asset('js/funciones_para_cuellos.js') !!}"></script>
@endsection