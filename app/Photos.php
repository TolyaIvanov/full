<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Photos extends Model
{
    protected $table = 'photos';

    protected $fillable = ['uri', 'public', 'height', 'width'];

    public function user_created_photo()
    {
        return $this->belongsTo(User::class);
    }

    public function user_liked_photo()
    {
        return $this->belongsTo(User::class);
    }
}
