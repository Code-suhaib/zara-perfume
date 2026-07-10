import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Auth() {
 const [isLogin, setIsLogin] = useState(true);

const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  password: "",
  confirmPassword: "",
  loginIdentifier: "",
});

const handleChange = (e) => {
  setFormData((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};

  return (
    <div className="h-screen w-screen flex bg-[#050505] text-gray-200 antialiased overflow-hidden fixed inset-0">
      
      {/* Premium Background Overlay */}
      <div id="premium-bg"></div>

      {/* Left Column: Image Area */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#080808] flex-col justify-center items-center overflow-hidden">
        {/* Decorative Gold Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-[100px]"></div>
        
        <img 
          src="/bottle-oud-noir.png" 
          alt="ZARA Oud Noir Perfume" 
          className="relative z-10 w-2/3 max-w-sm h-auto object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] animate-float"
        />
        
        <div className="absolute bottom-14 text-center z-10 w-full">
          <h2 className="font-serif-lux text-2xl text-gold-light mb-2 tracking-[0.3em]">ZARA PERFUMES</h2>
          <p className="text-[0.65rem] tracking-[0.3em] text-gray-500 uppercase">Discover your signature scent</p>
        </div>
      </div>

      {/* Right Column: Form Area */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24 relative z-10">
        
        {/* Back Link */}
        <Link to="/" className="absolute top-8 left-8 sm:left-16 lg:left-24 text-[0.65rem] tracking-widest text-gray-500 hover:text-gold uppercase flex items-center group">
          <svg className="w-3 h-3 mr-2 transform group-hover:-translate-x-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Return Home
        </Link>

        <div className="max-w-md w-full mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-serif-lux text-3xl md:text-4xl text-gold-light mb-4 tracking-wide">
              {isLogin ? 'WELCOME BACK' : 'CREATE ACCOUNT'}
            </h1>
            <div className="flex justify-center items-center">
              <div className="h-px bg-gray-800 w-12"></div>
              <div className="w-1.5 h-1.5 rotate-45 bg-gold mx-4"></div>
              <div className="h-px bg-gray-800 w-12"></div>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-7" onSubmit={(e) => e.preventDefault()}>
            
            {!isLogin && (
  <div className="grid grid-cols-2 gap-5">
    <div className="relative group">
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        autoComplete="given-name"
        className="block w-full bg-transparent border-0 border-b border-gray-800 py-3.5 text-sm text-gray-200 focus:ring-0 focus:border-gold transition-colors duration-500 peer placeholder-transparent"
      />
      <label
        htmlFor="firstName"
        className="absolute left-0 -top-3.5 text-[0.65rem] tracking-widest text-gray-600 uppercase transition-all duration-500 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-[0.65rem] peer-focus:text-gold"
      >
        First Name
      </label>
    </div>

    <div className="relative group">
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        autoComplete="family-name"
        className="block w-full bg-transparent border-0 border-b border-gray-800 py-3.5 text-sm text-gray-200 focus:ring-0 focus:border-gold transition-colors duration-500 peer placeholder-transparent"
      />
      <label
        htmlFor="lastName"
        className="absolute left-0 -top-3.5 text-[0.65rem] tracking-widest text-gray-600 uppercase transition-all duration-500 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-[0.65rem] peer-focus:text-gold"
      >
        Last Name
      </label>
    </div>
  </div>
)}

            <div className="relative group">
  <input
    type={isLogin ? "text" : "email"}
    id="auth-email"
    name={isLogin ? "loginIdentifier" : "email"}
    value={isLogin ? formData.loginIdentifier : formData.email}
    onChange={handleChange}
    placeholder={isLogin ? "Email or Mobile" : "Email Address"}
    autoComplete={isLogin ? "username" : "email"}
    className="block w-full bg-transparent border-0 border-b border-gray-800 py-3.5 text-sm text-gray-200 focus:ring-0 focus:border-gold transition-colors duration-500 peer placeholder-transparent"
  />

  <label
    htmlFor="auth-email"
    className="absolute left-0 -top-3.5 text-[0.65rem] tracking-widest text-gray-600 uppercase transition-all duration-500 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-[0.65rem] peer-focus:text-gold"
  >
    {isLogin ? "Email or Mobile" : "Email Address"}
  </label>
</div>
        {!isLogin && (
  <div className="relative group">
    <input
      type="tel"
      id="mobile"
      name="mobile"
      value={formData.mobile}
      onChange={handleChange}
      placeholder="Mobile Number"
      autoComplete="tel"
      className="block w-full bg-transparent border-0 border-b border-gray-800 py-3.5 text-sm text-gray-200 focus:ring-0 focus:border-gold transition-colors duration-500 peer placeholder-transparent"
    />

    <label
      htmlFor="mobile"
      className="absolute left-0 -top-3.5 text-[0.65rem] tracking-widest text-gray-600 uppercase transition-all duration-500 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-[0.65rem] peer-focus:text-gold"
    >
      Mobile Number
    </label>
  </div>
)}

            <input
  type="password"
  id="auth-password"
  name="password"
  value={formData.password}
  onChange={handleChange}
  placeholder="Password"
  autoComplete={isLogin ? "current-password" : "new-password"}
  className="block w-full bg-transparent border-0 border-b border-gray-800 py-3.5 text-sm text-gray-200 focus:ring-0 focus:border-gold transition-colors duration-500 peer placeholder-transparent"
/>

{!isLogin && (
  <div className="relative group">
    <input
      type="password"
      id="confirmPassword"
      name="confirmPassword"
      value={formData.confirmPassword}
      onChange={handleChange}
      placeholder="Confirm Password"
      autoComplete="new-password"
      className="block w-full bg-transparent border-0 border-b border-gray-800 py-3.5 text-sm text-gray-200 focus:ring-0 focus:border-gold transition-colors duration-500 peer placeholder-transparent"
    />

    <label
      htmlFor="confirmPassword"
      className="absolute left-0 -top-3.5 text-[0.65rem] tracking-widest text-gray-600 uppercase transition-all duration-500 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-[0.65rem] peer-focus:text-gold"
    >
      Confirm Password
    </label>
  </div>
)}

            {isLogin && (
              <div className="flex justify-between items-center text-[0.65rem] tracking-widest uppercase mt-1">
                <label className="flex items-center cursor-pointer group/check">
                  <input type="checkbox" className="w-3 h-3 bg-transparent border-gray-700 text-gold focus:ring-gold focus:ring-offset-black rounded-sm mr-2 cursor-pointer" />
                  <span className="text-gray-500 group-hover/check:text-gray-300 transition-colors duration-500">Remember Me</span>
                </label>
                <a href="#" className="text-gray-500 hover:text-gold transition-colors duration-500 border-b border-transparent hover:border-gold pb-0.5">Forgot Password?</a>
              </div>
            )}

            <button 
              type="submit" 
              className="w-full mt-10 bg-gold hover:bg-gold-dark text-black py-4 text-[0.65rem] tracking-[0.2em] uppercase font-semibold hover:-translate-y-0.5 hover:shadow-gold-glow rounded-full transition-all duration-500"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Toggle */}
          <div className="mt-14 text-center">
            <p className="text-[0.65rem] tracking-widest text-gray-600 uppercase">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </p>
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="mt-3 text-[0.7rem] tracking-[0.15em] text-gold border-b border-gold/50 pb-0.5 hover:text-white hover:border-white uppercase transition-colors"
            >
              {isLogin ? 'Register Here' : 'Sign In Here'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
