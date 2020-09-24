<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class carrito_comprasController extends Controller
{
    function index() {
        return view('carrito.carrito_de_compra');
    }

    
}
