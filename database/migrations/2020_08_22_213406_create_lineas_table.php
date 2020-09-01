<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLineasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lineas', function (Blueprint $table) {
            $table->increments('id_linea');
            $table->string('grosor');
            $table->string('color_linea');

            $table->unsignedInteger('id_diseno_cuello');
            $table->foreign('id_diseno_cuello')->references('id_diseno_cuello')->on('diseno_cuellos')->onDelete('cascade');
            
            $table->unsignedInteger('id_material_cuello');
            $table->foreign('id_material_cuello')->references('id_material_cuello')->on('material_cuellos')->onDelete('cascade');
 

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lineas');
    }
}
