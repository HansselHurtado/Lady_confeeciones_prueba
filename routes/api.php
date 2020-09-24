<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// trear precios de los modelos
Route::get('crear-cuello/precio-modelo/{id_modelo}/{id_material}','Diseno_cuello_controller@precio_modelo');

Route::post('crear-cuello/cuello','Diseno_cuello_controller@crear_cuello');
Route::get('cuello/detalles/{id_diseno}','Diseno_cuello_controller@detalle_cuello');