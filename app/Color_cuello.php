<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Color_cuello extends Model
{
    protected $table = "color_cuellos"; 
    protected $primaryKey = 'id_color_cuello';

    public function material_color_cuello(){
        return $this->hasMany('App\Material_color_cuello','id_color_cuello');
    }

    // public function diseno_cuello(){
    //     return $this->hasMany('App\Diseno_cuello','id_color_cuello');
    // }
}
