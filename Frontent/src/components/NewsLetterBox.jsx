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
        <div className="bg-neutral-50 border border-neutral-200 p-8 sm:p-14 text-center rounded-none relative overflow-hidden">
          
          <div className="max-w-xl mx-auto relative z-10">
            
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-neutral-400 mb-2">
              <Sparkles size={13} className="text-[#111111]" />
              <span>Newsletter Exclusive</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] uppercase tracking-tight font-sans mb-3">
              Enjoy 10% Off Your First Order
            </h2>

            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed mb-6">
              Be the first to see new seasonal drops, receive private archive sale invitations, and enjoy exclusive member perks.
            </p>

            {subscribed ? (
              <div className="inline-flex items-center gap-2 bg-[#111111] text-white px-6 py-3 text-xs font-bold tracking-wider uppercase">
                <Check size={16} /> Welcome! Check your inbox for your 10% code.
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
                    className="w-full h-11 px-4 bg-white border border-neutral-300 text-xs text-[#111111] placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="h-11 px-7 bg-[#111111] hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-[0.14em] transition-colors shrink-0 shadow-xs cursor-pointer active:scale-95"
                >
                  Join Now
                </button>
              </form>
            )}

            <p className="text-[10px] text-neutral-400 mt-3">
              We respect your privacy and will never share your details. You can unsubscribe anytime.
            </p>

          </div>

        </div>
      </div>
    </section>
  )
}

export default NewsLetterBox


