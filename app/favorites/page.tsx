"use client";

import { useState } from "react";
import Link from "next/link";

const savedRestaurants = [
  {
    id: 1,
    name: "The Burger House",
    rating: 4.8,
    deliveryTime: "15-25",
    image: "bg-gradient-to-br from-amber-400 to-orange-600",
    category: "Burgers",
    distance: "0.8 km",
    price: "$$",
  },
  {
    id: 2,
    name: "Tokyo Sushi Bar",
    rating: 4.9,
    deliveryTime: "20-30",
    image: "bg-gradient-to-br from-red-500 to-pink-600",
    category: "Sushi",
    distance: "1.2 km",
    price: "$$$",
  },
  {
    id: 5,
    name: "Sweet Dreams Bakery",
    rating: 4.9,
    deliveryTime: "15-25",
    image: "bg-gradient-to-br from-pink-400 to-purple-600",
    category: "Dessert",
    distance: "1.5 km",
    price: "$$",
  },
];

const savedDishes = [
  {
    id: 1,
    name: "Classic Burger",
    restaurant: "The Burger House",
    price: 12.99,
    image: "bg-gradient-to-br from-amber-400 to-orange-500",
  },
  {
    id: 2,
    name: "Dragon Roll",
    restaurant: "Tokyo Sushi Bar",
    price: 18.99,
    image: "bg-gradient-to-br from-red-400 to-pink-500",
  },
  {
    id: 3,
    name: "Chocolate Lava Cake",
    restaurant: "Sweet Dreams Bakery",
    price: 8.99,
    image: "bg-gradient-to-br from-amber-600 to-brown-700",
  },
];

export default function Favorites() {
  const [activeTab, setActiveTab] = useState<"restaurants" | "dishes">("restaurants");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 safe-top">
        <div className="px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Favorites</h1>

          {/* Tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("restaurants")}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === "restaurants"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Restaurants ({savedRestaurants.length})
            </button>
            <button
              onClick={() => setActiveTab("dishes")}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === "dishes"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Dishes ({savedDishes.length})
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-4">
        {activeTab === "restaurants" && (
          <div className="space-y-4">
            {savedRestaurants.map((restaurant) => (
              <Link key={restaurant.id} href={`/restaurant/${restaurant.id}`}>
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all active:scale-98">
                  <div className="relative">
                    <div className={`h-40 ${restaurant.image} flex items-center justify-center text-white text-4xl`}>
                      🍽️
                    </div>
                    <button className="absolute top-3 right-3 p-2 bg-white/95 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                      <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>

                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{restaurant.name}</h3>
                      <span className="text-xs text-gray-500">{restaurant.category}</span>
                    </div>

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

            {savedRestaurants.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">💔</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No favorites yet</h3>
                <p className="text-gray-600 mb-6">Start adding your favorite restaurants</p>
                <Link href="/" className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
                  Discover Restaurants
                </Link>
              </div>
            )}
          </div>
        )}

        {activeTab === "dishes" && (
          <div className="grid grid-cols-2 gap-3">
            {savedDishes.map((dish) => (
              <div key={dish.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-all active:scale-98">
                <div className="relative">
                  <div className={`h-32 ${dish.image} flex items-center justify-center text-3xl`}>
                    🍽️
                  </div>
                  <button className="absolute top-2 right-2 p-1.5 bg-white/95 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                    <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                <div className="p-3">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-1">{dish.name}</h3>
                  <p className="text-xs text-gray-500 mb-2 line-clamp-1">{dish.restaurant}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-gray-900">${dish.price}</span>
                    <button className="p-1.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {savedDishes.length === 0 && (
              <div className="col-span-2 text-center py-16">
                <div className="text-6xl mb-4">🍽️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No favorite dishes</h3>
                <p className="text-gray-600 mb-6">Save your favorite dishes for quick access</p>
                <Link href="/" className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
                  Browse Menu
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
