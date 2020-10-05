@extends('layouts.App_ladys')

<style>
    .container_cuello {
        width: 22%;
        height: max-content;
        margin-right: 10px;
        margin-bottom: 20px;
        border: 2px solid #27326d;
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
        background: #27326d !important;
        color: white;
    }
    .text-color{
        color: #27326d;
    }
    .color_button{
        background: #27326d !important;
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

@section('content_diseno')
    @if (count($diseno_cuellos) > 0)
        <div class="w-100 bg-white" style="border-radius: 10px">
            <div class="d-flex justify-content-end py-3">
                <div class="w-75 d-flex justify-content-center">
                <a href={{ route('crear_cuello') }} class="btn color_button text-white">Diseñar</a>
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
                            <a href={{ route('crear_cuello') }} class="btn color_button text-white">Diseñar</a>
                        </div>
                    </nav>
                </div>
                <div class="row content_cuellos pt-2 pr-3">    
                    <div class="w-100 d-flex flex-wrap">
                        @foreach ($diseno_cuellos as $diseno_cuello)
                            <div class="container_cuello pb-2">
                                <div class="item_cuello  text-center text-color mx-2 vaciar_talla" data-toggle="modal" data-target="#Modal_detalle_cuello_imagen_inicial " onclick="detalles_cuello_img('{{$diseno_cuello->nombre_diseno}}','{{$diseno_cuello->id_diseno_cuello}}',' {{$diseno_cuello->nombre_modelo}}','{{$diseno_cuello->material}}')">
                                        <div class="align-items-center pt-2">
                                            <span class="text-center"><strong >Diseño: {{$diseno_cuello->nombre_modelo}}</strong></span>
                                        </div>
                                        <div>
                                            <span class="text-center"><strong >Fondo: {{$diseno_cuello->material}}</strong></span>
                                        </div>                                    
                                    <img width="160px" height="160px"  src="{{ asset('/img/loading.gif')}}" alt="">
                                    <span>Esperando imagen final...</span>
                                </div>
                                <div class="item_description d-flex flex-column align-items-center vaciar_talla" data-toggle="modal" data-target="#Modal_detalle_cuello_imagen_inicial" onclick="detalles_cuello_img('{{$diseno_cuello->nombre_diseno}}','{{$diseno_cuello->id_diseno_cuello}}',' {{$diseno_cuello->nombre_modelo}}','{{$diseno_cuello->material}}')">
                                    <span><strong  class="text-capitalize">{{$diseno_cuello->nombre_diseno}}</strong></span>
                                    <small class="text-primary"><strong>${{$diseno_cuello->valor}}</strong></small>
                                </div>
                            </div>
                        @endforeach                    
                    </div>
                </div>
            </div>
        </div>
    @else
        <div class="w-100 bg-white" style="border-radius: 10px">
            <div class="text-center">
                <h2>No tienes diseños aún..</h2>
            </div>
        </div>
    @endif 


    
    @include('cuellos/modal_cuellos/modal_detalle_cuello')  
    
@endsection
@section('scripts')
    <script  src="{!! asset('js/cuellos_modal.js') !!}"></script>
    <script  src="{!! asset('js/funciones_para_cuellos.js') !!}"></script>
@endsection