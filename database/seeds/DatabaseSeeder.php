<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        $this->call(Color_cuellos_seeder::class);
        $this->call(Materiales_cuellos_seeder::class);
        $this->call(Modelo_cuellos_seeder::class);
        $this->call(Valor_modelo_seeder::class);
        $this->call(Talla_cuellos_seeder::class);
    }
}
