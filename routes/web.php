<?php

use App\Http\Controllers\NewsController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect('/news');
});

Route::get('/news', [NewsController::class, 'showNews'])->name('newsView');

Route::get('map', function () {
    return view('map');
})->name('mapView');