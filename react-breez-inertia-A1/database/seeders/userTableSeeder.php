<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class userTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        echo "-----------------------------------------" . "\n";
        echo "-------User Create Seeder------" . "\n";
        $user = new User;
        $user->name = 'Admin';
        $user->email = 'admin@gmail.com';
        $user->password = Hash::make('password');
        $user->save();

        $user->assignRole('Admin');
        echo "-------User Name => $user->name------" . "\n";
        echo "-----------------------------------------" . "\n";
        echo "-------User Create Completed------" . "\n";
    }
}
