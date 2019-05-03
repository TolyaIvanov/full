<?php

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});


//Route::prefix('v1')->group(function(){
    Route::get('/gallery', 'api\PhotosController@index');

    Route::post('login', 'api\AuthController@login');
    Route::get('register', 'api\AuthController@register');
    Route::group(['middleware' => 'auth:api'], function(){
        Route::post('getUser', 'api\AuthController@getUser');
    });
//});
