<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Enums\RolesEnum;
use App\Enums\PermissonsEnum;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $userRole = Role::create(['name' => RolesEnum::User->value]);
        $vendorRole = Role::create(['name' => RolesEnum::Vendor->value]);
        $adminRole = Role::create(['name' => RolesEnum::Admin->value]);

        $approveVendors = Permission::create(['name' => PermissonsEnum::ApproveVendors->value]);
        $buyProducts = Permission::create(['name' => PermissonsEnum::BuyProducts->value]);
        $sellProducts = Permission::create(['name' => PermissonsEnum::SellProducts->value]);

        $userRole->syncPermissions([$buyProducts,]);
        $vendorRole->syncPermissions([$sellProducts, $buyProducts,]);
        $adminRole->syncPermissions([$sellProducts, $buyProducts, $approveVendors,]);
    }
}
