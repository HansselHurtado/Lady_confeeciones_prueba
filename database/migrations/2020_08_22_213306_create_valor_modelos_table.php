<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateValorModelosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('valor_modelos', function (Blueprint $table) {
            $table->increments('id_valor_modelo');

            $table->unsignedInteger('id_modelo_cuello');
            $table->foreign('id_modelo_cuello')->references('id_modelo_cuello')->on('modelo_cuellos')->onDelete('cascade');
            
            $table->unsignedInteger('id_material_cuello');
            $table->foreign('id_material_cuello')->references('id_material_cuello')->on('material_cuellos')->onDelete('cascade');
            
            $table->string('valor_modelo');
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
        Schema::dropIfExists('valor_modelos');
    }
}
