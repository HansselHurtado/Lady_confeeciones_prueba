<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarritosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carritos', function (Blueprint $table) {
            $table->increments('id_carrito');
            $table->string('Id_usuario')->nullable();
            $table->string('Fecha_CreacionPedido')->nullable();
            $table->string('Fecha_Actualización')->nullable();
            $table->string('valor_inicial')->nullable();
            $table->string('descuento')->nullable();
            $table->string('valor_total')->nullable();
            $table->string('primer_abono')->nullable();

            $table->string('subtotal')->nullable();
            $table->string('descuento')->nullable();
            $table->string('valor_total');
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
        Schema::dropIfExists('carritos');
    }
}
