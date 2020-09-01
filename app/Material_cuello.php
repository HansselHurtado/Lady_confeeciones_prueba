<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Material_cuello extends Model
{
    protected $table = "material_cuellos"; 
    protected $primaryKey = 'id_material_cuello';

    public function material_color_cuello(){
        return $this->hasMany('App\Material_color_cuello','id_material_cuello');
    }

    public function diseno_cuello(){
        return $this->hasMany('App\Diseno_cuello','id_material_cuello');
    }

    public function valor_modelo(){
        return $this->hasMany('App\Valor_modelo','id_material_cuello');
    }

    public function lineas()
    {
        return $this->hasMany('App\Lineas','id_material_cuello');
    }

    public function figuras()
    {
        return $this->hasMany('App\Figuras','id_material_cuello');
    }

    public function letras()
    {
        return $this->hasMany('App\Letras','id_material_cuello');
    }
}
