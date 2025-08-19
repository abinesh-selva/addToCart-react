'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, clearCart, setLastOrder } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  const handlePayNow = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !address) {
      alert('Please fill name, phone and address.');
      return;
    }

    setLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      const order = {
        id: Date.now(),
        items: cart,
        total,
        customer: { name, phone, address },
      };

      if (setLastOrder) setLastOrder(order); // Make sure function exists
      clearCart();
      setLoading(false);
      router.push('/thank-you');
    }, 900);
  };

  if (cart.length === 0) {
    return (
      <div className="p-6 min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-indigo-50 flex flex-col justify-center items-center">
        <p className="text-gray-500 text-lg mb-4">No items in cart.</p>
        <button
          onClick={() => router.push('/')}
          className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition cursor-pointer"
        >
          Shop now
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-indigo-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h2>

      <form onSubmit={handlePayNow} className="space-y-4 bg-white p-6 rounded-2xl shadow-md">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Phone</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Address</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="text-xl font-bold text-gray-800">Total: ₹{total.toFixed(2)}</div>
          <button
            type="submit"
            disabled={loading}
            className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 shadow-lg transition cursor-pointer"
          >
            {loading ? 'Processing...' : 'Pay Now'}
          </button>
        </div>
      </form>
    </div>
  );
}
