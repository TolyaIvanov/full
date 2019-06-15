<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
	    DB::table('photos')->insert([
		    'description' => str_random(10),
		    'style' => 'Style transfer',
            'uri' => str_random(5),
            'height' => rand(100, 300),
            'width' => rand(100, 300),
	    ]);
    }
}
