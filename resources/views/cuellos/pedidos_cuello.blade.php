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
            <li><a href="" class="text-white text-uppercase">mis pedidos</a></li>
            <li><a href="" class="text-white text-uppercase">generar</a></li>
        </nav>
    </div>
@endsection

@section('content_diseno')
    <div class="w-100 bg-white" style="border-radius: 10px">
       
        <div class="container">
            @if (!$productos->isEmpty()) 
                <div>
                    <form action="{{route('vaciar_carrito') }}" method="POST">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-primary mt-2" onclick="vaciar_carrito()">Vaciar Carrito</button>
                    </form>
                </div>               
                <table class="table table-hover" cellspacing="0">
                    <thead  class="py-4">
                    <tr style="font-size: 23px">
                        <th class="border-0"></th>
                        <th class="border-0" scope="col">Producto</th>
                        <th class="border-0" scope="col">Categoria</th>
                        <th class="border-0" scope="col">Talla</th>
                        <th class="border-0" scope="col">Precio</th>
                        <th class="border-0" scope="col">Cantidad</th>
                        <th class="border-0" scope="col">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                        @php 
                            $total = 0;
                        @endphp
                        @foreach ($productos as $producto)
                            <tr class="text-center bg-white" style="font-size: 18px">
                                <td class="border-0" style="vertical-align: middle!important"><img width="80px;" height="80px;" src="https://www.camionetica.com/wp-content/uploads/2015/05/cuello-bordado-Lylo.jpg" alt=""></td>
                                <td class="border-0 text-capitalize" style="vertical-align: middle!important">{{$producto->nombre_diseno}}</td>
                                <td class="border-0" style="vertical-align: middle!important">Modelo de cuello {{$producto->nombre_modelo}}</td>
                                <td class="border-0" style="vertical-align: middle!important">{{$producto->nombre_talla}}</td>
                                <td class="border-0" style="vertical-align: middle!important">{{ number_format($producto->valor_modelo, 2)}}</td>
                                <td class="border-0" style="vertical-align: middle!important">{{$producto->cantidad}}</td>
                                <td class="text-center border-0" style="vertical-align: middle!important">${{number_format($producto->cantidad * $producto->valor_modelo, 2)}}</td>
                                <td class="text-center border-0" style="vertical-align: middle!important">
                                    <form action="{{route('delete_carrito',$producto->id_carrito) }}" method="POST">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="border-0" style="background: white !important" onclick="eliminar_storage()"> <img  src="{{ asset('/icons/basura.svg') }}" width="30px;" height="30px;" alt="" title="eliminar del carrito"></button>            
                                    </form>
                                </td> 
                            </tr>   
                            @php 
                                $total = $total + ($producto->cantidad * $producto->valor_modelo);
                            @endphp
                            
                        @endforeach                
                    </tbody>
                </table>
                <hr>
        
                <div>
                    <div class="row">
                        <div class="col-10" style="margin: 0 auto">
                            <span>Ten en cuanto que el valor del envío puede variar</span>
                        </div>
                        <div class="col-10 mt-2" style="background: #F0F0F7; margin: 0 auto">
                            <div class="d-flex justify-content-between p-3">
                                <span><b>Total</b></span>
                                <span class="text-danger"><b>
                                    ${{number_format($total, 2)}}
                                </b></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-10 d-flex align-items-center" style="margin: 20px auto">
                            <input type="checkbox" class="mr-2 p-2">
                            <p class="m-0">Acepto términos y condiciones y autorizo el tratamiento de mis dastos personales con las siguientes condiciones</p>
                        </div>
                        <div class="col-7 d-flex flex-column justify-content-center align-items-center" style="margin:0 auto">
                            <a href="" class="btn btn-primary btn-block">Finalizar Compra</a>
                            <a  href={{ route('diseno_cuello') }} class="text-dark my-3"><u>Seguir comprando</u></a>
                        </div>
                    </div>
                </div>
            @else
                <div class="container ">
                    <div class="mb-4 d-flex justify-content-center align-items-center">
                        <img class="mt-4" style="width: 100px; " src="{{ asset('icons/carrito-de-compras.svg') }}" alt="" width="10%">
                    </div>
                    <div class="text-center">
                        <i class="fas fa-frown fa-5x text-gray-300"></i> 
                        <h3> Carrito vacio!!</h3>
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