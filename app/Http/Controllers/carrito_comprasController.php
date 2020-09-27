<?php

namespace App\Http\Controllers;

use App\Carrito;
use Dotenv\Result\Success;
use Illuminate\Http\Request;

class carrito_comprasController extends Controller
{
    function index() {
        $productos = Carrito::where('id_usuario', 1)
                    ->join('diseno_cuellos','carritos.id_diseno_cuello','diseno_cuellos.id_diseno_cuello')
                    ->join('talla_cuellos','carritos.id_talla_cuello','talla_cuellos.id_talla_cuello')
                    ->join('valor_modelos','diseno_cuellos.id_valor_modelo','valor_modelos.id_valor_modelo')
                    ->join('modelo_cuellos','diseno_cuellos.id_modelo_cuello','modelo_cuellos.id_modelo_cuello')
                    ->orderBy('id_carrito','desc')->get();
        return view('carrito.carrito_de_compra',compact('productos'));
    }

    function delete($id){
        $producto = Carrito::findOrFail($id);
        $producto->delete();
        return redirect()->back();
    }
    
    function empty_cart(){
        $carrito = Carrito::where('id_carrito', '>' , 0)->get();
        foreach ($carrito as $products) {
            $products->delete();
        }
        return redirect()->back();
    }

    function add_to_car(Request $request){
        if($request->ajax()){
            for($i=0; $i<count($request->tallas); $i++) { 
                $carrito = new Carrito();
                $carrito->id_usuario = 1;
                $carrito->id_diseno_cuello = $request->tallas[$i]["id_diseno"];          
                $carrito->id_talla_cuello = $request->tallas[$i]["talla_seleccionada"];
                $carrito->cantidad = $request->tallas[$i]["cantidad_tallas"];
                $carrito->save();
            }            
            return response()->json(["success" => true]);
        }
    }    
}
