<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLetrasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('letras', function (Blueprint $table) {
            $table->increments('id_letra');
            $table->string('color_letra');
            $table->string('fuente_ltra')->nullable();
            $table->string('contenido');
            $table->string('tamano_fuente')->nullable();

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
        Schema::dropIfExists('letras');
    }
}
