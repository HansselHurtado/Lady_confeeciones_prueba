<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePunosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('punos', function (Blueprint $table) {
            $table->increments('id_puno');
            $table->string('cantidad_puno')->nullable();
            $table->string('name')->nullable();
            $table->string('orden_number')->nullable();
            $table->string('id_usuario')->nullable();

            $table->unsignedInteger('id_diseno_cuello');
            $table->foreign('id_diseno_cuello')->references('id_diseno_cuello')->on('diseno_cuellos')->onDelete('cascade');

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
        Schema::dropIfExists('punos');
    }
}
