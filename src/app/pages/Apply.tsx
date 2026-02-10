import { useState } from 'react';
import { motion } from 'motion/react';
import { Users, BookOpen, Target, CheckCircle, Calendar } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface ApplicationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  languages: string;
  skills: string[];
  availability: string;
  experience: string;
  motivation: string;
}

export function Apply() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ApplicationFormData>();

  const onSubmit = (data: ApplicationFormData) => {
    console.log('Application submitted:', data);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skillOptions = [
    'Medical/Healthcare',
    'Mental Health Counseling',
    'Emergency Response',
    'Logistics/Supply Chain',
    'Communications',
    'Translation',
    'Legal Services',
    'Social Work',
    'Engineering',
    'IT/Technology',
    'Transportation',
    'Food Services',
    'Administration',
    'Community Organizing',
    'Fundraising',
    'Other'
  ];

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
            Become an <span className="text-[#6FAF2F]">Askan</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Join our global network of volunteer coordinators and make a real difference when it matters most
          </motion.p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Your Journey to Becoming an Askan</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured path from application to active deployment
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-background rounded-xl p-6 border border-border shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-[#6FAF2F] rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold mb-2 text-[#6FAF2F]">Step 1</div>
                    <h3 className="mb-2">Apply</h3>
                    <p className="text-muted-foreground text-sm">
                      Submit your application with your skills, experience, and availability
                    </p>
                  </div>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#6FAF2F] to-[#4A86C5]"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative"
              >
                <div className="bg-background rounded-xl p-6 border border-border shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-[#4A86C5] rounded-full flex items-center justify-center mb-4 mx-auto">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold mb-2 text-[#4A86C5]">Step 2</div>
                    <h3 className="mb-2">Training</h3>
                    <p className="text-muted-foreground text-sm">
                      Complete comprehensive training in coordination, ethics, and emergency response
                    </p>
                  </div>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#4A86C5] to-[#9FD36B]"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="bg-background rounded-xl p-6 border border-border shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-[#9FD36B] rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold mb-2 text-[#9FD36B]">Step 3</div>
                    <h3 className="mb-2">Assignment</h3>
                    <p className="text-muted-foreground text-sm">
                      Get matched with your regional coordinator and local volunteer network
                    </p>
                  </div>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#9FD36B] to-[#6FAF2F]"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-background rounded-xl p-6 border border-border shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-[#6FAF2F] rounded-full flex items-center justify-center mb-4 mx-auto">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold mb-2 text-[#6FAF2F]">Step 4</div>
                    <h3 className="mb-2">Deployment</h3>
                    <p className="text-muted-foreground text-sm">
                      Begin coordinating responses and making a real difference in your community
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl mb-4">Volunteer Application</h2>
              <p className="text-lg text-muted-foreground">
                Take the first step towards becoming an askan. We'll review your application and contact you within 5-7 business days.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-background rounded-xl border border-border p-12 text-center"
              >
                <div className="w-20 h-20 bg-[#6FAF2F] rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-3xl mb-4">Application Submitted!</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Thank you for your interest in joining Askunai Ha'ir. Our volunteer coordinators will review your application and reach out to you within 5-7 business days.
                </p>
                <div className="bg-muted rounded-lg p-6">
                  <h3 className="text-xl mb-3">What happens next?</h3>
                  <ul className="text-left space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#6FAF2F] rounded-full mt-2 flex-shrink-0"></div>
                      <span>We'll review your application and verify your information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#6FAF2F] rounded-full mt-2 flex-shrink-0"></div>
                      <span>You'll receive an email to schedule an interview with a regional coordinator</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#6FAF2F] rounded-full mt-2 flex-shrink-0"></div>
                      <span>If accepted, we'll enroll you in our comprehensive training program</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="bg-background rounded-xl border border-border p-8 space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-2xl mb-4">Personal Information</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="firstName" className="block mb-2">
                        First Name <span className="text-[#d4183d]">*</span>
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        {...register('firstName', { required: 'First name is required' })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[#6FAF2F]"
                        placeholder="First name"
                      />
                      {errors.firstName && <p className="text-[#d4183d] text-sm mt-1">{errors.firstName.message}</p>}
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block mb-2">
                        Last Name <span className="text-[#d4183d]">*</span>
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        {...register('lastName', { required: 'Last name is required' })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[#6FAF2F]"
                        placeholder="Last name"
                      />
                      {errors.lastName && <p className="text-[#d4183d] text-sm mt-1">{errors.lastName.message}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
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

                    <div>
                      <label htmlFor="phone" className="block mb-2">
                        Phone Number <span className="text-[#d4183d]">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        {...register('phone', { required: 'Phone number is required' })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[#6FAF2F]"
                        placeholder="+1234567890"
                      />
                      {errors.phone && <p className="text-[#d4183d] text-sm mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="country" className="block mb-2">
                        Country <span className="text-[#d4183d]">*</span>
                      </label>
                      <input
                        id="country"
                        type="text"
                        {...register('country', { required: 'Country is required' })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[#6FAF2F]"
                        placeholder="Country"
                      />
                      {errors.country && <p className="text-[#d4183d] text-sm mt-1">{errors.country.message}</p>}
                    </div>

                    <div>
                      <label htmlFor="city" className="block mb-2">
                        City <span className="text-[#d4183d]">*</span>
                      </label>
                      <input
                        id="city"
                        type="text"
                        {...register('city', { required: 'City is required' })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[#6FAF2F]"
                        placeholder="City"
                      />
                      {errors.city && <p className="text-[#d4183d] text-sm mt-1">{errors.city.message}</p>}
                    </div>
                  </div>
                </div>

                {/* Skills & Experience */}
                <div>
                  <h3 className="text-2xl mb-4">Skills & Experience</h3>

                  <div className="mb-4">
                    <label htmlFor="languages" className="block mb-2">
                      Languages Spoken <span className="text-[#d4183d]">*</span>
                    </label>
                    <input
                      id="languages"
                      type="text"
                      {...register('languages', { required: 'Please list languages' })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[#6FAF2F]"
                      placeholder="e.g., English, Hebrew, Spanish"
                    />
                    {errors.languages && <p className="text-[#d4183d] text-sm mt-1">{errors.languages.message}</p>}
                  </div>

                  <div className="mb-4">
                    <label className="block mb-2">
                      Skills & Expertise <span className="text-[#d4183d]">*</span>
                    </label>
                    <p className="text-sm text-muted-foreground mb-3">Select all that apply</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {skillOptions.map((skill) => (
                        <label key={skill} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            value={skill}
                            {...register('skills', { required: 'Please select at least one skill' })}
                            className="w-4 h-4 text-[#6FAF2F] border-border rounded focus:ring-2 focus:ring-[#6FAF2F]"
                          />
                          <span className="text-sm">{skill}</span>
                        </label>
                      ))}
                    </div>
                    {errors.skills && <p className="text-[#d4183d] text-sm mt-1">{errors.skills.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="experience" className="block mb-2">
                      Relevant Experience <span className="text-[#d4183d]">*</span>
                    </label>
                    <textarea
                      id="experience"
                      {...register('experience', { required: 'Please describe your experience' })}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[#6FAF2F] resize-none"
                      placeholder="Describe your relevant experience in emergency response, community organizing, or humanitarian work..."
                    />
                    {errors.experience && <p className="text-[#d4183d] text-sm mt-1">{errors.experience.message}</p>}
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <h3 className="text-2xl mb-4 flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-[#4A86C5]" />
                    Availability
                  </h3>

                  <div className="mb-4">
                    <label htmlFor="availability" className="block mb-2">
                      Time Commitment <span className="text-[#d4183d]">*</span>
                    </label>
                    <select
                      id="availability"
                      {...register('availability', { required: 'Please select your availability' })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[#6FAF2F]"
                    >
                      <option value="">Select availability...</option>
                      <option value="full-time">Full-time volunteer (40+ hours/week)</option>
                      <option value="part-time">Part-time volunteer (20-40 hours/week)</option>
                      <option value="flexible">Flexible (10-20 hours/week)</option>
                      <option value="on-call">On-call only (available for emergencies)</option>
                      <option value="weekend">Weekends only</option>
                    </select>
                    {errors.availability && <p className="text-[#d4183d] text-sm mt-1">{errors.availability.message}</p>}
                  </div>
                </div>

                {/* Motivation */}
                <div>
                  <label htmlFor="motivation" className="block mb-2">
                    Why do you want to become an askan? <span className="text-[#d4183d]">*</span>
                  </label>
                  <textarea
                    id="motivation"
                    {...register('motivation', { required: 'Please tell us your motivation' })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[#6FAF2F] resize-none"
                    placeholder="Share what motivates you to join our humanitarian network..."
                  />
                  {errors.motivation && <p className="text-[#d4183d] text-sm mt-1">{errors.motivation.message}</p>}
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-[#6FAF2F] hover:bg-[#5e9527] text-white py-4 rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-lg"
                  >
                    Submit Application
                  </button>
                  <p className="text-sm text-muted-foreground text-center mt-4">
                    By submitting, you agree to our volunteer terms and background check requirements
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl text-center mb-12">What to Expect as a Volunteer</h2>

            <div className="space-y-6">
              <div className="bg-background rounded-xl p-6 border border-border">
                <h3 className="text-xl mb-3 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-[#6FAF2F]" />
                  Comprehensive Training
                </h3>
                <p className="text-muted-foreground">
                  All volunteers complete a structured training program covering emergency coordination, cultural sensitivity, ethics, communication protocols, and safety procedures. Training is available online and in-person.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 border border-border">
                <h3 className="text-xl mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#4A86C5]" />
                  Ongoing Support
                </h3>
                <p className="text-muted-foreground">
                  You'll be assigned to a regional coordinator who provides mentorship, answers questions, and ensures you have the resources needed for successful deployment. Regular check-ins and peer support networks keep you connected.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 border border-border">
                <h3 className="text-xl mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#9FD36B]" />
                  Flexible Commitment
                </h3>
                <p className="text-muted-foreground">
                  We understand that life happens. Your availability can change, and we work with your schedule. Whether you're available weekly or only for major emergencies, there's a place for you in our network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
