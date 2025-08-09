"use client";

import { useState } from "react";
import { User, Settings, Heart, ShoppingBag, Package, CreditCard, LogOut, Crown, Sparkles, Shield, Award, MapPin, Phone, Mail, Edit3 } from "lucide-react";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "orders", label: "Orders", icon: ShoppingBag },
    { id: "wishlist", label: "Wishlist", icon: Heart },
    { id: "addresses", label: "Addresses", icon: MapPin },
    { id: "payment", label: "Payment", icon: CreditCard },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const mockOrders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "Delivered",
      total: 299.99,
      items: [
        { name: "Premium Wool Blazer", price: 199.99, quantity: 1 },
        { name: "Silk Pocket Square", price: 49.99, quantity: 2 }
      ]
    },
    {
      id: "ORD-002",
      date: "2024-01-10",
      status: "Shipped",
      total: 159.98,
      items: [
        { name: "Cashmere Sweater", price: 159.98, quantity: 1 }
      ]
    }
  ];

  const mockWishlist = [
    {
      id: 1,
      name: "Limited Edition Tuxedo",
      price: 899.99,
      image: "/api/placeholder/300/400",
      brand: "Savile Row"
    },
    {
      id: 2,
      name: "Vintage Rolex Submariner",
      price: 12999.99,
      image: "/api/placeholder/300/400",
      brand: "Rolex"
    }
  ];

  const mockAddresses = [
    {
      id: 1,
      type: "Home",
      name: "John Smith",
      address: "123 Luxury Lane",
      city: "Beverly Hills",
      state: "CA",
      zip: "90210",
      country: "USA",
      isDefault: true
    },
    {
      id: 2,
      type: "Office",
      name: "John Smith",
      address: "456 Business Blvd",
      city: "Los Angeles",
      state: "CA",
      zip: "90001",
      country: "USA",
      isDefault: false
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="space-y-8">
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-cream-50 to-cream-100 rounded-2xl p-8 border border-cream-200">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-old-money-500 to-old-money-600 rounded-3xl flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-old-money-900 mb-2">John Smith</h2>
                  <div className="flex items-center gap-4 text-lg text-old-money-600">
                    <span className="flex items-center gap-2">
                      <Crown className="w-5 h-5 text-gold-500" />
                      Premium Member
                    </span>
                    <span className="w-2 h-2 bg-old-money-300 rounded-full"></span>
                    <span className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-gold-400" />
                      Gold Tier
                    </span>
                  </div>
                  <p className="text-old-money-500 mt-2">Member since January 2024</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white/50 rounded-xl border border-cream-200">
                  <div className="text-2xl font-bold text-old-money-900">12</div>
                  <div className="text-old-money-600">Orders</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-xl border border-cream-200">
                  <div className="text-2xl font-bold text-old-money-900">8</div>
                  <div className="text-old-money-600">Wishlist Items</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-xl border border-cream-200">
                  <div className="text-2xl font-bold text-old-money-900">$2,450</div>
                  <div className="text-old-money-600">Total Spent</div>
                </div>
              </div>
            </div>

            {/* Profile Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-cream-200 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-old-money-900">Personal Information</h3>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center gap-2 px-4 py-2 border-2 border-cream-300 rounded-xl hover:border-old-money-300 text-old-money-700 hover:text-old-money-800 transition-all duration-200"
                >
                  <Edit3 className="w-4 h-4" />
                  {isEditing ? 'Cancel' : 'Edit'}
                </button>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-semibold text-old-money-800 mb-3">First Name</label>
                    <input
                      type="text"
                      defaultValue="John"
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border-2 border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-old-money-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-200 disabled:bg-cream-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-old-money-800 mb-3">Last Name</label>
                    <input
                      type="text"
                      defaultValue="Smith"
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border-2 border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-old-money-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-200 disabled:bg-cream-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-old-money-800 mb-3">Email</label>
                    <input
                      type="email"
                      defaultValue="john.smith@email.com"
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border-2 border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-old-money-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-200 disabled:bg-cream-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-old-money-800 mb-3">Phone</label>
                    <input
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border-2 border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-old-money-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-200 disabled:bg-cream-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>
                
                {isEditing && (
                  <div className="flex justify-end gap-4 pt-6 border-t border-cream-200">
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-6 py-3 border-2 border-cream-300 rounded-xl text-old-money-700 hover:border-old-money-300 hover:text-old-money-800 transition-all duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-old-money-500 to-old-money-600 text-white rounded-xl hover:from-old-money-600 hover:to-old-money-700 transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg"
                    >
                      Save Changes
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        );

      case "orders":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-old-money-900 mb-6">Order History</h3>
            {mockOrders.map((order) => (
              <div key={order.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-cream-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-old-money-900">{order.id}</h4>
                    <p className="text-old-money-600">Ordered on {order.date}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-old-money-900">${order.total.toFixed(2)}</div>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      order.status === 'Delivered' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-cream-100 last:border-b-0">
                      <span className="text-old-money-700">{item.name} x{item.quantity}</span>
                      <span className="text-old-money-900 font-medium">${item.price.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-cream-200">
                  <button className="text-old-money-600 hover:text-old-money-800 font-medium hover:bg-old-money-50 px-4 py-2 rounded-lg transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        );

      case "wishlist":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-old-money-900 mb-6">My Wishlist</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockWishlist.map((item) => (
                <div key={item.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-cream-200 p-6">
                  <div className="aspect-square bg-gradient-to-br from-cream-50 to-cream-100 rounded-xl mb-4 flex items-center justify-center">
                    <div className="text-old-money-400 text-center">
                      <Package className="w-16 h-16 mx-auto mb-2" />
                      <p className="text-sm">Product Image</p>
                    </div>
                  </div>
                  <h4 className="font-semibold text-old-money-900 mb-2">{item.name}</h4>
                  <p className="text-old-money-600 mb-3">{item.brand}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-old-money-900">${item.price.toFixed(2)}</span>
                    <button className="px-4 py-2 bg-gradient-to-r from-old-money-500 to-old-money-600 text-white rounded-xl hover:from-old-money-600 hover:to-old-money-700 transition-all duration-200">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "addresses":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-old-money-900">Saved Addresses</h3>
              <button className="px-4 py-2 bg-gradient-to-r from-old-money-500 to-old-money-600 text-white rounded-xl hover:from-old-money-600 hover:to-old-money-700 transition-all duration-200">
                Add New Address
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockAddresses.map((address) => (
                <div key={address.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-cream-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-old-money-500 to-old-money-600 text-white text-sm font-semibold rounded-full">
                      {address.type}
                    </span>
                    {address.isDefault && (
                      <span className="px-3 py-1 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-sm font-semibold rounded-full">
                        Default
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-2 text-old-money-700">
                    <p className="font-semibold">{address.name}</p>
                    <p>{address.address}</p>
                    <p>{address.city}, {address.state} {address.zip}</p>
                    <p>{address.country}</p>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-cream-200 flex gap-2">
                    <button className="text-old-money-600 hover:text-old-money-800 font-medium hover:bg-old-money-50 px-3 py-2 rounded-lg transition-colors">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-700 font-medium hover:bg-red-50 px-3 py-2 rounded-lg transition-colors">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "payment":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-old-money-900 mb-6">Payment Methods</h3>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-cream-200 p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-old-money-400 to-old-money-500 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-old-money-800 mb-2">No payment methods saved</h4>
              <p className="text-old-money-600 mb-6 max-w-md mx-auto">
                Add a credit card or payment method to make checkout faster and more convenient.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-old-money-500 to-old-money-600 text-white rounded-xl hover:from-old-money-600 hover:to-old-money-700 transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg">
                Add Payment Method
              </button>
            </div>
          </div>
        );

      case "settings":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-old-money-900 mb-6">Account Settings</h3>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-cream-200 p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-cream-50 rounded-xl border border-cream-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-old-money-500 to-old-money-600 rounded-xl flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-old-money-900">Email Notifications</h4>
                      <p className="text-sm text-old-money-600">Receive updates about orders and promotions</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-cream-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-old-money-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-old-money-500"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-cream-50 rounded-xl border border-cream-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-old-money-500 to-old-money-600 rounded-xl flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-old-money-900">Two-Factor Authentication</h4>
                      <p className="text-sm text-old-money-600">Add an extra layer of security to your account</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 border-2 border-old-money-300 rounded-xl text-old-money-700 hover:bg-old-money-50 transition-colors">
                    Enable
                  </button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-cream-50 rounded-xl border border-cream-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-old-money-500 to-old-money-600 rounded-xl flex items-center justify-center">
                      <Crown className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-old-money-900">Premium Membership</h4>
                      <p className="text-sm text-old-money-600">Upgrade to unlock exclusive benefits</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-xl hover:from-gold-600 hover:to-gold-700 transition-all duration-200">
                    Upgrade
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-old-money-500 to-old-money-600 rounded-3xl flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-old-money-900 mb-3">
                My Account
              </h1>
              <div className="flex items-center justify-center gap-4 text-xl text-old-money-600 mb-4">
                <span className="flex items-center gap-2">
                  <Crown className="w-6 h-6 text-gold-500" />
                  Premium Member
                </span>
                <span className="w-2 h-2 bg-old-money-300 rounded-full"></span>
                <span className="flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-gold-400" />
                  Luxury Experience
                </span>
              </div>
              <p className="text-xl text-old-money-600 max-w-3xl mx-auto leading-relaxed">
                Manage your account settings, view order history, and customize your shopping experience.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-cream-200 p-6 sticky top-8">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'bg-old-money-500 text-white shadow-lg'
                          : 'text-old-money-700 hover:bg-cream-50 hover:text-old-money-900'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {tab.label}
                    </button>
                  );
                })}
                
                <div className="pt-4 border-t border-cream-200">
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200">
                    <LogOut className="w-5 h-5" />
                    Sign Out
                  </button>
                </div>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </main>
  );
}
