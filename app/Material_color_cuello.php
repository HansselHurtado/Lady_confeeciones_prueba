<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Material_color_cuello extends Model
{
    protected $table = "material_color_cuello"; 
    protected $primaryKey = 'id_material_color_cuello';

    public function color_cuello()//relacion inversa de uno a mucho
    {
        return $this->belongsTo('App\Color_cuello');
    }

    public function material_cuello()//relacion inversa de uno a mucho
    {
        return $this->belongsTo('App\Material_cuello');
    }
}
