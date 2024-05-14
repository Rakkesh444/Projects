<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\loginsystems;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class loginComtroller extends Controller
{
    public function userlogin(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);
        $email = $request->input('email');
        $pasword = $request->input('password');
        if (Auth::attempt(['email' => $email, 'password' => $pasword])) {
            $login = loginsystems::where('email', $email)->first();
            Auth::login($login);
            return redirect('/home');
        } else {
            return back()->withErrors(['invalid Credintials']);
        }
    }

    public function logout()
    {
        Auth::logout();
        return redirect('/login');
    }
}
