"use client";

export default function Profile() {
  const menuItems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      label: "Edit Profile",
      subtitle: "Update your personal information",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Addresses",
      subtitle: "Manage your delivery addresses",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      label: "Payment Methods",
      subtitle: "Manage your payment options",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      label: "Rewards & Offers",
      subtitle: "View your points and exclusive deals",
      badge: "5",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      label: "Notifications",
      subtitle: "Manage notification preferences",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "Help & Support",
      subtitle: "Get help or contact us",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Settings",
      subtitle: "App preferences and privacy",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Profile Info */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-4 py-6 safe-top">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center text-white text-3xl font-bold">
              JD
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-gray-900 mb-1">John Doe</h1>
              <p className="text-sm text-gray-600 mb-2">john.doe@email.com</p>
              <p className="text-xs text-gray-500">Member since Jan 2024</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-gray-900 mb-1">42</p>
              <p className="text-xs text-gray-600">Orders</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-gray-900 mb-1">8</p>
              <p className="text-xs text-gray-600">Favorites</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-primary mb-1">450</p>
              <p className="text-xs text-gray-600">Points</p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 py-4">
        <div className="space-y-2">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              className="w-full bg-white rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-all active:scale-98 border border-gray-200"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                {item.icon}
              </div>

              <div className="flex-1 text-left">
                <h3 className="text-base font-semibold text-gray-900 mb-0.5">{item.label}</h3>
                <p className="text-sm text-gray-500">{item.subtitle}</p>
              </div>

              {item.badge && (
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                  {item.badge}
                </div>
              )}

              <svg className="flex-shrink-0 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>

        {/* Logout Button */}
        <button className="w-full mt-6 bg-white rounded-xl p-4 flex items-center justify-center gap-3 hover:shadow-md transition-all active:scale-98 border border-red-200 text-red-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span className="font-semibold">Logout</span>
        </button>

        {/* App Version */}
        <p className="text-center text-xs text-gray-400 mt-6 mb-2">
          FoodHub v1.0.0
        </p>
      </div>
    </div>
  );
}
