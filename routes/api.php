<?php

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});


Route::get('gallery', 'api\PhotosController@index');
Route::get('examples', 'api\ExamplesController@index');
Route::get('mails', 'api\MailsController@add'); // todo make post

Route::post('login', 'api\AuthController@login');
Route::get('register', 'api\AuthController@register');
Route::group(['middleware' => 'auth:api'], function () {
    Route::post('getUser', 'api\AuthController@getUser');
});
