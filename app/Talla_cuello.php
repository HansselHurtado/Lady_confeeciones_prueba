<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Talla_cuello extends Model
{
    protected $table = "talla_cuellos"; 
    protected $primaryKey = 'id_talla_cuello';

    public function pedido_cuello_por_talla(){
        return $this->hasMany('App\Pedido_cuello_por_talla','id_talla_cuello');
    }
}
