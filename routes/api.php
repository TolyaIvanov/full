<?php

Route::get('/gallery', 'api\PhotosController@index');
Route::post('/mails', 'api\MailsController@add');

Route::post('/login', 'api\AuthController@login');
Route::post('/signup', 'api\AuthController@register');
Route::get('/signup/activate/{token}', 'AuthController@signupActivate');

Route::get('/user/{username}', 'api\UserController@user');
Route::get('/user/{username}/pictures', 'api\UserController@photos');

Route::group(['middleware' => 'auth:api'], function () {
    Route::get('/logout', 'api\AuthController@logout');

    Route::post('/user/sittings/avatar', 'api\UserController@avatar');
    Route::post('/user/sittings/status', 'api\UserController@status');
});
