<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Faja extends Model
{
    protected $table = "fajas"; 
    protected $primaryKey = 'id_faja';

    public function diseno_cuello()
    {
        return $this->belongsTo('App\Diseno_cuello');
    }

    public static function get_faja(){
        return $products = Faja::where('id_usuario', 1)
                    ->select('fajas.id_faja as id', 'fajas.cantidad_faja as cantidad','fajas.name', 'fajas.orden_number', 'fajas.created_at', 'diseno_cuellos.nombre_diseno', 'modelo_cuellos.nombre_modelo')
                    ->join('diseno_cuellos','fajas.id_diseno_cuello','diseno_cuellos.id_diseno_cuello')
                    ->join('modelo_cuellos','diseno_cuellos.id_modelo_cuello','modelo_cuellos.id_modelo_cuello')
                    ->orderBy('fajas.created_at','asc')
                    ->get();
    }
}
