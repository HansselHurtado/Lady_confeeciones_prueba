<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lineas extends Model
{
    protected $table = "lineas"; 
    protected $primaryKey = 'id_linea';

    public function diseno_cuello()//relacion inversa de uno a mucho
    {
        return $this->belongsTo('App\Diseno_cuello');
    }

    public function material_cuello()//relacion inversa de uno a mucho
    {
        return $this->belongsTo('App\Material_cuello');
    }
}
