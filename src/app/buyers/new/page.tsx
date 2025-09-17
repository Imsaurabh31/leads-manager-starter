"use client";
import React, { useState } from "react";
// import { buyerCreate } from "@/lib/validators/buyer";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, User, Phone, Mail, MapPin, Home, IndianRupee } from "lucide-react";

export default function CreateBuyer() {
  const router = useRouter();
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "", city: "Chandigarh", propertyType: "Apartment",
    bhk: "1", purpose: "Buy", budgetMin: "", budgetMax: "", timeline: "0-3m", source: "Website", notes: "", tags: ""
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const onChange = (k:any, v:any) => setForm({...form, [k]: v});

  const submit = async (e:any) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    
    // Basic validation
    if (!form.fullName || !form.phone) {
      setError("Please fill in required fields");
      setLoading(false);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert("Buyer created successfully! (Demo mode)");
      router.push("/buyers");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-8">
            <Link href="/buyers" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Add New Buyer</h1>
              <p className="text-gray-400 mt-2">Create a new lead entry with detailed information</p>
            </div>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <form onSubmit={submit} className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Personal Information</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Full Name *</label>
                  <input
                    type="text"
                    value={form.fullName}
                    onChange={e=>onChange("fullName", e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
                    placeholder="Enter full name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Phone *</label>
                  <div className="relative">
                    <Phone className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e=>onChange("phone", e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Email</label>
                  <div className="relative">
                    <Mail className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      value={form.email}
                      onChange={e=>onChange("email", e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-300 mb-3">City *</label>
                  <div className="relative">
                    <MapPin className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <select
                      value={form.city}
                      onChange={e=>onChange("city", e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15 appearance-none"
                    >
                      <option className="bg-gray-800">Chandigarh</option>
                      <option className="bg-gray-800">Mohali</option>
                      <option className="bg-gray-800">Zirakpur</option>
                      <option className="bg-gray-800">Panchkula</option>
                      <option className="bg-gray-800">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Property Requirements</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Property Type *</label>
                  <select
                    value={form.propertyType}
                    onChange={e=>onChange("propertyType", e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15 appearance-none"
                  >
                    <option className="bg-gray-800">Apartment</option>
                    <option className="bg-gray-800">Villa</option>
                    <option className="bg-gray-800">Plot</option>
                    <option className="bg-gray-800">Office</option>
                    <option className="bg-gray-800">Retail</option>
                  </select>
                </div>
                
                {(form.propertyType === "Apartment" || form.propertyType === "Villa") && (
                  <div className="space-y-2 animate-fade-in">
                    <label className="block text-sm font-semibold text-gray-300 mb-3">BHK *</label>
                    <select
                      value={form.bhk}
                      onChange={e=>onChange("bhk", e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15 appearance-none"
                    >
                      <option className="bg-gray-800">1</option>
                      <option className="bg-gray-800">2</option>
                      <option className="bg-gray-800">3</option>
                      <option className="bg-gray-800">4</option>
                      <option className="bg-gray-800">Studio</option>
                    </select>
                  </div>
                )}
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Purpose *</label>
                  <select
                    value={form.purpose}
                    onChange={e=>onChange("purpose", e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15 appearance-none"
                  >
                    <option className="bg-gray-800">Buy</option>
                    <option className="bg-gray-800">Rent</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Timeline *</label>
                  <select
                    value={form.timeline}
                    onChange={e=>onChange("timeline", e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15 appearance-none"
                  >
                    <option className="bg-gray-800">0-3m</option>
                    <option className="bg-gray-800">3-6m</option>
                    <option className="bg-gray-800">&gt;6m</option>
                    <option className="bg-gray-800">Exploring</option>
                  </select>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Budget Min (Lakhs)</label>
                  <div className="relative">
                    <IndianRupee className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="number"
                      value={form.budgetMin}
                      onChange={e=>onChange("budgetMin", e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
                      placeholder="e.g. 50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Budget Max (Lakhs)</label>
                  <div className="relative">
                    <IndianRupee className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="number"
                      value={form.budgetMax}
                      onChange={e=>onChange("budgetMax", e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
                      placeholder="e.g. 100"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Additional Information</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Source *</label>
                  <select
                    value={form.source}
                    onChange={e=>onChange("source", e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15 appearance-none"
                  >
                    <option className="bg-gray-800">Website</option>
                    <option className="bg-gray-800">Referral</option>
                    <option className="bg-gray-800">Walk-in</option>
                    <option className="bg-gray-800">Call</option>
                    <option className="bg-gray-800">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Tags (comma separated)</label>
                  <input
                    type="text"
                    value={form.tags}
                    onChange={e=>onChange("tags", e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
                    placeholder="e.g. urgent, premium, referral"
                  />
                </div>
              </div>
              
              <div className="mt-8">
                <label className="block text-sm font-semibold text-gray-300 mb-3">Notes</label>
                <textarea
                  value={form.notes}
                  onChange={e=>onChange("notes", e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15 resize-none"
                  placeholder="Additional notes about the buyer..."
                />
              </div>
            </div>
            
            {error && (
              <div className="bg-red-500/20 border border-red-500/30 rounded-2xl p-6 backdrop-blur-sm animate-fade-in">
                <div className="text-red-300 font-medium">{error}</div>
              </div>
            )}
            
            <div className="flex items-center justify-end space-x-6 pt-8">
              <Link href="/buyers" className="px-8 py-3 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105 font-medium">
                Cancel
              </Link>
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-500 disabled:to-gray-600 text-white px-8 py-3 rounded-xl flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 font-medium disabled:cursor-not-allowed"
              >
                <Save className="w-5 h-5" />
                <span>{loading ? "Creating..." : "Create Buyer"}</span>
                {loading && (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
