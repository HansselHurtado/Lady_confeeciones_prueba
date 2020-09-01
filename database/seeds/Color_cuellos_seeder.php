<?php

use Illuminate\Database\Seeder;
use App\Color_cuello;
class Color_cuellos_seeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $color_cuello = new Color_cuello();
        $color_cuello->nombre_color = "#FFFFFF";
        $color_cuello->valor_adicional = 1200;
        $color_cuello->save();

        $color_cuello = new Color_cuello();
        $color_cuello->nombre_color = "#FF0000";
        $color_cuello->valor_adicional = 1900;
        $color_cuello->save();

        $color_cuello = new Color_cuello();
        $color_cuello->nombre_color = "#000000";
        $color_cuello->valor_adicional = 1300;
        $color_cuello->save();
    
    }
}
