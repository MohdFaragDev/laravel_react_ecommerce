<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;


class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            // Health & Beauty (department_id = 1)
            [
                'name' => 'Skincare',
                'department_id' => 1,
                'active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Haircare',
                'department_id' => 1,
                'active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Makeup',
                'department_id' => 1,
                'active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Electronics (department_id = 2)
            [
                'name' => 'Smartphones',
                'department_id' => 2,
                'active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Laptops',
                'department_id' => 2,
                'active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Accessories',
                'department_id' => 2,
                'active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Fashion (department_id = 3)
            [
                'name' => 'Men\'s Clothing',
                'department_id' => 3,
                'active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Women\'s Clothing',
                'department_id' => 3,
                'active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Footwear',
                'department_id' => 3,
                'active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Home & Kitchen (department_id = 4)
            [
                'name' => 'Furniture',
                'department_id' => 4,
                'active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Kitchen Appliances',
                'department_id' => 4,
                'active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Home Decor',
                'department_id' => 4,
                'active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Sports & Outdoors (department_id = 5)
            [
                'name' => 'Fitness Equipment',
                'department_id' => 5,
                'active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Camping & Hiking',
                'department_id' => 5,
                'active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Toys & Games (department_id = 6)
            [
                'name' => 'Board Games',
                'department_id' => 6,
                'active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Action Figures',
                'department_id' => 6,
                'active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Automotive (department_id = 7)
            [
                'name' => 'Car Accessories',
                'department_id' => 7,
                'active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Motorcycle Parts',
                'department_id' => 7,
                'active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Books (department_id = 8)
            [
                'name' => 'Fiction',
                'department_id' => 8,
                'active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Non-fiction',
                'department_id' => 8,
                'active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Grocery (department_id = 9)
            [
                'name' => 'Fresh Produce',
                'department_id' => 9,
                'active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Beverages',
                'department_id' => 9,
                'active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Pet Supplies (department_id = 10)
            [
                'name' => 'Dog Food',
                'department_id' => 10,
                'active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Cat Accessories',
                'department_id' => 10,
                'active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ];

        DB::table('categories')->insert($categories);
    }
}
