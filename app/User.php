<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Photos;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens;

    protected $fillable = [
        'username', 'email', 'password', 'avatar', 'status'
    ];

    protected $hidden = [
        'password', 'remember_token', 'role'
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function user_created_photo()
    {
        return $this->hasMany(Photos::class, 'user_created_photo_id');
    }

    public function user_liked_photo()
    {
        return $this->hasMany(Photos::class, 'user_liked_photo_id');
    }
}
