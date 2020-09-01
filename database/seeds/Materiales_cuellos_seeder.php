<?php

use Illuminate\Database\Seeder;
use App\Material_cuello;
class Materiales_cuellos_seeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $material_cuello = new Material_cuello();
        $material_cuello->nombre_material = "Hilo";
        $material_cuello->save();

        $material_cuello = new Material_cuello();
        $material_cuello->nombre_material = "Hilaza";
        $material_cuello->save();        

    }
}
