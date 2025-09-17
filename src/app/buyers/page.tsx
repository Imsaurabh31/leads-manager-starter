import React from "react";
import Link from "next/link";
import { Plus, Search, Eye, ArrowLeft, Filter, Download, Users, TrendingUp, Clock, Star } from "lucide-react";

const statusColors = {
  NEW: "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25",
  Qualified: "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/25",
  Contacted: "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg shadow-yellow-500/25",
  Visited: "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/25",
  Negotiation: "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25",
  Converted: "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/25",
  Dropped: "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25",
};

export default function BuyersPage({ searchParams }: { searchParams?: any }) {
  const page = Number(searchParams?.page || 1);
  const pageSize = 10;
  
  // Mock data for demonstration
  const items = [
    {
      id: '1',
      fullName: 'Rajesh Kumar',
      phone: '+91 98765 43210',
      city: 'Chandigarh',
      propertyType: 'Apartment',
      budgetMin: 50,
      budgetMax: 80,
      timeline: '0-3m',
      status: 'NEW',
      updatedAt: new Date().toISOString()
    },
    {
      id: '2',
      fullName: 'Priya Sharma',
      phone: '+91 87654 32109',
      city: 'Mohali',
      propertyType: 'Villa',
      budgetMin: 120,
      budgetMax: 200,
      timeline: '3-6m',
      status: 'Qualified',
      updatedAt: new Date(Date.now() - 86400000).toISOString()
    },
    {
      id: '3',
      fullName: 'Amit Singh',
      phone: '+91 76543 21098',
      city: 'Zirakpur',
      propertyType: 'Plot',
      budgetMin: 30,
      budgetMax: 50,
      timeline: '>6m',
      status: 'Contacted',
      updatedAt: new Date(Date.now() - 172800000).toISOString()
    },
    {
      id: '4',
      fullName: 'Neha Gupta',
      phone: '+91 65432 10987',
      city: 'Panchkula',
      propertyType: 'Apartment',
      budgetMin: 70,
      budgetMax: 100,
      timeline: '0-3m',
      status: 'Converted',
      updatedAt: new Date(Date.now() - 259200000).toISOString()
    }
  ];
  const total = items.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Buyers Dashboard</h1>
                <p className="text-gray-400 mt-2">Manage and track your leads efficiently</p>
              </div>
            </div>
            <Link href="/buyers/new" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              <Plus className="w-5 h-5" />
              <span className="font-medium">Add New Buyer</span>
            </Link>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">Total Leads</p>
                  <p className="text-2xl font-bold text-white">{total}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">Active</p>
                  <p className="text-2xl font-bold text-white">{items.filter(b => !['Converted', 'Dropped'].includes(b.status)).length}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">Converted</p>
                  <p className="text-2xl font-bold text-white">{items.filter(b => b.status === 'Converted').length}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">This Month</p>
                  <p className="text-2xl font-bold text-white">{items.filter(b => new Date(b.updatedAt).getMonth() === new Date().getMonth()).length}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Search and Filter Bar */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="relative flex-1">
                <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search buyers by name, phone, or email..."
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                />
              </div>
              <div className="flex items-center space-x-3">
                <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-xl flex items-center space-x-2 border border-white/20 transition-all duration-300">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-xl flex items-center space-x-2 border border-white/20 transition-all duration-300">
                  <Download className="w-4 h-4" />
                  <span>Export</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden">
          {items.length === 0 ? (
            <div className="text-center py-20 relative">
              {/* Floating background elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full animate-float"></div>
                <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full animate-float animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-pink-500/5 rounded-full animate-pulse"></div>
              </div>
              
              <div className="relative z-10">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-glow shadow-2xl">
                  <div className="w-28 h-28 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Users className="w-14 h-14 text-white animate-bounce" />
                  </div>
                </div>
                
                <h3 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-4 animate-fade-in">Welcome to Your Dashboard</h3>
                <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto animate-fade-in-delay">Start building your lead pipeline and watch your business grow</p>
                <p className="text-gray-400 mb-12 max-w-lg mx-auto">Add your first buyer to begin tracking leads, managing relationships, and converting prospects into customers</p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  <Link href="/buyers/new" className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-4 rounded-2xl inline-flex items-center space-x-3 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 font-semibold text-lg">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
                      <Plus className="w-4 h-4" />
                    </div>
                    <span>Add Your First Buyer</span>
                  </Link>
                  
                  <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl inline-flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 border border-white/20 font-medium">
                    <Download className="w-5 h-5" />
                    <span>Import from CSV</span>
                  </button>
                </div>
                
                {/* Feature highlights */}
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Track Progress</h4>
                    <p className="text-gray-400 text-sm">Monitor lead status and conversion rates in real-time</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Manage Leads</h4>
                    <p className="text-gray-400 text-sm">Organize and categorize your prospects efficiently</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Close Deals</h4>
                    <p className="text-gray-400 text-sm">Convert more prospects into satisfied customers</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/5 border-b border-white/10">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Buyer</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Contact</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Property</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Budget</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Timeline</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Updated</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {items.map((b: any, index: number) => (
                      <tr key={b.id} className="hover:bg-white/5 transition-all duration-300 group" style={{animationDelay: `${index * 50}ms`}}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white font-semibold text-sm">{b.fullName.charAt(0).toUpperCase()}</span>
                            </div>
                            <div>
                              <div className="font-semibold text-white group-hover:text-blue-300 transition-colors">{b.fullName}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-gray-300">{b.phone}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-gray-300">{b.city}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-gray-300">{b.propertyType}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-gray-300">
                            {b.budgetMin || b.budgetMax ? (
                              <span className="font-medium">₹{b.budgetMin || 0}L - ₹{b.budgetMax || 0}L</span>
                            ) : (
                              <span className="text-gray-500">Not specified</span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-gray-300">{b.timeline}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusColors[b.status as keyof typeof statusColors] || 'bg-gray-500 text-white'} transform transition-all duration-300 hover:scale-105`}>
                            {b.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-gray-400 text-sm">
                            {new Date(b.updatedAt).toLocaleDateString()}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Link href={`/buyers/${b.id}`} className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 border border-white/20">
                            <Eye className="w-4 h-4" />
                            <span className="text-sm font-medium">View</span>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="bg-white/5 px-6 py-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    Showing <span className="font-semibold text-white">{((page-1)*pageSize) + 1}</span> to <span className="font-semibold text-white">{Math.min(page*pageSize, total)}</span> of <span className="font-semibold text-white">{total}</span> results
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">Page {page} of {Math.ceil(total/pageSize)}</span>
                    <div className="flex space-x-1">
                      <button className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition-all duration-300" disabled={page <= 1}>
                        ‹
                      </button>
                      <button className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition-all duration-300" disabled={page >= Math.ceil(total/pageSize)}>
                        ›
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
