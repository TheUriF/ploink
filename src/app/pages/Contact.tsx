import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Globe, MessageSquare, Building, Clock } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Contact form submitted:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#6FAF2F]/10 to-[#4A86C5]/10">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl mb-6"
          >
            <span className="text-[#6FAF2F]">Contact</span> Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Whether you need help, want to volunteer, or have questions about our work, we're here for you
          </motion.p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-background rounded-xl p-6 text-center shadow-md">
              <div className="w-12 h-12 bg-[#d4183d]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-[#d4183d]" />
              </div>
              <h3 className="font-semibold mb-2">Emergency Hotline</h3>
              <p className="text-sm text-muted-foreground mb-2">24/7 Crisis Support</p>
              <a href="tel:+18457204040" className="text-[#d4183d] font-semibold">
                +1 (845) 720-4040
              </a>
            </div>

            <div className="bg-background rounded-xl p-6 text-center shadow-md">
              <div className="w-12 h-12 bg-[#6FAF2F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-[#6FAF2F]" />
              </div>
              <h3 className="font-semibold mb-2">General Inquiries</h3>
              <p className="text-sm text-muted-foreground mb-2">Responses within 24 hours</p>
              <a href="mailto:info@askunaihair.org" className="text-[#6FAF2F] hover:underline text-sm">
                info@askunaihair.org
              </a>
            </div>

            <div className="bg-background rounded-xl p-6 text-center shadow-md">
              <div className="w-12 h-12 bg-[#4A86C5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-[#4A86C5]" />
              </div>
              <h3 className="font-semibold mb-2">International</h3>
              <p className="text-sm text-muted-foreground mb-2">Global Operations</p>
              <a href="tel:+97222758624" className="text-[#4A86C5] font-semibold">
                +972-2-ASKUNAI
              </a>
            </div>

            <div className="bg-background rounded-xl p-6 text-center shadow-md">
              <div className="w-12 h-12 bg-[#9FD36B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-6 w-6 text-[#9FD36B]" />
              </div>
              <h3 className="font-semibold mb-2">Volunteer Support</h3>
              <p className="text-sm text-muted-foreground mb-2">Training & Resources</p>
              <a href="mailto:volunteers@askunaihair.org" className="text-[#9FD36B] hover:underline text-sm">
                volunteers@askunaihair.org
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl mb-8">Send Us a Message</h2>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#6FAF2F]/10 border border-[#6FAF2F] rounded-xl p-6 mb-8 flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-[#6FAF2F] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="bg-background rounded-xl border border-border p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block mb-2">
                      Full Name <span className="text-[#d4183d]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[#6FAF2F]"
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-[#d4183d] text-sm mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2">
                      Email <span className="text-[#d4183d]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[#6FAF2F]"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="text-[#d4183d] text-sm mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      {...register('phone')}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[#6FAF2F]"
                      placeholder="+1234567890"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-2">
                      Subject <span className="text-[#d4183d]">*</span>
                    </label>
                    <select
                      id="subject"
                      {...register('subject', { required: 'Please select a subject' })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[#6FAF2F]"
                    >
                      <option value="">Select subject...</option>
                      <option value="general">General Inquiry</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="donation">Donation Questions</option>
                      <option value="media">Media & Press</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && <p className="text-[#d4183d] text-sm mt-1">{errors.subject.message}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message <span className="text-[#d4183d]">*</span>
                  </label>
                  <textarea
                    id="message"
                    {...register('message', { required: 'Please enter a message' })}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[#6FAF2F] resize-none"
                    placeholder="How can we help you?"
                  />
                  {errors.message && <p className="text-[#d4183d] text-sm mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#6FAF2F] hover:bg-[#5e9527] text-white py-4 rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl mb-8">Get in Touch</h2>
                <p className="text-muted-foreground mb-6">
                  We're here to answer your questions and connect you with the resources you need.
                </p>
              </div>

              <div className="bg-background rounded-xl border border-border p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#6FAF2F]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-[#6FAF2F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Office Hours</h3>
                    <p className="text-sm text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday - Sunday: 10:00 AM - 4:00 PM
                      <br />
                      <span className="text-[#d4183d] font-semibold">Emergency Hotline: 24/7</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#4A86C5]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#4A86C5]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <div className="space-y-1 text-sm">
                      <div>
                        <span className="text-muted-foreground">General: </span>
                        <a href="mailto:info@askunaihair.org" className="text-[#4A86C5] hover:underline">
                          info@askunaihair.org
                        </a>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Emergency: </span>
                        <a href="mailto:emergency@askunaihair.org" className="text-[#d4183d] hover:underline">
                          emergency@askunaihair.org
                        </a>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Press: </span>
                        <a href="mailto:media@askunaihair.org" className="text-[#4A86C5] hover:underline">
                          media@askunaihair.org
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#9FD36B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-[#9FD36B]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <div className="space-y-1 text-sm">
                      <div>
                        <span className="text-muted-foreground">USA: </span>
                        <a href="tel:+18457204040" className="text-[#9FD36B] hover:underline">
                          +1 (845) 720-4040
                        </a>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Israel: </span>
                        <a href="tel:+97222758624" className="text-[#9FD36B] hover:underline">
                          +972-2-ASKUNAI
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl text-center mb-12">Global Headquarters</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* US Headquarters */}
              <div className="bg-background rounded-xl p-8 border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-[#6FAF2F]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building className="h-7 w-7 text-[#6FAF2F]" />
                  </div>
                  <div>
                    <h3 className="text-2xl mb-1">United States HQ</h3>
                    <p className="text-muted-foreground">North American Operations Center</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#6FAF2F] flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <div className="font-semibold">Address</div>
                      <div className="text-muted-foreground">
                        123 Volunteer Way
                        <br />
                        New York, NY 10001
                        <br />
                        United States
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-[#6FAF2F] flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <div className="font-semibold">Phone</div>
                      <a href="tel:+12125551234" className="text-[#6FAF2F] hover:underline">
                        +1 (212) 555-1234
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-[#6FAF2F] flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <div className="font-semibold">Email</div>
                      <a href="mailto:usa@askunaihair.org" className="text-[#6FAF2F] hover:underline">
                        usa@askunaihair.org
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Israel Headquarters */}
              <div className="bg-background rounded-xl p-8 border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-[#4A86C5]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building className="h-7 w-7 text-[#4A86C5]" />
                  </div>
                  <div>
                    <h3 className="text-2xl mb-1">Israel HQ</h3>
                    <p className="text-muted-foreground">International Operations Center</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#4A86C5] flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <div className="font-semibold">Address</div>
                      <div className="text-muted-foreground">
                        45 Coordination Street
                        <br />
                        Jerusalem, 9100001
                        <br />
                        Israel
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-[#4A86C5] flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <div className="font-semibold">Phone</div>
                      <a href="tel:+97225551234" className="text-[#4A86C5] hover:underline">
                        +972 (2) 555-1234
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-[#4A86C5] flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <div className="font-semibold">Email</div>
                      <a href="mailto:israel@askunaihair.org" className="text-[#4A86C5] hover:underline">
                        israel@askunaihair.org
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-6">Find Your Regional Office</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We have coordination centers in 87 countries. Check our Global Operations page to find the office nearest you.
          </p>
          <a
            href="/global-operations"
            className="inline-block bg-[#6FAF2F] hover:bg-[#5e9527] text-white px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            View Global Operations
          </a>
        </div>
      </section>
    </div>
  );
}
