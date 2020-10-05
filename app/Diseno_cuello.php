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

    public function puno()
    {
        return $this->hasMany('App\Puno','id_diseno_cuello');
    }

    public function faja()
    {
        return $this->hasMany('App\Faja','id_diseno_cuello');
    }

    public static function get_diseno($view){
        return Diseno_cuello::join('modelo_cuellos','diseno_cuellos.id_modelo_cuello','modelo_cuellos.id_modelo_cuello')
                            ->join('valor_modelos','diseno_cuellos.id_valor_modelo','valor_modelos.id_valor_modelo')
                            ->join('material_cuellos','diseno_cuellos.id_material_cuello','material_cuellos.id_material_cuello')
                            ->select('diseno_cuellos.id_diseno_cuello', 'diseno_cuellos.imagen_inicial', 'diseno_cuellos.nombre_diseno','diseno_cuellos.id_modelo_cuello',
                                    'modelo_cuellos.id_modelo_cuello','modelo_cuellos.nombre_modelo as nombre_modelo','valor_modelos.id_valor_modelo','valor_modelos.valor_modelo as valor',
                                    'material_cuellos.nombre_material as material')
                            ->orderBy('id_diseno_cuello','desc')
                            ->where('estado_view', $view)
                            ->get();
    }

}
