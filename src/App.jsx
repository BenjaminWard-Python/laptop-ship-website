import React, { useState } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Eye, EyeOff } from 'lucide-react';

export default function SaaSWebsiteTemplate() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [isAnimating, setIsAnimating] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signInError, setSignInError] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    setSignInError('');

    // Validate email
    if (!signInEmail) {
      setSignInError('Please enter your email address');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(signInEmail)) {
      setSignInError('Please enter a valid email address');
      return;
    }

    // Validate password
    if (!signInPassword) {
      setSignInError('Please enter your password');
      return;
    }

    // Simulate email/password verification (replace with actual API call)
    // For demo purposes, this will show an error
    setSignInError('Invalid email or password. Please check your credentials and try again.');
  };

  const handleTabChange = (tabId) => {
    if (tabId !== activeTab) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTab(tabId);
        setIsAnimating(false);
      }, 300);
    }
  };

  const navigation = [
    { name: 'Features', id: 'features' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const renderContent = () => {
    const fadeInClass = isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0';
    const transitionClass = 'transition-all duration-500 ease-out';
    
    switch(activeTab) {
      case 'home':
        return (
          <div className={`${fadeInClass} ${transitionClass}`}>
            {/* Main Value Prop */}
            <section className="max-w-6xl mx-auto py-20 text-center px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Section Title: Main Value Proposition
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Supporting description text that explains the main benefits and how the service works.
              </p>
            </section>

            {/* Feature Section 1 */}
            <section className="max-w-6xl mx-auto py-12 px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Hassle Free Retrieval
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Description of this feature and how it benefits the customer. Explain the value proposition clearly.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl h-80 flex items-center justify-center">
                  <span className="text-gray-400">Feature Image 1</span>
                </div>
              </div>
            </section>

            {/* Feature Section 2 */}
            <section className="max-w-6xl mx-auto py-12 px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl h-80 flex items-center justify-center">
                  <span className="text-gray-400">Feature Image 2</span>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Cheaper & Easier
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Description of this feature and how it benefits the customer. Explain the value proposition clearly.
                  </p>
                </div>
              </div>
            </section>

            {/* Feature Section 3 */}
            <section className="max-w-6xl mx-auto py-12 px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    End-to-end Visibility
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Description of this feature and how it benefits the customer. Explain the value proposition clearly.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl h-80 flex items-center justify-center">
                  <span className="text-gray-400">Feature Image 3</span>
                </div>
              </div>
            </section>
          </div>
        );
      
      case 'features':
        return (
          <div className={`space-y-16 ${fadeInClass} ${transitionClass} pb-20`}>
            <section className="text-center max-w-3xl mx-auto pt-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Everything You Need
              </h1>
              <p className="text-lg text-gray-600">
                Powerful features that help you work smarter and achieve more.
              </p>
            </section>

            <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">Feature Title {i}</h3>
                  <p className="text-gray-600">
                    Detailed description of this powerful feature and how it benefits your workflow and productivity.
                  </p>
                </div>
              ))}
            </section>
          </div>
        );
      
      case 'pricing':
        return (
          <div className={`space-y-16 ${fadeInClass} ${transitionClass} pb-20`}>
            <section className="text-center max-w-3xl mx-auto pt-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Start Your Process
              </h1>
              <p className="text-lg text-gray-600">
                No setup fees, recurring subscriptions, or contracts — just an easy and efficient solution.
              </p>
            </section>

            <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              {/* Starter Plan */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Starter</h3>
                </div>
                
                <p className="text-gray-700 font-semibold mb-2">
                  For growing teams that need occasional services
                </p>
                <p className="text-gray-600 mb-6">
                  Quick and hassle-free solution. Perfect for one-time needs, employee transitions, or equipment management.
                </p>

                <div className="mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    Service from <span className="text-blue-600">$XX</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    No minimums: set up as you need, billed to your credit card
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Included</h4>
                  <ul className="space-y-2">
                    {[
                      'Service kit with all necessary materials',
                      'Email communications including up to 3 reminders',
                      'Tracking updates sent to your email',
                      'Responsive email support',
                      'Optional insurance coverage available'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="text-blue-600 mt-1">✓</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all">
                  Get Started
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-600">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Enterprise</h3>
                </div>
                
                <p className="text-gray-700 font-semibold mb-2">
                  For teams that need to manage services at scale
                </p>
                <p className="text-gray-600 mb-6">
                  Streamline bulk operations and management with our enterprise-grade services.
                </p>

                <div className="mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    Service from <span className="text-blue-600">$XX/use</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Volume discounts available<br />
                    No setup fees or monthly/quarterly commitments
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Included</h4>
                  <ul className="space-y-2">
                    <li className="text-gray-700 text-sm">
                      <span className="font-semibold">Everything in the Starter Plan including:</span>
                    </li>
                    {[
                      'Employee Email Communications',
                      'Reminders',
                      'Company Tracking Updates',
                      'Responsive Email Support'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 ml-4">
                        <span className="text-blue-600">-</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                    {[
                      'Access to the portal (with tracking dashboard) and API',
                      'Additional premium features with every use',
                      'Access to storage and deployment service'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="text-blue-600 mt-1">✓</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all">
                  Get Started
                </button>
              </div>

            </section>


          </div>
        );
      
      case 'about':
        return (
          <div className={`space-y-16 ${fadeInClass} ${transitionClass} pb-20`}>
            <section className="text-center max-w-3xl mx-auto pt-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Our Company
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're on a mission to transform how businesses operate through innovative technology solutions and exceptional customer service.
              </p>
            </section>

            <section className="max-w-5xl mx-auto bg-white p-12 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 20XX, our company has been at the forefront of digital transformation, helping businesses of all sizes achieve their goals.
                </p>
                <p>
                  We believe in the power of technology to solve real-world problems and create meaningful impact for our customers and their communities.
                </p>
                <p>
                  Today, we serve thousands of customers worldwide, constantly innovating and evolving our platform to meet the changing needs of modern business.
                </p>
              </div>
            </section>

            <section className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-4"></div>
                    <h3 className="font-semibold text-lg">Team Member {i}</h3>
                    <p className="text-gray-600 text-sm">Position Title</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );
      
      case 'contact':
        return (
          <div className={`space-y-16 ${fadeInClass} ${transitionClass} pb-20`}>
            <section className="text-center max-w-3xl mx-auto pt-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h1>
              <p className="text-lg text-gray-600">
                Have questions? We'd love to hear from you.
              </p>
            </section>

            <section className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Tell us how we can help..."></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Send Message
                </button>
              </div>
            </section>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
      {/* Navigation */}
      <nav className="bg-blue-600 border-b border-blue-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-20 relative">
            {/* Logo - Always on the left */}
            <button 
              onClick={() => handleTabChange('home')}
              className="flex items-center hover:opacity-80 transition-all absolute left-0"
            >
              <div className="w-12 h-12 bg-white rounded-lg"></div>
              <span className="ml-3 text-2xl font-bold text-white">Laptop Ship</span>
            </button>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center space-x-10 mx-auto">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={`text-lg font-semibold transition-all ${
                    activeTab === item.id
                      ? 'text-white font-bold'
                      : 'text-blue-100 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-4 absolute right-0">
              <button 
                onClick={() => setShowSignIn(true)}
                className="border-2 border-white text-white px-7 py-2.5 rounded-full text-base font-semibold hover:bg-white hover:text-blue-600 transition-all"
              >
                Log in
              </button>
              <button 
                onClick={() => handleTabChange('home')}
                className="bg-blue-500 text-white px-7 py-2.5 rounded-full text-base font-semibold hover:bg-blue-400 transition-all"
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white absolute right-4"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-blue-700 bg-blue-600">
            <div className="px-4 py-4 space-y-3">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    handleTabChange(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition ${
                    activeTab === item.id
                      ? 'bg-blue-700 text-white'
                      : 'text-blue-100 hover:bg-blue-700 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => {
                  setShowSignIn(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-800 transition-all"
              >
                Log In
              </button>
              <button 
                onClick={() => {
                  handleTabChange('home');
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-400 transition-all"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="relative">
        {/* White background for hero */}
        <div className="bg-white">
          {activeTab === 'home' && (
            <div className={`${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'} transition-all duration-500 ease-out`}>
              {/* Hero Section - Full Screen */}
              <section className="min-h-[95vh] flex items-center pt-40 pb-60">
                <div className="grid md:grid-cols-2 gap-40 items-center max-w-7xl mx-auto px-1 w-full">
                  <div className="pl-8">
                    <h1 className="text-7xl md:text-8xl font-bold text-gray-900 mb-12 leading-tight">
                      Automate recovering your devices.
                    </h1>
                    <p className="text-3xl md:text-4xl text-gray-700 mb-16 leading-relaxed">
                      We bring your devices safely back aboard
                    </p>
                    <button className="bg-blue-600 text-white px-16 py-6 rounded-full font-semibold hover:bg-blue-700 transition-all text-3xl uppercase tracking-wide shadow-lg hover:shadow-xl">
                      GET STARTED
                    </button>
                  </div>
                  
                  {/* Hero Image Placeholder */}
                  <div className="relative pr-8">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl h-[550px] md:h-[600px] flex items-center justify-center shadow-lg">
                      <div className="text-gray-400 text-lg">Hero Illustration</div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>
        
        {/* Light blue background for rest of content */}
        <div className="bg-blue-50">
          {renderContent()}
        
          {/* CTA section */}
          {activeTab === 'home' && (
            <section className="max-w-5xl mx-auto py-20 px-4">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
                  Final call-to-action message encouraging users to take the next step.
                </p>
                <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all text-lg shadow-lg">
                  GET STARTED
                </button>
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Sign In Modal */}
      {showSignIn && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn" 
          onClick={() => {
            setShowSignIn(false);
            setSignInError('');
            setSignInEmail('');
            setSignInPassword('');
          }}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-slideUp" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => {
                setShowSignIn(false);
                setSignInError('');
                setSignInEmail('');
                setSignInPassword('');
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h2>
              <p className="text-gray-600">Sign in to your account to continue</p>
            </div>

            {signInError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 animate-slideUp">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">
                  !
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-red-900 mb-1">Sign In Error</p>
                  <p className="text-sm text-red-700">{signInError}</p>
                </div>
                <button 
                  onClick={() => setSignInError('')}
                  className="flex-shrink-0 text-red-400 hover:text-red-600 transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            <form onSubmit={handleSignIn} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input 
                  type="email"
                  value={signInEmail}
                  onChange={(e) => setSignInEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition" 
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                <input 
                  type="password"
                  value={signInPassword}
                  onChange={(e) => setSignInPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition" 
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600" />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-800 transition">Forgot password?</a>
              </div>

              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                Sign In
              </button>

              <div className="text-center text-sm text-gray-600">
                Don't have an account? 
                <button 
                  type="button"
                  onClick={() => {
                    setShowSignIn(false);
                    setShowSignUp(true);
                    setSignInError('');
                    setSignInEmail('');
                    setSignInPassword('');
                  }}
                  className="text-blue-600 font-semibold hover:text-blue-800 transition ml-1"
                >
                  Create one
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignUp && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn" 
          onClick={() => setShowSignUp(false)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-slideUp" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowSignUp(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Create account</h2>
              <p className="text-gray-600">Get started with Laptop Ship today</p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition" 
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition" 
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition" 
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
                <div className="relative">
                  <input 
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`w-full px-4 py-3 pr-12 border rounded-lg focus:outline-none focus:ring-2 transition ${
                      confirmPassword && password !== confirmPassword 
                        ? 'border-red-500 focus:ring-red-600' 
                        : 'border-gray-300 focus:ring-blue-600 focus:border-transparent'
                    }`}
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {confirmPassword && password !== confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">Passwords do not match</p>
                )}
              </div>

              <div className="text-xs text-gray-600">
                By creating an account, you agree to our 
                <a href="#" className="text-blue-600 hover:text-blue-800 transition ml-1">Terms of Service</a> and 
                <a href="#" className="text-blue-600 hover:text-blue-800 transition ml-1">Privacy Policy</a>
              </div>

              <button 
                disabled={!password || password !== confirmPassword}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
              >
                Create Account
              </button>

              <div className="text-center text-sm text-gray-600">
                Already have an account? 
                <button 
                  onClick={() => {
                    setShowSignUp(false);
                    setShowSignIn(true);
                  }}
                  className="text-blue-600 font-semibold hover:text-blue-800 transition ml-1"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
            {/* Logo and Description */}
            <div className="max-w-md">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
                <span className="ml-2 font-bold text-lg">Laptop Ship</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building the future of business operations.
              </p>
            </div>

            {/* Links - Horizontal Layout */}
            <div className="flex flex-wrap gap-12">
              {/* Product Links */}
              <div>
                <h3 className="font-semibold mb-4 text-base">Product</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition">Features</a></li>
                  <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h3 className="font-semibold mb-4 text-base">Company</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition">About</a></li>
                  <li><a href="#" className="hover:text-white transition">Contact</a></li>
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h3 className="font-semibold mb-4 text-base">Resources</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition">Support</a></li>
                  <li><a href="#" className="hover:text-white transition">API</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-6">
            <div className="text-center text-sm text-gray-400">
              <p>© 2026 Laptop Ship. All rights reserved.</p>
              <p className="mt-2">
                <a href="#" className="hover:text-white transition">Terms & Privacy</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}