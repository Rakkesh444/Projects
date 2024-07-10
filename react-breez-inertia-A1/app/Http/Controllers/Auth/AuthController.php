<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function authentication(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'string', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
        ]);

        $email = $request->email;
        $password = $request->password;

        if (Auth::attempt(['email' => $email, 'password' => $password])) {
            $user = User::where('email', $email)->first();
            Auth::login($user);
            return redirect(route('dashboard'));
        }
        //  else {
        //     return back()->withErrors(['email' => 'Invalide Credintials']);
        // }

        throw ValidationException::withMessages([
            'email' => [trans('auth.failed')],
            'password' => [trans('auth.failed')]
        ]);
    }
    public function logout()
    {
        Auth::logout();
        return redirect(route('login'));
    }

    public function delete(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'string', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
        ]);
        $email = $request->email;
        $password = $request->password;

        if (Auth::attempt(['email' => $email, 'password' => $password])) {
            $user = User::where('email', $email)->first();
            $user->delete();
        }
    }
    public function update(Request $request, $id)
    {

        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'max:255', 'unique:users'],
        ]);
        $user = User::find($id);
        $user->update($request->all());
        return back()->with('updated', 'Updated Successfully');
    }

    public function show($id)
    {
        $user = User::where('id', $id)->first();
        return redirect(route('show'));
    }
}
