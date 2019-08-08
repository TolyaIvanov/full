<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Validator;

class UserController extends Controller
{
    public function user(Request $request, $username)
    {
        $user = User::where('username', $username)->first();

        if ($user) {
            return response(
                [
                    'user' => $user->only(['avatar', 'status', 'username']),
                    'user_created_photos' => $user->user_created_photo(),
                    'user_liked_photos' => $user->user_liked_photo(),
                ], 200);
        } else {
            return response('user does not exist', 422);
        }
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
