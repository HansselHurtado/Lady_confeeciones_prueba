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
        $talla_cuello->nombre_talla = "12";
        $talla_cuello->save();

        $talla_cuello = new Talla_cuello();
        $talla_cuello->nombre_talla = "14";
        $talla_cuello->save();

        $talla_cuello = new Talla_cuello();
        $talla_cuello->nombre_talla = "16";
        $talla_cuello->save();

        $talla_cuello = new Talla_cuello();
        $talla_cuello->nombre_talla = "18";
        $talla_cuello->save();

        $talla_cuello = new Talla_cuello();
        $talla_cuello->nombre_talla = "sin_talla";
        $talla_cuello->save();

    }
}
