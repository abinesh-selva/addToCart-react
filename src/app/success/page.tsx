'use client';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function ThankYou() {
  const { lastOrder } = useCart();

  if (!lastOrder) {
    return (
      <div className="p-6 min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-indigo-50 flex flex-col justify-center items-center text-center">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Thank you!</h2>
        <p className="text-gray-600 mb-4">
          We did not find your order details. <Link href="/" className="text-pink-600 font-semibold hover:underline">Go to shop</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-indigo-50 flex flex-col items-center">
      <h2 className="text-4xl font-extrabold text-pink-700 mb-4">Thank you for your order!</h2>
      <p className="text-gray-700 mb-6">Order #{lastOrder.id} • Total ₹{lastOrder.total.toFixed(2)}</p>

      <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">Items</h3>
        <ul className="space-y-2">
          {lastOrder.items.map((it) => (
            <li key={it.id} className="flex justify-between text-gray-700">
              <span>{it.name} × {it.quantity}</span>
              <span>₹{(it.price * it.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>

        {lastOrder.customer && (
          <>
            <h4 className="mt-4 text-lg font-semibold text-gray-800">Shipping</h4>
            <div className="text-gray-600 text-sm">
              {lastOrder.customer.name}<br />
              {lastOrder.customer.phone}<br />
              {lastOrder.customer.address}
            </div>
          </>
        )}
      </div>

      <div className="mt-6">
        <Link href="/">
          <button className="bg-pink-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-pink-700 transition cursor-pointer">
            Continue shopping
          </button>
        </Link>
      </div>
    </div>
  );
}
