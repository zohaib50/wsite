@extends('layouts.app')
@section('content')
    <main id="main-content">
        <div id="banner-area" class="banner-area">
            <div class="container">
                <div class="page-title">
                    <h1>Login</h1>
                </div>
            </div>
        </div>
        <vue-login></vue-login>
        @include('layouts.companies')
        @include('layouts.socialmedia')
    </main>
@endsection
