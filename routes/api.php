<?php

Route::get('gallery', 'api\PhotosController@index');
Route::get('examples', 'api\ExamplesController@index');
Route::post('mails', 'api\MailsController@add');

Route::post('login', 'api\AuthController@login');
Route::post('signup', 'api\AuthController@register');

Route::group(['middleware' => 'auth:api'], function () {
    Route::get('signup/activate/{token}', 'AuthController@signupActivate');
    Route::get('user', 'api\UserController@user');
    Route::get('logout', 'api\AuthController@logout');

    Route::get('user/pictures', 'api\UserController@photos');
    Route::post('user/sittings/avatar', 'api\UserController@avatar');
    Route::post('user/sittings/status', 'api\UserController@status');
});

Route::post('send/mail', 'api\MailsController@send');  //todo send email
