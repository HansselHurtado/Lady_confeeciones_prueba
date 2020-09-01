<?php

use App\Talla_cuello;
use Illuminate\Database\Seeder;

class Talla_cuellos_seeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $talla_cuello = new Talla_cuello();
        $talla_cuello->nombre_talla = "S";
        $talla_cuello->save();

        $talla_cuello = new Talla_cuello();
        $talla_cuello->nombre_talla = "M";
        $talla_cuello->save();

        $talla_cuello = new Talla_cuello();
        $talla_cuello->nombre_talla = "L";
        $talla_cuello->save();

        $talla_cuello = new Talla_cuello();
        $talla_cuello->nombre_talla = "XL";
        $talla_cuello->save();

    }
}
