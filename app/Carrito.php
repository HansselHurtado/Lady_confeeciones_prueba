<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Carrito extends Model
{
    protected $table = "carritos"; 
    protected $primaryKey = 'id_carrito';

    public function diseno_cuello()//relacion inversa de uno a mucho
    {
        return $this->belongsTo('App\Diseno_cuello');
    }

    public function talla_cuello()//relacion inversa de uno a mucho
    {
        return $this->belongsTo('App\Talla_cuello');
    }

}
