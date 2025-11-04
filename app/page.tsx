"use client";

import { useState } from "react";
import Link from "next/link";

const categories = [
  { id: "all", name: "All", icon: "🍽️" },
  { id: "burger", name: "Burgers", icon: "🍔" },
  { id: "pizza", name: "Pizza", icon: "🍕" },
  { id: "sushi", name: "Sushi", icon: "🍣" },
  { id: "dessert", name: "Dessert", icon: "🍰" },
  { id: "salad", name: "Salads", icon: "🥗" },
];

const restaurants = [
  {
    id: 1,
    name: "The Burger House",
    category: "burger",
    rating: 4.8,
    deliveryTime: "15-25",
    image: "bg-gradient-to-br from-amber-400 to-orange-600",
    badge: "Popular",
    distance: "0.8 km",
    price: "$$",
  },
  {
    id: 2,
    name: "Tokyo Sushi Bar",
    category: "sushi",
    rating: 4.9,
    deliveryTime: "20-30",
    image: "bg-gradient-to-br from-red-500 to-pink-600",
    badge: "New",
    distance: "1.2 km",
    price: "$$$",
  },
  {
    id: 3,
    name: "Pizza Perfetto",
    category: "pizza",
    rating: 4.7,
    deliveryTime: "25-35",
    image: "bg-gradient-to-br from-yellow-400 to-red-500",
    badge: null,
    distance: "2.1 km",
    price: "$$",
  },
  {
    id: 4,
    name: "Green Garden Salads",
    category: "salad",
    rating: 4.6,
    deliveryTime: "10-20",
    image: "bg-gradient-to-br from-green-400 to-emerald-600",
    badge: "Fast",
    distance: "0.5 km",
    price: "$",
  },
  {
    id: 5,
    name: "Sweet Dreams Bakery",
    category: "dessert",
    rating: 4.9,
    deliveryTime: "15-25",
    image: "bg-gradient-to-br from-pink-400 to-purple-600",
    badge: "Popular",
    distance: "1.5 km",
    price: "$$",
  },
  {
    id: 6,
    name: "Mega Burger Club",
    category: "burger",
    rating: 4.5,
    deliveryTime: "20-30",
    image: "bg-gradient-to-br from-orange-500 to-red-600",
    badge: null,
    distance: "1.8 km",
    price: "$$$",
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRestaurants = restaurants.filter((r) => {
    const matchesCategory = activeCategory === "all" || r.category === activeCategory;
    const matchesSearch = r.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 safe-top">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Discover</h1>
              <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                <span className="text-primary">📍</span>
                <span>Downtown, 123 Main St</span>
              </p>
            </div>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search restaurants or dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-xl bg-gray-100 border-0 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Categories */}
        <div className="px-4 pb-3 overflow-x-auto hide-scrollbar">
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="mr-1.5">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Restaurant Grid */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            {filteredRestaurants.length} restaurants nearby
          </h2>
          <button className="flex items-center gap-1 text-sm text-gray-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            </svg>
            Sort
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {filteredRestaurants.map((restaurant) => (
            <Link key={restaurant.id} href={`/restaurant/${restaurant.id}`}>
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all active:scale-98">
                <div className="relative">
                  <div className={`h-40 ${restaurant.image} flex items-center justify-center text-white text-4xl`}>
                    {categories.find(c => c.id === restaurant.category)?.icon}
                  </div>
                  {restaurant.badge && (
                    <div className="absolute top-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900">
                      {restaurant.badge}
                    </div>
                  )}
                  <button className="absolute top-3 right-3 p-2 bg-white/95 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{restaurant.name}</h3>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">⭐</span>
                      <span className="font-medium text-gray-900">{restaurant.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{restaurant.deliveryTime} min</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{restaurant.distance}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">{restaurant.price}</span>
                    <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredRestaurants.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600">Try adjusting your filters or search query</p>
          </div>
        )}
      </div>
    </div>
  );
}
