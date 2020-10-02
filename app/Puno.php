<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Puno extends Model
{
    protected $table = "punos"; 
    protected $primaryKey = 'id_puno';

    public function diseno_cuello()
    {
        return $this->belongsTo('App\Diseno_cuello');
    }

    public static function get_puno(){
        return $products = Puno::where('id_usuario', 1)
                    ->select('punos.id_puno as id', 'punos.cantidad_puno as cantidad','punos.name', 'punos.orden_number', 'punos.created_at', 'diseno_cuellos.nombre_diseno', 'modelo_cuellos.nombre_modelo')
                    ->join('diseno_cuellos','punos.id_diseno_cuello','diseno_cuellos.id_diseno_cuello')
                    ->join('modelo_cuellos','diseno_cuellos.id_modelo_cuello','modelo_cuellos.id_modelo_cuello')
                    ->orderBy('punos.updated_at','asc')
                    ->get();
    }
}
