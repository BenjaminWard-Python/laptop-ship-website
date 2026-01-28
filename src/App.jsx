import React, { useState } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

export default function SaaSWebsiteTemplate() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [isAnimating, setIsAnimating] = useState(false);

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
    { name: 'Solutions', id: 'solutions' },
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
          <div className={`space-y-24 ${fadeInClass} ${transitionClass}`}>
            {/* Hero Section */}
            <section className="text-center max-w-4xl mx-auto pt-20 pb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Transform Your Business Operations
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Streamline workflows, enhance productivity, and scale your business with our comprehensive platform solution.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all flex items-center gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-500 transition-all">
                  Watch Demo
                </button>
              </div>
            </section>

            {/* Features Grid */}
            <section className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4"></div>
                    <h3 className="text-xl font-semibold mb-2">Feature {i}</h3>
                    <p className="text-gray-600">
                      Powerful functionality designed to help your team work smarter and faster.
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-12 text-center max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of companies already using our platform.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
                Let us handle it
              </button>
            </section>
          </div>
        );
      
      case 'solutions':
        return (
          <div className={`space-y-16 ${fadeInClass} ${transitionClass}`}>
            <section className="text-center max-w-3xl mx-auto pt-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Solutions for Every Need
              </h1>
              <p className="text-lg text-gray-600">
                Tailored solutions designed to meet the unique challenges of your industry.
              </p>
            </section>

            <section className="max-w-5xl mx-auto space-y-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-full md:w-1/3 h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg"></div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Solution {i}</h3>
                    <p className="text-gray-600 mb-4">
                      Comprehensive approach to solving complex business challenges with innovative technology and proven methodologies.
                    </p>
                    <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-1 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </section>
          </div>
        );
      
      case 'features':
        return (
          <div className={`space-y-16 ${fadeInClass} ${transitionClass}`}>
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
          <div className={`space-y-16 ${fadeInClass} ${transitionClass}`}>
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

            {/* Enterprise Pricing Table */}
            <section className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Enterprise Pricing & Billing</h2>
                <p className="text-gray-600">
                  Our Enterprise plan is designed to offer maximum flexibility and cost efficiency for businesses handling multiple operations.
                </p>
                <p className="text-gray-700 font-semibold mt-4">
                  We have a minimum of 10 prepaid operations to open your Enterprise account.
                </p>
                <p className="text-gray-600">
                  Prepay for a batch of 10 - 250+ operations at the following rates:
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-blue-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Service A</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Service B</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Service C</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Service D</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-900 font-medium">10 or more</td>
                        <td className="px-6 py-4 text-gray-700">$XX/use</td>
                        <td className="px-6 py-4 text-gray-700">$XX/use</td>
                        <td className="px-6 py-4 text-gray-700">$XX/use</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-900 font-medium">50 or more</td>
                        <td className="px-6 py-4 text-gray-700">$XX/use</td>
                        <td className="px-6 py-4 text-gray-700">$XX/use</td>
                        <td className="px-6 py-4 text-gray-700">$XX/use</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-900 font-medium">250 or more</td>
                        <td className="px-6 py-4 text-gray-700">$XX/use</td>
                        <td className="px-6 py-4 text-gray-700">-</td>
                        <td className="px-6 py-4 text-gray-700">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="text-center mt-8">
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-800 transition-all inline-flex items-center gap-2">
                  Learn more about our Enterprise solutions <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </section>
          </div>
        );
      
      case 'about':
        return (
          <div className={`space-y-16 ${fadeInClass} ${transitionClass}`}>
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
          <div className={`space-y-16 ${fadeInClass} ${transitionClass}`}>
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
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-blue-600 border-b border-blue-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button 
              onClick={() => handleTabChange('home')}
              className="flex items-center hover:opacity-80 transition-all"
            >
              <div className="w-10 h-10 bg-white rounded-lg"></div>
              <span className="ml-3 text-xl font-bold text-white">Company</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={`text-sm font-medium transition-all ${
                    activeTab === item.id
                      ? 'text-white font-bold'
                      : 'text-blue-100 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Spacer for balance */}
            <div className="hidden md:block w-32"></div>

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
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800 transition-all">
                Sign In
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
                <span className="ml-2 font-bold">Company</span>
              </div>
              <p className="text-gray-400 text-sm">
                Building the future of business operations.
              </p>
            </div>
            {['Product', 'Company', 'Resources'].map((section) => (
              <div key={section}>
                <h3 className="font-semibold mb-4">{section}</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition">Link One</a></li>
                  <li><a href="#" className="hover:text-white transition">Link Two</a></li>
                  <li><a href="#" className="hover:text-white transition">Link Three</a></li>
                  <li><a href="#" className="hover:text-white transition">Link Four</a></li>
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}