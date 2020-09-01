<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Figuras extends Model
{
    protected $table = "figuras"; 
    protected $primaryKey = 'id_figura';

    public function diseno_cuello()//relacion inversa de uno a mucho
    {
        return $this->belongsTo('App\Diseno_cuello');
    }

    public function material_cuello()//relacion inversa de uno a mucho
    {
        return $this->belongsTo('App\Material_cuello');
    }
}
