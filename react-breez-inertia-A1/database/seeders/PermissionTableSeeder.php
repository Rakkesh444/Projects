<?php

namespace Database\Seeders;

use App\Models\PermissionGroup;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = [
            [
                'name' => 'Create Role',
                'permission_group_id' => PermissionGroup::where('name', 'Roles')->first()->id
            ],
            [
                'name' => 'Update Role',
                'permission_group_id' => PermissionGroup::where('name', 'Roles')->first()->id
            ],
            [
                'name' => 'Edit Role',
                'permission_group_id' => PermissionGroup::where('name', 'Roles')->first()->id
            ],
            [
                'name' => 'Delete Role',
                'permission_group_id' => PermissionGroup::where('name', 'Roles')->first()->id
            ],
            [
                'name' => 'Create Permissions',
                'permission_group_id' => PermissionGroup::where('name', 'Permissions')->first()->id
            ],
            [
                'name' => 'Update Permissions',
                'permission_group_id' => PermissionGroup::where('name', 'Permissions')->first()->id
            ],
            [
                'name' => 'Edit Permissions',
                'permission_group_id' => PermissionGroup::where('name', 'Permissions')->first()->id
            ],
            [
                'name' => 'Delete Permissions',
                'permission_group_id' => PermissionGroup::where('name', 'Permissions')->first()->id
            ],
            [
                'name' => 'Create Users',
                'permission_group_id' => PermissionGroup::where('name', 'Users')->first()->id
            ],
            [
                'name' => 'Update Users',
                'permission_group_id' => PermissionGroup::where('name', 'Users')->first()->id
            ],
            [
                'name' => 'Edit Users',
                'permission_group_id' => PermissionGroup::where('name', 'Users')->first()->id
            ],
            [
                'name' => 'Delete Users',
                'permission_group_id' => PermissionGroup::where('name', 'Users')->first()->id
            ],
            [
                'name' => 'User List',
                'permission_group_id' => PermissionGroup::where('name', 'List')->first()->id
            ],
            [
                'name' => 'Role List',
                'permission_group_id' => PermissionGroup::where('name', 'List')->first()->id
            ],
            [
                'name' => 'Permissions List',
                'permission_group_id' => PermissionGroup::where('name', 'List')->first()->id
            ],
            [
                'name' => 'Delete List',
                'permission_group_id' => PermissionGroup::where('name', 'List')->first()->id
            ],
        ];


        echo "-----------------------------------" . "\n";
        echo "----------Permission Seeding Start----------" . "\n";

        foreach ($permissions as $key => $value) {
            $permission = new Permission;
            $permission->name = $value['name'];
            $permission->permission_group_id = $value['permission_group_id'];
            $permission->save();
            echo "----------Permission Name => $permission->name----------" . "\n";
        }
        echo "-----------------------------------" . "\n";
        echo "----------Permission Seeding End----------" . "\n";
    }
}
