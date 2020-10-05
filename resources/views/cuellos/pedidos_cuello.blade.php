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
    .text-color{
        color: #27326d;
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
    <div class="w-100 bg-white" style="border-radius: 10px">
       
        <div class="container">
            @if (count($arrayData) > 0) 
                    
                <div>
                    @php 
                        $numpedido = 1;
                        $totalpedido = 0;
                    @endphp
                    <div class="text-center mt-4">
                        <h3>Mis pedidos</h3>
                    </div>
                   @foreach($arrayData as $pedido)
                        <div class="card w-100 mt-4" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">Pedido #{{$numpedido}}</h5>
                                <div>
                                    <table class="table table-hover w-100" cellspacing="0">
                                        <thead  class="py-4">
                                            <tr style="font-size: 23px">
                                                <th class="border-0"></th>
                                                <th class="border-0" scope="col">Diseño</th>
                                                <th class="border-0" scope="col">Categoria</th>
                                                <th class="border-0" scope="col">Descripción</th>
                                                <th class="border-0" scope="col">Talla</th>
                                                <th class="border-0" scope="col">Precio</th>
                                                <th class="border-0" scope="col">Cantidad</th>
                                                <th class="border-0" scope="col">Total</th>
                                                <th class="border-0" scope="col">Estado</th>
                                            </tr>
                                        </thead>
                                        <tbody>        
                                            @foreach($pedido as $item) 
                                                <tr class="text-center bg-white" style="font-size: 18px">
                                                    <td class="border-0" style="vertical-align: middle!important"><img width="80px;" height="80px;" src="{{ asset('/img/fondo_cuello/'.$item->imagen_inicial) }}" alt=""></td>
                                                    <td class="border-0 text-capitalize" style="vertical-align: middle!important">{{$item->nombre_diseno}}</td>
                                                    <td class="border-0" style="vertical-align: middle!important">Modelo de cuello {{$item->nombre_modelo}}</td>
                                                    <td class="border-0 text-capitalize" style="vertical-align: middle!important">{{isset($item->name) ? $item->name : "Cuello"}}</td>
                                                    <td class="border-0" style="vertical-align: middle!important">{{isset($item->nombre_talla) ? $item->nombre_talla : "---"}}</td>
                                                    <td class="border-0" style="vertical-align: middle!important">${{ isset($item->valor_modelo) ? number_format($item->valor_modelo, 0) : number_format(1200, 0) }}</td>
                                                    <td class="border-0" style="vertical-align: middle!important">{{$item->cantidad}}</td>
                                                    <td class="text-center border-0" style="vertical-align: middle!important">${{isset($item->valor_modelo) ? number_format($item->cantidad * $item->valor_modelo, 0): number_format($item->cantidad * 1200, 0) }}</td>
                                                    <td class="text-center border-0" style="vertical-align: middle!important">Pago por confirmar</td>
                                                    <td class="text-center border-0" style="vertical-align: middle!important">
                                                        @if($item->name == "puno")
                                                            <form action="{{route('delete_puno', $item->id) }}" method="POST">
                                                                @csrf
                                                                @method('DELETE')
                                                                <button type="submit" class="border-0" style="background: white !important" onclick="eliminar_storage()"> <img  src="{{ asset('/icons/basura.svg') }}" width="30px;" height="30px;" alt="" title="eliminar del carrito"></button>            
                                                            </form>
                
                                                        @elseif($item->name == "faja")
                                                            <form action="{{route('delete_faja', $item->id) }}" method="POST">
                                                                @csrf
                                                                @method('DELETE')
                                                                <button type="submit" class="border-0" style="background: white !important" onclick="eliminar_storage()"> <img  src="{{ asset('/icons/basura.svg') }}" width="30px;" height="30px;" alt="" title="eliminar del carrito"></button>            
                                                            </form>
                                                        @else
                                                            <form action="{{route('delete_carrito', $item->id) }}" method="POST">
                                                                @csrf
                                                                @method('DELETE')
                                                                <button type="submit" class="border-0" style="background: white !important" onclick="eliminar_storage()"> <img  src="{{ asset('/icons/basura.svg') }}" width="30px;" height="30px;" alt="" title="eliminar del carrito"></button>            
                                                            </form>
                                                        @endif
                                                    </td> 
                                                </tr> 
                                                @php 
                                                    $sum = isset($item->valor_modelo) ? ($item->cantidad * $item->valor_modelo): ($item->cantidad * 1200);
                                                    $totalpedido = $totalpedido + $sum;
                                                @endphp
                                            @endforeach  
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        @php 
                            $numpedido++;
                        @endphp
                   @endforeach
                </div>

                <div>
                    
                    <div class="row">
                        
                        <div class="col-7 d-flex flex-column justify-content-center align-items-center" style="margin:0 auto">
                            <a  href={{ route('diseno_cuello') }} class="text-dark my-3"><u>Seguir comprando</u></a>
                        </div>
                    </div>
                </div>
                <hr>
            @else
                <div class="container ">
                    <div class="mb-4 d-flex justify-content-center align-items-center">
                        <img class="mt-4" style="width: 100px; " src="{{ asset('icons/carrito-de-compras.svg') }}" alt="" width="10%">
                    </div>
                    <div class="text-center">
                        <i class="fas fa-frown fa-5x text-gray-300"></i> 
                        <h3> No tienes pedidos</h3>
                        <a  href={{ route('diseno_cuello') }} class="text-dark mb-2"><u>Ir a comprar</u></a>
                    </div>
                </div> 
            @endif
        </div>
        
    </div>
    
@endsection
@section('scripts')
    <script  src="{!! asset('js/funciones_para_cuellos.js') !!}"></script>
    <script  src="{!! asset('js/cuellos_modal.js') !!}"></script>
    <script>
        function eliminar_storage(){
            let aux = localStorage.getItem("numProducts")
            localStorage.setItem("numProducts",parseInt(aux) - 1)
        }
        function vaciar_carrito(){
            localStorage.setItem("numProducts",0)
        }
    </script>
@endsection