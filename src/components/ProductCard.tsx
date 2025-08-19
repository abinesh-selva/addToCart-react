'use client';
import { useState } from "react";
import { useCart } from "../context/CartContext";

type ProductProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  tag?: string;
};

export default function ProductCard({ id, name, price, image, tag }: ProductProps) {
  const { addToCart } = useCart();
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    addToCart({ id, name, price, image });
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center relative transform transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Optional tag */}
      {tag && (
        <span className="absolute top-3 left-3 bg-yellow-400 text-white text-xs px-2 py-1 rounded-full font-semibold animate-pulse">
          {tag}
        </span>
      )}

      {/* Product image */}
      <div className="w-full h-48 md:h-56 overflow-hidden rounded-xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-xl"
        />
      </div>

      {/* Product info */}
      <h2 className="mt-4 text-lg font-semibold text-gray-800 text-center">{name}</h2>
      <div className="flex items-center mt-1 space-x-2">
        <p className="text-gray-400 line-through text-sm">₹{(price * 1.2).toFixed(2)}</p>
        <p className="text-green-600 font-bold">₹{price.toFixed(2)}</p>
        <span className="text-xs bg-pink-600 text-white px-2 py-1 rounded-full font-semibold">-20%</span>
      </div>

      {/* Add to Cart button */}
      <button
        onClick={handleAddToCart}
        className="mt-4 bg-pink-600 text-white px-5 py-2 rounded-full hover:bg-pink-700 shadow-lg transition cursor-pointer"
      >
        Add to Cart
      </button>

      {/* Popup confirmation */}
      {showMessage && (
        <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded text-sm shadow">
          Added to cart!
        </div>
      )}
    </div>
  );
}
