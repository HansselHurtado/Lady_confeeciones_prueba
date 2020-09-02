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
    .solicitud {
        
    }
    .nav_solicitud {
        width: 40%;
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
                <h3 class="text-dark mr-4">cuello</h3>
                <a href="" class="btn btn-primary">diseñar</a>
            </div>
        </div>
        <div class="d-flex w-100 justify-content-between">
            <div class="content_category pb-4 border border-primary">
                <div class="bg-primary p-1">
                    <h2 class="text-white text-center mb-0">categorías</h2>
                </div>
                <nav>
                    <li class="p-2"><a class="text-dark" href="">figura +</a></li>
                    <li class="p-2"><a class="text-dark" href="">letra +</a></li>
                    <li class="p-2"><a class="text-dark" href="">liso +</a></li>
                    <li class="p-2"><a class="text-dark" href="">linea +</a></li>
                    <div class="d-flex justify-content-center">
                        <a href="" class="btn btn-primary">diseñar</a>
                    </div>
                </nav>
            </div>
            <div class="row content_cuellos pt-2 pr-3">
    
                <div class="w-100 d-flex flex-wrap justify-content-between">
                    <div class = "container_cuello">
                        <div class="item_cuello bg-danger"></div>
                        <div class="item_description d-flex flex-column align-items-center">
                            <span><strong>cuello</strong></span>
                            <small class="text-primary"><strong>$145000</strong></small>
                            <button class="btn btn-primary">comprar</button>
                        </div>
                    </div>
                    <div class = "container_cuello">
                        <div class="item_cuello bg-danger"></div>
                        <div class="item_description d-flex flex-column align-items-center">
                            <span><strong>cuello</strong></span>
                            <small class="text-primary"><strong>$145000</strong></small>
                            <button class="btn btn-primary">comprar</button>
                        </div>
                    </div>
                    <div class = "container_cuello">
                        <div class="item_cuello bg-danger"></div>
                        <div class="item_description d-flex flex-column align-items-center">
                            <span><strong>cuello</strong></span>
                            <small class="text-primary"><strong>$145000</strong></small>
                            <button class="btn btn-primary">comprar</button>
                        </div>
                    </div>
                    <div class = "container_cuello">
                        <div class="item_cuello bg-danger"></div>
                        <div class="item_description d-flex flex-column align-items-center">
                            <span><strong>cuello</strong></span>
                            <small class="text-primary"><strong>$145000</strong></small>
                            <button class="btn btn-primary">comprar</button>
                        </div>
                    </div>
                    <div class = "container_cuello">
                        <div class="item_cuello bg-danger"></div>
                        <div class="item_description d-flex flex-column align-items-center">
                            <span><strong>cuello</strong></span>
                            <small class="text-primary"><strong>$145000</strong></small>
                            <button class="btn btn-primary">comprar</button>
                        </div>
                    </div>
                    <div class = "container_cuello">
                        <div class="item_cuello bg-danger"></div>
                        <div class="item_description d-flex flex-column align-items-center">
                            <span><strong>cuello</strong></span>
                            <small class="text-primary"><strong>$145000</strong></small>
                            <button class="btn btn-primary">comprar</button>
                        </div>
                    </div>
                    <div class = "container_cuello">
                        <div class="item_cuello bg-danger"></div>
                        <div class="item_description d-flex flex-column align-items-center">
                            <span><strong>cuello</strong></span>
                            <small class="text-primary"><strong>$145000</strong></small>
                            <button class="btn btn-primary">comprar</button>
                        </div>
                    </div>
                    <div class = "container_cuello">
                        <div class="item_cuello bg-danger"></div>
                        <div class="item_description d-flex flex-column align-items-center">
                            <span><strong>cuello</strong></span>
                            <small class="text-primary"><strong>$145000</strong></small>
                            <button class="btn btn-primary">comprar</button>
                        </div>
                    </div>
                    <div class = "container_cuello">
                        <div class="item_cuello bg-danger"></div>
                        <div class="item_description d-flex flex-column align-items-center">
                            <span><strong>cuello</strong></span>
                            <small class="text-primary"><strong>$145000</strong></small>
                            <button class="btn btn-primary">comprar</button>
                        </div>
                    </div>
                    <div class = "container_cuello">
                        <div class="item_cuello bg-danger"></div>
                        <div class="item_description d-flex flex-column align-items-center">
                            <span><strong>cuello</strong></span>
                            <small class="text-primary"><strong>$145000</strong></small>
                            <button class="btn btn-primary">comprar</button>
                        </div>
                    </div>
                    <div class = "container_cuello">
                        <div class="item_cuello bg-danger"></div>
                        <div class="item_description d-flex flex-column align-items-center">
                            <span><strong>cuello</strong></span>
                            <small class="text-primary"><strong>$145000</strong></small>
                            <button class="btn btn-primary">comprar</button>
                        </div>
                    </div>
                    <div class = "container_cuello">
                        <div class="item_cuello bg-danger"></div>
                        <div class="item_description d-flex flex-column align-items-center">
                            <span><strong>cuello</strong></span>
                            <small class="text-primary"><strong>$145000</strong></small>
                            <button class="btn btn-primary">comprar</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    
@endsection
