<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Models\PermissionGroup;
use Illuminate\Http\RedirectResponse;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\PermissionResource;
use App\Http\Requests\createPermissionRequest;
use App\Models\CustomPermission;

class PermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Admin/PermisionPage/PermissionIndex', [
            'permissions' => PermissionResource::collection(Permission::all())
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        $permissionGroups = PermissionGroup::with('permissions')->get();
        return Inertia::render('Admin/PermisionPage/Create', [
            'permissionGroups' => $permissionGroups,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validator::make($request->all(), [
        //     'name' => ['required', 'string', 'max:100']
        // ]);
        $validated = $request->validate([
            'group_ids' => 'required|exists:permission_groups,id',
            'permissions' => 'required|array',
            'permissions.*' => 'required|string|max:200',
        ]);
        //Find the Permission Group
        $group = PermissionGroup::find($validated['group_ids']);

        //create the permission assign the group
        foreach ($validated['permissions'] as $permissionName) {
            //To Use CustomePermission Model Store the Permissions Based on Permissions group id
            $permission = CustomPermission::firstOrCreate(['name' => $permissionName]);
            $permission->group()->associate($group);
            $permission->save();

            return back()->with('success', 'Permission Created SuccessFully');
        }
        // $permission = new Permission;
        // $permission->name = $request->input('name');
        // $permission->save();
        // return redirect(route('permissions.index'));

        return back()->with('success', 'Permission Created');
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
    public function edit(string $id): Response
    {
        $permissions = Permission::findById($id);
        return Inertia::render('Admin/PermisionPage/EditPermission', [
            'permissions' => new PermissionResource($permissions)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): RedirectResponse
    {
        Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:100']
        ]);
        $updatePermission = Permission::findById($id);
        $updatePermission->update($request->all());
        return redirect(route('permissions.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $deletePermission = Permission::findById($id);
        $deletePermission->delete();
        return back();
    }
}
