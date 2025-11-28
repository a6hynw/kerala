import React, { useState, useEffect } from 'react';
import { Brain, Cpu, Users, Rocket, ChevronRight, Globe, Award, Code, Zap, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const API_URL = 'http://localhost:5000/api';

export default function KeralaAICampaign() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('vision');
  const [formData, setFormData] = useState({ name: '', email: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Fetch team members from backend
    fetch(`${API_URL}/team`)
      .then(res => res.json())
      .catch(err => console.log('Backend not running yet:', err));
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', interest: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 md:space-x-3">
              <Brain className="w-6 md:w-8 h-6 md:h-8 text-purple-400" />
              <span className="text-lg md:text-2xl font-bold text-white">Kerala<span className="text-purple-400">AI</span></span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              <a href="#vision" className="text-sm lg:text-base text-gray-300 hover:text-purple-400 transition">Vision</a>
              <a href="#initiatives" className="text-sm lg:text-base text-gray-300 hover:text-purple-400 transition">Initiatives</a>
              <a href="#ecosystem" className="text-sm lg:text-base text-gray-300 hover:text-purple-400 transition">Ecosystem</a>
              <a href="#join" className="text-sm lg:text-base text-gray-300 hover:text-purple-400 transition">Join Us</a>
            </nav>

            {/* Desktop Button & Mobile Menu Button */}
            <div className="flex items-center gap-2 md:gap-4">
              <button className="hidden sm:inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-medium hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105">
                Get Started
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-300 hover:text-white transition"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pt-4 border-t border-white/10 space-y-3 pb-4">
              <a href="#vision" className="block text-gray-300 hover:text-purple-400 transition py-2" onClick={() => setMobileMenuOpen(false)}>Vision</a>
              <a href="#initiatives" className="block text-gray-300 hover:text-purple-400 transition py-2" onClick={() => setMobileMenuOpen(false)}>Initiatives</a>
              <a href="#ecosystem" className="block text-gray-300 hover:text-purple-400 transition py-2" onClick={() => setMobileMenuOpen(false)}>Ecosystem</a>
              <a href="#join" className="block text-gray-300 hover:text-purple-400 transition py-2" onClick={() => setMobileMenuOpen(false)}>Join Us</a>
              <button className="w-full sm:hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-purple-500/50 transition mt-3">
                Get Started
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Kerala's AI
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Revolution
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 md:mb-8 px-2">
              Transforming God's Own Country into India's AI Innovation Hub. Building a future-ready ecosystem where technology meets tradition.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-2">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition transform hover:scale-105 flex items-center justify-center">
                Explore Opportunities
                <ChevronRight className="ml-2 w-4 md:w-5 h-4 md:h-5" />
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-lg font-semibold hover:bg-white/20 transition border border-white/20">
                Learn More
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-20">
            {[
              { number: '100+', label: 'AI Startups', icon: Rocket },
              { number: '50K+', label: 'Tech Professionals', icon: Users },
              { number: '₹500Cr+', label: 'Investment Fund', icon: Award },
              { number: '25+', label: 'Innovation Hubs', icon: Globe }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/10 hover:bg-white/10 transition transform hover:scale-105">
                <stat.icon className="w-6 md:w-8 h-6 md:h-8 text-purple-400 mb-2 md:mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-400 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">Our Vision</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-2">
              Positioning Kerala as a global leader in AI innovation and ethical technology development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Brain,
                title: 'AI Research Excellence',
                description: 'World-class research centers collaborating with global institutions to advance AI technology'
              },
              {
                icon: Users,
                title: 'Talent Development',
                description: 'Comprehensive training programs to create 100,000 AI-ready professionals by 2030'
              },
              {
                icon: Rocket,
                title: 'Startup Ecosystem',
                description: 'Incubation support, funding, and mentorship for AI-driven entrepreneurship'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/10 hover:border-purple-400/50 transition transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                  <item.icon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section id="initiatives" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 md:mb-12">Key Initiatives</h2>
          
          <div className="bg-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl border border-white/10 overflow-hidden">
            <div className="flex flex-col sm:flex-row border-b border-white/10">
              {['vision', 'education', 'infrastructure'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-4 md:px-6 py-3 md:py-4 font-semibold text-sm md:text-base transition border-b-2 sm:border-b-0 sm:border-r sm:last:border-r-0 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white border-purple-500'
                      : 'text-gray-400 hover:text-white border-transparent'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            
            <div className="p-6 md:p-8">
              {activeTab === 'vision' && (
                <div className="space-y-4 md:space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">AI for Social Good</h3>
                  <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
                    Leveraging AI to solve Kerala's unique challenges in healthcare, agriculture, education, and disaster management. Our initiatives focus on ethical AI development that benefits all sections of society.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-6">
                    {['Healthcare AI', 'Smart Agriculture', 'Digital Education', 'Climate Tech'].map((item, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg md:rounded-xl p-3 md:p-4 border border-white/10 flex items-center">
                        <Zap className="w-4 md:w-5 h-4 md:h-5 text-purple-400 mr-2 md:mr-3 flex-shrink-0" />
                        <span className="text-white text-sm md:text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'education' && (
                <div className="space-y-4 md:space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">AI Education Programs</h3>
                  <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
                    Comprehensive AI curriculum from school level to advanced research. Partnering with top institutions to offer certifications, bootcamps, and degree programs in AI and machine learning.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-6">
                    {['School AI Labs', 'University Partnerships', 'Industry Certifications', 'Research Fellowships'].map((item, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg md:rounded-xl p-3 md:p-4 border border-white/10 flex items-center">
                        <Code className="w-4 md:w-5 h-4 md:h-5 text-blue-400 mr-2 md:mr-3 flex-shrink-0" />
                        <span className="text-white text-sm md:text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'infrastructure' && (
                <div className="space-y-4 md:space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Tech Infrastructure</h3>
                  <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
                    State-of-the-art AI labs, high-performance computing centers, and innovation hubs across Kerala. Creating a robust digital infrastructure to support AI research and development.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-6">
                    {['AI Innovation Centers', 'Computing Clusters', 'Maker Spaces', '5G Connectivity'].map((item, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg md:rounded-xl p-3 md:p-4 border border-white/10 flex items-center">
                        <Cpu className="w-4 md:w-5 h-4 md:h-5 text-green-400 mr-2 md:mr-3 flex-shrink-0" />
                        <span className="text-white text-sm md:text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">Leadership Team</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-2">
              Visionary leaders driving Kerala's AI transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: 'Dr. Raj Kumar',
                role: 'Director',
                image: '🧑‍💼',
                socials: { github: '#', linkedin: '#', twitter: '#' }
              },
              {
                name: 'Priya Sharma',
                role: 'AI Research Lead',
                image: '👩‍💻',
                socials: { github: '#', linkedin: '#', twitter: '#' }
              },
              {
                name: 'Arjun Nair',
                role: 'Ecosystem Manager',
                image: '🧑‍💼',
                socials: { github: '#', linkedin: '#', twitter: '#' }
              }
            ].map((member, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/10 hover:border-purple-400/50 transition transform hover:scale-105 text-center">
                <div className="text-5xl md:text-6xl mb-3 md:mb-4">{member.image}</div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-semibold text-sm md:text-base mb-4">{member.role}</p>
                <div className="flex justify-center gap-3 md:gap-4">
                  <a href={member.socials.github} className="text-gray-400 hover:text-white transition">
                    <Github className="w-4 md:w-5 h-4 md:h-5" />
                  </a>
                  <a href={member.socials.linkedin} className="text-gray-400 hover:text-white transition">
                    <Linkedin className="w-4 md:w-5 h-4 md:h-5" />
                  </a>
                  <a href={member.socials.twitter} className="text-gray-400 hover:text-white transition">
                    <Twitter className="w-4 md:w-5 h-4 md:h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-12 border border-white/10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">Get In Touch</h2>
            <p className="text-sm sm:text-base md:text-base text-gray-300 mb-6 md:mb-8">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

            {submitted && (
              <div className="mb-6 p-3 md:p-4 bg-green-500/20 border border-green-500/50 rounded-lg md:rounded-xl text-sm md:text-base text-green-200">
                ✓ Thank you! We've received your message. We'll be in touch soon!
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2 text-sm md:text-base">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 text-sm md:text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2 text-sm md:text-base">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 text-sm md:text-base"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white font-semibold mb-2 text-sm md:text-base">Interest</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleFormChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 md:py-3 text-white focus:outline-none focus:border-purple-400 text-sm md:text-base"
                >
                  <option value="">Select your interest</option>
                  <option value="research">AI Research</option>
                  <option value="startup">Startup Support</option>
                  <option value="education">Education Programs</option>
                  <option value="investment">Investment Opportunities</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>
              <div>
                <label className="block text-white font-semibold mb-2 text-sm md:text-base">Message</label>
                <textarea name="message" value={formData.message} onChange={handleFormChange} required rows="4" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 text-sm md:text-base" placeholder="Tell us about your inquiry..."></textarea>
              </div>
              <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition transform hover:scale-105 disabled:opacity-50">
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12">
            {[
              { icon: Mail, title: 'Email', content: 'contact@keralaai.com' },
              { icon: Phone, title: 'Phone', content: '+91 484 2836 8000' },
              { icon: MapPin, title: 'Location', content: 'Kochi, Kerala, India' }
            ].map((info, idx) => (
              <div key={idx} className="bg-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 text-center">
                <info.icon className="w-6 md:w-8 h-6 md:h-8 text-purple-400 mx-auto mb-3 md:mb-4" />
                <h3 className="text-white font-semibold text-sm md:text-base mb-1">{info.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm">{info.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl md:rounded-3xl p-8 md:p-12 text-center shadow-2xl shadow-purple-500/50">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">Join Kerala's AI Journey</h2>
            <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto px-2">
              Be part of the transformation. Whether you're a student, professional, entrepreneur, or investor, there's a place for you in Kerala's AI ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <button className="bg-white text-purple-600 px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-lg font-semibold hover:shadow-2xl transition transform hover:scale-105">Register Now</button>
              <button className="bg-white/20 backdrop-blur-md text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-lg font-semibold hover:bg-white/30 transition border-2 border-white">Partner With Us</button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Brain className="w-6 h-6 text-purple-400" />
                <span className="text-xl font-bold text-white">KeralaAI</span>
              </div>
              <p className="text-gray-400 text-sm">
                Building India's most innovative AI ecosystem in God's Own Country.
              </p>
            </div>
            
            {[
              { title: 'Programs', links: ['AI Training', 'Startup Support', 'Research Grants', 'Internships'] },
              { title: 'Resources', links: ['Documentation', 'Events', 'Blog', 'Community'] },
              { title: 'Connect', links: ['Contact Us', 'Partnerships', 'Careers', 'Media'] }
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="text-white font-semibold mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
            © 2025 Kerala AI Initiative. All rights reserved. | Building the future, together.
          </div>
        </div>
      </footer>
    </div>
  );
}