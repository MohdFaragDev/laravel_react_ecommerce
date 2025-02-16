<?php

namespace App\Enums;

enum PermissonsEnum: string
{
    case ApproveVendors = 'ApproveVendors';
    case SellProducts = 'SellProducts';
    case BuyProducts = 'BuyProducts';
}
