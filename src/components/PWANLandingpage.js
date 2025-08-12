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
      {/* Header - Mobile Responsive */}
      <header className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-4 md:py-6 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-black">PWAN MAX GROUP</h1>
          <p className="text-xs sm:text-sm md:text-lg font-semibold">Nigeria's Leading Real Estate Company</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 md:py-8">
        
        {/* Hero Section - Mobile Responsive */}
        <div className="text-center mb-8 md:mb-16">
          <div className="mb-6 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 mb-4 md:mb-8 leading-tight tracking-tight drop-shadow-lg">
              INTRODUCING!!!
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold text-blue-800 mb-4 md:mb-8 leading-tight max-w-6xl mx-auto px-2">
              THE BIGGEST, MOST EDUCATIONAL, AND MOTIVATIONAL ONLINE REAL ESTATE TRAINING EVER IN NIGERIA!
            </h2>
          </div>
          
          {/* Graduate Image - Mobile Responsive */}
          <div className="flex justify-center mb-6 md:mb-12 px-4">
            <div className="relative w-full max-w-md">
              <div className="flex items-center justify-center relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl">
                <img 
                  src="https://res.cloudinary.com/drgk8rmny/image/upload/e_background_removal/f_png/v1754974477/depositphotos_366840728-stock-photo-happy-graduate-girl-diploma-shows_noie47.webp" 
                  alt="Graduate Success" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Registration Period & Training Date - Mobile Responsive */}
          <div className="bg-gradient-to-r from-red-50 to-red-100 border-2 md:border-4 border-red-600 p-4 md:p-6 mb-6 md:mb-8 shadow-lg md:shadow-xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex items-center justify-center">
                <Award className="w-5 h-5 md:w-8 md:h-8 text-red-600 mr-2 md:mr-3" />
                <div>
                  <p className="text-sm md:text-xl font-black text-red-600">Registration Period:</p>
                  <p className="text-xs md:text-lg font-bold text-red-700">August 1st - August 31st, 2025</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="w-5 h-5 md:w-8 md:h-8 text-blue-600 mr-2 md:mr-3" />
                <div>
                  <p className="text-sm md:text-xl font-black text-blue-600">Training Date:</p>
                  <p className="text-xs md:text-lg font-bold text-blue-700">September 6th, 2025 at 4 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Countdown Timer - Mobile Responsive */}
          <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-4 md:p-6 lg:p-8 mb-8 md:mb-12 mx-auto max-w-4xl shadow-lg md:shadow-xl rounded-lg">
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <Clock className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 mr-2 md:mr-3" />
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black">TRAINING STARTS IN:</h3>
            </div>
            <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 text-center">
              <div className="bg-white text-red-600 p-2 sm:p-3 md:p-4 lg:p-6 shadow-md transform hover:scale-105 transition-all">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black">{timeLeft.days}</div>
                <div className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mt-1">DAYS</div>
              </div>
              <div className="bg-white text-red-600 p-2 sm:p-3 md:p-4 lg:p-6 shadow-md transform hover:scale-105 transition-all">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black">{timeLeft.hours}</div>
                <div className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mt-1">HOURS</div>
              </div>
              <div className="bg-white text-red-600 p-2 sm:p-3 md:p-4 lg:p-6 shadow-md transform hover:scale-105 transition-all">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black">{timeLeft.minutes}</div>
                <div className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mt-1">MINS</div>
              </div>
              <div className="bg-white text-red-600 p-2 sm:p-3 md:p-4 lg:p-6 shadow-md transform hover:scale-105 transition-all">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black">{timeLeft.seconds}</div>
                <div className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mt-1">SECS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Value Proposition - Mobile Responsive */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 md:border-4 border-blue-600 p-4 md:p-6 lg:p-8 xl:p-12 mb-8 md:mb-12 lg:mb-16 shadow-lg md:shadow-xl rounded-lg">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-red-600 mb-4 md:mb-6 lg:mb-8 text-center leading-tight px-2">
            Once you complete this training process, you will become a member of the biggest real estate company in Nigeria, PWAN™️
          </h3>
          
          <div className="text-center mb-6 md:mb-8 lg:mb-10 px-2">
            <div className="inline-block max-w-full">
              <img 
                src="https://res.cloudinary.com/drgk8rmny/image/upload/v1754974942/838ff323-ce13-4aad-891d-ed4de0e4846e_nqzg2i.jpg" 
                alt="Real Estate Success" 
                className="w-full h-auto object-cover max-w-xs md:max-w-sm lg:max-w-lg rounded-lg shadow-md"
              />
            </div>
          </div>

          <div className="space-y-4 md:space-y-6 lg:space-y-8 text-center px-2">
            <p className="text-blue-800 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed font-medium">
              You will also become a member of the <span className="text-red-600 font-black">largest realtors group in the world, PBO+</span>. This gives you the opportunity to connect with a powerful network of people earning <span className="text-red-600 font-black">massive income</span> by simply doing real estate business both in Nigeria and beyond.
            </p>
            
            <p className="text-blue-800 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed">
              Trust me, the experience is second to none. Becoming a <span className="text-red-600 font-black">millionaire or billionaire</span> follows a system, and that system is being introduced to you today by the founder of PWAN, <span className="text-blue-600 font-black">Dr. Augustine Onwumere</span>, who alongside his wife started PWAN 13 years ago in 2012.
            </p>

            <div className="bg-white p-4 md:p-6 lg:p-8 shadow-md border-l-4 md:border-l-8 border-blue-600 max-w-4xl mx-auto rounded-lg">
              <p className="text-blue-800 text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 md:mb-3 lg:mb-4">
                It's a true grass-to-grace story - an indigenous business empire built through dedication, consistency, and unwavering commitment!
              </p>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg">
                So, if you want to <span className="text-red-600 font-black">rewrite your story and embrace affluence</span>, you need to attend this life-changing training happening live on Zoom.
              </p>
            </div>
          </div>
        </div>

        {/* Two Column Layout - Mobile Stacked */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-start mb-8 md:mb-12 lg:mb-16">
          
          {/* Left Column - Classic Gold Benefits */}
          <div className="bg-white shadow-lg md:shadow-xl p-4 md:p-6 lg:p-8 xl:p-10 border-t-4 md:border-t-8 border-blue-600 w-full rounded-lg">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-blue-600 mb-4 md:mb-6 lg:mb-8 flex items-center">
              <Play className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 mr-2 md:mr-3 lg:mr-4" />
              <span>What You Get When You Upgrade to Classic Gold:</span>
            </h2>
            
            <div className="space-y-3 md:space-y-4 lg:space-y-5">
              <div className="flex items-start bg-blue-50 p-3 md:p-4 lg:p-5 xl:p-6 shadow-sm md:shadow-md border-l-2 md:border-l-4 border-blue-600 rounded-lg">
                <div className="bg-blue-600 text-white w-6 h-6 md:w-8 md:h-8 flex items-center justify-center font-black mr-2 md:mr-3 lg:mr-4 flex-shrink-0 rounded-full">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 text-sm md:text-base lg:text-lg mb-1 md:mb-2">The Founders Speak</h4>
                  <p className="text-blue-700 text-xs md:text-sm lg:text-base">Introductory message for beginners and professionals</p>
                </div>
              </div>
              
              <div className="flex items-start bg-red-50 p-3 md:p-4 lg:p-5 xl:p-6 shadow-sm md:shadow-md border-l-2 md:border-l-4 border-red-600 rounded-lg">
                <div className="bg-red-600 text-white w-6 h-6 md:w-8 md:h-8 flex items-center justify-center font-black mr-2 md:mr-3 lg:mr-4 flex-shrink-0 rounded-full">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 text-sm md:text-base lg:text-lg mb-1 md:mb-2">Registration & Recruitment Training</h4>
                  <p className="text-blue-700 text-xs md:text-sm lg:text-base">How to register as a member and recruit new members using your unique link</p>
                </div>
              </div>

              <div className="flex items-start bg-blue-50 p-3 md:p-4 lg:p-5 xl:p-6 shadow-sm md:shadow-md border-l-2 md:border-l-4 border-blue-600 rounded-lg">
                <div className="bg-blue-600 text-white w-6 h-6 md:w-8 md:h-8 flex items-center justify-center font-black mr-2 md:mr-3 lg:mr-4 flex-shrink-0 rounded-full">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 text-sm md:text-base lg:text-lg mb-1 md:mb-2">Landing Page Mastery</h4>
                  <p className="text-blue-700 text-xs md:text-sm lg:text-base">How to use the landing page to get massive people to join your business</p>
                </div>
              </div>

              <div className="flex items-start bg-red-50 p-3 md:p-4 lg:p-5 xl:p-6 shadow-sm md:shadow-md border-l-2 md:border-l-4 border-red-600 rounded-lg">
                <div className="bg-red-600 text-white w-6 h-6 md:w-8 md:h-8 flex items-center justify-center font-black mr-2 md:mr-3 lg:mr-4 flex-shrink-0 rounded-full">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 text-sm md:text-base lg:text-lg mb-1 md:mb-2">Compensation Plan</h4>
                  <p className="text-blue-700 text-xs md:text-sm lg:text-base">Complete breakdown of how the compensation plan works</p>
                </div>
              </div>

              <div className="flex items-start bg-blue-50 p-3 md:p-4 lg:p-5 xl:p-6 shadow-sm md:shadow-md border-l-2 md:border-l-4 border-blue-600 rounded-lg">
                <div className="bg-blue-600 text-white w-6 h-6 md:w-8 md:h-8 flex items-center justify-center font-black mr-2 md:mr-3 lg:mr-4 flex-shrink-0 rounded-full">
                  5
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 text-sm md:text-base lg:text-lg mb-1 md:mb-2">Congratulatory Message</h4>
                  <p className="text-blue-700 text-xs md:text-sm lg:text-base">Special message upon completion</p>
                </div>
              </div>

              <div className="flex items-start bg-red-50 p-3 md:p-4 lg:p-5 xl:p-6 shadow-sm md:shadow-md border-l-2 md:border-l-4 border-red-600 rounded-lg">
                <div className="bg-red-600 text-white w-6 h-6 md:w-8 md:h-8 flex items-center justify-center font-black mr-2 md:mr-3 lg:mr-4 flex-shrink-0 rounded-full">
                  <Download className="w-3 h-3 md:w-4 md:h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 text-sm md:text-base lg:text-lg mb-1 md:mb-2">Certificate of Completion</h4>
                  <p className="text-blue-700 text-xs md:text-sm lg:text-base">Downloadable certificate link</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Registration Form */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 md:border-4 border-red-600 p-4 md:p-6 lg:p-8 xl:p-10 shadow-lg md:shadow-xl w-full rounded-lg">
            <div className="text-center mb-4 md:mb-6 lg:mb-8">
              <Users className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-red-600 mx-auto mb-2 md:mb-3 lg:mb-4" />
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-red-600 mb-1 md:mb-2">
                REGISTER NOW
              </h3>
              <p className="text-red-700 font-bold text-sm md:text-base lg:text-lg xl:text-xl">100% FREE TRAINING</p>
              <p className="text-red-600 font-semibold text-xs md:text-sm lg:text-base mt-1 md:mt-2">Join thousands of successful entrepreneurs</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6">
              <div>
                <label className="block text-blue-800 font-bold text-sm md:text-base lg:text-lg mb-1 md:mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 border border-blue-300 focus:outline-none focus:border-blue-600 text-sm md:text-base lg:text-lg font-medium shadow-sm md:shadow-md transition-all duration-200 hover:shadow-md rounded-lg"
                  placeholder="Enter your first name"
                />
              </div>
              
              <div>
                <label className="block text-blue-800 font-bold text-sm md:text-base lg:text-lg mb-1 md:mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 border border-blue-300 focus:outline-none focus:border-blue-600 text-sm md:text-base lg:text-lg font-medium shadow-sm md:shadow-md transition-all duration-200 hover:shadow-md rounded-lg"
                  placeholder="Enter your last name"
                />
              </div>
              
              <div>
                <label className="block text-blue-800 font-bold text-sm md:text-base lg:text-lg mb-1 md:mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 border border-blue-300 focus:outline-none focus:border-blue-600 text-sm md:text-base lg:text-lg font-medium shadow-sm md:shadow-md transition-all duration-200 hover:shadow-md rounded-lg"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-blue-800 font-bold text-sm md:text-base lg:text-lg mb-1 md:mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 border border-blue-300 focus:outline-none focus:border-blue-600 text-sm md:text-base lg:text-lg font-medium shadow-sm md:shadow-md transition-all duration-200 hover:shadow-md rounded-lg"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="block text-blue-800 font-bold text-sm md:text-base lg:text-lg mb-1 md:mb-2">City *</label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 border border-blue-300 focus:outline-none focus:border-blue-600 text-sm md:text-base lg:text-lg font-medium shadow-sm md:shadow-md transition-all duration-200 hover:shadow-md rounded-lg appearance-none"
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
                className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white font-black py-3 md:py-4 lg:py-5 xl:py-6 px-4 md:px-6 lg:px-8 hover:from-red-700 hover:to-red-900 text-sm md:text-base lg:text-lg xl:text-xl shadow-md md:shadow-lg transition-all duration-300 transform hover:scale-105 rounded-lg"
              >
                REGISTER FOR FREE TRAINING NOW!
              </button>
              
              <p className="text-xs md:text-sm text-blue-800 text-center mt-2 md:mt-3 lg:mt-4 font-medium">
                After registration, you'll be added to our WhatsApp group for updates
              </p>
            </form>
          </div>
        </div>

        {/* 20 Benefits Section - Mobile Responsive */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 md:border-4 border-blue-600 p-4 md:p-6 lg:p-8 xl:p-10 mb-8 md:mb-12 lg:mb-16 shadow-lg md:shadow-xl rounded-lg">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <Shield className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-blue-600 mx-auto mb-3 md:mb-4 lg:mb-6" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-red-600 mb-3 md:mb-4 lg:mb-6 px-2">
              20 BENEFITS OF BELONGING TO THE PBO PLUS REALTORS GROUP
            </h2>
            <p className="text-blue-800 text-sm md:text-base lg:text-lg xl:text-xl font-bold px-2">Transform your life with these exclusive advantages</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
            <div className="space-y-4 md:space-y-5 lg:space-y-6">
              <div className="flex items-start bg-white p-4 md:p-5 lg:p-6 shadow-md border-l-4 md:border-l-6 border-blue-600 transform hover:scale-105 transition-all rounded-lg">
                <div className="bg-blue-600 text-white w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center font-black text-sm md:text-base lg:text-lg mr-3 md:mr-4 lg:mr-5 flex-shrink-0 rounded-full">
                  1
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-sm md:text-base lg:text-lg xl:text-xl mb-1 md:mb-2">Own Your Business Without Huge Startup Costs</h4>
                  <p className="text-blue-700 text-xs md:text-sm lg:text-base">No office rent, no big capital. Start your real estate business with minimal investment and maximum support.</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white p-4 md:p-5 lg:p-6 shadow-md border-l-4 md:border-l-6 border-red-600 transform hover:scale-105 transition-all rounded-lg">
                <div className="bg-red-600 text-white w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center font-black text-sm md:text-base lg:text-lg mr-3 md:mr-4 lg:mr-5 flex-shrink-0 rounded-full">
                  2
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-sm md:text-base lg:text-lg xl:text-xl mb-1 md:mb-2">Make Homeownership Dreams Come True</h4>
                  <p className="text-blue-700 text-xs md:text-sm lg:text-base">Be part of a movement helping Nigerians own affordable and fast-developing land, transforming lives in the process.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-4 md:p-5 lg:p-6 shadow-md border-l-4 md:border-l-6 border-blue-600 transform hover:scale-105 transition-all rounded-lg">
                <div className="bg-blue-600 text-white w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center font-black text-sm md:text-base lg:text-lg mr-3 md:mr-4 lg:mr-5 flex-shrink-0 rounded-full">
                  3
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-sm md:text-base lg:text-lg xl:text-xl mb-1 md:mb-2">Unlimited Earning Potential</h4>
                  <p className="text-blue-700 text-xs md:text-sm lg:text-base">Your income grows as you sell more and recruit others, with no limits on what you can achieve.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-4 md:p-5 lg:p-6 shadow-md border-l-4 md:border-l-6 border-red-600 transform hover:scale-105 transition-all rounded-lg">
                <div className="bg-red-600 text-white w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center font-black text-sm md:text-base lg:text-lg mr-3 md:mr-4 lg:mr-5 flex-shrink-0 rounded-full">
                  4
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-sm md:text-base lg:text-lg xl:text-xl mb-1 md:mb-2">Access to High-Value Properties</h4>
                  <p className="text-blue-700 text-xs md:text-sm lg:text-base">Sell properties in fast developing Nigerian locations, boosting your commission and credibility.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-4 md:p-5 lg:p-6 shadow-md border-l-4 md:border-l-6 border-blue-600 transform hover:scale-105 transition-all rounded-lg">
                <div className="bg-blue-600 text-white w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center font-black text-sm md:text-base lg:text-lg mr-3 md:mr-4 lg:mr-5 flex-shrink-0 rounded-full">
                  5
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-sm md:text-base lg:text-lg xl:text-xl mb-1 md:mb-2">Network with Like-Minded People</h4>
                  <p className="text-blue-700 text-xs md:text-sm lg:text-base">Connect with successful professionals and mentors who inspire and guide you toward greatness.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-4 md:p-5 lg:p-6 shadow-md border-l-4 md:border-l-6 border-red-600 transform hover:scale-105 transition-all rounded-lg">
                <div className="bg-red-600 text-white w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center font-black text-sm md:text-base lg:text-lg mr-3 md:mr-4 lg:mr-5 flex-shrink-0 rounded-full">
                  6
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-sm md:text-base lg:text-lg xl:text-xl mb-1 md:mb-2">Incentives That Reward Your Hustle</h4>
                  <p className="text-blue-700 text-xs md:text-sm lg:text-base">From cash rewards to shopping vouchers, international trips, and cars, your hard work doesn't go unnoticed.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-4 md:p-5 lg:p-6 shadow-md border-l-4 md:border-l-6 border-blue-600 transform hover:scale-105 transition-all rounded-lg">
                <div className="bg-blue-600 text-white w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center font-black text-sm md:text-base lg:text-lg mr-3 md:mr-4 lg:mr-5 flex-shrink-0 rounded-full">
                  7
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-sm md:text-base lg:text-lg xl:text-xl mb-1 md:mb-2">Empowerment Programs</h4>
                  <p className="text-blue-700 text-xs md:text-sm lg:text-base">Even if you're new to real estate, PBO Plus provides hands-on training, mentorship, and resources to help you succeed.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-4 md:p-5 lg:p-6 shadow-md border-l-4 md:border-l-6 border-red-600 transform hover:scale-105 transition-all rounded-lg">
                <div className="bg-red-600 text-white w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center font-black text-sm md:text-base lg:text-lg mr-3 md:mr-4 lg:mr-5 flex-shrink-0 rounded-full">
                  8
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-sm md:text-base lg:text-lg xl:text-xl mb-1 md:mb-2">Affordable and Accessible Entry</h4>
                  <p className="text-blue-700 text-xs md:text-sm lg:text-base">Join a proven system designed for everyday Nigerians looking to grow their income and business skills.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-4 md:p-5 lg:p-6 shadow-md border-l-4 md:border-l-6 border-blue-600 transform hover:scale-105 transition-all rounded-lg">
                <div className="bg-blue-600 text-white w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center font-black text-sm md:text-base lg:text-lg mr-3 md:mr-4 lg:mr-5 flex-shrink-0 rounded-full">
                  9
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-sm md:text-base lg:text-lg xl:text-xl mb-1 md:mb-2">Gain Recognition and Rewards</h4>
                  <p className="text-blue-700 text-xs md:text-sm lg:text-base">Stand out as a professional realtor and enjoy recognition for your contributions to the industry.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-4 md:p-5 lg:p-6 shadow-md border-l-4 md:border-l-6 border-red-600 transform hover:scale-105 transition-all rounded-lg">
                <div className="bg-red-600 text-white w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center font-black text-sm md:text-base lg:text-lg mr-3 md:mr-4 lg:mr-5 flex-shrink-0 rounded-full">
                  10
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-sm md:text-base lg:text-lg xl:text-xl mb-1 md:mb-2">Leverage a Reputable Brand</h4>
                  <p className="text-blue-700 text-xs md:text-sm lg:text-base">PWAN Max Group is trusted across Nigeria, making it easier to close deals with confidence.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 md:space-y-5 lg:space-y-6">
              <div className="flex items-start bg-white p-4 md:p-5 lg:p-6 shadow-md border-l-4 md:border-l-6 border-blue-600 transform hover:scale-105 transition-all rounded-lg">
                <div className="bg-blue-600 text-white w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center font-black text-sm md:text-base lg:text-lg mr-3 md:mr-4 lg:mr-5 flex-shrink-0 rounded-full">
                  11
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-sm md:text-base lg:text-lg xl:text-xl mb-1 md:mb-2">Contribute to Nigeria's Growth</h4>
                  <p className="text-blue-700 text-xs md:text-sm lg:text-base">Play a key role in developing communities by helping people secure land and build their homes.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-4 md:p-5 lg:p-6 shadow-md border-l-4 md:border-l-6 border-red-600 transform hover:scale-105 transition-all rounded-lg">
                <div className="bg-red-600 text-white w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center font-black text-sm md:text-base lg:text-lg mr-3 md:mr-4 lg:mr-5 flex-shrink-0 rounded-full">
                  12
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-sm md:text-base lg:text-lg xl:text-xl mb-1 md:mb-2">A Business You Can Pass On</h4>
                  <p className="text-blue-700 text-xs md:text-sm lg:text-base">Build a team and income stream that can benefit your family for generations to come.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-4 md:p-5 lg:p-6 shadow-md border-l-4 md:border-l-6 border-blue-600 transform hover:scale-105 transition-all rounded-lg">
                <div className="bg-blue-600 text-white w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center font-black text-sm md:text-base lg:text-lg mr-3 md:mr-4 lg:mr-5 flex-shrink-0 rounded-full">
                  13
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-sm md:text-base lg:text-lg xl:text-xl mb-1 md:mb-2">Cater to Diaspora Nigerians</h4>
                  <p className="text-blue-700 text-xs md:text-sm lg:text-base">Help Nigerians abroad invest back home while earning commissions in dollars.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-4 md:p-5 lg:p-6 shadow-md border-l-4 md:border-l-6 border-red-600 transform hover:scale-105 transition-all rounded-lg">
                <div className="bg-red-600 text-white w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center font-black text-sm md:text-base lg:text-lg mr-3 md:mr-4 lg:mr-5 flex-shrink-0 rounded-full">
                  14
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-sm md:text-base lg:text-lg xl:text-xl mb-1 md:mb-2">Promotions and Career Growth</h4>
                  <p className="text-blue-700 text-xs md:text-sm lg:text-base">Advance through ranks with tangible rewards at each level of your growth.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-4 md:p-5 lg:p-6 shadow-md border-l-4 md:border-l-6 border-blue-600 transform hover:scale-105 transition-all rounded-lg">
                <div className="bg-blue-600 text-white w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center font-black text-sm md:text-base lg:text-lg mr-3 md:mr-4 lg:mr-5 flex-shrink-0 rounded-full">
                  15
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-sm md:text-base lg:text-lg xl:text-xl mb-1 md:mb-2">Flexible Work Schedule</h4>
                  <p className="text-blue-700 text-xs md:text-sm lg:text-base">Work when you want, where you want - perfect for students, working professionals, and stay-at-home parents.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-4 md:p-5 lg:p-6 shadow-md border-l-4 md:border-l-6 border-red-600 transform hover:scale-105 transition-all rounded-lg">
                <div className="bg-red-600 text-white w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center font-black text-sm md:text-base lg:text-lg mr-3 md:mr-4 lg:mr-5 flex-shrink-0 rounded-full">
                  16
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-sm md:text-base lg:text-lg xl:text-xl mb-1 md:mb-2">Multiple Income Streams</h4>
                  <p className="text-blue-700 text-xs md:text-sm lg:text-base">Earn from direct sales, team building, bonuses, and passive income from your downline.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-4 md:p-5 lg:p-6 shadow-md border-l-4 md:border-l-6 border-blue-600 transform hover:scale-105 transition-all rounded-lg">
                <div className="bg-blue-600 text-white w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center font-black text-sm md:text-base lg:text-lg mr-3 md:mr-4 lg:mr-5 flex-shrink-0 rounded-full">
                  17
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-sm md:text-base lg:text-lg xl:text-xl mb-1 md:mb-2">Financial Freedom</h4>
                  <p className="text-blue-700 text-xs md:text-sm lg:text-base">Potential to earn beyond traditional salaries and break free from financial constraints.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-4 md:p-5 lg:p-6 shadow-md border-l-4 md:border-l-6 border-red-600 transform hover:scale-105 transition-all rounded-lg">
                <div className="bg-red-600 text-white w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center font-black text-sm md:text-base lg:text-lg mr-3 md:mr-4 lg:mr-5 flex-shrink-0 rounded-full">
                  18
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-sm md:text-base lg:text-lg xl:text-xl mb-1 md:mb-2">Personal Development</h4>
                  <p className="text-blue-700 text-xs md:text-sm lg:text-base">Grow your skills in sales, marketing, negotiation, and leadership through continuous training.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-4 md:p-5 lg:p-6 shadow-md border-l-4 md:border-l-6 border-blue-600 transform hover:scale-105 transition-all rounded-lg">
                <div className="bg-blue-600 text-white w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center font-black text-sm md:text-base lg:text-lg mr-3 md:mr-4 lg:mr-5 flex-shrink-0 rounded-full">
                  19
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-sm md:text-base lg:text-lg xl:text-xl mb-1 md:mb-2">Community Impact</h4>
                  <p className="text-blue-700 text-xs md:text-sm lg:text-base">Help people secure their family's future while building wealth for yourself.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-4 md:p-5 lg:p-6 shadow-md border-l-4 md:border-l-6 border-red-600 transform hover:scale-105 transition-all rounded-lg">
                <div className="bg-red-600 text-white w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center font-black text-sm md:text-base lg:text-lg mr-3 md:mr-4 lg:mr-5 flex-shrink-0 rounded-full">
                  20
                </div>
                <div>
                  <h4 className="font-black text-blue-800 text-sm md:text-base lg:text-lg xl:text-xl mb-1 md:mb-2">Legacy Building</h4>
                  <p className="text-blue-700 text-xs md:text-sm lg:text-base">Create wealth that lasts beyond your lifetime and establishes your family's financial security.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section - Mobile Responsive */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center text-red-600 mb-6 md:mb-8 lg:mb-10 px-2">
            SUCCESS STORIES FROM OUR GRADUATES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white p-4 md:p-5 lg:p-6 shadow-lg border-t-2 md:border-t-4 border-blue-600 transform hover:scale-105 transition-all rounded-lg">
              <div className="flex items-center mb-3 md:mb-4 lg:mb-5">
                <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-blue-100 rounded-full flex items-center justify-center mr-3 md:mr-4 lg:mr-5">
                  <Users className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-base lg:text-lg">John D.</h4>
                  <p className="text-blue-600 font-medium text-xs md:text-sm lg:text-base">Port Harcourt</p>
                </div>
              </div>
              <p className="text-gray-700 text-xs md:text-sm lg:text-base">
                "After 3 years of job hunting, I joined PWAN and made ₦1.2M in my first month! This changed my life completely. The training was so practical and the support system is amazing."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-4 md:p-5 lg:p-6 shadow-lg border-t-2 md:border-t-4 border-red-600 transform hover:scale-105 transition-all rounded-lg">
              <div className="flex items-center mb-3 md:mb-4 lg:mb-5">
                <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-red-100 rounded-full flex items-center justify-center mr-3 md:mr-4 lg:mr-5">
                  <Users className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-base lg:text-lg">Chioma K.</h4>
                  <p className="text-red-600 font-medium text-xs md:text-sm lg:text-base">Lagos</p>
                </div>
              </div>
              <p className="text-gray-700 text-xs md:text-sm lg:text-base">
                "I was skeptical at first, but within 6 months I built a team of 25 and now earn passive income every month. The compensation plan is truly rewarding for those who put in the work."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-4 md:p-5 lg:p-6 shadow-lg border-t-2 md:border-t-4 border-blue-600 transform hover:scale-105 transition-all rounded-lg">
              <div className="flex items-center mb-3 md:mb-4 lg:mb-5">
                <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-blue-100 rounded-full flex items-center justify-center mr-3 md:mr-4 lg:mr-5">
                  <Users className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-base lg:text-lg">Emeka O.</h4>
                  <p className="text-blue-600 font-medium text-xs md:text-sm lg:text-base">Asaba</p>
                </div>
              </div>
              <p className="text-gray-700 text-xs md:text-sm lg:text-base">
                "The training was exceptional. I went from zero real estate knowledge to closing 3 deals in my first month! The mentorship program is what really made the difference for me."
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA - Mobile Responsive */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-6 md:p-8 lg:p-10 xl:p-12 text-center mb-8 md:mb-12 lg:mb-16 shadow-lg md:shadow-xl rounded-lg">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 lg:mb-8">
            DON'T MISS THIS LIFE-CHANGING OPPORTUNITY!
          </h2>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl mb-4 md:mb-6 lg:mb-8 max-w-3xl mx-auto">
            Limited slots available. Register now to secure your spot in the training and start your journey to financial freedom.
          </p>
          <a 
            href="#registration" 
            className="inline-block bg-white text-red-600 font-black py-2 md:py-3 lg:py-4 px-4 md:px-6 lg:px-8 text-sm md:text-base lg:text-lg xl:text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 rounded-lg"
          >
            REGISTER NOW - FREE!
          </a>
        </div>

        {/* FAQ Section - Mobile Responsive */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center text-blue-600 mb-6 md:mb-8 lg:mb-10">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          
          <div className="space-y-3 md:space-y-4 lg:space-y-5 max-w-4xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="bg-white p-4 md:p-5 lg:p-6 shadow-md border-l-4 md:border-l-6 lg:border-l-8 border-blue-600 rounded-lg">
              <h4 className="font-bold text-blue-800 text-base md:text-lg lg:text-xl xl:text-2xl mb-2 md:mb-3 lg:mb-4">
                Is there any cost to join the training?
              </h4>
              <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                No, the initial training is completely free. We only ask for your commitment to learn and apply what you're taught. There are optional upgrades available for those who want to accelerate their success.
              </p>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="bg-white p-4 md:p-5 lg:p-6 shadow-md border-l-4 md:border-l-6 lg:border-l-8 border-red-600 rounded-lg">
              <h4 className="font-bold text-blue-800 text-base md:text-lg lg:text-xl xl:text-2xl mb-2 md:mb-3 lg:mb-4">
                Do I need real estate experience?
              </h4>
              <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                Not at all! Our training is designed for complete beginners. We'll teach you everything you need to know, from basic real estate concepts to advanced sales techniques. Many of our top earners started with zero experience.
              </p>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="bg-white p-4 md:p-5 lg:p-6 shadow-md border-l-4 md:border-l-6 lg:border-l-8 border-blue-600 rounded-lg">
              <h4 className="font-bold text-blue-800 text-base md:text-lg lg:text-xl xl:text-2xl mb-2 md:mb-3 lg:mb-4">
                How soon can I start making money?
              </h4>
              <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                Many of our graduates make their first sale within their first month. Your results will depend on how quickly you apply what you learn. The more action you take, the faster you'll see results.
              </p>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="bg-white p-4 md:p-5 lg:p-6 shadow-md border-l-4 md:border-l-6 lg:border-l-8 border-red-600 rounded-lg">
              <h4 className="font-bold text-blue-800 text-base md:text-lg lg:text-xl xl:text-2xl mb-2 md:mb-3 lg:mb-4">
                What if I can't attend the live training?
              </h4>
              <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                We'll provide recordings to all registered participants, but we highly recommend attending live for the full experience and ability to ask questions. The live energy and interaction significantly enhance learning.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-white p-4 md:p-5 lg:p-6 shadow-md border-l-4 md:border-l-6 lg:border-l-8 border-blue-600 rounded-lg">
              <h4 className="font-bold text-blue-800 text-base md:text-lg lg:text-xl xl:text-2xl mb-2 md:mb-3 lg:mb-4">
                Is this only for residents of certain cities?
              </h4>
              <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                While we focus on Port Harcourt, Asaba and Lagos, the training is open to anyone in Nigeria. Our system works nationwide, and we have successful members across all states.
              </p>
            </div>

            {/* FAQ Item 6 */}
            <div className="bg-white p-4 md:p-5 lg:p-6 shadow-md border-l-4 md:border-l-6 lg:border-l-8 border-red-600 rounded-lg">
              <h4 className="font-bold text-blue-800 text-base md:text-lg lg:text-xl xl:text-2xl mb-2 md:mb-3 lg:mb-4">
                What's the time commitment required?
              </h4>
              <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                You can start part-time with just a few hours per week. As you see results, you can choose to dedicate more time. Many of our members maintain full-time jobs while building their real estate business.
              </p>
            </div>
          </div>
        </div>

        {/* Final Registration Form - Mobile Responsive */}
        <div id="registration" className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 md:border-4 border-blue-600 p-4 md:p-6 lg:p-8 xl:p-10 shadow-lg md:shadow-xl mb-8 md:mb-12 lg:mb-16 rounded-lg">
          <div className="text-center mb-6 md:mb-8 lg:mb-10">
            <Award className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-blue-600 mx-auto mb-3 md:mb-4 lg:mb-6" />
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-blue-600 mb-2 md:mb-3 lg:mb-4">
              READY TO TRANSFORM YOUR LIFE?
            </h3>
            <p className="text-blue-700 font-bold text-sm md:text-base lg:text-lg xl:text-xl">Register now for the FREE training</p>
            <p className="text-blue-600 font-medium text-xs md:text-sm lg:text-base mt-1 md:mt-2">Limited slots available - Don't miss out!</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 lg:space-y-5 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-5">
              <div>
                <label className="block text-blue-800 font-bold text-sm md:text-base lg:text-lg mb-1 md:mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 border border-blue-300 focus:outline-none focus:border-blue-600 text-sm md:text-base lg:text-lg font-medium shadow-sm md:shadow-md rounded-lg"
                  placeholder="Enter your first name"
                />
              </div>
              
              <div>
                <label className="block text-blue-800 font-bold text-sm md:text-base lg:text-lg mb-1 md:mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 border border-blue-300 focus:outline-none focus:border-blue-600 text-sm md:text-base lg:text-lg font-medium shadow-sm md:shadow-md rounded-lg"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-blue-800 font-bold text-sm md:text-base lg:text-lg mb-1 md:mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 border border-blue-300 focus:outline-none focus:border-blue-600 text-sm md:text-base lg:text-lg font-medium shadow-sm md:shadow-md rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label className="block text-blue-800 font-bold text-sm md:text-base lg:text-lg mb-1 md:mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 border border-blue-300 focus:outline-none focus:border-blue-600 text-sm md:text-base lg:text-lg font-medium shadow-sm md:shadow-md rounded-lg"
                placeholder="Enter your phone number"
              />
            </div>
            
            <div>
              <label className="block text-blue-800 font-bold text-sm md:text-base lg:text-lg mb-1 md:mb-2">City *</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 border border-blue-300 focus:outline-none focus:border-blue-600 text-sm md:text-base lg:text-lg font-medium shadow-sm md:shadow-md rounded-lg appearance-none"
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
              className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white font-black py-3 md:py-4 lg:py-5 xl:py-6 px-4 md:px-6 lg:px-8 hover:from-red-700 hover:to-red-900 text-sm md:text-base lg:text-lg xl:text-xl shadow-md md:shadow-lg transition-all duration-300 transform hover:scale-105 rounded-lg"
            >
              YES! I WANT TO TRANSFORM MY LIFE!
            </button>
            
            <p className="text-xs md:text-sm text-blue-800 text-center mt-3 md:mt-4 lg:mt-5 font-medium">
              By registering, you agree to our Terms of Service and Privacy Policy. We respect your privacy and will never share your information without your consent.
            </p>
          </form>
        </div>
      </div>

      {/* Footer - Mobile Responsive */}
      <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-6 md:py-8 lg:py-10 xl:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-6 lg:mb-8">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h3 className="text-lg md:text-xl lg:text-2xl font-black mb-2 md:mb-3 lg:mb-4">PWAN MAX GROUP</h3>
              <p className="text-blue-200 text-sm md:text-base lg:text-lg">Nigeria's Leading Real Estate Company</p>
            </div>
            
            <div className="flex space-x-4 md:space-x-5 lg:space-x-6">
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Globe className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Home className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-blue-800 pt-4 md:pt-6 lg:pt-8 text-center">
            <p className="text-blue-300 text-xs md:text-sm lg:text-base">© {new Date().getFullYear()} PWAN Max Group. All Rights Reserved.</p>
            <p className="mt-2 md:mt-3 lg:mt-4 text-blue-300 text-xxs md:text-xs lg:text-sm max-w-2xl mx-auto">
              Disclaimer: Results may vary based on individual effort and commitment. This is not a get-rich-quick scheme but a legitimate business opportunity that requires work. The testimonials and examples used are exceptional results and are not intended to represent or guarantee that anyone will achieve the same or similar results.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PWANLandingPage;