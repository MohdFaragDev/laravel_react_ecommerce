import CartItem from "@/Components/App/CartItem";
import CurrencyFormatter from "@/Components/Core/CurrencyFormatter";
import PrimaryButton from "@/Components/Core/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { GroupedCartItem, PageProps } from "@/types";
import { CreditCardIcon } from "@heroicons/react/24/outline";
import { Head, Link } from "@inertiajs/react";

function Index({
  csrf_token,
  cartItems,
  totalQuantity,
  totalPrice,
}: PageProps<{
  cartItems: Record<number, GroupedCartItem>;
}>) {
  return (
    <AuthenticatedLayout>
      <Head title="Your Cart" />

      <div className="container flex flex-col gap-4 p-8 mx-auto lg:flex-row">
        <div className="flex-1 order-2 bg-white card dark:bg-gray-800 lg:order-1">
          <div className="card-body">
            <div className="bg-white card dark:bg-gray-800 lg:min-w-[260px] order-1 lg:order-2">
              <div className="card-body">
                <h2 className="text-lg font-bold">Shopping Cart</h2>
                <div className="my-4">
                  {Object.keys(cartItems).length === 0 && (
                    <div className="py-2 text-center text-gray-500">
                      You don't have any items yet.
                    </div>
                  )}
                  {Object.values(cartItems).map((cartItem) => (
                    <div key={cartItem.user.id}>
                      <div
                        className={
                          "flex items-center justify-between pb-4 border-b border-gray-300 mb-4"
                        }
                      >
                        <Link href="/" className={"underline"}>
                          {cartItem.user.name}
                        </Link>

                        <div>
                          <form action={route("cart.checkout")} method="post">
                            <input
                              type="hidden"
                              name="_token"
                              value={csrf_token}
                            />
                            <input
                              type="hidden"
                              name="vendor_id"
                              value={cartItem.user.id}
                            />
                            <button className="btn btn-sm btn-ghost">
                              <CreditCardIcon className={"size-6"} />
                              Pay Only for this seller
                            </button>
                          </form>
                        </div>
                      </div>
                      {cartItem.items.map((item) => (
                        <CartItem item={item} key={item.id} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white card dark:bg-gray-800 lg:min-w-[260px] order-1 lg:order-2">
          <div className="card-body">
            SubTotal ({totalQuantity} items): &nbsp;
            <CurrencyFormatter amount={totalPrice} />
            <form action={route("cart.checkout")} method="post">
              <input type="hidden" name="_token" value={csrf_token} />
              <PrimaryButton className="rounder-full">
                <CreditCardIcon className={"size-6"} />
                Proceed to checkout
              </PrimaryButton>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

export default Index;
