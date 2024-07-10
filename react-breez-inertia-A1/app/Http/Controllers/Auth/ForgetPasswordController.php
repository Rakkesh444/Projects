<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class ForgetPasswordController extends Controller
{
    public function showLinkRequestForm()
    {
        return Inertia::render('Auth/ForgetPassword/ShowLinkForm', [
            'status' => session('status'),
        ]);
    }
    public function sendResetLink(Request $request)
    {
        $request->validate([
            ['email' => 'required|email'],
        ]);

        $status = Password::sendResetLink(
            $request->only('email'),
        );

        if ($status === Password::RESET_LINK_SENT) {
            return back()->with(['status', __($status)]);

        }
        throw ValidationException::withMessages([
            'email' => [trans($status)],
        ]);
        // : back()->withErrors(['email' => __($status)]);
    }
}
