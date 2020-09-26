<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Diseno_cuello extends Model
{
    protected $table = "diseno_cuellos"; 
    protected $primaryKey = 'id_diseno_cuello';


    // public function color_cuello()//relacion inversa de uno a mucho
    // {
    //     return $this->belongsTo('App\Color_cuello');
    // }

    public function modelo_cuello()//relacion inversa de uno a mucho
    {
        return $this->belongsTo('App\Modelo_cuello');
    }

    public function material_cuello()//relacion inversa de uno a mucho
    {
        return $this->belongsTo('App\Material_cuello');
    }

    public function valor_modelo()//relacion inversa de uno a mucho
    {
        return $this->belongsTo('App\Valor_modelo');
    }

    public function lineas()
    {
        return $this->hasMany('App\Lineas','id_diseno_cuello');
    }

    public function figuras()
    {
        return $this->hasMany('App\Figuras','id_diseno_cuello');
    }

    public function letras()
    {
        return $this->hasMany('App\Letras','id_diseno_cuello');
    }

    public function pedido_cuello()
    {
        return $this->hasMany('App\Pedido_cuello','id_diseno_cuello');
    }

    public function carrito()
    {
        return $this->hasMany('App\Carrito','id_diseno_cuello');
    }
}
