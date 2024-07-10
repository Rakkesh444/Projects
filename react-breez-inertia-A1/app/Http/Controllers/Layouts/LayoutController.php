<?php

namespace App\Http\Controllers\Layouts;

use App\Http\Controllers\Controller;
use App\Http\Resources\RoleResource;
use App\Http\Resources\UserResource;
use App\Models\PermissionGroup;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Role;

class LayoutController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $roles = $user->getRoleNames();
        return Inertia::render('Layouts/UserLayout', [
            'user' => $user,
            'roles' => $roles,
        ]);
    }
    public function roledashboar()
    {
        $role = User::with('roles')->get();
        return Inertia::render('UserDashboard/MainDashboard', [
            'role' => $role,
        ]);
    }
    public function chartData()
    {
        $user = Auth::user();
        $role = $user->getRoleNames();
        $data = [
            ['name' => $user->name, 'value' => rand(100, 500)],
            ['name' => $role, 'value' => rand(100, 500)],
        ];
        return response()->json($data);
    }
    public function rolepermissionlist()
    {
        $group = PermissionGroup::with('permissions')->get();
        $roles = Role::all();
        return Inertia::render('Admin/List/RolePerList', [
            'roles' => $roles,
            'groupnames' => $group,
        ]);
    }
    public function getData()
    {
        ;
        $data = [
            ['name' => 'Admin', 'value' => rand(500, 1000)],
            ['name' => 'Senior Maneger', 'value' => rand(200, 700)],
            ['name' => 'Manager', 'value' => rand(100, 500)],
            ['name' => 'HR', 'value' => rand(50, 250)],
            // Add more data points as needed
        ];

        return response()->json($data);
    }
}
