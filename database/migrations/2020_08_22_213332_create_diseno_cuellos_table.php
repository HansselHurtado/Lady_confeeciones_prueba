<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDisenoCuellosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('diseno_cuellos', function (Blueprint $table) {
            $table->increments('id_diseno_cuello');
            $table->string('nombre_diseno');
            $table->string('descripcion')->nullable();
            $table->string('imagen_inicial')->nullable();
            $table->string('imagen_final_diseno')->nullable();
            $table->string('color_fondo_diseno')->nullable();

            $table->unsignedInteger('id_modelo_cuello');
            $table->foreign('id_modelo_cuello')->references('id_modelo_cuello')->on('modelo_cuellos')->onDelete('cascade');
            
            $table->unsignedInteger('id_material_cuello');
            $table->foreign('id_material_cuello')->references('id_material_cuello')->on('material_cuellos')->onDelete('cascade');
            
            // $table->unsignedInteger('id_color_cuello');
            // $table->foreign('id_color_cuello')->references('id_color_cuello')->on('color_cuellos')->onDelete('cascade');
            
            $table->unsignedInteger('id_valor_modelo');
            $table->foreign('id_valor_modelo')->references('id_valor_modelo')->on('valor_modelos')->onDelete('cascade');
            
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
        Schema::dropIfExists('diseno_cuellos');
    }
}
