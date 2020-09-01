<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pedido_cuello extends Model
{
    protected $table = "pedido_cuellos"; 
    protected $primaryKey = 'id_pedido_cuello';

    public function diseno_cuello()//relacion inversa de uno a mucho
    {
        return $this->belongsTo('App\Diseno_cuello');
    }

    public function pedido_cuello_por_talla(){
        return $this->hasMany('App\Pedido_cuello_por_talla','id_pedido_cuello');
    }
}