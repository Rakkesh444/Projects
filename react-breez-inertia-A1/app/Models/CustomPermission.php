<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Models\Permission as SpatiePermission;

class CustomPermission extends SpatiePermission
{
    public function group()
    {
        //Store the Permissions To Permissions group || extend the Spatie Permission Model
        return $this->belongsTo(PermissionGroup::class, 'permission_group_id');
    }
}
