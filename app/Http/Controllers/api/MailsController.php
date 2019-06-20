<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Mails;

class MailsController extends Controller
{
    public function add(Request $request)
    {
        $validated_data = $request->validate([
            'email' => 'required|email|unique:users,email'
        ]);

        $mail = Mails::create($validated_data);

        dd($validated_data, $mail);
    }
}
