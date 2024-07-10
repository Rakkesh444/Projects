<?php

namespace App\Http\Controllers;

use App\Http\Requests\createPermissionRequest;
use App\Http\Requests\createRoleRequest;
use App\Http\Resources\PermissionGroupResource;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Role;
use App\Http\Resources\RoleResource;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\PermissionResource;
use App\Models\PermissionGroup;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $role = Role::with('permissions')->get();
        return Inertia::render('Admin/Roles/RoleDisplay', [
            'roles' => $role,
            // 'roles' => RoleResource::collection(Role::all()),
            // 'rolepermission' => $role,
        ]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render(
            'Admin/Roles/createRole',
            [
                'permissions' => PermissionResource::collection(Permission::all()),
                //'permissionGroups' => PermissionGroupResource::collection(PermissionGroup::with('permissions')->get()),
                'permissionGroups' => PermissionGroup::with('permissions')->get(),
            ]
        );

    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            //'permissions' => ['required', 'exists:permissions,name']

        ]);
        $role = new Role();
        $permissions = Permission::whereIn('id', $request->input('permission_ids', []))->get();
        $role->name = $request->input('name');
        $role->save();
        $role->syncPermissions($permissions);
        // return redirect(route('roles.index'));
        return back()->with('success', 'Role Created Successfully');
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
    public function edit($roleId)
    {
        $role = Role::with('permissions')->findOrFail($roleId);
        $permissions = Permission::all();
        return Inertia::render('Admin/Roles/RoleEdit', [
            //'role' => new RoleResource($role),
            // 'permissions' => PermissionResource::collection(Permission::all()),
            'roles' => $role,
            'permissions' => $permissions,
            'permissionGroups' => PermissionGroup::with('permissions')->get(),
            'successmessage' => 'Role Updated Successfully',
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $roleId)
    {
        $role = Role::findOrFail($roleId);
        $permissions = Permission::whereIn('id', $request->input('permission_ids', []))->get();
        $role->update([
            'name' => $request->name,
        ]);
        $role->syncPermissions($permissions);
        return redirect(route('roles.index', $roleId));
        // return back()->with('success', 'Role Created Successfully');
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $deleteRole = Role::findById($id);
        $deleteRole->delete();
        return back();
    }
}
