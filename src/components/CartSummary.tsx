"use client";
import { useCart } from "../context/CartContext";

export default function CartSummary() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-4">
              <div>
                {item.name} x {item.quantity}
              </div>
              <div>${(item.price * item.quantity / 100).toFixed(2)}</div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 cursor-pointer"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4 font-bold">
            Total: ${(total / 100).toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
}
