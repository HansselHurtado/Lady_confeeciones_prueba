<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pedido_cuello_por_talla extends Model
{
    protected $table = "pedido_cuello_por_tallas"; 
    protected $primaryKey = 'id_pedido_cuello_por_tallas';

    public function pedido_cuello()//relacion inversa de uno a mucho
    {
        return $this->belongsTo('App\Pedido_cuello');
    }

    public function talla_cuello()//relacion inversa de uno a mucho
    {
        return $this->belongsTo('App\Talla_cuello');
    }
}
