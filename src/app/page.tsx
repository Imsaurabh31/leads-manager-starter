import Link from 'next/link';
import { Users, Plus, BarChart3, Settings, TrendingUp, Target, Clock, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8 animate-bounce">
            <Target className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-6 animate-fade-in">
            Leads Manager
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-delay">
            Transform your lead management with our cutting-edge, AI-powered platform
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">✨ Modern Design</span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">🚀 Fast Performance</span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">📊 Real-time Analytics</span>
          </div>
        </div>
        
        {/* Action Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Link href="/buyers" className="group">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">View Buyers</h3>
              <p className="text-gray-300 text-sm mb-4">Browse and manage all your leads with advanced filtering</p>
              <div className="flex items-center text-blue-300 text-sm font-medium">
                <span>Explore</span>
                <TrendingUp className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
          
          <Link href="/buyers/new" className="group">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Plus className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">Add Buyer</h3>
              <p className="text-gray-300 text-sm mb-4">Create new lead entries with smart form validation</p>
              <div className="flex items-center text-green-300 text-sm font-medium">
                <span>Create</span>
                <Plus className="w-4 h-4 ml-2 group-hover:rotate-90 transition-transform" />
              </div>
            </div>
          </Link>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 cursor-pointer group">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">Analytics</h3>
            <p className="text-gray-300 text-sm mb-4">View performance metrics and conversion insights</p>
            <div className="flex items-center text-purple-300 text-sm font-medium">
              <span>Analyze</span>
              <BarChart3 className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 cursor-pointer group">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">Settings</h3>
            <p className="text-gray-300 text-sm mb-4">Configure your preferences and customize workflows</p>
            <div className="flex items-center text-orange-300 text-sm font-medium">
              <span>Configure</span>
              <Settings className="w-4 h-4 ml-2 group-hover:rotate-180 transition-transform duration-500" />
            </div>
          </div>
        </div>
        
        {/* Stats Dashboard */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 shadow-2xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white flex items-center">
              <Star className="w-8 h-8 text-yellow-400 mr-3" />
              Dashboard Overview
            </h2>
            <div className="flex items-center text-gray-300">
              <Clock className="w-5 h-5 mr-2" />
              <span className="text-sm">Updated just now</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">0</div>
              <div className="text-gray-300 font-medium">Total Leads</div>
              <div className="text-xs text-gray-400 mt-1">+0% from last month</div>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">0</div>
              <div className="text-gray-300 font-medium">Converted</div>
              <div className="text-xs text-gray-400 mt-1">+0% conversion rate</div>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">0%</div>
              <div className="text-gray-300 font-medium">Success Rate</div>
              <div className="text-xs text-gray-400 mt-1">Industry average: 2.5%</div>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">0</div>
              <div className="text-gray-300 font-medium">Avg. Response</div>
              <div className="text-xs text-gray-400 mt-1">Hours to first contact</div>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="mt-10 pt-8 border-t border-white/20">
            <h3 className="text-xl font-semibold text-white mb-6">Quick Actions</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/buyers/new" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Add New Lead
              </Link>
              <Link href="/buyers" className="px-6 py-3 bg-white/10 text-white rounded-xl font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                View All Leads
              </Link>
              <button className="px-6 py-3 bg-white/10 text-white rounded-xl font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                Export Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
