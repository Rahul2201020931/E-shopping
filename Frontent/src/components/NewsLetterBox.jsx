import React, { useState } from 'react'
import { Sparkles, Mail, Check } from 'lucide-react'

const NewsLetterBox = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section className="w-full my-12 sm:my-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="bg-[#fbf6f4] border border-[#ebd3ca] p-8 sm:p-14 text-center rounded-none relative overflow-hidden">
          
          <div className="max-w-xl mx-auto relative z-10">
            
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#7d3c24] mb-2 font-sans">
              <Sparkles size={13} className="text-[#e47e56]" />
              <span>Newsletter Exclusive</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1d1d1b] font-serif-boutique tracking-tight mb-3">
              Enjoy 10% Off <span className="italic text-[#7d3c24]">Your First Order</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#787873] leading-relaxed mb-6 font-sans">
              Be the first to see new seasonal drops, receive private archive sale invitations, and enjoy exclusive member perks.
            </p>

            {subscribed ? (
              <div className="inline-flex items-center gap-2 bg-[#1d1d1b] text-white px-6 py-3 text-xs font-semibold tracking-wider uppercase">
                <Check size={16} className="text-[#f2c1ae]" /> Welcome! Check your inbox for your 10% code.
              </div>
            ) : (
              <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full h-11 px-4 bg-white border border-[#ebd3ca] text-xs text-[#1d1d1b] placeholder:text-[#787873] focus:outline-none focus:border-[#7d3c24] transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="h-11 px-7 bg-[#f2c1ae] hover:bg-[#e47e56] hover:text-white text-[#1d1d1b] text-xs font-semibold uppercase tracking-[0.1em] transition-colors shrink-0 shadow-xs cursor-pointer active:scale-95 font-sans"
                >
                  Join Now
                </button>
              </form>
            )}

            <p className="text-[10px] text-[#787873] mt-3">
              Unsubscribe anytime. We respect your privacy.
            </p>

          </div>

        </div>
      </div>
    </section>
  )
}

export default NewsLetterBox


