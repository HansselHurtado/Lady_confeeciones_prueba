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
        <div>
            Estoy vacio
        </div>
        <div class="container">
            <table class="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Entrega</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Total</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </table>
        </div>
        
    </div>
    
@endsection
@section('scripts')
    <script  src="{!! asset('js/funciones_para_cuellos.js') !!}"></script>
    <script  src="{!! asset('js/cuellos_modal.js') !!}"></script>
@endsection