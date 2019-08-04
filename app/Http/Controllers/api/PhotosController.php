<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PhotosResource;
use App\Photos;
use Illuminate\Http\Request;

class PhotosController extends Controller
{
    public function index(Request $request)
    {
        $part = $request->load_param;

        $images = new PhotosResource(
            Photos::orderBy('id', 'desc')
                ->skip($part * 12)
                ->take(12)
                ->get()
        );

        return $images->resource->toArray();
    }
}
