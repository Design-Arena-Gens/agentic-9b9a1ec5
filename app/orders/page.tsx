"use client";

import { useState } from "react";

const orders = [
  {
    id: "ORD-2847",
    restaurant: "The Burger House",
    items: ["2x Classic Burger", "1x Sweet Potato Fries"],
    status: "delivering",
    statusText: "Out for delivery",
    total: 31.97,
    estimatedTime: "10-15 min",
    image: "bg-gradient-to-br from-amber-400 to-orange-600",
    date: "Today, 2:30 PM",
    driver: "John D.",
    progress: 75,
  },
  {
    id: "ORD-2846",
    restaurant: "Tokyo Sushi Bar",
    items: ["1x Dragon Roll", "1x Miso Soup"],
    status: "preparing",
    statusText: "Being prepared",
    total: 24.99,
    estimatedTime: "20-25 min",
    image: "bg-gradient-to-br from-red-500 to-pink-600",
    date: "Today, 1:45 PM",
    driver: null,
    progress: 40,
  },
  {
    id: "ORD-2842",
    restaurant: "Pizza Perfetto",
    items: ["1x Margherita Pizza", "1x Caesar Salad"],
    status: "completed",
    statusText: "Delivered",
    total: 28.50,
    estimatedTime: null,
    image: "bg-gradient-to-br from-yellow-400 to-red-500",
    date: "Yesterday, 7:20 PM",
    driver: "Sarah M.",
    progress: 100,
  },
  {
    id: "ORD-2840",
    restaurant: "Sweet Dreams Bakery",
    items: ["2x Chocolate Lava Cake", "1x Espresso"],
    status: "completed",
    statusText: "Delivered",
    total: 21.98,
    estimatedTime: null,
    image: "bg-gradient-to-br from-pink-400 to-purple-600",
    date: "2 days ago",
    driver: "Mike R.",
    progress: 100,
  },
];

const statusColors = {
  delivering: "bg-blue-500",
  preparing: "bg-orange-500",
  completed: "bg-green-500",
};

export default function Orders() {
  const [activeTab, setActiveTab] = useState<"active" | "history">("active");

  const activeOrders = orders.filter((o) => o.status !== "completed");
  const completedOrders = orders.filter((o) => o.status === "completed");

  const displayOrders = activeTab === "active" ? activeOrders : completedOrders;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 safe-top">
        <div className="px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Orders</h1>

          {/* Tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("active")}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === "active"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Active ({activeOrders.length})
            </button>
            <button
              onClick={() => setActiveTab("history")}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === "history"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              History ({completedOrders.length})
            </button>
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="px-4 py-4">
        <div className="space-y-4">
          {displayOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-all"
            >
              {/* Order Header */}
              <div className="flex gap-4 p-4 border-b border-gray-100">
                <div className={`w-16 h-16 flex-shrink-0 rounded-xl ${order.image} flex items-center justify-center text-2xl`}>
                  🍽️
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-base font-semibold text-gray-900">{order.restaurant}</h3>
                    <span className={`flex-shrink-0 px-2 py-1 ${statusColors[order.status as keyof typeof statusColors]} text-white text-xs font-medium rounded-full`}>
                      {order.statusText}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-1">Order #{order.id}</p>
                  <p className="text-xs text-gray-400">{order.date}</p>
                </div>
              </div>

              {/* Order Items */}
              <div className="px-4 py-3 border-b border-gray-100">
                <div className="space-y-1">
                  {order.items.map((item, idx) => (
                    <p key={idx} className="text-sm text-gray-700">
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              {/* Progress Bar (for active orders) */}
              {order.status !== "completed" && (
                <div className="px-4 py-3 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span className="text-gray-700 font-medium">Order Progress</span>
                    <span className="text-gray-500">{order.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${statusColors[order.status as keyof typeof statusColors]} h-2 rounded-full transition-all`}
                      style={{ width: `${order.progress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Driver Info (if available) */}
              {order.driver && order.status === "delivering" && (
                <div className="px-4 py-3 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg">
                        👤
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{order.driver}</p>
                        <p className="text-xs text-gray-500">Your driver</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </button>
                      <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Order Footer */}
              <div className="px-4 py-4 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Total</p>
                    <p className="text-lg font-bold text-gray-900">${order.total.toFixed(2)}</p>
                  </div>

                  {order.status === "completed" ? (
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                        Reorder
                      </button>
                      <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                        Review
                      </button>
                    </div>
                  ) : (
                    <div className="text-right">
                      <p className="text-xs text-gray-500 mb-1">Estimated time</p>
                      <p className="text-sm font-semibold text-primary">{order.estimatedTime}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {displayOrders.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {activeTab === "active" ? "No active orders" : "No order history"}
            </h3>
            <p className="text-gray-600 mb-6">
              {activeTab === "active"
                ? "Start ordering delicious food"
                : "Your completed orders will appear here"}
            </p>
            {activeTab === "active" && (
              <a href="/" className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
                Browse Restaurants
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
