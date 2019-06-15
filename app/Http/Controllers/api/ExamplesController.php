<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Photos;
use App\Http\Resources\ExamplesResource;

class ExamplesController extends Controller
{
    public function index()
    {
        $columns = Photos::orderBy('id', 'desc')
            ->where('style', 'Deep dream')
            ->take(2)
            ->get();

        $columns = $columns->merge(Photos::orderBy('id', 'desc')
            ->where('style', 'Style transfer')
            ->take(2)
            ->get()
        );

        $columns = new ExamplesResource(
            $columns->merge(Photos::orderBy('id', 'desc')
                ->where('style', 'Make art')
                ->take(2)
                ->get()
            )
        );

        return $columns->resource;
    }
}
