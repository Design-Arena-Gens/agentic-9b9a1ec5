"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const menuItems = [
  {
    id: 1,
    name: "Classic Burger",
    description: "Beef patty, lettuce, tomato, pickles, special sauce",
    price: 12.99,
    category: "Burgers",
    popular: true,
    image: "bg-gradient-to-br from-amber-400 to-orange-500",
  },
  {
    id: 2,
    name: "Cheese Deluxe",
    description: "Double cheese, crispy bacon, caramelized onions",
    price: 15.99,
    category: "Burgers",
    popular: true,
    image: "bg-gradient-to-br from-yellow-400 to-orange-600",
  },
  {
    id: 3,
    name: "Veggie Supreme",
    description: "Plant-based patty, avocado, fresh veggies",
    price: 13.99,
    category: "Burgers",
    popular: false,
    image: "bg-gradient-to-br from-green-400 to-emerald-500",
  },
  {
    id: 4,
    name: "Sweet Potato Fries",
    description: "Crispy fries with garlic aioli",
    price: 5.99,
    category: "Sides",
    popular: false,
    image: "bg-gradient-to-br from-orange-300 to-orange-500",
  },
  {
    id: 5,
    name: "Onion Rings",
    description: "Golden crispy rings with ranch dip",
    price: 6.99,
    category: "Sides",
    popular: true,
    image: "bg-gradient-to-br from-amber-300 to-yellow-500",
  },
  {
    id: 6,
    name: "Chocolate Shake",
    description: "Thick and creamy milkshake",
    price: 5.99,
    category: "Drinks",
    popular: false,
    image: "bg-gradient-to-br from-brown-400 to-amber-700",
  },
];

export default function RestaurantDetail() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState<Record<number, number>>({});

  const categories = ["All", ...Array.from(new Set(menuItems.map((item) => item.category)))];

  const filteredItems = activeCategory === "All"
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  const addToCart = (itemId: number) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId: number) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId]--;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const totalItems = Object.values(cart).reduce((sum, count) => sum + count, 0);
  const totalPrice = Object.entries(cart).reduce((sum, [id, count]) => {
    const item = menuItems.find((i) => i.id === Number(id));
    return sum + (item?.price || 0) * count;
  }, 0);

  return (
    <div className="min-h-screen bg-white pb-32">
      {/* Header Image & Back Button */}
      <div className="relative">
        <div className="h-56 bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-white text-6xl">
          🍔
        </div>
        <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 p-2 bg-white/95 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
        >
          <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="absolute top-4 right-4 p-2 bg-white/95 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
          <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* Restaurant Info */}
      <div className="px-4 py-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">The Burger House</h1>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">⭐</span>
            <span className="font-medium text-gray-900">4.8</span>
            <span>(2.3k)</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>15-25 min</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            <span>0.8 km</span>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-4">
          Premium burgers made with 100% grass-fed beef. Locally sourced ingredients, no artificial flavors.
        </p>

        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Info
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            Reviews
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="px-4 py-3 overflow-x-auto hide-scrollbar">
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 py-4">
        <div className="space-y-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-all">
              <div className="flex gap-4 p-4">
                <div className={`w-24 h-24 flex-shrink-0 rounded-lg ${item.image} flex items-center justify-center text-3xl`}>
                  🍔
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-base font-semibold text-gray-900">{item.name}</h3>
                    {item.popular && (
                      <span className="flex-shrink-0 px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">${item.price}</span>

                    {cart[item.id] ? (
                      <div className="flex items-center gap-3 bg-primary/10 rounded-lg px-2 py-1">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-7 h-7 flex items-center justify-center bg-white rounded-md text-primary font-bold hover:bg-gray-50 transition-colors"
                        >
                          −
                        </button>
                        <span className="text-sm font-semibold text-gray-900 w-6 text-center">
                          {cart[item.id]}
                        </span>
                        <button
                          onClick={() => addToCart(item.id)}
                          className="w-7 h-7 flex items-center justify-center bg-primary rounded-md text-white font-bold hover:bg-primary/90 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(item.id)}
                        className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        Add
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Cart Button */}
      {totalItems > 0 && (
        <div className="fixed bottom-20 left-4 right-4 z-20">
          <button className="w-full bg-primary text-white rounded-2xl px-6 py-4 flex items-center justify-between shadow-lg hover:bg-primary/90 transition-all active:scale-98">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center font-bold">
                {totalItems}
              </div>
              <span className="font-semibold">View Cart</span>
            </div>
            <span className="font-bold text-lg">${totalPrice.toFixed(2)}</span>
          </button>
        </div>
      )}
    </div>
  );
}
