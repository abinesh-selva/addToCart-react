'use client';
import ProductCard from "../components/ProductCard";
import products from "../data/products.json";

export default function HomePage() {
  // Pick 3 random products as "Daily Picks"
  const dailyPicks = products.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-indigo-50 relative">

      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-96 bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 rounded-b-3xl flex flex-col justify-center items-center text-center p-6 mb-16 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-pink-300 rounded-full opacity-30 -translate-x-20 -translate-y-10"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-300 rounded-full opacity-30 translate-x-20 translate-y-10"></div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-pink-700 mb-4 z-10">
          Fresh Honey, Straight from Nature
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl z-10">
          Discover our hand-picked collection of natural honey and sweet delights.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">

        {/* Daily Picks */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Daily Picks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {dailyPicks.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              tag="Hot"
            />
          ))}
        </div>

        {/* Full Product Grid */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              tag={product.tag}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
