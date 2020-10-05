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
Route::get('/crear-cuello/mis-diseno-cuellos','Diseno_cuello_controller@mis_diseno_cuello')->name('mis_diseno_cuello'); 
Route::get('/pedidos','Diseno_cuello_controller@pedidos')->name('pedidos'); 

//eliminar carrito
Route::delete('/ladys-confecciones/carrito_compras/eliminar/{id}','carrito_comprasController@delete')->name('delete_carrito'); 
Route::delete('/ladys-confecciones/puno/eliminar/{id}','carrito_comprasController@delete_puno')->name('delete_puno'); 
Route::delete('/ladys-confecciones/faja/eliminar/{id}','carrito_comprasController@delete_faja')->name('delete_faja'); 
Route::delete('/ladys-confecciones/carrito_compras/vaciar','carrito_comprasController@empty_cart')->name('vaciar_carrito'); 
