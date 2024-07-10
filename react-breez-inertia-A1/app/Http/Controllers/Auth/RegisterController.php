<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;
use App\Models\PermissionGroup;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Illuminate\Auth\Events\Registered;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
        ]);
        $user = new User;
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = $request->input('password');
        $user->save();
        return redirect(route('view'));
    }
    public function rolestore(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
        ]);
        $role = new Role();
        $role->name = $request->input('name');
        $role->save();
    }
    public function roledata()
    {
        $data = Role::all();
        return response()->json($data);
    }
    public function roleedit($id)
    {
        $data = Role::findById($id);
        $data->update();
        return redirect(route('roles.index'));
    }
    public function data()
    {
        // $data = User::all();
        // return response()->json($data);
        //$roles = Role::with('permissions')->get();
        // $permissions = Permission::with('roles')->get()->groupBy('group');
        $permissions = PermissionGroup::with('permissions')->get();
        return response()->json($permissions);
    }

    public function index()
    {
        $data = User::all();
        return response()->json($data);
    }
    public function show($id)
    {
        $data = User::find($id);
        return response()->json($data);
        // return Inertia::render('Auth/ShowPage', compact('data'));
    }
}
