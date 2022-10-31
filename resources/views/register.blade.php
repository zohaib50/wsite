@extends('layouts.app')
@section('content')
    <main id="main-content">
    <div id="banner-area" class="banner-area">
        <div class="container">
            <div class="page-title">
                <h1>Register</h1>
            </div>
        </div>
    </div>
    <vue-register></vue-register>
        @include('layouts.companies')
        @include('layouts.socialmedia')
    </main>

@endsection
