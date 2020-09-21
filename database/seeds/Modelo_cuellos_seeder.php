<?php

use Illuminate\Database\Seeder;
use App\Modelo_cuello;

class Modelo_cuellos_seeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $modelo_cuello = new Modelo_cuello();
        $modelo_cuello->id_modelo_cuello = 1;
        $modelo_cuello->nombre_modelo = "Liso";
        $modelo_cuello->save();

        $modelo_cuello = new Modelo_cuello();
        $modelo_cuello->id_modelo_cuello = 2;
        $modelo_cuello->nombre_modelo = "Lineas";
        $modelo_cuello->save();

        $modelo_cuello = new Modelo_cuello();
        $modelo_cuello->id_modelo_cuello = 3;
        $modelo_cuello->nombre_modelo = "Letras";
        $modelo_cuello->save();

        $modelo_cuello = new Modelo_cuello();
        $modelo_cuello->id_modelo_cuello = 4;
        $modelo_cuello->nombre_modelo = "Figuras";
        $modelo_cuello->save();

        $modelo_cuello = new Modelo_cuello();
        $modelo_cuello->id_modelo_cuello = 5;
        $modelo_cuello->nombre_modelo = "Letras, Figuras";
        $modelo_cuello->save();

        $modelo_cuello = new Modelo_cuello();
        $modelo_cuello->id_modelo_cuello = 6;
        $modelo_cuello->nombre_modelo = "Letras, Lienas";
        $modelo_cuello->save();

        $modelo_cuello = new Modelo_cuello();
        $modelo_cuello->id_modelo_cuello = 7;
        $modelo_cuello->nombre_modelo = "Letras, Figuras, Lineas";
        $modelo_cuello->save();

        $modelo_cuello = new Modelo_cuello();
        $modelo_cuello->id_modelo_cuello = 8;
        $modelo_cuello->nombre_modelo = "Figuras, Lineas";
        $modelo_cuello->save();
    }
}
