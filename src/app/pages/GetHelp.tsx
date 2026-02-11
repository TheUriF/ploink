import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, AlertCircle, Clock, Globe } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface HelpFormData {
  name: string;
  location: string;
  country: string;
  emergencyType: string;
  urgencyLevel: string;
  contactPhone: string;
  contactEmail: string;
  preferredLanguage: string;
  description: string;
}

export function GetHelp() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<HelpFormData>();

  const onSubmit = (data: HelpFormData) => {
    console.log('Help request submitted:', data);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="flex flex-col">
      {/* Emergency Hotline Banner */}
      <section className="bg-[#d4183d] text-white py-6 sm:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                <Phone className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
              </div>
              <div>
                <div className="text-xs sm:text-sm opacity-90">24/7 Emergency Hotline</div>
                <a href="tel:+18457204040" className="text-xl sm:text-2xl md:text-3xl font-bold hover:underline">+1 (845) 720-4040</a>
              </div>
            </div>
            <div className="h-px w-24 md:h-12 md:w-px bg-white/30"></div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Globe className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
              </div>
              <div>
                <div className="text-xs sm:text-sm opacity-90">International Hotline</div>
                <a href="tel:+97222758624" className="text-xl sm:text-2xl md:text-3xl font-bold hover:underline">+972-2-ASKUNAI</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#6FAF2F]/10 to-[#4A86C5]/10">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6"
          >
            <span className="text-[#6FAF2F]">Get Help</span> Now
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4"
          >
            We're here for you 24/7. Whether it's an emergency or you need support, our global network is ready to coordinate assistance.
          </motion.p>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-8 sm:py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-background rounded-xl p-5 sm:p-6 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#d4183d]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6 text-[#d4183d]" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl">Life-Threatening Emergency?</h3>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                Call emergency services (911, 112, etc.) first, then contact us for coordinated support.
              </p>
              <a href="tel:+18457204040" className="text-sm font-semibold text-[#d4183d] hover:underline">CALL: +1 (845) 720-4040</a>
            </div>

            <div className="bg-background rounded-xl p-5 sm:p-6 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#6FAF2F]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-[#6FAF2F]" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl">Average Response Time</h3>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                Our coordinators typically respond within 5-15 minutes. Volunteers can be deployed within hours.
              </p>
              <div className="text-sm font-semibold text-[#6FAF2F]">We work at the speed of urgency</div>
            </div>

            <div className="bg-background rounded-xl p-5 sm:p-6 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#4A86C5]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-[#4A86C5]" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl">Multilingual Support</h3>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                We coordinate help in over 30 languages. Language should never be a barrier to getting support.
              </p>
              <div className="text-sm font-semibold text-[#4A86C5]">Available in your language</div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Request Form */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">Submit a Help Request</h2>
              <p className="text-base sm:text-lg text-muted-foreground px-4">
                Fill out this form and our coordinators will contact you as soon as possible. For immediate emergencies, please call our hotline.
              </p>
            </div>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#6FAF2F]/10 border border-[#6FAF2F] rounded-xl p-5 sm:p-6 mb-6 sm:mb-8 flex items-start gap-3 sm:gap-4"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#6FAF2F] rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl mb-2">Request Received</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Thank you. Our coordination team has received your request and will contact you shortly. 
                    If this is an urgent matter, please call our emergency hotline.
                  </p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="bg-background rounded-xl border border-border p-5 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block mb-2 text-sm sm:text-base">
                  Full Name <span className="text-[#d4183d]">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[#6FAF2F] text-base touch-manipulation"
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-[#d4183d] text-sm mt-1">{errors.name.message}</p>}
              </div>

              {/* Location */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-4">
                <div>
                  <label htmlFor="location" className="block mb-2 text-sm sm:text-base">
                    City/Region <span className="text-[#d4183d]">*</span>
                  </label>
                  <input
                    id="location"
                    type="text"
                    {...register('location', { required: 'Location is required' })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[#6FAF2F] text-base touch-manipulation"
                    placeholder="City or region"
                  />
                  {errors.location && <p className="text-[#d4183d] text-sm mt-1">{errors.location.message}</p>}
                </div>

                <div>
                  <label htmlFor="country" className="block mb-2 text-sm sm:text-base">
                    Country <span className="text-[#d4183d]">*</span>
                  </label>
                  <input
                    id="country"
                    type="text"
                    {...register('country', { required: 'Country is required' })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[#6FAF2F] text-base touch-manipulation"
                    placeholder="Country"
                  />
                  {errors.country && <p className="text-[#d4183d] text-sm mt-1">{errors.country.message}</p>}
                </div>
              </div>

              {/* Emergency Type */}
              <div>
                <label htmlFor="emergencyType" className="block mb-2 text-sm sm:text-base">
                  Type of Emergency <span className="text-[#d4183d]">*</span>
                </label>
                <select
                  id="emergencyType"
                  {...register('emergencyType', { required: 'Please select emergency type' })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[#6FAF2F] text-base touch-manipulation"
                >
                  <option value="">Select emergency type...</option>
                  <option value="medical">Medical Emergency</option>
                  <option value="disaster">Natural Disaster</option>
                  <option value="family">Family Crisis</option>
                  <option value="financial">Financial Hardship</option>
                  <option value="housing">Housing/Shelter</option>
                  <option value="mental-health">Mental Health Support</option>
                  <option value="community">Community Emergency</option>
                  <option value="other">Other</option>
                </select>
                {errors.emergencyType && <p className="text-[#d4183d] text-sm mt-1">{errors.emergencyType.message}</p>}
              </div>

              {/* Urgency Level */}
              <div>
                <label htmlFor="urgencyLevel" className="block mb-2 text-sm sm:text-base">
                  Urgency Level <span className="text-[#d4183d]">*</span>
                </label>
                <select
                  id="urgencyLevel"
                  {...register('urgencyLevel', { required: 'Please select urgency level' })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[#6FAF2F] text-base touch-manipulation"
                >
                  <option value="">Select urgency level...</option>
                  <option value="critical">Critical - Immediate response needed</option>
                  <option value="high">High - Within 24 hours</option>
                  <option value="moderate">Moderate - Within a few days</option>
                  <option value="low">Low - Can wait for coordination</option>
                </select>
                {errors.urgencyLevel && <p className="text-[#d4183d] text-sm mt-1">{errors.urgencyLevel.message}</p>}
              </div>

              {/* Contact Information */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-4">
                <div>
                  <label htmlFor="contactPhone" className="block mb-2 text-sm sm:text-base">
                    Phone Number <span className="text-[#d4183d]">*</span>
                  </label>
                  <input
                    id="contactPhone"
                    type="tel"
                    {...register('contactPhone', { required: 'Phone number is required' })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[#6FAF2F] text-base touch-manipulation"
                    placeholder="+1234567890"
                  />
                  {errors.contactPhone && <p className="text-[#d4183d] text-sm mt-1">{errors.contactPhone.message}</p>}
                </div>

                <div>
                  <label htmlFor="contactEmail" className="block mb-2 text-sm sm:text-base">
                    Email Address
                  </label>
                  <input
                    id="contactEmail"
                    type="email"
                    {...register('contactEmail')}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[#6FAF2F] text-base touch-manipulation"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Preferred Language */}
              <div>
                <label htmlFor="preferredLanguage" className="block mb-2 text-sm sm:text-base">
                  Preferred Language <span className="text-[#d4183d]">*</span>
                </label>
                <select
                  id="preferredLanguage"
                  {...register('preferredLanguage', { required: 'Please select language' })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[#6FAF2F] text-base touch-manipulation"
                >
                  <option value="">Select language...</option>
                  <option value="english">English</option>
                  <option value="hebrew">Hebrew</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                  <option value="german">German</option>
                  <option value="russian">Russian</option>
                  <option value="arabic">Arabic</option>
                  <option value="other">Other (specify in description)</option>
                </select>
                {errors.preferredLanguage && <p className="text-[#d4183d] text-sm mt-1">{errors.preferredLanguage.message}</p>}
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block mb-2 text-sm sm:text-base">
                  Description of Situation <span className="text-[#d4183d]">*</span>
                </label>
                <textarea
                  id="description"
                  {...register('description', { required: 'Please describe your situation' })}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[#6FAF2F] resize-none text-base touch-manipulation"
                  placeholder="Please describe your situation and what kind of help you need..."
                />
                {errors.description && <p className="text-[#d4183d] text-sm mt-1">{errors.description.message}</p>}
              </div>

              {/* Privacy Notice */}
              <div className="bg-muted rounded-lg p-4 text-xs sm:text-sm text-muted-foreground">
                <p>
                  Your information will be used solely to coordinate assistance. We respect your privacy and follow strict confidentiality protocols. 
                  For more details, see our <a href="#" className="text-[#6FAF2F] hover:underline">Privacy Policy</a>.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#6FAF2F] hover:bg-[#5e9527] active:bg-[#5e9527] text-white py-4 rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg text-base sm:text-lg touch-manipulation"
              >
                Submit Help Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-12">Other Ways to Reach Us</h2>

            <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
              <div className="bg-background rounded-xl p-6 sm:p-8 border border-border">
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#6FAF2F]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 sm:h-7 sm:w-7 text-[#6FAF2F]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl">Call Us</h3>
                </div>
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base">
                  <div>
                    <div className="font-semibold text-foreground">24/7 Emergency Hotline</div>
                    <a href="tel:+18457204040" className="text-base sm:text-lg text-[#6FAF2F] hover:underline">+1 (845) 720-4040</a>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">International</div>
                    <a href="tel:+97222758624" className="text-base sm:text-lg text-[#4A86C5] hover:underline">+972-2-ASKUNAI</a>
                  </div>
                  <div className="text-xs sm:text-sm">
                    Available in multiple languages, 24/7/365
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-xl p-6 sm:p-8 border border-border">
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#4A86C5]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 sm:h-7 sm:w-7 text-[#4A86C5]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl">Email Us</h3>
                </div>
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base">
                  <div>
                    <div className="font-semibold text-foreground">Emergency Support</div>
                    <a href="mailto:emergency@askunaihair.org" className="text-base sm:text-lg text-[#6FAF2F] hover:underline break-all">
                      emergency@askunaihair.org
                    </a>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">General Inquiries</div>
                    <a href="mailto:help@askunaihair.org" className="text-base sm:text-lg text-[#4A86C5] hover:underline break-all">
                      help@askunaihair.org
                    </a>
                  </div>
                  <div className="text-xs sm:text-sm">
                    We typically respond within 1-2 hours
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
