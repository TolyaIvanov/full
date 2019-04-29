<?php

namespace App\Http\Controllers\api;

use App\Http\Resources\GalleryResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Gallery;

class   GalleryController extends Controller
{
    public function index(Request $request)
    {
        $part = $request->load_param;
        $chunk = $request->chunk;
        $images = new GalleryResource(
            Gallery::orderBy('id', 'desc')
                ->skip($part * $chunk)
                ->take($chunk)
                ->get()
        );

        return $images->resource;
    }
}
