import React, { useState, useEffect } from 'react';
import { GraduationCap, Clock, CheckCircle, Users, TrendingUp, Award, Home, Globe, Star, Shield, Play, Download } from 'lucide-react';

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
      <header className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-black">PWAN MAX GROUP</h1>
          <p className="text-lg font-semibold">Nigeria's Leading Real Estate Company</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 mb-8 leading-tight tracking-tight drop-shadow-lg">
              INTRODUCING!!!
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-8 leading-tight max-w-6xl mx-auto">
              THE BIGGEST, MOST EDUCATIONAL, AND MOTIVATIONAL ONLINE REAL ESTATE TRAINING EVER IN NIGERIA!
            </h2>
          </div>
          
          {/* Graduate Image */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="flex items-center justify-center relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="relative z-10 text-center">
                  <img src="https://res.cloudinary.com/drgk8rmny/image/upload/e_background_removal/f_png/v1754974477/depositphotos_366840728-stock-photo-happy-graduate-girl-diploma-shows_noie47.webp" 
                      alt="Graduate Success" 
                      className="w-full h-full object-cover max-w-md" />
                </div>
              </div>
            </div>
          </div>

          {/* Registration Period & Training Date */}
          <div className="bg-gradient-to-r from-red-50 to-red-100 border-4 border-red-600 p-8 mb-8 shadow-xl max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center justify-center">
                <Award className="w-8 h-8 text-red-600 mr-3" />
                <div>
                  <p className="text-red-600 font-black text-xl">Registration Period:</p>
                  <p className="text-red-700 font-bold text-lg">August 1st - August 31st, 2025</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="w-8 h-8 text-blue-600 mr-3" />
                <div>
                  <p className="text-blue-600 font-black text-xl">Training Date:</p>
                  <p className="text-blue-700 font-bold text-lg">September 6th, 2025 at 4 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-10 mb-12 mx-auto max-w-4xl shadow-2xl">
            <div className="flex items-center justify-center mb-8">
              <Clock className="w-10 h-10 mr-4" />
              <h3 className="text-3xl md:text-4xl font-black">TRAINING STARTS IN:</h3>
            </div>
            <div className="grid grid-cols-4 gap-6 text-center">
              <div className="bg-white text-red-600 p-6 shadow-xl transform hover:scale-105 transition-all">
                <div className="text-4xl md:text-5xl lg:text-6xl font-black">{timeLeft.days}</div>
                <div className="text-lg font-bold mt-2">DAYS</div>
              </div>
              <div className="bg-white text-red-600 p-6 shadow-xl transform hover:scale-105 transition-all">
                <div className="text-4xl md:text-5xl lg:text-6xl font-black">{timeLeft.hours}</div>
                <div className="text-lg font-bold mt-2">HOURS</div>
              </div>
              <div className="bg-white text-red-600 p-6 shadow-xl transform hover:scale-105 transition-all">
                <div className="text-4xl md:text-5xl lg:text-6xl font-black">{timeLeft.minutes}</div>
                <div className="text-lg font-bold mt-2">MINS</div>
              </div>
              <div className="bg-white text-red-600 p-6 shadow-xl transform hover:scale-105 transition-all">
                <div className="text-4xl md:text-5xl lg:text-6xl font-black">{timeLeft.seconds}</div>
                <div className="text-lg font-bold mt-2">SECS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Value Proposition */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-4 border-blue-600 p-12 mb-16 shadow-2xl">
          <h3 className="text-3xl md:text-5xl font-black text-red-600 mb-8 text-center leading-tight">
            Once you complete this training process, you will become a member of the biggest real estate company in Nigeria, PWAN™️
          </h3>
          
          <div className="text-center mb-10">
            <div className="inline-block">
              <img src="https://res.cloudinary.com/drgk8rmny/image/upload/v1754974942/838ff323-ce13-4aad-891d-ed4de0e4846e_nqzg2i.jpg" 
                  alt="Real Estate Success" 
                  className="w-full h-full object-cover max-w-lg rounded-xl shadow-lg" />
            </div>
          </div>

          <div className="space-y-8 text-center">
            <p className="text-blue-800 text-xl md:text-2xl leading-relaxed font-medium">
              You will also become a member of the <span className="text-red-600 font-black">largest realtors group in the world, PBO+</span>. This gives you the opportunity to connect with a powerful network of people earning <span className="text-red-600 font-black">massive income</span> by simply doing real estate business both in Nigeria and beyond.
            </p>
            
            <p className="text-blue-800 text-lg md:text-xl leading-relaxed">
              Trust me, the experience is second to none. Becoming a <span className="text-red-600 font-black">millionaire or billionaire</span> follows a system, and that system is being introduced to you today by the founder of PWAN, <span className="text-blue-600 font-black">Dr. Augustine Onwumere</span>, who alongside his wife started PWAN 13 years ago in 2012.
            </p>

            <div className="bg-white p-8 shadow-lg border-l-8 border-blue-600 max-w-4xl mx-auto">
              <p className="text-blue-800 text-xl font-bold mb-4">
                It's a true grass-to-grace story - an indigenous business empire built through dedication, consistency, and unwavering commitment!
              </p>
              <p className="text-gray-700 text-lg">
                So, if you want to <span className="text-red-600 font-black">rewrite your story and embrace affluence</span>, you need to attend this life-changing training happening live on Zoom.
              </p>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          
          {/* Left Column - Classic Gold Benefits */}
          <div className="bg-white shadow-2xl p-10 border-t-8 border-blue-600">
            <h2 className="text-3xl font-black text-blue-600 mb-8 flex items-center">
              <Play className="w-10 h-10 mr-4" />
              What You Get When You Upgrade to Classic Gold:
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start bg-blue-50 p-6 shadow-md border-l-4 border-blue-600">
                <div className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center font-black mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">The Founders Speak</h4>
                  <p className="text-blue-700">Introductory message for beginners and professionals</p>
                </div>
              </div>
              
              <div className="flex items-start bg-red-50 p-6 shadow-md border-l-4 border-red-600">
                <div className="bg-red-600 text-white w-8 h-8 flex items-center justify-center font-black mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">Registration & Recruitment Training</h4>
                  <p className="text-blue-700">How to register as a member and recruit new members using your unique link</p>
                </div>
              </div>

              <div className="flex items-start bg-blue-50 p-6 shadow-md border-l-4 border-blue-600">
                <div className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center font-black mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">Landing Page Mastery</h4>
                  <p className="text-blue-700">How to use the landing page to get massive people to join your business</p>
                </div>
              </div>

              <div className="flex items-start bg-red-50 p-6 shadow-md border-l-4 border-red-600">
                <div className="bg-red-600 text-white w-8 h-8 flex items-center justify-center font-black mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">Compensation Plan</h4>
                  <p className="text-blue-700">Complete breakdown of how the compensation plan works</p>
                </div>
              </div>

              <div className="flex items-start bg-blue-50 p-6 shadow-md border-l-4 border-blue-600">
                <div className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center font-black mr-4 flex-shrink-0">
                  5
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">Congratulatory Message</h4>
                  <p className="text-blue-700">Special message upon completion</p>
                </div>
              </div>

              <div className="flex items-start bg-red-50 p-6 shadow-md border-l-4 border-red-600">
                <div className="bg-red-600 text-white w-8 h-8 flex items-center justify-center font-black mr-4 flex-shrink-0 text-xs">
                  <Download className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">Certificate of Completion</h4>
                  <p className="text-blue-700">Downloadable certificate link</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Registration Form */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 border-4 border-red-600 p-10 shadow-2xl">
            <div className="text-center mb-8">
              <Users className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-4xl font-black text-red-600 mb-2">
                REGISTER NOW
              </h3>
              <p className="text-red-700 font-bold text-xl">100% FREE TRAINING</p>
              <p className="text-red-600 font-semibold mt-2">Join thousands of successful entrepreneurs</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-blue-800 font-bold mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 border-2 border-blue-300 focus:outline-none focus:border-blue-600 text-lg font-medium shadow-md transition-all duration-200 hover:shadow-lg"
                  placeholder="Enter your first name"
                />
              </div>
              
              <div>
                <label className="block text-blue-800 font-bold mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 border-2 border-blue-300 focus:outline-none focus:border-blue-600 text-lg font-medium shadow-md transition-all duration-200 hover:shadow-lg"
                  placeholder="Enter your last name"
                />
              </div>
              
              <div>
                <label className="block text-blue-800 font-bold mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 border-2 border-blue-300 focus:outline-none focus:border-blue-600 text-lg font-medium shadow-md transition-all duration-200 hover:shadow-lg"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-blue-800 font-bold mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 border-2 border-blue-300 focus:outline-none focus:border-blue-600 text-lg font-medium shadow-md transition-all duration-200 hover:shadow-lg"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="block text-blue-800 font-bold mb-2">City *</label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 border-2 border-blue-300 focus:outline-none focus:border-blue-600 text-lg font-medium shadow-md transition-all duration-200 hover:shadow-lg"
                >
                  <option value="">Select Your City</option>
                  <option value="Port Harcourt">Port Harcourt</option>
                  <option value="Asaba">Asaba</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Abuja">Abuja</option>
                  <option value="Kano">Kano</option>
                  <option value="Ibadan">Ibadan</option>
                  <option value="Benin City">Benin City</option>
                  <option value="Calabar">Calabar</option>
                  <option value="Enugu">Enugu</option>
                  <option value="Owerri">Owerri</option>
                  <option value="Warri">Warri</option>
                  <option value="Jos">Jos</option>
                  <option value="Kaduna">Kaduna</option>
                  <option value="Maiduguri">Maiduguri</option>
                  <option value="Akure">Akure</option>
                  <option value="Abeokuta">Abeokuta</option>
                  <option value="Ilorin">Ilorin</option>
                  <option value="Sokoto">Sokoto</option>
                  <option value="Gombe">Gombe</option>
                  <option value="Uyo">Uyo</option>
                  <option value="Yenagoa">Yenagoa</option>
                  <option value="Lafia">Lafia</option>
                  <option value="Lokoja">Lokoja</option>
                  <option value="Makurdi">Makurdi</option>
                  <option value="Minna">Minna</option>
                  <option value="Osogbo">Osogbo</option>
                  <option value="Ado-Ekiti">Ado-Ekiti</option>
                  <option value="Awka">Awka</option>
                  <option value="Bauchi">Bauchi</option>
                  <option value="Birnin Kebbi">Birnin Kebbi</option>
                  <option value="Damaturu">Damaturu</option>
                  <option value="Dutse">Dutse</option>
                  <option value="Jalingo">Jalingo</option>
                  <option value="Katsina">Katsina</option>
                  <option value="Kebbi">Kebbi</option>
                  <option value="Yola">Yola</option>
                  <option value="Gusau">Gusau</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white font-black py-6 px-8 hover:from-red-700 hover:to-red-900 text-xl shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                REGISTER FOR FREE TRAINING NOW!
              </button>
              
              <p className="text-sm text-blue-800 text-center mt-4 font-medium">
                After registration, you'll be added to our WhatsApp group for updates
              </p>
            </form>
          </div>
        </div>

        {/* 20 Benefits Section */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-4 border-blue-600 p-12 mb-16 shadow-2xl">
          <div className="text-center mb-16">
            <Shield className="w-20 h-20 text-blue-600 mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-black text-red-600 mb-6">
              20 BENEFITS OF BELONGING TO THE PBO PLUS REALTORS GROUP
            </h2>
            <p className="text-blue-800 text-2xl font-bold">Transform your life with these exclusive advantages</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start bg-white p-8 shadow-lg border-l-6 border-blue-600 transform hover:scale-105 transition-all">
                <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center font-black text-lg mr-6 flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-xl mb-3">Own Your Business Without Huge Startup Costs</h4>
                  <p className="text-blue-700 text-lg">No office rent, no big capital. Start your real estate business with minimal investment and maximum support.</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white p-8 shadow-lg border-l-6 border-red-600 transform hover:scale-105 transition-all">
                <div className="bg-red-600 text-white w-12 h-12 flex items-center justify-center font-black text-lg mr-6 flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-xl mb-3">Make Homeownership Dreams Come True</h4>
                  <p className="text-blue-700 text-lg">Be part of a movement helping Nigerians own affordable and fast-developing land, transforming lives in the process.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-8 shadow-lg border-l-6 border-blue-600 transform hover:scale-105 transition-all">
                <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center font-black text-lg mr-6 flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-xl mb-3">Unlimited Earning Potential</h4>
                  <p className="text-blue-700 text-lg">Your income grows as you sell more and recruit others, with no limits on what you can achieve.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-8 shadow-lg border-l-6 border-red-600 transform hover:scale-105 transition-all">
                <div className="bg-red-600 text-white w-12 h-12 flex items-center justify-center font-black text-lg mr-6 flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-xl mb-3">Access to High-Value Properties</h4>
                  <p className="text-blue-700 text-lg">Sell properties in fast developing Nigerian locations, boosting your commission and credibility.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-8 shadow-lg border-l-6 border-blue-600 transform hover:scale-105 transition-all">
                <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center font-black text-lg mr-6 flex-shrink-0">
                  5
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-xl mb-3">Network with Like-Minded People</h4>
                  <p className="text-blue-700 text-lg">Connect with successful professionals and mentors who inspire and guide you toward greatness.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-8 shadow-lg border-l-6 border-red-600 transform hover:scale-105 transition-all">
                <div className="bg-red-600 text-white w-12 h-12 flex items-center justify-center font-black text-lg mr-6 flex-shrink-0">
                  6
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-xl mb-3">Incentives That Reward Your Hustle</h4>
                  <p className="text-blue-700 text-lg">From cash rewards to shopping vouchers, international trips, and cars, your hard work doesn't go unnoticed.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-8 shadow-lg border-l-6 border-blue-600 transform hover:scale-105 transition-all">
                <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center font-black text-lg mr-6 flex-shrink-0">
                  7
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-xl mb-3">Empowerment Programs</h4>
                  <p className="text-blue-700 text-lg">Even if you're new to real estate, PBO Plus provides hands-on training, mentorship, and resources to help you succeed.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-8 shadow-lg border-l-6 border-red-600 transform hover:scale-105 transition-all">
                <div className="bg-red-600 text-white w-12 h-12 flex items-center justify-center font-black text-lg mr-6 flex-shrink-0">
                  8
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-xl mb-3">Affordable and Accessible Entry</h4>
                  <p className="text-blue-700 text-lg">Join a proven system designed for everyday Nigerians looking to grow their income and business skills.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-8 shadow-lg border-l-6 border-blue-600 transform hover:scale-105 transition-all">
                <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center font-black text-lg mr-6 flex-shrink-0">
                  9
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-xl mb-3">Gain Recognition and Rewards</h4>
                  <p className="text-blue-700 text-lg">Stand out as a professional realtor and enjoy recognition for your contributions to the industry.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-8 shadow-lg border-l-6 border-red-600 transform hover:scale-105 transition-all">
                <div className="bg-red-600 text-white w-12 h-12 flex items-center justify-center font-black text-lg mr-6 flex-shrink-0">
                  10
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-xl mb-3">Leverage a Reputable Brand</h4>
                  <p className="text-blue-700 text-lg">PWAN Max Group is trusted across Nigeria, making it easier to close deals with confidence.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start bg-white p-8 shadow-lg border-l-6 border-blue-600 transform hover:scale-105 transition-all">
                <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center font-black text-lg mr-6 flex-shrink-0">
                  11
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-xl mb-3">Contribute to Nigeria's Growth</h4>
                  <p className="text-blue-700 text-lg">Play a key role in developing communities by helping people secure land and build their homes.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-8 shadow-lg border-l-6 border-red-600 transform hover:scale-105 transition-all">
                <div className="bg-red-600 text-white w-12 h-12 flex items-center justify-center font-black text-lg mr-6 flex-shrink-0">
                  12
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-xl mb-3">A Business You Can Pass On</h4>
                  <p className="text-blue-700 text-lg">Build a team and income stream that can benefit your family for generations to come.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-8 shadow-lg border-l-6 border-blue-600 transform hover:scale-105 transition-all">
                <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center font-black text-lg mr-6 flex-shrink-0">
                  13
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-xl mb-3">Cater to Diaspora Nigerians</h4>
                  <p className="text-blue-700 text-lg">Help Nigerians abroad invest back home while earning commissions in dollars.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-8 shadow-lg border-l-6 border-red-600 transform hover:scale-105 transition-all">
                <div className="bg-red-600 text-white w-12 h-12 flex items-center justify-center font-black text-lg mr-6 flex-shrink-0">
                  14
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-xl mb-3">Promotions and Career Growth</h4>
                  <p className="text-blue-700 text-lg">Advance through ranks with tangible rewards at each level of your growth.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-8 shadow-lg border-l-6 border-blue-600 transform hover:scale-105 transition-all">
                <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center font-black text-lg mr-6 flex-shrink-0">
                  15
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-xl mb-3">Flexible Work Schedule</h4>
                  <p className="text-blue-700 text-lg">Work when you want, where you want - perfect for students, working professionals, and stay-at-home parents.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-8 shadow-lg border-l-6 border-red-600 transform hover:scale-105 transition-all">
                <div className="bg-red-600 text-white w-12 h-12 flex items-center justify-center font-black text-lg mr-6 flex-shrink-0">
                  16
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-xl mb-3">Multiple Income Streams</h4>
                  <p className="text-blue-700 text-lg">Earn from direct sales, team building, bonuses, and passive income from your downline.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-8 shadow-lg border-l-6 border-blue-600 transform hover:scale-105 transition-all">
                <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center font-black text-lg mr-6 flex-shrink-0">
                  17
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-xl mb-3">Financial Freedom</h4>
                  <p className="text-blue-700 text-lg">Potential to earn beyond traditional salaries and break free from financial constraints.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-8 shadow-lg border-l-6 border-red-600 transform hover:scale-105 transition-all">
                <div className="bg-red-600 text-white w-12 h-12 flex items-center justify-center font-black text-lg mr-6 flex-shrink-0">
                  18
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-xl mb-3">Personal Development</h4>
                  <p className="text-blue-700 text-lg">Grow your skills in sales, marketing, negotiation, and leadership through continuous training.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-8 shadow-lg border-l-6 border-blue-600 transform hover:scale-105 transition-all">
                <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center font-black text-lg mr-6 flex-shrink-0">
                  19
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-xl mb-3">Community Impact</h4>
                  <p className="text-blue-700 text-lg">Help people secure their family's future while building wealth for yourself.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-8 shadow-lg border-l-6 border-red-600 transform hover:scale-105 transition-all">
                <div className="bg-red-600 text-white w-12 h-12 flex items-center justify-center font-black text-lg mr-6 flex-shrink-0">
                  20
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-xl mb-3">Legacy Building</h4>
                  <p className="text-blue-700 text-lg">Create wealth that lasts beyond your lifetime and establishes your family's financial security.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-center text-red-600 mb-12">
            SUCCESS STORIES FROM OUR GRADUATES
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 shadow-2xl border-t-4 border-blue-600 transform hover:scale-105 transition-all">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mr-6">
                  <Users className="w-10 h-10 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-xl">John D.</h4>
                  <p className="text-blue-600 font-medium">Port Harcourt</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg">
                "After 3 years of job hunting, I joined PWAN and made ₦1.2M in my first month! This changed my life completely. The training was so practical and the support system is amazing."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 shadow-2xl border-t-4 border-red-600 transform hover:scale-105 transition-all">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mr-6">
                  <Users className="w-10 h-10 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Chioma K.</h4>
                  <p className="text-red-600 font-medium">Lagos</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg">
                "I was skeptical at first, but within 6 months I built a team of 25 and now earn passive income every month. The compensation plan is truly rewarding for those who put in the work."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-8 shadow-2xl border-t-4 border-blue-600 transform hover:scale-105 transition-all">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mr-6">
                  <Users className="w-10 h-10 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Emeka O.</h4>
                  <p className="text-blue-600 font-medium">Asaba</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg">
                "The training was exceptional. I went from zero real estate knowledge to closing 3 deals in my first month! The mentorship program is what really made the difference for me."
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-12 text-center mb-16 shadow-2xl rounded-xl">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            DON'T MISS THIS LIFE-CHANGING OPPORTUNITY!
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Limited slots available. Register now to secure your spot in the training and start your journey to financial freedom.
          </p>
          <a 
            href="#registration" 
            className="inline-block bg-white text-red-600 font-black py-5 px-10 text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 rounded-lg"
          >
            REGISTER NOW - FREE!
          </a>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-center text-blue-600 mb-12">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="bg-white p-8 shadow-lg border-l-8 border-blue-600">
              <h4 className="font-bold text-2xl text-blue-800 mb-4">
                Is there any cost to join the training?
              </h4>
              <p className="text-gray-700 text-lg">
                No, the initial training is completely free. We only ask for your commitment to learn and apply what you're taught. There are optional upgrades available for those who want to accelerate their success.
              </p>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="bg-white p-8 shadow-lg border-l-8 border-red-600">
              <h4 className="font-bold text-2xl text-blue-800 mb-4">
                Do I need real estate experience?
              </h4>
              <p className="text-gray-700 text-lg">
                Not at all! Our training is designed for complete beginners. We'll teach you everything you need to know, from basic real estate concepts to advanced sales techniques. Many of our top earners started with zero experience.
              </p>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="bg-white p-8 shadow-lg border-l-8 border-blue-600">
              <h4 className="font-bold text-2xl text-blue-800 mb-4">
                How soon can I start making money?
              </h4>
              <p className="text-gray-700 text-lg">
                Many of our graduates make their first sale within their first month. Your results will depend on how quickly you apply what you learn. The more action you take, the faster you'll see results.
              </p>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="bg-white p-8 shadow-lg border-l-8 border-red-600">
              <h4 className="font-bold text-2xl text-blue-800 mb-4">
                What if I can't attend the live training?
              </h4>
              <p className="text-gray-700 text-lg">
                We'll provide recordings to all registered participants, but we highly recommend attending live for the full experience and ability to ask questions. The live energy and interaction significantly enhance learning.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-white p-8 shadow-lg border-l-8 border-blue-600">
              <h4 className="font-bold text-2xl text-blue-800 mb-4">
                Is this only for residents of certain cities?
              </h4>
              <p className="text-gray-700 text-lg">
                While we focus on Port Harcourt, Asaba and Lagos, the training is open to anyone in Nigeria. Our system works nationwide, and we have successful members across all states.
              </p>
            </div>

            {/* FAQ Item 6 */}
            <div className="bg-white p-8 shadow-lg border-l-8 border-red-600">
              <h4 className="font-bold text-2xl text-blue-800 mb-4">
                What's the time commitment required?
              </h4>
              <p className="text-gray-700 text-lg">
                You can start part-time with just a few hours per week. As you see results, you can choose to dedicate more time. Many of our members maintain full-time jobs while building their real estate business.
              </p>
            </div>
          </div>
        </div>

        {/* Final Registration Form */}
        <div id="registration" className="bg-gradient-to-br from-blue-50 to-blue-100 border-4 border-blue-600 p-12 shadow-2xl mb-16 rounded-xl">
          <div className="text-center mb-10">
            <Award className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h3 className="text-4xl font-black text-blue-600 mb-4">
              READY TO TRANSFORM YOUR LIFE?
            </h3>
            <p className="text-blue-700 font-bold text-2xl">Register now for the FREE training</p>
            <p className="text-blue-600 font-medium mt-2">Limited slots available - Don't miss out!</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-blue-800 font-bold mb-2 text-lg">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 border-2 border-blue-300 focus:outline-none focus:border-blue-600 text-lg font-medium shadow-md"
                  placeholder="Enter your first name"
                />
              </div>
              
              <div>
                <label className="block text-blue-800 font-bold mb-2 text-lg">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 border-2 border-blue-300 focus:outline-none focus:border-blue-600 text-lg font-medium shadow-md"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-blue-800 font-bold mb-2 text-lg">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-6 py-4 border-2 border-blue-300 focus:outline-none focus:border-blue-600 text-lg font-medium shadow-md"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label className="block text-blue-800 font-bold mb-2 text-lg">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-6 py-4 border-2 border-blue-300 focus:outline-none focus:border-blue-600 text-lg font-medium shadow-md"
                placeholder="Enter your phone number"
              />
            </div>
            
            <div>
              <label className="block text-blue-800 font-bold mb-2 text-lg">City *</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="w-full px-6 py-4 border-2 border-blue-300 focus:outline-none focus:border-blue-600 text-lg font-medium shadow-md"
              >
                <option value="">Select Your City</option>
                <option value="Port Harcourt">Port Harcourt</option>
                <option value="Asaba">Asaba</option>
                <option value="Lagos">Lagos</option>
                <option value="Abuja">Abuja</option>
                <option value="Kano">Kano</option>
                <option value="Ibadan">Ibadan</option>
                <option value="Benin City">Benin City</option>
                <option value="Calabar">Calabar</option>
                <option value="Enugu">Enugu</option>
                <option value="Owerri">Owerri</option>
                <option value="Warri">Warri</option>
                <option value="Jos">Jos</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Maiduguri">Maiduguri</option>
                <option value="Akure">Akure</option>
                <option value="Abeokuta">Abeokuta</option>
                <option value="Ilorin">Ilorin</option>
                <option value="Sokoto">Sokoto</option>
                <option value="Gombe">Gombe</option>
                <option value="Uyo">Uyo</option>
                <option value="Yenagoa">Yenagoa</option>
                <option value="Lafia">Lafia</option>
                <option value="Lokoja">Lokoja</option>
                <option value="Makurdi">Makurdi</option>
                <option value="Minna">Minna</option>
                <option value="Osogbo">Osogbo</option>
                <option value="Ado-Ekiti">Ado-Ekiti</option>
                <option value="Awka">Awka</option>
                <option value="Bauchi">Bauchi</option>
                <option value="Birnin Kebbi">Birnin Kebbi</option>
                <option value="Damaturu">Damaturu</option>
                <option value="Dutse">Dutse</option>
                <option value="Jalingo">Jalingo</option>
                <option value="Katsina">Katsina</option>
                <option value="Kebbi">Kebbi</option>
                <option value="Yola">Yola</option>
                <option value="Gusau">Gusau</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white font-black py-6 px-8 hover:from-red-700 hover:to-red-900 text-xl shadow-lg transition-all duration-300 transform hover:scale-105 rounded-lg"
            >
              YES! I WANT TO TRANSFORM MY LIFE!
            </button>
            
            <p className="text-sm text-blue-800 text-center mt-6 font-medium">
              By registering, you agree to our Terms of Service and Privacy Policy. We respect your privacy and will never share your information without your consent.
            </p>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-black mb-4">PWAN MAX GROUP</h3>
              <p className="text-blue-200 text-lg">Nigeria's Leading Real Estate Company</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Globe className="w-8 h-8" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Home className="w-8 h-8" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-blue-800 pt-8 text-center">
            <p className="text-blue-300 text-lg">© {new Date().getFullYear()} PWAN Max Group. All Rights Reserved.</p>
            <p className="mt-4 text-blue-300 text-sm max-w-2xl mx-auto">
              Disclaimer: Results may vary based on individual effort and commitment. This is not a get-rich-quick scheme but a legitimate business opportunity that requires work. The testimonials and examples used are exceptional results and are not intended to represent or guarantee that anyone will achieve the same or similar results.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PWANLandingPage;