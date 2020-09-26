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
    .color_a{
        /* color: #27326d; */
        background: #27326d;
        color: white;
    }
</style>
@section('content_solicitud')
    <div class="solicitud w-100 d-flex justify-content-end p-2">
        <nav class="nav_solicitud d-flex justify-content-around mr-3">
            <li><a href="" class="text-white text-uppercase">solicitud</a></li>
            <li><a href="" class="text-white text-uppercase">solicitud de pedido</a></li>
            <li><a href="" class="text-white text-uppercase">generar</a></li>
        </nav>
    </div>
@endsection

@section('content_diseno')

    <div class="w-100 bg-white" style="border-radius: 10px">
        <div class="d-flex justify-content-end py-3">
            <div class="w-75 d-flex justify-content-center">
                <h3 class="text-dark mr-4">Cuellos</h3>
            <a href={{ route('crear_cuello') }} class="btn btn-primary color_a">Diseñar</a>
            </div>
        </div>
        <div class="d-flex w-100 justify-content-between">
            <div class="content_category pb-4 border border-primary">
                <div class="color p-1">
                    <h2 class="text-white text-center mb-0">Categorías</h2>
                </div>
                <nav>
                    <li class="p-2"><a class="text-dark" href="">Figura +</a></li>
                    <li class="p-2"><a class="text-dark" href="">Letra +</a></li>
                    <li class="p-2"><a class="text-dark" href="">Liso +</a></li>
                    <li class="p-2"><a class="text-dark" href="">Linea +</a></li>
                    <div class="d-flex justify-content-center">
                        <a href="#" class="btn btn-primary color_a">Diseñar</a>
                    </div>
                </nav>
            </div>
            <div class="row content_cuellos pt-2 pr-3">    
                <div class="w-100 d-flex flex-wrap">
                    @foreach ($diseno_cuellos as $diseno_cuello)
                        <div class="container_cuello">
                        <div class="item_cuello color text-center text-white mx-2 vaciar_talla" data-toggle="modal" data-target="#Modal_detalle_cuello " onclick="detalles_cuello('{{$diseno_cuello->nombre_diseno}}','{{$diseno_cuello->id_diseno_cuello}}',' {{$diseno_cuello->nombre_modelo}}','{{$diseno_cuello->material}}')">
                                <div class="align-items-center pt-2">
                                    <span class="text-center"><strong >Diseño: {{$diseno_cuello->nombre_modelo}}</strong></span>
                                </div>
                                <div>
                                    <span class="text-center"><strong >Fondo: {{$diseno_cuello->material}}</strong></span>
                                </div>                                
                            </div>
                            <div class="item_description d-flex flex-column align-items-center vaciar_talla" data-toggle="modal" data-target="#Modal_detalle_cuello" onclick="detalles_cuello('{{$diseno_cuello->nombre_diseno}}','{{$diseno_cuello->id_diseno_cuello}}',' {{$diseno_cuello->nombre_modelo}}','{{$diseno_cuello->material}}')">
                                <span><strong>{{$diseno_cuello->nombre_diseno}}</strong></span>
                                <small class="text-primary"><strong>${{$diseno_cuello->valor}}</strong></small>
                                <button class="btn btn-primary">comprar</button>
                            </div>
                        </div>
                    @endforeach                    
                </div>
            </div>
        </div>
    </div>
    @include('cuellos/modal_cuellos/modal_detalle_cuello')  
    
@endsection
@section('scripts')
    <script  src="{!! asset('js/cuellos_modal.js') !!}"></script>
    <script  src="{!! asset('js/funciones_para_cuellos.js') !!}"></script>
@endsection