<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class ComponentsController extends Controller
{
    public function aboutIndex()
    {
        $imgurl1 = asset('images/img1.png');
        return Inertia::render('UserDashboard/About', [
            'imgurl1' => $imgurl1,
        ]);
    }
    public function contactIndex()
    {
        return Inertia::render('UserDashboard/Contact');
    }
    public function productsIndex()
    {
        return Inertia::render('UserDashboard/Blog');
    }
}
