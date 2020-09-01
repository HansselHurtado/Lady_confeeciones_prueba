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
        $modelo_cuello->nombre_modelo = "Liso";
        $modelo_cuello->save();

        $modelo_cuello = new Modelo_cuello();
        $modelo_cuello->nombre_modelo = "Lineas";
        $modelo_cuello->save();

        $modelo_cuello = new Modelo_cuello();
        $modelo_cuello->nombre_modelo = "Letras";
        $modelo_cuello->save();

        $modelo_cuello = new Modelo_cuello();
        $modelo_cuello->nombre_modelo = "Figuras";
        $modelo_cuello->save();

        $modelo_cuello = new Modelo_cuello();
        $modelo_cuello->nombre_modelo = "Letras, Figuras";
        $modelo_cuello->save();

        $modelo_cuello = new Modelo_cuello();
        $modelo_cuello->nombre_modelo = "Letras, Lienas";
        $modelo_cuello->save();

        $modelo_cuello = new Modelo_cuello();
        $modelo_cuello->nombre_modelo = "Letras, Figuras, Lineas";
        $modelo_cuello->save();

        $modelo_cuello = new Modelo_cuello();
        $modelo_cuello->nombre_modelo = "Figuras, Lineas";
        $modelo_cuello->save();
    }
}
