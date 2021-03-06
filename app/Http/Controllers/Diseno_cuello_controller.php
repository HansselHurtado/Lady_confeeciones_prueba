<?php

namespace App\Http\Controllers;

use App\Diseno_cuello;
use App\Figuras;
use App\Letras;
use App\Lineas;
use App\Material_cuello;
use App\Modelo_cuello;
use App\Valor_modelo;
use App\Carrito;
use App\Puno;
use App\Faja;
use Illuminate\Http\Request;

class Diseno_cuello_controller extends Controller
{
    public function cuello(){
        $modelo_cuellos = Modelo_cuello::all();   
        $materiales = Material_cuello::all();  
        return view('cuellos.crear_cuello',compact('modelo_cuellos','materiales'));
    }

    public function crear_cuello(Request $request){


        if($request->ajax()){   

            // return $request->obj_imagen_diseno;

            $cuello = new Diseno_cuello();
            $cuello->id_modelo_cuello = $request->obj_cuello_id;
            $cuello->nombre_diseno = $request->obj_nombre_cuello;
            $cuello->descripcion = $request->obj_descripcion_cuello;
            $cuello->imagen_inicial = $request->obj_imagen_diseno;
            $cuello->id_material_cuello = $request->obj_material_fondo;
            $cuello->color_fondo_diseno = $request->obj_color_fondo;
            $valor = Valor_modelo::where('id_modelo_cuello', $request->obj_cuello_id)->where('id_material_cuello',$request->obj_material_fondo)->first();
            $cuello->id_valor_modelo = $valor->id_valor_modelo;
            $cuello->estado_view = 0;
            $cuello->save();
            switch ($request->obj_cuello_id) {
                case 2:
                    for($i=0; $i<count($request->obj_datos_linea); $i++) { 
                        $cuello_linea = new Lineas();
                        $cuello_linea->color_linea = $request->obj_datos_linea[$i]["color_linea"];
                        $cuello_linea->grosor = $request->obj_datos_linea[$i]["alto_linea"];
                        $cuello_linea->id_diseno_cuello = $cuello->id_diseno_cuello;
                        $cuello_linea->id_material_cuello = $request->obj_datos_linea[$i]["material_linea"];
                        $cuello_linea->save();
                    }
                    break;
                case 3:
                    for($i=0; $i<count($request->obj_datos_letra); $i++) { 
                        $cuello_letra = new Letras();
                        $cuello_letra->color_letra = $request->obj_datos_letra[$i]["color_letra"];
                        $cuello_letra->fuente_ltra = $request->obj_datos_letra[$i]["tipo_fuente__letra"];
                        $cuello_letra->contenido = $request->obj_datos_letra[$i]["contenido_letra"];
                        $cuello_letra->tamano_fuente = $request->obj_datos_letra[$i]["alto_letra"];
                        $cuello_letra->id_diseno_cuello = $cuello->id_diseno_cuello;
                        $cuello_letra->id_material_cuello = $request->obj_datos_letra[$i]["material_letra"];
                        $cuello_letra->save();
                    }
                    break;
                case 4:
                    for($i=0; $i<count($request->obj_datos_figura); $i++) { 
                        $cuello_figura_figura = new Figuras();
                        $cuello_figura_figura->color_figura = $request->obj_datos_figura[$i]["color_figura"];
                        $cuello_figura_figura->alto = $request->obj_datos_figura[$i]["alto_figura"];
                        $cuello_figura_figura->ancho = $request->obj_datos_figura[$i]["ancho_figura"];
                        $cuello_figura_figura->id_diseno_cuello = $cuello->id_diseno_cuello;
                        $cuello_figura_figura->id_material_cuello = $request->obj_datos_figura[$i]["material_figura"];
                        $cuello_figura_figura->save();
                    }
                    break;
                case 5:
                    for($i=0; $i<count($request->obj_datos_letra); $i++) { 
                        $cuello_letra = new Letras();
                        $cuello_letra->color_letra = $request->obj_datos_letra[$i]["color_letra"];
                        $cuello_letra->fuente_ltra = $request->obj_datos_letra[$i]["tipo_fuente__letra"];
                        $cuello_letra->contenido = $request->obj_datos_letra[$i]["contenido_letra"];
                        $cuello_letra->tamano_fuente = $request->obj_datos_letra[$i]["alto_letra"];
                        $cuello_letra->id_diseno_cuello = $cuello->id_diseno_cuello;
                        $cuello_letra->id_material_cuello = $request->obj_datos_letra[$i]["material_letra"];
                        $cuello_letra->save();
                    }
                    for($i=0; $i<count($request->obj_datos_figura); $i++) { 
                        $cuello_figura_figura = new Figuras();
                        $cuello_figura_figura->color_figura = $request->obj_datos_figura[$i]["color_figura"];
                        $cuello_figura_figura->alto = $request->obj_datos_figura[$i]["ancho_figura"];
                        $cuello_figura_figura->ancho = $request->obj_datos_figura[$i]["ancho_figura"];
                        $cuello_figura_figura->id_diseno_cuello = $cuello->id_diseno_cuello;
                        $cuello_figura_figura->id_material_cuello = $request->obj_datos_figura[$i]["material_combinacion_figura_5"];
                        $cuello_figura_figura->save();
                    }
                    break;

                case 6:
                    for($i=0; $i<count($request->obj_datos_linea); $i++) { 
                        $cuello_linea = new Lineas();
                        $cuello_linea->color_linea = $request->obj_datos_linea[$i]["color_linea"];
                        $cuello_linea->grosor = $request->obj_datos_linea[$i]["alto_linea"];
                        $cuello_linea->id_diseno_cuello = $cuello->id_diseno_cuello;
                        $cuello_linea->id_material_cuello = $request->obj_datos_linea[$i]["material_linea"];
                        $cuello_linea->save();
                    }
                    for($i=0; $i<count($request->obj_datos_letra); $i++) { 
                        $cuello_letra = new Letras();
                        $cuello_letra->color_letra = $request->obj_datos_letra[$i]["color_letra"];
                        $cuello_letra->fuente_ltra = $request->obj_datos_letra[$i]["tipo_fuente__letra"];
                        $cuello_letra->contenido = $request->obj_datos_letra[$i]["contenido_letra"];
                        $cuello_letra->tamano_fuente = $request->obj_datos_letra[$i]["alto_letra"];
                        $cuello_letra->id_diseno_cuello = $cuello->id_diseno_cuello;
                        $cuello_letra->id_material_cuello = $request->obj_datos_letra[$i]["material_letra"];
                        $cuello_letra->save();
                    }             
                    break;
                case 7:
                    for($i=0; $i<count($request->obj_datos_linea); $i++) { 
                        $cuello_linea = new Lineas();
                        $cuello_linea->color_linea = $request->obj_datos_linea[$i]["color_linea"];
                        $cuello_linea->grosor = $request->obj_datos_linea[$i]["alto_linea"];
                        $cuello_linea->id_diseno_cuello = $cuello->id_diseno_cuello;
                        $cuello_linea->id_material_cuello = $request->obj_datos_linea[$i]["material_linea"];
                        $cuello_linea->save();
                    }
                    for($i=0; $i<count($request->obj_datos_letra); $i++) { 
                        $cuello_letra = new Letras();
                        $cuello_letra->color_letra = $request->obj_datos_letra[$i]["color_letra"];
                        $cuello_letra->fuente_ltra = $request->obj_datos_letra[$i]["tipo_fuente__letra"];
                        $cuello_letra->contenido = $request->obj_datos_letra[$i]["contenido_letra"];
                        $cuello_letra->tamano_fuente = $request->obj_datos_letra[$i]["alto_letra"];
                        $cuello_letra->id_diseno_cuello = $cuello->id_diseno_cuello;
                        $cuello_letra->id_material_cuello = $request->obj_datos_letra[$i]["material_letra"];
                        $cuello_letra->save();
                    }     
                    for($i=0; $i<count($request->obj_datos_figura); $i++) { 
                        $cuello_figura_figura = new Figuras();
                        $cuello_figura_figura->color_figura = $request->obj_datos_figura[$i]["color_figura"];
                        $cuello_figura_figura->alto = $request->obj_datos_figura[$i]["ancho_figura"];
                        $cuello_figura_figura->ancho = $request->obj_datos_figura[$i]["ancho_figura"];
                        $cuello_figura_figura->id_diseno_cuello = $cuello->id_diseno_cuello;
                        $cuello_figura_figura->id_material_cuello = $request->obj_datos_figura[$i]["material_combinacion_figura_8"];
                        $cuello_figura_figura->save();
                    } 
                    break;
                case 8:
                    for($i=0; $i<count($request->obj_datos_linea); $i++) { 
                        $cuello_linea = new Lineas();
                        $cuello_linea->color_linea = $request->obj_datos_linea[$i]["color_linea"];
                        $cuello_linea->grosor = $request->obj_datos_linea[$i]["alto_linea"];
                        $cuello_linea->id_diseno_cuello = $cuello->id_diseno_cuello;
                        $cuello_linea->id_material_cuello = $request->obj_datos_linea[$i]["material_linea"];
                        $cuello_linea->save();
                    }
                    for($i=0; $i<count($request->obj_datos_figura); $i++) { 
                        $cuello_figura_figura = new Figuras();
                        $cuello_figura_figura->color_figura = $request->obj_datos_figura[$i]["color_figura"];
                        $cuello_figura_figura->alto = $request->obj_datos_figura[$i]["ancho_figura"];
                        $cuello_figura_figura->ancho = $request->obj_datos_figura[$i]["ancho_figura"];
                        $cuello_figura_figura->id_diseno_cuello = $cuello->id_diseno_cuello;
                        $cuello_figura_figura->id_material_cuello = $request->obj_datos_figura[$i]["material_combinacion_figura_8"];
                        $cuello_figura_figura->save();
                    }                    
                    break;
            }
            return $cuello->id_diseno_cuello;
        }
    }
    public function diseno_cuello(){      
        $view = 1;
        $diseno_cuellos = Diseno_cuello::get_diseno($view);
        return view('cuellos.diseno_cuellos',compact('diseno_cuellos'));
    }

    public function mis_diseno_cuello(){
        $view = 0;
        $diseno_cuellos = Diseno_cuello::get_diseno($view);
        return view('cuellos.mis_diseno_cuello',compact('diseno_cuellos'));
    }

    public function detalle_cuello($diseno_cuello){
        return Diseno_cuello::join('modelo_cuellos','diseno_cuellos.id_modelo_cuello','modelo_cuellos.id_modelo_cuello')
                            ->join('valor_modelos','diseno_cuellos.id_valor_modelo','valor_modelos.id_valor_modelo')
                            ->join('material_cuellos','diseno_cuellos.id_material_cuello','material_cuellos.id_material_cuello')
                            ->select('diseno_cuellos.id_diseno_cuello', 'diseno_cuellos.imagen_inicial', 'diseno_cuellos.nombre_diseno',
                                    'modelo_cuellos.nombre_modelo as nombre_modelo','valor_modelos.valor_modelo as valor',
                                    'material_cuellos.nombre_material as material')
                            ->where('id_diseno_cuello',$diseno_cuello)->first();
    }   

    public function precio_modelo($id_modelo, $id_material){
        return Valor_modelo::where('id_modelo_cuello',$id_modelo)->where('id_material_cuello', $id_material)->first();
    }

    public function pedidos(){

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
        
        return view('cuellos.pedidos_cuello', compact('arrayData'));
    }

    public function validar_nombre_diseno($nombre_diseno = null){
        if($nombre_diseno){
            $nombre = Diseno_cuello::where('nombre_diseno',$nombre_diseno)->first();

            if($nombre != null) return response()->json(["success" => true]);        
            return response()->json(["success" => false]);
        }    
        return response()->json(["success" => false]);   
    }

    public function subir_imagen(Request $request, $id_diseno){
        if($request->ajax()){
            $cuello = Diseno_cuello::findOrFail($id_diseno);
            if($request->hasFile('file')){                
                $file = $request->file('file');               
                $name = time().$file->getClientOriginalName();
                $cuello->imagen_inicial = $name;
                $cuello->save();
                $file->move(public_path().'/img/fondo_cuello', $name );                
            }
        }
        
        return response()->json(["success" => true]);
    }
}
