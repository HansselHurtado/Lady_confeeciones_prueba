<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePedidoCuellosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pedido_cuellos', function (Blueprint $table) {
            $table->increments('id_pedido_cuello');
            $table->string('cantidad_fajas')->nullable();
            $table->string('cantidad_punos')->nullable();
            $table->string('valor_diseno')->nullable();
            $table->string('subtotal')->nullable();
            $table->string('descuento')->nullable();
            $table->string('valor_total');

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
        Schema::dropIfExists('pedido_cuellos');
    }
}
