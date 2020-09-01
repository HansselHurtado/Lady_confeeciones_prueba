<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Letras extends Model
{
    protected $table = "letras"; 
    protected $primaryKey = 'id_letras';

    public function diseno_cuello()//relacion inversa de uno a mucho
    {
        return $this->belongsTo('App\Diseno_cuello');
    }

    public function material_cuello()//relacion inversa de uno a mucho
    {
        return $this->belongsTo('App\Material_cuello');
    }
}
