@extends('layout.app')
@section('title', 'News')
@section('content')
<section class="container">
  <div class="row">
    @foreach ($news as $n)
    <div class="col-4">
      <div class="card">
        <img class="card-img-top" src="{{ $n->img_url }}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{ $n->title }}</h5>
          <p class="card-text bg-accent">
            {{ $n->content }}
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    @endforeach
  </div>
</section>
@endsection