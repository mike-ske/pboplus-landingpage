import React, { useState, useEffect } from 'react';
import { GraduationCap, Clock, CheckCircle, Users, TrendingUp, Award, Home, Globe, Star, Shield } from 'lucide-react';

const PWANLandingPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: ''
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set target date for September 6th, 2025 at 4 PM
  const targetDate = new Date('2025-09-06T16:00:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would integrate with GetResponse API
    console.log('Form submitted:', formData);
    // Redirect to WhatsApp funnel with the provided number
    const whatsappMessage = encodeURIComponent(`Hello! I just registered for the PWAN Real Estate Training. Name: ${formData.firstName} ${formData.lastName}, Email: ${formData.email}, Phone: ${formData.phone}, City: ${formData.city}`);
    window.open(`https://wa.me/2349121238987?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold">PWAN MAX GROUP</h1>
          <p className="text-sm">Nigeria's Leading Real Estate Company</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-blue-600 mb-6 leading-tight tracking-tight">
                ATTENTION GRADUATES!!
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-8 leading-tight">
                PORT-HARCOURT, ASABA & LAGOS RESIDENTS ONLY
              </h2>
            </div>
            
            {/* Graduate Image */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                {/* Placeholder for graduate lady image - replace with actual image */}
                <div className="flex items-center justify-center relative overflow-hidden">
                 
                  <div className="relative z-10 text-center">
                    <img src="https://res.cloudinary.com/drgk8rmny/image/upload/e_background_removal/f_png/v1754974477/depositphotos_366840728-stock-photo-happy-graduate-girl-diploma-shows_noie47.webp" 
                        alt="Graduate Lady" 
                        className="w-full h-full object-cover " />
                  </div>
                </div>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 mb-8 mx-auto max-w-2xl shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 mr-3" />
                <h3 className="text-2xl md:text-3xl font-bold">TRAINING STARTS IN:</h3>
              </div>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="bg-white text-red-600 p-4 shadow-md">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-black">{timeLeft.days}</div>
                  <div className="text-sm md:text-base font-semibold mt-1">DAYS</div>
                </div>
                <div className="bg-white text-red-600 p-4 shadow-md">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-black">{timeLeft.hours}</div>
                  <div className="text-sm md:text-base font-semibold mt-1">HOURS</div>
                </div>
                <div className="bg-white text-red-600 p-4 shadow-md">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-black">{timeLeft.minutes}</div>
                  <div className="text-sm md:text-base font-semibold mt-1">MINS</div>
                </div>
                <div className="bg-white text-red-600 p-4 shadow-md">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-black">{timeLeft.seconds}</div>
                  <div className="text-sm md:text-base font-semibold mt-1">SECS</div>
                </div>
              </div>
            </div>
            
            <div className="bg-red-50 border-2 border-red-600 p-6 mb-6 shadow-md">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-red-600 mr-2" />
                <p className="text-red-600 font-bold text-xl">
                  For Verified & Qualified Graduates Only...
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Award className="w-6 h-6 text-red-600 mr-2" />
                <p className="text-red-600 font-black text-2xl">
                  OFFER ENDS: SOON
                </p>
              </div>
            </div>
          </div>

          {/* Problem Statement */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-600 p-8 mb-8 shadow-lg">
            <h3 className="text-3xl md:text-4xl font-black text-red-600 mb-6 text-center leading-tight">
              We heard that you have been looking for a job for the past 5 years in the city of Port Harcourt, Asaba or Lagos and we decided to let you in on this job OPPORTUNITY!
            </h3>
            
            <div className="text-center mb-8">
              <div className="inline-block border-blue-200">
                <div className="flex items-center justify-center relative overflow-hidden">
                 
                  <div className="relative z-10 text-center">
                    <img src="https://res.cloudinary.com/drgk8rmny/image/upload/v1754974942/838ff323-ce13-4aad-891d-ed4de0e4846e_nqzg2i.jpg" 
                        alt="Graduate Lady" 
                        className="w-full h-full object-cover " />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-blue-800 text-xl md:text-2xl text-center leading-relaxed font-medium">
              You are <span className="text-red-600 font-black">Male or Female</span>, You have spent 5 to 7 years in a higher <span className="text-red-600 font-black">institution</span>, you have a higher <span className="text-red-600 font-black">institution degree</span> and <span className="text-red-600 font-black">NYSC certificate</span>, but you don't have a job and you can't put food on the table, you can't help your family and siblings even after they paid your way through <span className="text-red-600 font-black">school</span>.
            </p>
          </div>

          {/* Solution Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-600 mb-6">
                THE BIGGEST, MOST EDUCATIONAL, AND MOTIVATIONAL ONLINE REAL ESTATE TRAINING EVER IN NIGERIA!
              </h2>
              
              <div className="space-y-6 text-gray-800">
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-blue-600 mr-3" />
                  <p className="font-bold text-lg">
                    <span className="text-blue-600">Training Date:</span> Saturday, September 6th, 2025 at 4 PM
                  </p>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-blue-600 mr-3" />
                  <p className="font-bold text-lg">
                    <span className="text-blue-600">Registration Period:</span> August 1st - August 31st, 2025
                  </p>
                </div>
                <p className="text-lg leading-relaxed">
                  Join <span className="text-red-600 font-black">PWAN™️</span> - Nigeria's biggest real estate company and become a member of <span className="text-red-600 font-black">PBO+</span> - the largest realtors group in the world.
                </p>
                <p className="text-lg leading-relaxed">
                  Founded by <span className="text-blue-600 font-black">Dr. Augustine Onwumere</span> in 2012 - a true grass-to-grace story of building an indigenous business empire.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-black text-red-600 mb-6 flex items-center">
                  <TrendingUp className="w-8 h-8 mr-3" />
                  What You Get:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">Own Your Business Without Huge Startup Costs</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">Unlimited Earning Potential</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">Access to High-Value Properties</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">Network with Like-Minded People</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">Incentives, Rewards & International Trips</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">Complete Training & Mentorship</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">Be Your Own Boss - Flexible Work</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">Build Passive Income Streams</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 border-4 border-red-600 p-8 shadow-xl">
              <div className="text-center mb-8">
                <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-3xl font-black text-red-600 mb-2">
                  REGISTER NOW - FREE!
                </h3>
                <p className="text-red-700 font-semibold">Join thousands of successful graduates</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-blue-800 font-semibold mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border-2 border-blue-300 focus:outline-none focus:border-blue-600 text-lg font-medium shadow-sm transition-all duration-200 hover:shadow-md"
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div>
                  <label className="block text-blue-800 font-semibold mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border-2 border-blue-300 focus:outline-none focus:border-blue-600 text-lg font-medium shadow-sm transition-all duration-200 hover:shadow-md"
                    placeholder="Enter your last name"
                  />
                </div>
                
                <div>
                  <label className="block text-blue-800 font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border-2 border-blue-300 focus:outline-none focus:border-blue-600 text-lg font-medium shadow-sm transition-all duration-200 hover:shadow-md"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-blue-800 font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border-2 border-blue-300 focus:outline-none focus:border-blue-600 text-lg font-medium shadow-sm transition-all duration-200 hover:shadow-md"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-blue-800 font-semibold mb-2">City *</label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border-2 border-blue-300 focus:outline-none focus:border-blue-600 text-lg font-medium shadow-sm transition-all duration-200 hover:shadow-md"
                  >
                    <option value="">Select Your City</option>
                    <option value="Port Harcourt">Port Harcourt</option>
                    <option value="Asaba">Asaba</option>
                    <option value="Lagos">Lagos</option>
                  </select>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-black py-5 px-8 hover:from-red-700 hover:to-red-800 text-xl shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  REGISTER FOR FREE TRAINING NOW!
                </button>
                
                <p className="text-sm text-blue-800 text-center mt-4">
                  After registration, you'll be added to our WhatsApp group for updates
                </p>
              </form>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-600 p-10 mb-12 shadow-xl">
            <div className="text-center mb-12">
              <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-4xl md:text-5xl font-black text-red-600 mb-4">
                20 BENEFITS OF JOINING PBO PLUS REALTORS GROUP
              </h2>
              <p className="text-blue-800 text-xl font-semibold">Transform your career with these exclusive advantages</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start bg-white p-6 shadow-md border-l-4 border-blue-600">
                  <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center font-black text-lg mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-black text-blue-800 text-lg mb-2">Own Your Business Without Huge Startup Costs</h4>
                    <p className="text-blue-700">No office rent, no big capital needed.</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-6 shadow-md border-l-4 border-red-600">
                  <div className="bg-red-600 text-white w-10 h-10 flex items-center justify-center font-black text-lg mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-black text-blue-800 text-lg mb-2">Make Homeownership Dreams Come True</h4>
                    <p className="text-blue-700">Help Nigerians own affordable, fast-developing land.</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 shadow-md border-l-4 border-blue-600">
                  <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center font-black text-lg mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-black text-blue-800 text-lg mb-2">Unlimited Earning Potential</h4>
                    <p className="text-blue-700">Your income grows as you sell more and recruit others.</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 shadow-md border-l-4 border-red-600">
                  <div className="bg-red-600 text-white w-10 h-10 flex items-center justify-center font-black text-lg mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-black text-blue-800 text-lg mb-2">Access to High-Value Properties</h4>
                    <p className="text-blue-700">Sell in fast-developing Nigerian locations.</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 shadow-md border-l-4 border-blue-600">
                  <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center font-black text-lg mr-4 flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="font-black text-blue-800 text-lg mb-2">Network with Like-Minded People</h4>
                    <p className="text-blue-700">Connect with successful professionals and mentors.</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 shadow-md border-l-4 border-red-600">
                  <div className="bg-red-600 text-white w-10 h-10 flex items-center justify-center font-black text-lg mr-4 flex-shrink-0">
                    6
                  </div>
                  <div>
                    <h4 className="font-black text-blue-800 text-lg mb-2">Incentives That Reward Your Hustle</h4>
                    <p className="text-blue-700">Cash rewards, shopping vouchers, international trips, and cars.</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 shadow-md border-l-4 border-blue-600">
                  <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center font-black text-lg mr-4 flex-shrink-0">
                    7
                  </div>
                  <div>
                    <h4 className="font-black text-blue-800 text-lg mb-2">Empowerment Programs</h4>
                    <p className="text-blue-700">Hands-on training, mentorship, and resources.</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 shadow-md border-l-4 border-red-600">
                  <div className="bg-red-600 text-white w-10 h-10 flex items-center justify-center font-black text-lg mr-4 flex-shrink-0">
                    8
                  </div>
                  <div>
                    <h4 className="font-black text-blue-800 text-lg mb-2">Affordable and Accessible Entry</h4>
                    <p className="text-blue-700">Designed for everyday Nigerians.</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 shadow-md border-l-4 border-blue-600">
                  <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center font-black text-lg mr-4 flex-shrink-0">
                    9
                  </div>
                  <div>
                    <h4 className="font-black text-blue-800 text-lg mb-2">Gain Recognition and Rewards</h4>
                    <p className="text-blue-700">Stand out as a professional realtor.</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 shadow-md border-l-4 border-red-600">
                  <div className="bg-red-600 text-white w-10 h-10 flex items-center justify-center font-black text-lg mr-4 flex-shrink-0">
                    10
                  </div>
                  <div>
                    <h4 className="font-black text-blue-800 text-lg mb-2">Leverage a Reputable Brand</h4>
                    <p className="text-blue-700">PWAN Max Group is trusted across Nigeria.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start bg-white p-6 shadow-md border-l-4 border-blue-600">
                  <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center font-black text-lg mr-4 flex-shrink-0">
                    11
                  </div>
                  <div>
                    <h4 className="font-black text-blue-800 text-lg mb-2">Contribute to Nigeria's Growth</h4>
                    <p className="text-blue-700">Play a key role in developing communities.</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 shadow-md border-l-4 border-red-600">
                  <div className="bg-red-600 text-white w-10 h-10 flex items-center justify-center font-black text-lg mr-4 flex-shrink-0">
                    12
                  </div>
                  <div>
                    <h4 className="font-black text-blue-800 text-lg mb-2">A Business You Can Pass On</h4>
                    <p className="text-blue-700">Build a team and income stream for generations.</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 shadow-md border-l-4 border-blue-600">
                  <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center font-black text-lg mr-4 flex-shrink-0">
                    13
                  </div>
                  <div>
                    <h4 className="font-black text-blue-800 text-lg mb-2">Cater to Diaspora Nigerians</h4>
                    <p className="text-blue-700">Help Nigerians abroad invest back home.</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 shadow-md border-l-4 border-red-600">
                  <div className="bg-red-600 text-white w-10 h-10 flex items-center justify-center font-black text-lg mr-4 flex-shrink-0">
                    14
                  </div>
                  <div>
                    <h4 className="font-black text-blue-800 text-lg mb-2">Promotions and Career Growth</h4>
                    <p className="text-blue-700">Advance through ranks with tangible rewards.</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 shadow-md border-l-4 border-blue-600">
                  <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center font-black text-lg mr-4 flex-shrink-0">
                    15
                  </div>
                  <div>
                    <h4 className="font-black text-blue-800 text-lg mb-2">Flexible Work Schedule</h4>
                    <p className="text-blue-700">Work when you want, where you want.</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 shadow-md border-l-4 border-red-600">
                  <div className="bg-red-600 text-white w-10 h-10 flex items-center justify-center font-black text-lg mr-4 flex-shrink-0">
                    16
                  </div>
                  <div>
                    <h4 className="font-black text-blue-800 text-lg mb-2">Multiple Income Streams</h4>
                    <p className="text-blue-700">Earn from sales, team building, and more.</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 shadow-md border-l-4 border-blue-600">
                  <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center font-black text-lg mr-4 flex-shrink-0">
                    17
                  </div>
                  <div>
                    <h4 className="font-black text-blue-800 text-lg mb-2">Financial Freedom</h4>
                    <p className="text-blue-700">Potential to earn beyond traditional salaries.</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 shadow-md border-l-4 border-red-600">
                  <div className="bg-red-600 text-white w-10 h-10 flex items-center justify-center font-black text-lg mr-4 flex-shrink-0">
                    18
                  </div>
                  <div>
                    <h4 className="font-black text-blue-800 text-lg mb-2">Personal Development</h4>
                    <p className="text-blue-700">Grow your skills in sales, marketing, and negotiation.</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 shadow-md border-l-4 border-blue-600">
                  <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center font-black text-lg mr-4 flex-shrink-0">
                    19
                  </div>
                  <div>
                    <h4 className="font-black text-blue-800 text-lg mb-2">Community Impact</h4>
                    <p className="text-blue-700">Help people secure their family's future.</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 shadow-md border-l-4 border-red-600">
                  <div className="bg-red-600 text-white w-10 h-10 flex items-center justify-center font-black text-lg mr-4 flex-shrink-0">
                    20
                  </div>
                  <div>
                    <h4 className="font-black text-blue-800 text-lg mb-2">Legacy Building</h4>
                    <p className="text-blue-700">Create wealth that lasts beyond your lifetime.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mb-12">
            <h2 className="text-4xl font-black text-center text-red-600 mb-12">
              SUCCESS STORIES FROM OUR GRADUATES
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 shadow-lg border-t-4 border-blue-600">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">John D.</h4>
                    <p className="text-blue-600">Port Harcourt</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "After 3 years of job hunting, I joined PWAN and made ₦1.2M in my first month! This changed my life completely."
                </p>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-white p-6 shadow-lg border-t-4 border-red-600">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Chioma K.</h4>
                    <p className="text-red-600">Lagos</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "I was skeptical at first, but within 6 months I built a team of 25 and now earn passive income every month."
                </p>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-white p-6 shadow-lg border-t-4 border-blue-600">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Emeka O.</h4>
                    <p className="text-blue-600">Asaba</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "The training was exceptional. I went from zero real estate knowledge to closing 3 deals in my first month!"
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-10 text-center mb-12 shadow-xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              DON'T MISS THIS LIFE-CHANGING OPPORTUNITY!
            </h2>
            <p className="text-xl mb-8">
              Limited slots available. Register now to secure your spot in the training.
            </p>
            <a 
              href="#registration" 
              className="inline-block bg-white text-red-600 font-black py-4 px-8 text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              REGISTER NOW - FREE!
            </a>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-4xl font-black text-center text-blue-600 mb-12">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            
            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <div className="bg-white p-6 shadow-md border-l-4 border-blue-600">
                <h4 className="font-bold text-xl text-blue-800 mb-2">
                  Is there any cost to join the training?
                </h4>
                <p className="text-gray-700">
                  No, the initial training is completely free. We only ask for your commitment to learn and apply what you're taught.
                </p>
              </div>
              
              {/* FAQ Item 2 */}
              <div className="bg-white p-6 shadow-md border-l-4 border-red-600">
                <h4 className="font-bold text-xl text-blue-800 mb-2">
                  Do I need real estate experience?
                </h4>
                <p className="text-gray-700">
                  Not at all! Our training is designed for complete beginners. We'll teach you everything you need to know.
                </p>
              </div>
              
              {/* FAQ Item 3 */}
              <div className="bg-white p-6 shadow-md border-l-4 border-blue-600">
                <h4 className="font-bold text-xl text-blue-800 mb-2">
                  How soon can I start making money?
                </h4>
                <p className="text-gray-700">
                  Many of our graduates make their first sale within their first month. Your results will depend on how quickly you apply what you learn.
                </p>
              </div>
              
              {/* FAQ Item 4 */}
              <div className="bg-white p-6 shadow-md border-l-4 border-red-600">
                <h4 className="font-bold text-xl text-blue-800 mb-2">
                  What if I can't attend the live training?
                </h4>
                <p className="text-gray-700">
                  We'll provide recordings to all registered participants, but we highly recommend attending live for the full experience.
                </p>
              </div>
            </div>
          </div>

          {/* Final Registration Form */}
          <div id="registration" className="bg-gradient-to-br from-blue-50 to-blue-100 border-4 border-blue-600 p-10 shadow-xl mb-12">
            <div className="text-center mb-8">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-black text-blue-600 mb-2">
                READY TO TRANSFORM YOUR LIFE?
              </h3>
              <p className="text-blue-700 font-semibold">Register now for the FREE training</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-blue-800 font-semibold mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border-2 border-blue-300 focus:outline-none focus:border-blue-600 text-lg font-medium shadow-sm"
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div>
                  <label className="block text-blue-800 font-semibold mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border-2 border-blue-300 focus:outline-none focus:border-blue-600 text-lg font-medium shadow-sm"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-blue-800 font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border-2 border-blue-300 focus:outline-none focus:border-blue-600 text-lg font-medium shadow-sm"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-blue-800 font-semibold mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border-2 border-blue-300 focus:outline-none focus:border-blue-600 text-lg font-medium shadow-sm"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="block text-blue-800 font-semibold mb-2">City *</label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border-2 border-blue-300 focus:outline-none focus:border-blue-600 text-lg font-medium shadow-sm"
                >
                  <option value="">Select Your City</option>
                  <option value="Port Harcourt">Port Harcourt</option>
                  <option value="Asaba">Asaba</option>
                  <option value="Lagos">Lagos</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-black py-5 px-8 hover:from-red-700 hover:to-red-800 text-xl shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                YES! I WANT TO TRANSFORM MY LIFE!
              </button>
              
              <p className="text-sm text-blue-800 text-center mt-4">
                By registering, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">PWAN MAX GROUP</h3>
              <p className="text-blue-200">Nigeria's Leading Real Estate Company</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Globe className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Home className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-300">
            <p>© {new Date().getFullYear()} PWAN Max Group. All Rights Reserved.</p>
            <p className="mt-2 text-sm">
              Disclaimer: Results may vary based on individual effort and commitment.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PWANLandingPage;