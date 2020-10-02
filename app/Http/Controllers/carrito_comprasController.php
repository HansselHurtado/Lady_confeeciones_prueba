<?php

namespace App\Http\Controllers;

use App\Carrito;
use App\Puno;
use App\Faja;
use Dotenv\Result\Success;
use Illuminate\Http\Request;

class carrito_comprasController extends Controller
{
   
    function index() {
        $data[] = [];
        $data['products'] = Carrito::get_products();
        $data['punos'] = Puno::get_puno();
        $data['faja'] = Faja::get_faja();


        $dataFormatter = [];

        foreach($data as $item){
            foreach($item as $hijo) {
                array_push($dataFormatter, $hijo);
            }
        }

        $aux = 0;
        $aux2 = []; 
        $arrayData = [];
        $numped = 1;


        usort($dataFormatter, function ($a, $b) {
            return strcmp($a["created_at"], $b["created_at"]);
        });


        for($i = 0; $i < count($dataFormatter); $i++){
            $aux = $dataFormatter[$i];
            $sw = 0;
            foreach($aux2 as $itemaux){
                if($itemaux->orden_number == $aux->orden_number && $sw == 0){
                   $sw = 1;
                    break;
                }
            }

            if($sw == 0){
                $pedido = [];
                array_push($pedido, $aux);
                for($j = 1; $j < count($dataFormatter); $j++){
                    if($aux->orden_number == $dataFormatter[$j]->orden_number && $i != $j){
                        array_push($pedido, $dataFormatter[$j]);
                    }
                }

                $arrayData['pedido'.$numped] = $pedido;
                array_push($aux2, $aux);
                $numped++;
            }
        }


        // $pedido = [];

        // foreach ( $data['products'] as $products) {
            
        // }
        return view('carrito.carrito_de_compra',compact('arrayData'));
    }

    function delete($id){
        $producto = Carrito::findOrFail($id);
        $producto->delete();
        return redirect()->back();
    }

    
    function delete_puno($id){
        $producto = Puno::findOrFail($id);
        $producto->delete();
        return redirect()->back();
    }

    
    function delete_faja($id){
        $producto = Faja::findOrFail($id);
        $producto->delete();
        return redirect()->back();
    }
    
    function empty_cart(){
        $carrito = Carrito::where('id_carrito', '>' , 0)->get();
        $fajas = Faja::where('id_faja' ,'>', 0)->get();
        $punos = Puno::where('id_puno' ,'>', 0)->get();

        foreach ($carrito as $products) {
            $products->delete();
        }
        foreach ($fajas as $products) {
            $products->delete();
        }
        foreach ($punos as $products) {
            $products->delete();
        }
        return redirect()->back();
    }

    public function add_to_car(Request $request){
        $order_number = str_pad(mt_rand(1, 99), 1, '0', STR_PAD_LEFT) . date("i") . str_pad(mt_rand(1, 99), 2, '0', STR_PAD_LEFT) . date("hsd");


        if($request->ajax()){
            if (isset($request->tallas)) {
                for($i=0; $i<count($request->tallas); $i++) { 
                    $carrito = new Carrito();
                    $carrito->id_usuario = 1;
                    $carrito->id_diseno_cuello = $request->tallas[$i]["id_diseno"];          
                    $carrito->id_talla_cuello = $request->tallas[$i]["talla_seleccionada"];
                    $carrito->cantidad = $request->tallas[$i]["cantidad_tallas"];
                    $carrito->orden_number = $order_number;
                    $carrito->save();
                }
            }
            

            if (isset($request->punos_fajas)) {
                if (count($request->punos_fajas) > 0) {
                    if ($request->punos_fajas[0]["punos"] != "") {
                        $puno = new Puno();
                        $puno->cantidad_puno =  $request->punos_fajas[0]["punos"];      
                        $puno->name = "puno";
                        $puno->orden_number = $order_number;
                        $puno->id_usuario = 1;
                        $puno->id_diseno_cuello = $request->punos_fajas[0]["id_diseno"];          
                        $puno->save();
                    }

                    
                    if ($request->punos_fajas[0]["fajas"] != "") {
                        $faja = new Faja();
                        $faja->cantidad_faja =  $request->punos_fajas[0]["fajas"];  
                        $faja->name = "faja";
                        $faja->orden_number = $order_number;
                        $faja->id_usuario = 1;
                        $faja->id_diseno_cuello = $request->punos_fajas[0]["id_diseno"];     
                        $faja->save();
                    }
                }
            }        
            return response()->json(["success" => true]);
        }
    }    
}
