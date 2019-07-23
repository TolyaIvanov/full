<?php

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});


Route::get('gallery', 'api\PhotosController@index');
Route::get('examples', 'api\ExamplesController@index');
Route::post('mails', 'api\MailsController@add');

Route::post('login', 'api\AuthController@login');
Route::post('signup', 'api\AuthController@register');
Route::get('signup/activate/{token}', 'AuthController@signupActivate');

Route::group(['middleware' => 'auth:api'], function () {
    Route::get('getUser', 'api\AuthController@getUser');
    Route::get('logout', 'Api\AuthController@logout');
});

Route::post('send/mail', 'api\MailsController@send');  //todo send email
