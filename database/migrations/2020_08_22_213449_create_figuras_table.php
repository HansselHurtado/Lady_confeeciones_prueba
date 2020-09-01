<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFigurasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('figuras', function (Blueprint $table) {
            $table->increments('id_figura');
            $table->string('color_figura')->nullable();
            $table->string('alto')->nullable();
            $table->string('ancho')->nullable();
            $table->string('imagen_figura')->nullable();

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
        Schema::dropIfExists('figuras');
    }
}
