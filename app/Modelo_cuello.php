<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Modelo_cuello extends Model
{
    protected $table = "modelo_cuellos"; 
    protected $primaryKey = 'id_modelo_cuello';

    public function diseno_cuello(){
        return $this->hasMany('App\Diseno_cuello','id_modelo_cuello');
    }

    public function valor_modelo(){
        return $this->hasMany('App\Valor_modelo','id_modelo_cuello');
    }
}
