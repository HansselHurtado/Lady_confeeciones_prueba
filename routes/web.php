<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// carrito de compras
Route::get('/ladys-confecciones/carrito_compras','carrito_comprasController@index')->name('carrito'); 

// diseño de cuello
Route::get('/crear-cuello','Diseno_cuello_controller@cuello')->name('crear_cuello');
Route::get('/crear-cuello/diseno-cuellos','Diseno_cuello_controller@diseno_cuello')->name('diseno_cuello'); 

//eliminar carrito
Route::delete('/ladys-confecciones/carrito_compras/eliminar/{id}','carrito_comprasController@delete')->name('delete_carrito'); 
