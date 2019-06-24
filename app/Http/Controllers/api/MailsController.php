<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Mails;
use Validator;

class MailsController extends Controller
{
    public function add(Request $request)
    {
        $validated_data = Validator::make($request->all(), [
            'email' => 'required|email|unique:mails'
        ]);


        if ($validated_data->fails()) {
            $errors = $validated_data->errors()->toJson();

            return response(['errors' => $errors], 422);
        }

        $mail = Mails::create($request->all());

        return response(['data' => $mail], 200);
    }
}
