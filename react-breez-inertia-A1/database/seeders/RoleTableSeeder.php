<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        echo "-----------------------------------------" . "\n";
        echo "------- Create Role Seeder------" . "\n";
        $role = new Role;
        $role->name = 'Admin';
        $role->save();
        echo "------- Role Created Role Name => $role->name------" . "\n";
        echo "-----------------------------------------" . "\n";
        echo "--------Assigning Permissions To Role------" . "\n";
        $permissions = Permission::get();

        foreach ($permissions as $key => $value) {
            $role->givePermissionTo($value->name);
            echo "--------Permissions Name => $value->name------" . "\n";
        }

        echo "------- Role Seeding Comppleted-----" . "\n";
    }

}
