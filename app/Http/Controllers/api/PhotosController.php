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
        $chunk = $request->chunk;
        $images = new PhotosResource(
            Photos::orderBy('id', 'desc')
                ->skip($part * $chunk)
                ->take($chunk)
                ->get()
        );

        return $images->resource->toArray();
    }
}
