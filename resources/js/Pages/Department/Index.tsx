import ProductItem from "@/Components/App/ProductItem";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Department, PageProps, PaginationProps, Product } from "@/types";
import { Head } from "@inertiajs/react";
import React from "react";

function Index({
  appName,
  department,
  products,
}: PageProps<{
  department: Department;
  products: PaginationProps<Product>;
}>) {
  return (
    <AuthenticatedLayout>
      <Head title={department.name} />

      <div className="container mx-auto">
        <div className="hero bg-base-200 min-h-[120px]">
          <div className="text-center hero-content">
            <div className="max-lg-w">
              <h1 className="text-5xl font-bold">{department.name}</h1>
            </div>
          </div>
        </div>

        {products.data.length === 0 && (
          <div className="px-8 py-16 text-3xl text-center text-gray-300">
            No Products found
          </div>
        )}

        <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 lg:grid-cols-3">
          {products.data.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

export default Index;
