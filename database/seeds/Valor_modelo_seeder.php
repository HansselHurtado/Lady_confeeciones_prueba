<?php

use App\Valor_modelo;
use Illuminate\Database\Seeder;

class Valor_modelo_seeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $valor_modelo = new Valor_modelo();
        $valor_modelo->id_modelo_cuello = 1;
        $valor_modelo->id_material_cuello = 1;
        $valor_modelo->valor_modelo = 1500;
        $valor_modelo->save();

        $valor_modelo = new Valor_modelo();
        $valor_modelo->id_modelo_cuello = 2;
        $valor_modelo->id_material_cuello = 1;
        $valor_modelo->valor_modelo = 2500;
        $valor_modelo->save();

        $valor_modelo = new Valor_modelo();
        $valor_modelo->id_modelo_cuello = 3;
        $valor_modelo->id_material_cuello = 1;
        $valor_modelo->valor_modelo = 1000;
        $valor_modelo->save();

        $valor_modelo = new Valor_modelo();
        $valor_modelo->id_modelo_cuello = 4;
        $valor_modelo->id_material_cuello = 1;
        $valor_modelo->valor_modelo = 1800;
        $valor_modelo->save();

        $valor_modelo = new Valor_modelo();
        $valor_modelo->id_modelo_cuello = 1;
        $valor_modelo->id_material_cuello = 2;
        $valor_modelo->valor_modelo = 1700;
        $valor_modelo->save();

        $valor_modelo = new Valor_modelo();
        $valor_modelo->id_modelo_cuello = 2;
        $valor_modelo->id_material_cuello = 2;
        $valor_modelo->valor_modelo = 2600;
        $valor_modelo->save();

        $valor_modelo = new Valor_modelo();
        $valor_modelo->id_modelo_cuello = 3;
        $valor_modelo->id_material_cuello = 2;
        $valor_modelo->valor_modelo = 2500;
        $valor_modelo->save();

        $valor_modelo = new Valor_modelo();
        $valor_modelo->id_modelo_cuello = 4;
        $valor_modelo->id_material_cuello = 2;
        $valor_modelo->valor_modelo = 1900;
        $valor_modelo->save();

        $valor_modelo = new Valor_modelo();
        $valor_modelo->id_modelo_cuello = 5;
        $valor_modelo->id_material_cuello = 1;
        $valor_modelo->valor_modelo = 3000;
        $valor_modelo->save();

        $valor_modelo = new Valor_modelo();
        $valor_modelo->id_modelo_cuello = 5;
        $valor_modelo->id_material_cuello = 2;
        $valor_modelo->valor_modelo = 3100;
        $valor_modelo->save();

        $valor_modelo = new Valor_modelo();
        $valor_modelo->id_modelo_cuello = 6;
        $valor_modelo->id_material_cuello = 1;
        $valor_modelo->valor_modelo = 3550;
        $valor_modelo->save();

        $valor_modelo = new Valor_modelo();
        $valor_modelo->id_modelo_cuello = 6;
        $valor_modelo->id_material_cuello = 2;
        $valor_modelo->valor_modelo = 4100;
        $valor_modelo->save();

        $valor_modelo = new Valor_modelo();
        $valor_modelo->id_modelo_cuello = 7;
        $valor_modelo->id_material_cuello = 1;
        $valor_modelo->valor_modelo = 4200;
        $valor_modelo->save();

        $valor_modelo = new Valor_modelo();
        $valor_modelo->id_modelo_cuello = 7;
        $valor_modelo->id_material_cuello = 2;
        $valor_modelo->valor_modelo = 4140;
        $valor_modelo->save();

        $valor_modelo = new Valor_modelo();
        $valor_modelo->id_modelo_cuello = 8;
        $valor_modelo->id_material_cuello = 1;
        $valor_modelo->valor_modelo = 3440;
        $valor_modelo->save();

        $valor_modelo = new Valor_modelo();
        $valor_modelo->id_modelo_cuello = 8;
        $valor_modelo->id_material_cuello = 2;
        $valor_modelo->valor_modelo = 5040;
        $valor_modelo->save();

    }
}
