<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMaterialColorCuellosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('material_color_cuellos', function (Blueprint $table) {
            $table->increments('id_material_color_cuello');

            $table->unsignedInteger('id_material_cuello');
            $table->foreign('id_material_cuello')->references('id_material_cuello')->on('material_cuellos')->onDelete('cascade');
            
            $table->unsignedInteger('id_color_cuello');
            $table->foreign('id_color_cuello')->references('id_color_cuello')->on('color_cuellos')->onDelete('cascade');
            
            $table->string('estado')->nullable();
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
        Schema::dropIfExists('material_color_cuellos');
    }
}
