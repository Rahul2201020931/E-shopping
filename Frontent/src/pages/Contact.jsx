import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'
import { toast } from 'react-toastify'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  HelpCircle,
  PackageCheck,
  ShieldCheck,
  Heart,
  ArrowRight,
  Headphones
} from 'lucide-react'

const contactPillars = [
  {
    icon: Mail,
    title: 'Customer Care & Orders',
    description: 'Our team aims to reply within 2 business hours.',
    contact: 'support@theirnibs.com',
    action: 'mailto:support@theirnibs.com',
    actionText: 'Send Email'
  },
  {
    icon: Phone,
    title: 'Phone & WhatsApp',
    description: 'Mon - Sat, 9:00 AM - 6:00 PM GMT',
    contact: '+44 (0) 20 7946 0912',
    action: 'tel:+442079460912',
    actionText: 'Call Studio'
  },
  {
    icon: MapPin,
    title: 'London Design Studio',
    description: 'King’s Road, Chelsea, London',
    contact: 'London SW3 4RD, United Kingdom',
    action: 'https://maps.google.com',
    actionText: 'Get Directions'
  }
];

const faqs = [
  {
    q: 'How long does UK & International delivery take?',
    a: 'UK Standard delivery takes 2–3 working days (Free on orders over £50). Next Day Express is available on orders placed before 2 PM. International shipping takes 5–8 working days.'
  },
  {
    q: 'How should I care for and wash my printed cotton pyjamas?',
    a: 'We recommend machine washing inside out at 30°C on a gentle cycle. Use mild detergent and reshape whilst damp. Line dry naturally to protect the longevity of our hand-painted prints.'
  },
  {
    q: 'What is your returns and exchange policy?',
    a: 'We offer a 30-day hassle-free return window for unworn items with original boutique tags. Exchanges are processed with free return shipping.'
  },
  {
    q: 'Can I include gift packaging and a handwritten note?',
    a: 'Yes! Select "Gift Packaging" during checkout to have your items wrapped in our signature botanical tissue paper with an embossed gift ribbon and handwritten note card.'
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Order Tracking',
    orderNumber: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success('Thank you! Your message has been received by our London studio.');
    }, 800);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full space-y-12 sm:space-y-16 py-6 sm:py-10">
      
      {/* ========================================================
          1. EDITORIAL PAGE HEADER
          ======================================================== */}
      <section className="text-center max-w-2xl mx-auto px-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#7d3c24] mb-2 font-sans">
          <Sparkles size={13} className="text-[#e47e56]" />
          <span>Client Concierge & Studio Care</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1d1d1b] font-serif-boutique tracking-tight mb-3">
          Get In <span className="italic text-[#7d3c24]">Touch</span>
        </h1>

        <p className="text-xs sm:text-sm text-[#787873] leading-relaxed font-sans">
          Whether you have a question about our hand-painted prints, sizing advice, order delivery, or luxury gifting, our London customer team is delighted to assist you.
        </p>
      </section>


      {/* ========================================================
          2. THREE QUICK-CONTACT PILLARS
          ======================================================== */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {contactPillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={idx}
              className="bg-[#fbf6f4] border border-[#ebd3ca] p-6 sm:p-7 flex flex-col justify-between hover:border-[#7d3c24] hover:shadow-md transition-all duration-300 group"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-white border border-[#ebd3ca] flex items-center justify-center text-[#7d3c24] mb-4 group-hover:bg-[#f2c1ae] group-hover:text-[#1d1d1b] transition-colors shadow-2xs">
                  <Icon size={18} />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-[#1d1d1b] uppercase tracking-wider font-sans mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#787873] mb-3 leading-relaxed font-sans">
                  {pillar.description}
                </p>
                <p className="text-xs sm:text-sm font-medium text-[#1d1d1b] font-sans">
                  {pillar.contact}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#ebd3ca]/60">
                <a
                  href={pillar.action}
                  target={pillar.action.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#7d3c24] hover:text-[#e47e56] transition-colors group-hover:translate-x-0.5"
                >
                  <span>{pillar.actionText}</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          );
        })}
      </section>


      {/* ========================================================
          3. MAIN TWO-COLUMN SECTION: MESSAGE FORM & STUDIO SHOWCASE
          ======================================================== */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Interactive Contact Form (Span 7) */}
        <div className="lg:col-span-7 bg-white border border-[#ebd3ca] p-6 sm:p-10 shadow-sm">
          
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-normal text-[#1d1d1b] font-serif-boutique tracking-tight mb-1">
              Send a <span className="italic text-[#7d3c24]">Message</span>
            </h2>
            <p className="text-xs text-[#787873] font-sans">
              Fill out the details below and we will get back to you promptly.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-[#faf7f5] border border-[#ebd3ca] text-center space-y-4 animate-dropdown-in">
              <div className="w-12 h-12 rounded-full bg-[#f2c1ae] text-[#1d1d1b] flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-normal text-[#1d1d1b] font-serif-boutique">
                Thank You, <span className="italic text-[#7d3c24]">{formData.name}</span>!
              </h3>
              <p className="text-xs text-[#787873] max-w-md mx-auto leading-relaxed font-sans">
                Your message has been sent to our customer care team. A confirmation has been noted for <b>{formData.email}</b>.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    subject: 'Order Tracking',
                    orderNumber: '',
                    message: ''
                  });
                }}
                className="mt-2 inline-block bg-[#f2c1ae] hover:bg-[#e47e56] hover:text-white text-[#1d1d1b] px-6 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all shadow-xs cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Row: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-[11px] font-semibold tracking-wider text-[#1d1d1b] uppercase font-sans">
                    Full Name <span className="text-[#d21404]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Clara Oswald"
                    className="w-full h-11 px-3.5 text-xs bg-[#faf7f5] border border-[#ebd3ca] text-[#1d1d1b] placeholder:text-[#787873] focus:bg-white focus:outline-none focus:border-[#7d3c24] transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[11px] font-semibold tracking-wider text-[#1d1d1b] uppercase font-sans">
                    Email Address <span className="text-[#d21404]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="clara@example.com"
                    className="w-full h-11 px-3.5 text-xs bg-[#faf7f5] border border-[#ebd3ca] text-[#1d1d1b] placeholder:text-[#787873] focus:bg-white focus:outline-none focus:border-[#7d3c24] transition-colors"
                  />
                </div>
              </div>

              {/* Row: Subject & Order Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-[11px] font-semibold tracking-wider text-[#1d1d1b] uppercase font-sans">
                    Enquiry Subject <span className="text-[#d21404]">*</span>
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full h-11 px-3 text-xs bg-[#faf7f5] border border-[#ebd3ca] text-[#1d1d1b] focus:bg-white focus:outline-none focus:border-[#7d3c24] transition-colors font-sans"
                  >
                    <option value="Order Tracking">Order Tracking & Delivery</option>
                    <option value="Sizing & Fit">Sizing & Fabric Guidance</option>
                    <option value="Returns & Exchanges">Returns & Exchanges</option>
                    <option value="Gift Packaging">Gift Packaging & Notes</option>
                    <option value="Wholesale & Press">Wholesale & Press Enquiries</option>
                    <option value="Other">Other Query</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-[11px] font-semibold tracking-wider text-[#1d1d1b] uppercase font-sans">
                    Order Number <span className="text-[#787873] font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="orderNumber"
                    value={formData.orderNumber}
                    onChange={handleChange}
                    placeholder="#TN-1082"
                    className="w-full h-11 px-3.5 text-xs bg-[#faf7f5] border border-[#ebd3ca] text-[#1d1d1b] placeholder:text-[#787873] focus:bg-white focus:outline-none focus:border-[#7d3c24] transition-colors"
                  />
                </div>
              </div>

              {/* Message Area */}
              <div className="space-y-1">
                <label className="block text-[11px] font-semibold tracking-wider text-[#1d1d1b] uppercase font-sans">
                  How Can We Help You? <span className="text-[#d21404]">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please write your enquiry here with as much detail as possible..."
                  className="w-full p-3.5 text-xs bg-[#faf7f5] border border-[#ebd3ca] text-[#1d1d1b] placeholder:text-[#787873] focus:bg-white focus:outline-none focus:border-[#7d3c24] transition-colors resize-y font-sans"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 h-12 bg-[#f2c1ae] hover:bg-[#e47e56] hover:text-white text-[#1d1d1b] text-xs font-semibold tracking-widest uppercase transition-all duration-200 shadow-sm cursor-pointer active:scale-98 flex items-center justify-center gap-2 font-sans"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={13} />
                  </>
                )}
              </button>

            </form>
          )}

        </div>

        {/* Right Column: London Studio & Boutique Visual (Span 5) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Main Visual Image */}
          <div className="relative border border-[#ebd3ca] bg-[#faf7f5] overflow-hidden group shadow-sm">
            <img
              src={assets.contact_img}
              alt="Their Nibs London Studio"
              className="w-full aspect-[4/3] object-cover object-center group-hover:scale-103 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-[10px] tracking-[0.2em] font-semibold text-[#f2c1ae] uppercase font-sans">
                STUDIO HEADQUARTERS
              </span>
              <h3 className="text-xl font-normal font-serif-boutique text-white">
                London • Chelsea Studio
              </h3>
            </div>
          </div>

          {/* Boutique Service Guarantees Card */}
          <div className="bg-[#fbf6f4] border border-[#ebd3ca] p-6 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7d3c24] font-sans flex items-center gap-1.5">
              <Heart size={14} className="text-[#e47e56]" />
              The Boutique Promise
            </h4>

            <div className="space-y-3 text-xs text-[#1d1d1b]/85 font-sans leading-relaxed">
              <div className="flex items-start gap-2.5">
                <ShieldCheck size={16} className="text-[#7d3c24] shrink-0 mt-0.5" />
                <p><b>100% Satisfaction Guarantee:</b> If your sizing or fit isn't completely perfect, we arrange swift exchanges.</p>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock size={16} className="text-[#7d3c24] shrink-0 mt-0.5" />
                <p><b>Rapid Response Times:</b> Average email turnaround time is under 2 hours during studio business days.</p>
              </div>

              <div className="flex items-start gap-2.5">
                <Headphones size={16} className="text-[#7d3c24] shrink-0 mt-0.5" />
                <p><b>Personalized Styling:</b> Need gifting advice or print suggestions? Our team is always happy to guide you.</p>
              </div>
            </div>
          </div>

        </div>

      </section>


      {/* ========================================================
          4. FREQUENTLY ASKED QUESTIONS ACCORDION
          ======================================================== */}
      <section className="bg-[#faf7f5] border border-[#ebd3ca] p-6 sm:p-12">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d3c24] mb-1 font-sans">
              Instant Help
            </p>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#1d1d1b] font-serif-boutique tracking-tight">
              Frequently Asked <span className="italic text-[#7d3c24]">Questions</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-[#ebd3ca] bg-white transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-[#1d1d1b] font-sans">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-[#7d3c24] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#e47e56]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs text-[#787873] leading-relaxed border-t border-[#ebd3ca]/40 font-sans">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ========================================================
          5. BOTTOM NEWSLETTER
          ======================================================== */}
      <NewsLetterBox />

    </div>
  );
};

export default Contact;