<?php

namespace App\Http\Controllers;

use App\Models\PermissionGroup;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PermissionGroupController extends Controller
{
    public function index(): Response
    {
        $permissionGroups = PermissionGroup::with('permissions')->get();
        return Inertia::render('Admin/PermisionPage/PermissionGroup', [
            'permissionGroups' => $permissionGroups,
        ]);
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:100'
        ]);

        $permissionGroup = new PermissionGroup;
        $permissionGroup->name = $request->name;
        $permissionGroup->save();
        return back()->with('success', 'PermissionGroup Created Successfully');
    }
}
