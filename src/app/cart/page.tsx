'use client';
import { useCart } from "../../context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-indigo-50 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-4">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">Your cart is empty.</p>
            <Link href="/" className="mt-4 inline-block bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="divide-y divide-gray-200">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center py-4">
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
                    <div>
                      <h2 className="font-semibold text-gray-700">{item.name}</h2>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <p className="text-gray-700 font-medium">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 font-semibold cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total and Checkout */}
            <div className="flex justify-between items-center mt-6 pt-4 border-t">
              <p className="text-xl font-bold text-gray-800">
                Total: ₹{total.toFixed(2)}
              </p>
              <Link href="/checkout">
                <button className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 shadow-lg transition cursor-pointer">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
