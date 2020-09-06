<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->

    <title>Ladys Confecciones</title>

    <!-- Scripts -->
    <script src="{!! asset('https://code.jquery.com/jquery-3.3.1.min.js') !!}"></script>
    <script src="{!! asset('https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js') !!}" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="{!! asset('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js') !!}" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href=" {!! asset('https://fonts.googleapis.com/css?family=Nunito ') !!}" rel="stylesheet">
    <link rel="stylesheet" href=" {!! asset('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css') !!}">
    

    <!-- Styles -->
    <link rel="stylesheet" href="{!! asset('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css') !!}" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="{!! asset('css/layouts/layouts.css') !!}">
    {{-- <link rel="stylesheet"  href="{!! asset('css/bootstrap.css') !!}" rel="stylesheet"> --}}

    <style>
        .bg_color{
            background-color: #27326d;
            color: white;
        }
        .text_color{
            color: #27326d;
        }
        .nav_details{
            font-family: Calibri;
            background-color: #FFFFFF;
            border-bottom: 20px solid;
            border-bottom-color: #27326D;
        }
        .item_header_main a {
            padding-left: 20px !important;
            padding-right: 20px !important;
            font-size: 14px;
            width: max-content;

        }
        .navbar-nav {
            margin-right: 0 !important;
        }
        .input_search input {
            width: 260px !important;
            border-radius: 20px;
            height: 30px;
        }
    </style>

</head>
<body style="background: url(https://damecoins.com/img/landing/bg/home.png)">
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-light mb-0 border-0 shadow-sm p-0 nav_details" >
            <div class="container ml-0 d-flex align-items-end">
                <img src="{{ asset('icons/ladys_blue_icon.png') }}" alt="" width="10%">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse mb-2 align-items-end" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto mt-2 ">
                        <li class="item_header_main">
                            <a class="text-light p-2 btn bg_color mr-2" href="#">
                                {{ 'INICIO' }}
                            </a>
                        </li>
                        <li class="item_header_main">
                            <a class="text-light p-2  btn bg_color mr-2" href="#">
                                {{ 'CONFECCIONES' }}
                            </a>
                        </li>
                        <li class="item_header_main">
                            <a class="text-light p-2 btn bg_color mr-2" href="#">
                                {{ 'CORPORATIVE' }}
                            </a>
                        </li>
                        <li class="item_header_main">
                            <a class="text-light p-2 btn bg_color mr-2" href="#">
                                {{ 'OUFIT' }}
                            </a>
                        </li>
                        <li class="item_header_main">
                            <a class="text-light p-2 btn bg_color mr-2" href="#">
                                {{ 'QUIENES SOMOS' }}
                            </a>
                        </li>

                    </ul>
                    <form class="form-inline my-2 my-lg-0 input_search">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    </form>
                    
                    

                    <!-- Right Side Of Navbar -->
                    {{-- <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        <li class="nav-item">
                            <a class="nav-link text-light btn bg_color mr-2 rounded-pill " href="#" style="width: 100px">{{ __('Login') }}</a>
                        </li>
                            <li class="nav-item">
                                <a class="nav-link text-light btn bg_color mr-2 rounded-pill " href="#" style="width: 100px">{{ __('Register') }}</a>
                            </li>
                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle text_color h4" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                            </a>

                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                
                                
                            </div>
                        </li>
                    </ul> --}}
                </div>
            </div>
        </nav>
        <div class="w-100">
            @yield('content_solicitud')
        </div>
        <main class="container">
            @yield('content')
        </main>
        
        <div class="w-100 px-4">
            @yield('content_diseno')
        </div>
        <footer id="footer" style="height: 430px; background-color: #27326D">
            <div class="form-row m-0">
                <div class="col flex-column mt-5 ml-5">
                    <h3 class="text-light text-uppercase ">
                        Aqui puedes realizar tu PEDIDO de cotizacion.
                    </h3>
                    <a href="" class="btn btn-light rounded-pill mt-1" style="width: 350px; height: 40px; font-size: 20px"> SOLICITUD DE COTIZACION</a>
                    <br>
                    <a href="" class="btn btn-light rounded-pill mt-1" style="width: 350px; height: 40px; font-size: 20px"> SOLICITUD DE PEDIDO</a>
                    <div>
                        <img src="{{ asset('/icons/facebook_white.png') }}" alt="" width="100px">
                        <img src="{{ asset('/icons/twitter_white.png') }}" alt="" width="100px">
                        <img src="{{ asset('/icons/instagram_white.png') }}" alt="" width="100px">
                    </div>
                </div>
                <div class="col flex-column ml-5 mt-5">
                    <h5 class="text-light">
                        Quienes somos
                    </h5>
                    <p class="text-light">
                        Mision
                        <br>
                        Vision
                    </p>
                    <h5 class="text-light">
                        Nuestras lineas
                    </h5>
                    <p class="text-light">
                        Ladys Confecciones
                        <br>
                        Ladys Corporative
                        <br>
                        Ladys Oufit
                    </p>
                </div>
                <div class="col flex-column ml-5 mt-5">
                    <h5 class="text-light">
                        Nosotros
                    </h5>
                    <p class="text-light">
                        Blog
                    </p>
                    <p class="text-light">
                        <img src="{{ asset('/icons/ubicacion_white.png') }}" alt="" width="50px"> Nuestra ubicacion
                        <br>
                        <img src="{{ asset('/icons/telefono_white.png') }}" alt="" width="50px"> Telefono
                        <br>
                        <img src="{{ asset('/icons/usuario_white.png') }}" alt="" width="50px"> Mi cuenta
                    </p>
                </div>
                <div class="col flex-column">
                    <img src="{{ asset('icons/ladys_white_icon.png') }}" alt="" width="400px">
                </div>
            </div>
            <div class="form-row mr-auto ml-auto mt-3" style="width:70%; height: 2px; background-color: #FFFFFF">
            </div>
            <div class="form-row mr-auto text-center">
                <div class="col mr-auto ml-auto">
                    <p class="text-light">
                        Dirección: Calle 14 # 7- 23 Centro,Santa Marta - Magdalena
                        <br>
                        Teléfono: 4 31 94 80 - (57) 315 741 85 13
                        <br>
                        Email: ventas@ladysconfecciones.com
                    </p>
                </div>
            </div>
        </footer>
    </div>


    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script  src="{!! asset('https://code.jquery.com/jquery-3.4.1.min.js') !!}" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="{!! asset('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js') !!}" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="{!! asset('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js') !!}" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="{!! asset('https://unpkg.com/sweetalert/dist/sweetalert.min.js') !!}"></script>

    @yield('scripts')

</body>
</html>
