<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;

class Carrito extends Model
{
    protected $table = "carritos"; 
    protected $primaryKey = 'id_carrito';

    public function diseno_cuello()
    {
        return $this->belongsTo('App\Diseno_cuello');
    }

    public function talla_cuello()
    {
        return $this->belongsTo('App\Talla_cuello');
    }

    public static function get_products(){

        return $products = Carrito::where('id_usuario', 1)
                    ->select('carritos.id_carrito as id', 'carritos.cantidad as cantidad', 'carritos.orden_number', 'carritos.created_at', 'diseno_cuellos.nombre_diseno', 'talla_cuellos.nombre_talla', 'valor_modelos.valor_modelo', 'modelo_cuellos.nombre_modelo')
                    ->join('diseno_cuellos','carritos.id_diseno_cuello','diseno_cuellos.id_diseno_cuello')
                    ->join('talla_cuellos','carritos.id_talla_cuello','talla_cuellos.id_talla_cuello')
                    ->join('valor_modelos','diseno_cuellos.id_valor_modelo','valor_modelos.id_valor_modelo')
                    ->join('modelo_cuellos','diseno_cuellos.id_modelo_cuello','modelo_cuellos.id_modelo_cuello')                    
                    ->orderBy('carritos.updated_at','desc')
                    ->get();
    }


}
