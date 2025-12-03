<?php
namespace App\Services;

use App\Models\News;

class NewsService
{
    public function __construct(private News $news)
    {
    }

    public function getAll($perPage = 6)
    {
        return $this->news
        ->orderBy('created_at', 'desc')
        ->paginate($perPage);
    }

    public function getById(int $id): ?News
    {
        return $this->news->find($id);
    }
  }