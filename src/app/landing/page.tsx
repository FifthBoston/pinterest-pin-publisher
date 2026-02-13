"use client";

import Link from "next/link";
import { useState } from "react";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="border-b border-[#333333] bg-black/90 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <i className="fab fa-pinterest text-[#FFD700] text-2xl"></i>
              <span className="text-xl font-bold text-white">Pinterest Pin Publisher</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#features" className="text-[#CCCCCC] hover:text-[#FFD700] transition-colors hidden sm:block">Features</a>
              <a href="#how-it-works" className="text-[#CCCCCC] hover:text-[#FFD700] transition-colors hidden sm:block">How It Works</a>
              <a href="#pricing" className="text-[#CCCCCC] hover:text-[#FFD700] transition-colors hidden sm:block">Pricing</a>
              <Link
                href="/"
                className="px-5 py-2 bg-[#FFD700] text-black rounded-lg font-bold hover:bg-[#FFC700] transition-all"
              >
                Launch App
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-full mb-8">
              <i className="fas fa-bolt text-[#FFD700]"></i>
              <span className="text-[#FFD700] text-sm font-medium">AI-Powered Pinterest Automation</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Turn Pinterest Into Your
              <span className="block text-[#FFD700]">Traffic Machine</span>
            </h1>
            
            <p className="text-xl text-[#CCCCCC] mb-10 max-w-2xl mx-auto">
              Upload your content, let AI craft the perfect titles and descriptions, and automatically 
              post to the boards that will get you maximum visibility. Drive traffic on autopilot.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/"
                className="w-full sm:w-auto px-8 py-4 bg-[#FFD700] text-black rounded-lg font-bold text-lg hover:bg-[#FFC700] transition-all hover:translate-y-[-2px] hover:shadow-[0_4px_12px_rgba(255,215,0,0.3)]"
              >
                <i className="fas fa-rocket mr-2"></i>
                Start Publishing Free
              </Link>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-[#FFD700] text-[#FFD700] rounded-lg font-bold text-lg hover:bg-[#FFD700] hover:text-black transition-all"
              >
                <i className="fas fa-play-circle mr-2"></i>
                See How It Works
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <p className="text-4xl font-bold text-[#FFD700]">10x</p>
                <p className="text-[#CCCCCC] text-sm">More Traffic</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#90EE90]">85%</p>
                <p className="text-[#CCCCCC] text-sm">Time Saved</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#FFD700]">24/7</p>
                <p className="text-[#CCCCCC] text-sm">Automation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Pinterest is a <span className="text-[#FFD700]">Goldmine</span> You're Not Tapping
            </h2>
            <p className="text-[#CCCCCC] max-w-2xl mx-auto">
              While everyone's fighting for attention on Instagram and TikTok, Pinterest users are 
              actively searching for products and solutions—ready to click and buy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-6">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-clock text-red-400 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Time-Consuming</h3>
              <p className="text-[#CCCCCC]">
                Manually creating pins, writing descriptions, and finding the right boards 
                takes hours every week.
              </p>
            </div>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-6">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-question-circle text-red-400 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Guesswork</h3>
              <p className="text-[#CCCCCC]">
                Which boards will get you seen? What titles convert? Without data, 
                you're just guessing.
              </p>
            </div>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-6">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-chart-line text-red-400 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Inconsistent Results</h3>
              <p className="text-[#CCCCCC]">
                Without a system, your traffic spikes and crashes. You need 
                consistent publishing to build momentum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Everything You Need to <span className="text-[#FFD700]">Dominate Pinterest</span>
            </h2>
            <p className="text-[#CCCCCC] max-w-2xl mx-auto">
              One tool to upload, optimize, and publish—powered by AI that knows what works.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 hover:border-[#FFD700]/50 transition-colors">
              <div className="w-12 h-12 bg-[#FFD700]/10 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-upload text-[#FFD700] text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Easy Upload</h3>
              <p className="text-[#CCCCCC]">
                Drag and drop images or videos. Support for JPG, PNG, GIF, MP4, and MOV. 
                Up to 20MB images and 2GB videos.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 hover:border-[#FFD700]/50 transition-colors">
              <div className="w-12 h-12 bg-[#FFD700]/10 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-robot text-[#FFD700] text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Content Generation</h3>
              <p className="text-[#CCCCCC]">
                Let AI write compelling titles, descriptions, and hashtags that drive clicks. 
                Or bring your own—your choice.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 hover:border-[#FFD700]/50 transition-colors">
              <div className="w-12 h-12 bg-[#FFD700]/10 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-bullseye text-[#FFD700] text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Smart Board Selection</h3>
              <p className="text-[#CCCCCC]">
                AI analyzes your content and recommends the optimal boards and sections 
                for maximum visibility and engagement.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 hover:border-[#FFD700]/50 transition-colors">
              <div className="w-12 h-12 bg-[#FFD700]/10 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-link text-[#FFD700] text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Custom Destination URLs</h3>
              <p className="text-[#CCCCCC]">
                Drive traffic wherever you want—product pages, landing pages, affiliate links, 
                blog posts. Set a default or customize per pin.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 hover:border-[#FFD700]/50 transition-colors">
              <div className="w-12 h-12 bg-[#FFD700]/10 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-chart-bar text-[#FFD700] text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Performance Tracking</h3>
              <p className="text-[#CCCCCC]">
                Track impressions, saves, and clicks for every pin. See what's working 
                and double down on winners.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 hover:border-[#FFD700]/50 transition-colors">
              <div className="w-12 h-12 bg-[#FFD700]/10 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-hashtag text-[#FFD700] text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Hashtag Optimization</h3>
              <p className="text-[#CCCCCC]">
                AI suggests trending and relevant hashtags to boost discoverability. 
                Get found by people searching for what you offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Three Steps to <span className="text-[#FFD700]">Pinterest Traffic</span>
            </h2>
            <p className="text-[#CCCCCC] max-w-2xl mx-auto">
              From upload to traffic in under 60 seconds. No complicated setup required.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-black">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Upload Your Content</h3>
              <p className="text-[#CCCCCC]">
                Drag and drop your image or video. Add your destination URL where you want 
                traffic to go.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-black">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Let AI Optimize</h3>
              <p className="text-[#CCCCCC]">
                Click "AI Generate" to create compelling titles, descriptions, and get 
                board recommendations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-black">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Publish & Track</h3>
              <p className="text-[#CCCCCC]">
                Hit publish and watch your pin go live. Track performance in your dashboard 
                and watch the traffic roll in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Perfect For <span className="text-[#FFD700]">Every Business</span>
            </h2>
            <p className="text-[#CCCCCC] max-w-2xl mx-auto">
              Whether you're selling products, promoting content, or driving affiliate traffic—
              Pinterest Pin Publisher has you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 text-center">
              <i className="fas fa-shopping-bag text-[#FFD700] text-3xl mb-4"></i>
              <h3 className="text-lg font-bold text-white mb-2">E-commerce</h3>
              <p className="text-[#CCCCCC] text-sm">Product pins that convert browsers to buyers</p>
            </div>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 text-center">
              <i className="fas fa-blog text-[#FFD700] text-3xl mb-4"></i>
              <h3 className="text-lg font-bold text-white mb-2">Bloggers</h3>
              <p className="text-[#CCCCCC] text-sm">Drive readers to your latest posts</p>
            </div>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 text-center">
              <i className="fas fa-hand-holding-usd text-[#FFD700] text-3xl mb-4"></i>
              <h3 className="text-lg font-bold text-white mb-2">Affiliates</h3>
              <p className="text-[#CCCCCC] text-sm">Promote offers with trackable links</p>
            </div>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 text-center">
              <i className="fas fa-briefcase text-[#FFD700] text-3xl mb-4"></i>
              <h3 className="text-lg font-bold text-white mb-2">Services</h3>
              <p className="text-[#CCCCCC] text-sm">Showcase your work and book clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Start Free, <span className="text-[#FFD700]">Scale When Ready</span>
            </h2>
            <p className="text-[#CCCCCC] max-w-2xl mx-auto">
              No credit card required. Start publishing pins today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free */}
            <div className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
              <p className="text-[#CCCCCC] text-sm mb-6">Perfect for getting started</p>
              <p className="text-4xl font-bold text-white mb-6">
                $0 <span className="text-lg font-normal text-[#666666]">/month</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-[#CCCCCC]">
                  <i className="fas fa-check text-[#90EE90]"></i>
                  10 pins per month
                </li>
                <li className="flex items-center gap-2 text-[#CCCCCC]">
                  <i className="fas fa-check text-[#90EE90]"></i>
                  AI content generation
                </li>
                <li className="flex items-center gap-2 text-[#CCCCCC]">
                  <i className="fas fa-check text-[#90EE90]"></i>
                  Basic analytics
                </li>
                <li className="flex items-center gap-2 text-[#CCCCCC]">
                  <i className="fas fa-check text-[#90EE90]"></i>
                  1 Pinterest account
                </li>
              </ul>
              <Link
                href="/"
                className="block w-full py-3 text-center bg-transparent border-2 border-[#FFD700] text-[#FFD700] rounded-lg font-bold hover:bg-[#FFD700] hover:text-black transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* Pro */}
            <div className="bg-[#1A1A1A] border-2 border-[#FFD700] rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#FFD700] text-black text-sm font-bold rounded-full">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
              <p className="text-[#CCCCCC] text-sm mb-6">For serious marketers</p>
              <p className="text-4xl font-bold text-[#FFD700] mb-6">
                $29 <span className="text-lg font-normal text-[#666666]">/month</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-[#CCCCCC]">
                  <i className="fas fa-check text-[#90EE90]"></i>
                  Unlimited pins
                </li>
                <li className="flex items-center gap-2 text-[#CCCCCC]">
                  <i className="fas fa-check text-[#90EE90]"></i>
                  AI content generation
                </li>
                <li className="flex items-center gap-2 text-[#CCCCCC]">
                  <i className="fas fa-check text-[#90EE90]"></i>
                  Advanced analytics
                </li>
                <li className="flex items-center gap-2 text-[#CCCCCC]">
                  <i className="fas fa-check text-[#90EE90]"></i>
                  3 Pinterest accounts
                </li>
                <li className="flex items-center gap-2 text-[#CCCCCC]">
                  <i className="fas fa-check text-[#90EE90]"></i>
                  Scheduled publishing
                </li>
                <li className="flex items-center gap-2 text-[#CCCCCC]">
                  <i className="fas fa-check text-[#90EE90]"></i>
                  Priority support
                </li>
              </ul>
              <Link
                href="/"
                className="block w-full py-3 text-center bg-[#FFD700] text-black rounded-lg font-bold hover:bg-[#FFC700] transition-all"
              >
                Start Pro Trial
              </Link>
            </div>

            {/* Enterprise */}
            <div className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
              <p className="text-[#CCCCCC] text-sm mb-6">For agencies & teams</p>
              <p className="text-4xl font-bold text-white mb-6">
                $99 <span className="text-lg font-normal text-[#666666]">/month</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-[#CCCCCC]">
                  <i className="fas fa-check text-[#90EE90]"></i>
                  Everything in Pro
                </li>
                <li className="flex items-center gap-2 text-[#CCCCCC]">
                  <i className="fas fa-check text-[#90EE90]"></i>
                  Unlimited accounts
                </li>
                <li className="flex items-center gap-2 text-[#CCCCCC]">
                  <i className="fas fa-check text-[#90EE90]"></i>
                  Team collaboration
                </li>
                <li className="flex items-center gap-2 text-[#CCCCCC]">
                  <i className="fas fa-check text-[#90EE90]"></i>
                  API access
                </li>
                <li className="flex items-center gap-2 text-[#CCCCCC]">
                  <i className="fas fa-check text-[#90EE90]"></i>
                  White-label reports
                </li>
                <li className="flex items-center gap-2 text-[#CCCCCC]">
                  <i className="fas fa-check text-[#90EE90]"></i>
                  Dedicated support
                </li>
              </ul>
              <Link
                href="/"
                className="block w-full py-3 text-center bg-transparent border-2 border-[#FFD700] text-[#FFD700] rounded-lg font-bold hover:bg-[#FFD700] hover:text-black transition-all"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1A1A1A] border-2 border-[#FFD700] rounded-2xl p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Turn Pinterest Into Your <span className="text-[#FFD700]">Traffic Machine</span>?
            </h2>
            <p className="text-[#CCCCCC] mb-8 max-w-xl mx-auto">
              Join thousands of marketers who are driving traffic and sales with AI-powered Pinterest automation.
            </p>
            
            {isSubmitted ? (
              <div className="p-6 bg-[#2A4D3A]/30 border border-[#2A4D3A] rounded-lg">
                <i className="fas fa-check-circle text-[#90EE90] text-3xl mb-3"></i>
                <p className="text-white font-medium">You're on the list!</p>
                <p className="text-[#CCCCCC] text-sm">We'll notify you when new features drop.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 bg-black border-2 border-[#333333] rounded-lg text-white placeholder-[#666666] focus:border-[#FFD700] focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-[#FFD700] text-black rounded-lg font-bold hover:bg-[#FFC700] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <i className="fas fa-spinner fa-spin"></i>
                  ) : (
                    "Get Started"
                  )}
                </button>
              </form>
            )}

            <p className="text-[#666666] text-sm mt-4">
              <i className="fas fa-lock mr-1"></i>
              No credit card required • Free forever plan available
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#333333] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <i className="fab fa-pinterest text-[#FFD700] text-xl"></i>
                <span className="text-lg font-bold text-white">Pinterest Pin Publisher</span>
              </div>
              <p className="text-[#CCCCCC] text-sm">
                AI-powered Pinterest automation for maximum visibility and traffic.
              </p>
            </div>

            <div>
              <h4 className="text-[#FFD700] font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="text-[#CCCCCC] hover:text-[#FFD700] transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-[#CCCCCC] hover:text-[#FFD700] transition-colors">Pricing</a></li>
                <li><Link href="/" className="text-[#CCCCCC] hover:text-[#FFD700] transition-colors">Dashboard</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#FFD700] font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://fifthboston.services/" target="_blank" rel="noopener noreferrer" className="text-[#CCCCCC] hover:text-[#FFD700] transition-colors">About Us</a></li>
                <li><a href="#" className="text-[#CCCCCC] hover:text-[#FFD700] transition-colors">Contact</a></li>
                <li><a href="#" className="text-[#CCCCCC] hover:text-[#FFD700] transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#FFD700] font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-[#CCCCCC] hover:text-[#FFD700] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-[#CCCCCC] hover:text-[#FFD700] transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#333333] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#666666] text-sm">
              © {new Date().getFullYear()} Pinterest Pin Publisher. All rights reserved.
            </p>
            <p className="text-sm text-[#666666] flex items-center justify-center gap-1">
              <i className="fas fa-code"></i> with <i className="fas fa-heart text-red-500"></i> by{" "}
              <a
                href="https://fifthboston.services/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#CCCCCC] hover:text-[#FFD700] transition-colors"
              >
                FIFTHBOSTON.SERVICES
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
