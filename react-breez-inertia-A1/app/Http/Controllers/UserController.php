<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Http\Resources\PermissionGroupResource;
use App\Http\Resources\PermissionResource;
use App\Http\Resources\RoleResource;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\Models\PermissionGroup;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = User::with('roles')->get();
        return Inertia::render('Admin/User/View', [
            'user' => $user,
            // 'user' => UserResource::collection(User::all()),
            'roles' => RoleResource::collection(Role::all()),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Admin/User/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
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
        return back()->with('success', 'User Created SuccessFully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $userId)
    {
        $user = User::with('roles', 'permissions')->findOrFail($userId);
        $permissions = Permission::findOrFail($userId);
        return Inertia::render('Admin/User/Update', [
            'users' => $user,
            //'users' => new UserResource($user),
            'roles' => RoleResource::collection(Role::all()),
            //'roles' => RoleResource::collection(Role::all()),
            //'permissions' => PermissionResource::collection(Permission::all()),
            'permissions' => $permissions,
            'permissionsGroups' => PermissionGroup::with('permissions')->get(),
            'successmessage' => 'User Updated SuccessFully',
        ]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'max:255', 'unique:users'],
        ]);
        $user = User::find($id);
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->update();
        return redirect(route('users.index'))->with('success', 'User Credintials Updated Successfully');
        // return back()->with('success', 'User Credintials Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $userDelete = User::find($id);
        $userDelete->delete();
    }
}
