<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function index(){
        return view('index');
    }
    public function about(){
        return view('about');
    }
    public function contractors(){
        return view('contractors');
    }
    public function become_contractor(){
        return view('become-contractor');
    }
    public function faq(){
        return view('faq');
    }
    public function contact(){
        return view('contact');
    }
    public function material_kit(){
        return view('material-kit');
    }
    public function login(){
        return view('login');
    }
    public function register(){
        return view('register');
    }
    public function dashboard(){
        return view('dashboard');
    }
}
