<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePedidoCuelloPorTallasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pedido_cuello_por_tallas', function (Blueprint $table) {
            $table->increments('id_pedido_cuello_por_talla');
            $table->string('cantidad')->nullable();

            $table->unsignedInteger('id_pedido_cuello');
            $table->foreign('id_pedido_cuello')->references('id_pedido_cuello')->on('pedido_cuellos')->onDelete('cascade');
            
            $table->unsignedInteger('id_talla_cuello');
            $table->foreign('id_talla_cuello')->references('id_talla_cuello')->on('talla_cuellos')->onDelete('cascade');
            
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
        Schema::dropIfExists('pedido_cuello_por_tallas');
    }
}
