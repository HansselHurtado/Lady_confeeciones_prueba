<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{!! asset('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css') !!}" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="{!! asset('css/layouts/layouts.css') !!}">
    <title>Ladys confecciones</title>
</head>
<body style="background: url(https://damecoins.com/img/landing/bg/home.png)">    
    <nav class="navbar navbar-expand-lg navbar-light py-4 fixed">
        <a class="navbar-brand text-white" href="#">Ladys Confecciones</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav d-flex mr-auto">
                <li class="nav-item active d-flex px-3">
                    <a class="nav-link text-white" href="#">Inicio <span class="sr-only"></span></a>
                </li>
                <li class="nav-item  d-flex">
                    <a class="nav-link text-white" href="#">Categoria</a>
                </li>
                <li class="nav-item dropdown  d-flex px-3 ">
                    <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Desplegable
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item  text-dark" href="#">Action</a>
                        <a class="dropdown-item text-dark" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item text-dark" href="#">Something else here</a>
                    </div>
                </li>
                <li class="nav-item  d-flex px-3 ">
                    <a class="nav-link disabled text-white" href="#">Disabled</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0 text-white" type="submit">Buscar</button>
            </form>
        </div>
    </nav>
    <div  class="container container_principal">       
       @yield('content')
    </div>
    
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script  src="{!! asset('https://code.jquery.com/jquery-3.4.1.min.js') !!}" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="{!! asset('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js') !!}" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="{!! asset('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js') !!}" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="{!! asset('https://unpkg.com/sweetalert/dist/sweetalert.min.js') !!}"></script>

    @yield('scripts')
</body>
</html>