<?php

namespace Database\Seeders;

use App\Models\PermissionGroup;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermissionGroupTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissionGroups = [
            [
                'name' => 'Roles'
            ],
            [
                'name' => 'Permissions'
            ],
            [
                'name' => 'Users'
            ],
            [
                'name' => 'List'
            ],
        ];

        echo "-----------------------------------" . "\n";
        echo "----------Permission Group Seeding Start----------" . "\n";
        foreach ($permissionGroups as $key => $value) {
            $PermissionGroup = new PermissionGroup;
            $PermissionGroup->name = $value['name'];
            $PermissionGroup->save();
            echo "----------Permission Group Name =>  $PermissionGroup->name----------" . "\n";
        }
        echo "----------Permission Group Seeding Compleeted----------" . "\n";
    }
}
