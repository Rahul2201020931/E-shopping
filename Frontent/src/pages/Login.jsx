import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'
import { Mail, Lock, User, Sparkles } from 'lucide-react'

const Login = () => {
  const [activeView, setActiveView] = useState('login'); // 'login' or 'register'
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const toggleView = () => {
    setActiveView(prev => (prev === 'login' ? 'register' : 'login'));
  };

  const saveSession = (response) => {
    setToken(response.token);
    localStorage.setItem('token', response.token);
  };

  const handleGoogleCredential = async (googleResponse) => {
    try {
      const response = await axios.post(backendUrl + '/api/user/google', { credential: googleResponse.credential });
      if (response.data.success) {
        saveSession(response.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Google sign-in failed');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  useEffect(() => {
    if (!googleClientId) return;

    const renderGoogleButtons = () => {
      if (!window.google?.accounts?.id) return;

      window.google.accounts.id.initialize({
        client_id: googleClientId,
        callback: handleGoogleCredential,
      });

      const loginEl = document.getElementById('google-sign-in-login');
      if (loginEl) {
        loginEl.innerHTML = '';
        window.google.accounts.id.renderButton(loginEl, {
          theme: 'outline',
          size: 'large',
          width: 280,
          text: 'continue_with',
          shape: 'rectangular',
        });
      }

      const registerEl = document.getElementById('google-sign-in-register');
      if (registerEl) {
        registerEl.innerHTML = '';
        window.google.accounts.id.renderButton(registerEl, {
          theme: 'outline',
          size: 'large',
          width: 280,
          text: 'signup_with',
          shape: 'rectangular',
        });
      }
    };

    const existingScript = document.getElementById('google-identity-script');
    if (existingScript) {
      if (window.google?.accounts?.id) {
        renderGoogleButtons();
      } else {
        existingScript.addEventListener('load', renderGoogleButtons, { once: true });
      }
      return;
    }

    const script = document.createElement('script');
    script.id = 'google-identity-script';
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.onload = renderGoogleButtons;
    document.head.appendChild(script);
  }, [googleClientId, activeView]);

  const onLoginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(backendUrl + '/api/user/login', { email, password });
      if (response.data.success) {
        saveSession(response.data);
        toast.success('Welcome back!');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const onRegisterHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });
      if (response.data.success) {
        saveSession(response.data);
        toast.success('Account created successfully!');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-10 sm:py-16 px-4">
      
      {/* Outer Card */}
      <div className="relative w-full max-w-[760px] min-h-[500px] sm:h-[540px] bg-white rounded-2xl sm:rounded-3xl border border-neutral-200 shadow-2xl overflow-hidden flex flex-col sm:flex-row">
        
        {/* =========================================================
            DESKTOP SLIDING HERO OVERLAY (Animated Transition)
            ========================================================= */}
        <div
          className={`hidden sm:flex absolute top-0 bottom-0 w-1/2 z-30 transition-transform duration-700 ease-in-out overflow-hidden p-8 flex-col justify-between text-white ${
            activeView === 'login' ? 'translate-x-full' : 'translate-x-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(17, 17, 17, 0.65), rgba(17, 17, 17, 0.85)), url(${assets.contact_img || assets.about_img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Top Brand Mark */}
          <div>
            <span className="text-[10px] font-bold tracking-[0.24em] text-white/80 uppercase">
              THEIR NIBS LONDON
            </span>
          </div>

          {/* Center Dynamic Text */}
          <div className="space-y-3">
            {activeView === 'login' ? (
              <>
                <h2 className="text-3xl font-bold tracking-tight uppercase leading-tight font-sans">
                  Hello <br />There!
                </h2>
                <p className="text-xs text-white/80 leading-relaxed max-w-xs font-light">
                  Begin your journey with boutique sleepwear and exclusive subscriber-only collections.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={toggleView}
                    className="border-2 border-white text-white hover:bg-white hover:text-[#111111] px-8 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer active:scale-95 shadow-md"
                  >
                    SIGN UP
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold tracking-tight uppercase leading-tight font-sans">
                  Welcome <br />Back!
                </h2>
                <p className="text-xs text-white/80 leading-relaxed max-w-xs font-light">
                  Sign in to access your saved wishlist, view active orders, and enjoy fast checkout.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={toggleView}
                    className="border-2 border-white text-white hover:bg-white hover:text-[#111111] px-8 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer active:scale-95 shadow-md"
                  >
                    LOGIN
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Bottom Trust Tag */}
          <div className="text-[10px] text-white/60 tracking-wider">
            100% Organic & Consciously Made
          </div>
        </div>


        {/* =========================================================
            LEFT PANEL: SIGN IN FORM
            ========================================================= */}
        <div
          className={`w-full sm:w-1/2 p-6 sm:p-10 flex flex-col justify-center transition-all duration-500 ${
            activeView === 'login' ? 'opacity-100 z-20' : 'sm:opacity-0 sm:pointer-events-none'
          } ${activeView !== 'login' ? 'hidden sm:flex' : 'flex'}`}
        >
          <div className="w-full max-w-xs mx-auto space-y-4">
            
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] uppercase font-sans">
                Sign In
              </h2>
              <p className="text-xs text-neutral-500 mt-1">Access your customer account</p>
            </div>

            {/* Form */}
            <form onSubmit={onLoginHandler} className="space-y-3 pt-1">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full h-11 px-3.5 pl-9 text-xs bg-neutral-50 border border-neutral-200 rounded-lg text-[#111111] placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-black transition-colors"
                />
                <Mail size={15} className="absolute left-3 top-3.5 text-neutral-400" />
              </div>

              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full h-11 px-3.5 pl-9 text-xs bg-neutral-50 border border-neutral-200 rounded-lg text-[#111111] placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-black transition-colors"
                />
                <Lock size={15} className="absolute left-3 top-3.5 text-neutral-400" />
              </div>

              <div className="flex justify-end text-[11px]">
                <span className="text-neutral-500 hover:text-black cursor-pointer transition-colors">
                  Forgot your password?
                </span>
              </div>

              <button
                type="submit"
                className="w-full h-11 bg-[#111111] hover:bg-neutral-800 text-white rounded-lg text-xs font-bold tracking-widest uppercase transition-all duration-200 shadow-sm cursor-pointer active:scale-98 mt-1"
              >
                SIGN IN
              </button>
            </form>

            {/* Google Sign-In on Sign In Side */}
            {googleClientId ? (
              <div className="pt-2">
                <div className="flex items-center gap-2 mb-3 text-[11px] text-neutral-400">
                  <div className="h-px flex-1 bg-neutral-200" />
                  <span>OR</span>
                  <div className="h-px flex-1 bg-neutral-200" />
                </div>
                <div id="google-sign-in-login" className="flex justify-center" />
              </div>
            ) : null}

            {/* Mobile Switch Link */}
            <div className="sm:hidden text-center text-xs text-neutral-500 pt-2 border-t border-neutral-100">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={toggleView}
                className="font-bold text-[#111111] underline cursor-pointer"
              >
                Sign Up
              </button>
            </div>

          </div>
        </div>


        {/* =========================================================
            RIGHT PANEL: CREATE ACCOUNT (REGISTER) FORM
            ========================================================= */}
        <div
          className={`w-full sm:w-1/2 p-6 sm:p-10 flex flex-col justify-center transition-all duration-500 ${
            activeView === 'register' ? 'opacity-100 z-20' : 'sm:opacity-0 sm:pointer-events-none'
          } ${activeView !== 'register' ? 'hidden sm:flex' : 'flex'}`}
        >
          <div className="w-full max-w-xs mx-auto space-y-4">
            
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] uppercase font-sans">
                Sign Up
              </h2>
              <p className="text-xs text-neutral-500 mt-1">Create your boutique account</p>
            </div>

            {/* Form */}
            <form onSubmit={onRegisterHandler} className="space-y-3 pt-1">
              <div className="relative">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full h-11 px-3.5 pl-9 text-xs bg-neutral-50 border border-neutral-200 rounded-lg text-[#111111] placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-black transition-colors"
                />
                <User size={15} className="absolute left-3 top-3.5 text-neutral-400" />
              </div>

              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full h-11 px-3.5 pl-9 text-xs bg-neutral-50 border border-neutral-200 rounded-lg text-[#111111] placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-black transition-colors"
                />
                <Mail size={15} className="absolute left-3 top-3.5 text-neutral-400" />
              </div>

              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full h-11 px-3.5 pl-9 text-xs bg-neutral-50 border border-neutral-200 rounded-lg text-[#111111] placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-black transition-colors"
                />
                <Lock size={15} className="absolute left-3 top-3.5 text-neutral-400" />
              </div>

              <button
                type="submit"
                className="w-full h-11 bg-[#111111] hover:bg-neutral-800 text-white rounded-lg text-xs font-bold tracking-widest uppercase transition-all duration-200 shadow-sm cursor-pointer active:scale-98 mt-1"
              >
                SIGN UP
              </button>
            </form>

            {/* Google Sign-In on Sign Up Side */}
            {googleClientId ? (
              <div className="pt-2">
                <div className="flex items-center gap-2 mb-3 text-[11px] text-neutral-400">
                  <div className="h-px flex-1 bg-neutral-200" />
                  <span>OR</span>
                  <div className="h-px flex-1 bg-neutral-200" />
                </div>
                <div id="google-sign-in-register" className="flex justify-center" />
              </div>
            ) : null}

            {/* Mobile Switch Link */}
            <div className="sm:hidden text-center text-xs text-neutral-500 pt-2 border-t border-neutral-100">
              Already have an account?{' '}
              <button
                type="button"
                onClick={toggleView}
                className="font-bold text-[#111111] underline cursor-pointer"
              >
                Sign In
              </button>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Login
