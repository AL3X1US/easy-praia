<?php

namespace App\Http\Controllers;

use App\Services\NewsService;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function showNews(NewsService $newsService)
    {
        $news = $newsService->getAll();
        return view('news', compact('news'));
    }
}
