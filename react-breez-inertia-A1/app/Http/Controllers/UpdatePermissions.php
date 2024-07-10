<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Models\PermissionGroup;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Validator;

class UpdatePermissions extends Controller
{
    public function updateRole(Request $request, $roleId)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
        ]);
        $role = Role::findOrFail($roleId);
        $role->name = $request->input('name');
        $permissions = Permission::whereIn('id', $request->input('permission_ids', []))->get();
        $role->syncPermissions($permissions);
        $role->save();
        return redirect(route('roles.index'))->with('success', 'Role Updated Successfully');
        // return redirect()->back()->with('success', 'Role Updated Successfully');
    }
    public function updateUser(Request $request, $userId)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'max:200', 'unique:users,email']
        ]);
        $user = User::findOrFail($userId);
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $role = Role::whereIn('id', $request->input('user_role', []))->get();
        $permissions = Permission::whereIn('id', $request->input('user_permissions', []))->get();
        $user->syncRoles($role);
        $user->syncPermissions($permissions);
        $user->save();
        return redirect()->route('users.index', $userId)->with('success', 'User Credintials Updated Successfully');
        // return redirect()->back()->with('success', 'User Credintials Updated Successfully');
    }
    public function profile()
    {
        $user = Auth::user();
        return Inertia::render('Auth/Profile', [
            'user' => $user
        ]);
    }
    public function profileupdate(Request $request)
    {
        //Auth::user() is Update Athunticated User Details
        $user = Auth::user();
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:100|unique:users,email,' . $user->id,
        ]);
        $user->update($request->all());
        return redirect(route('yourrole'));
        // return back()->with('success', 'User details Updated Successfully');
    }
}
