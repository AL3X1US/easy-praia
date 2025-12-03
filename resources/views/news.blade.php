@extends('layout.app')
@section('title', 'News')
@section('content')
<section class="container">
  <div class="row">
    @foreach ($news as $n)
    <div class="col-sm-6 col-md-4">
      <div class="card shadow-sm">
        <img class="card-img-top" src="{{ $n->img_url }}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{ $n->title }}</h5>
          <p class="card-text">
            {{ $n->content }}
          </p>
          <a href="#" class="btn btn-accent">Go somewhere</a>
        </div>
      </div>
    </div>
    @endforeach
  </div>
  <div class="d-flex justify-content-center mt-4">
    {{ $news->links('pagination::bootstrap-5') }}
  </div>
</section>

@endsection