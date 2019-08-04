<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Validator;
use Auth;

class UserController extends Controller
{
    public function user(Request $request)
    {
        $user = Auth::user();

        dd(response()->json(['user' => $user->only(['username', 'avatar', 'status'])], 200));
        response($request->user(), 200);
    }

    public function avatar(Request $request)
    {
        $request->validate([
            'avatar' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $user = $request->user();

        $avatarName = $user->id.'_avatar'.time().'.'.request()->avatar->getClientOriginalExtension();

        $request->avatar->storeAs('avatars', $avatarName);

        $user->avatar = $avatarName;
        $user->save();

        return response('You have successfully upload image.', 200);
    }

    public function photos(Request $request)
    {
        return response([], 200);
    }

    public function status(Request $request)
    {
        $validated_data = Validator::make($request->all(), [
            'status' => 'required|string|max:50'
        ]);


        if ($validated_data->fails()) {
            $errors = $validated_data->errors()->toJson();

            return response(['status errors' => $errors], 422);
        }

        $request->user()->status = $request->status;
        $request->user()->save();

        return response('status saved', 200);
    }
}
