<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Valor_modelo extends Model
{
    protected $table = "valor_modelos"; 
    protected $primaryKey = 'id_valor_modelo';

    public function diseno_cuello(){
        return $this->hasMany('App\Diseno_cuello','id_color_cuello');
    }

    public function material_cuello()//relacion inversa de uno a mucho
    {
        return $this->belongsTo('App\Material_cuello');
    }

    public function modelo_cuello()//relacion inversa de uno a mucho
    {
        return $this->belongsTo('App\Modelo_cuello');
    }
}
