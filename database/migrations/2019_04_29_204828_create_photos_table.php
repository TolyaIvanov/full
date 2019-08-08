<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePhotosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('photos', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_created_photo_id')->unsigned();
            $table->integer('user_liked_photo_id')->unsigned();
            $table->string('description');
            $table->string('style');
            $table->string('uri');
            $table->integer('height');
            $table->integer('width');
            $table->timestamps();
        });

        Schema::table('photos', function($table) {
            $table->foreign('user_created_photo_id')
                ->references('id')->on('users')->onDelete('cascade');
            $table->foreign('user_liked_photo_id')
                ->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('photos');
    }
}
