<?php
namespace App\Services;

use App\Models\News;

class NewsService
{
    public function __construct(private News $news)
    {
    }

    public function getAll(): \Illuminate\Database\Eloquent\Collection
    {
        return $this->news->all();
    }

    public function getById(int $id): ?News
    {
        return $this->news->find($id);
    }
  }