<?php

namespace App\Http\Controllers;

use App\Http\Resources\AdminResource;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $userCount = User::count();
        $roleCount = Role::count();
        $roles = Role::all();
        $permissionCount = Permission::count();
        return Inertia::render('Dashboard', [
            'user' => AdminResource::collection(User::all()),
            'userCount' => $userCount,
            'roleCount' => $roleCount,
            'roles' => $roles,
            'permissionCount' => $permissionCount,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function manager()
    {

        $data = [
            ['name' => 'Jan', 'value' => rand(100, 500)],
            ['name' => 'Feb', 'value' => rand(100, 500)],
            ['name' => 'Mar', 'value' => rand(100, 500)],
            // Add more data points as needed
        ];
        return response()->json($data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
