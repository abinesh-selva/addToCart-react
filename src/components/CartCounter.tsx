'use client';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartCounter() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link href="/cart" className="relative flex items-center">
      <span className="text-blue-600 font-semibold mr-2">Cart</span>
      <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
        {totalItems}
      </span>
    </Link>
  );
}
