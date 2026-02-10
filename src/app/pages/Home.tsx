import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, Zap, Heart, Users, Shield, Package, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export function Home() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    countries: 0,
    volunteers: 0,
    emergencies: 0,
    lives: 0,
  });

  useEffect(() => {
    const targetStats = {
      countries: 87,
      volunteers: 15420,
      emergencies: 3200,
      lives: 48000,
    };

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats({
        countries: Math.floor(targetStats.countries * progress),
        volunteers: Math.floor(targetStats.volunteers * progress),
        emergencies: Math.floor(targetStats.emergencies * progress),
        lives: Math.floor(targetStats.lives * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setStats(targetStats);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      name: 'Manny Erps',
      role: 'Emergency Coordinator - Jerusalem',
      quote: 'Being an askan means being there when people need you most. Every response we coordinate can change a life.',
      image: 'volunteer elderly man',
    },
    {
      name: 'Shaya Shlez',
      role: 'Medical Response Coordinator - Sullivan County',
      quote: 'Our network of volunteers spans continents, but our mission is singular: help those in crisis, no matter where they are.',
      image: 'volunteer medical professional woman',
    },
    {
      name: 'Moshe Levy',
      role: 'Community Organizer - London',
      quote: 'The speed of our response can mean the difference between tragedy and hope. We train to be ready.',
      image: 'volunteer community organizer man',
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#6FAF2F]/10 via-background to-[#4A86C5]/10">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
            <svg viewBox="0 0 800 800" className="w-full h-full animate-spin-slow">
              <circle cx="400" cy="400" r="300" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
              <circle cx="400" cy="400" r="250" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
              <circle cx="400" cy="400" r="200" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
              {[...Array(24)].map((_, i) => {
                const angle = (i * 15 * Math.PI) / 180;
                const x1 = 400 + Math.cos(angle) * 200;
                const y1 = 400 + Math.sin(angle) * 200;
                const x2 = 400 + Math.cos(angle) * 300;
                const y2 = 400 + Math.sin(angle) * 300;
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" opacity="0.1" />;
              })}
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl mb-6"
          >
            Coordinating Help
            <br />
            <span className="text-[#6FAF2F]">When It Matters Most</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10"
          >
            A global volunteer network providing rapid response and humanitarian support across communities worldwide.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => navigate('/get-help')}
              className="bg-[#6FAF2F] hover:bg-[#5e9527] text-white px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Help Now
            </button>
            <button
              onClick={() => navigate('/apply')}
              className="bg-[#4A86C5] hover:bg-[#3a6ba0] text-white px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Become a Volunteer
            </button>
          </motion.div>
        </div>
      </section>

      {/* Mission Strip */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-[#6FAF2F]/10 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-[#6FAF2F]" />
              </div>
              <h3 className="mb-2">Global Reach</h3>
              <p className="text-muted-foreground">
                Operating in 87 countries with coordinated response teams ready 24/7
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-background rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-[#4A86C5]/10 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-[#4A86C5]" />
              </div>
              <h3 className="mb-2">Rapid Response</h3>
              <p className="text-muted-foreground">
                Emergency coordination within minutes, deployment within hours
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-background rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-[#9FD36B]/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-[#9FD36B]" />
              </div>
              <h3 className="mb-2">Community Support</h3>
              <p className="text-muted-foreground">
                Led by askanim dedicated to serving their communities with compassion
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">What We Do</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive humanitarian coordination across multiple domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#6FAF2F]/5 to-transparent rounded-xl p-6 border border-border hover:border-[#6FAF2F]/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#6FAF2F] rounded-lg flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3">Emergency Response Coordination</h3>
              <p className="text-muted-foreground">
                24/7 dispatch system connecting those in crisis with trained volunteers and emergency services
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-[#4A86C5]/5 to-transparent rounded-xl p-6 border border-border hover:border-[#4A86C5]/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#4A86C5] rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3">Medical & Crisis Support</h3>
              <p className="text-muted-foreground">
                Coordinated medical response teams and mental health support for communities in need
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-[#9FD36B]/5 to-transparent rounded-xl p-6 border border-border hover:border-[#9FD36B]/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#9FD36B] rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3">Community Aid & Resources</h3>
              <p className="text-muted-foreground">
                Essential supplies, shelter coordination, and ongoing support for families facing hardship
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-[#6FAF2F]/5 to-transparent rounded-xl p-6 border border-border hover:border-[#6FAF2F]/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#6FAF2F] rounded-lg flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3">Global Volunteer Deployment</h3>
              <p className="text-muted-foreground">
                Strategic deployment of skilled volunteers to disaster zones and communities in crisis
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-[#6FAF2F]/10 via-background to-[#4A86C5]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">Our Global Impact</h2>
            <p className="text-xl text-muted-foreground">
              Numbers that represent real lives touched and communities strengthened
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl text-[#6FAF2F] mb-2">
                {stats.countries}+
              </div>
              <div className="text-lg text-muted-foreground">Countries Served</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl text-[#4A86C5] mb-2">
                {stats.volunteers.toLocaleString()}+
              </div>
              <div className="text-lg text-muted-foreground">Active Volunteers</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl text-[#9FD36B] mb-2">
                {stats.emergencies.toLocaleString()}+
              </div>
              <div className="text-lg text-muted-foreground">Emergencies Responded To</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl text-[#6FAF2F] mb-2">
                {stats.lives.toLocaleString()}+
              </div>
              <div className="text-lg text-muted-foreground">Lives Helped</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Askanim Spotlight */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">Voices from the Field</h2>
            <p className="text-xl text-muted-foreground">
              Meet the askanim coordinating help around the world
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-background rounded-2xl shadow-xl p-8 md:p-12 border border-border"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#6FAF2F] to-[#4A86C5] rounded-full flex items-center justify-center">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-xl italic mb-6 text-foreground">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <div>
                    <div className="font-semibold text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-muted-foreground">{testimonials[currentTestimonial].role}</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-[#6FAF2F] w-8'
                        : 'bg-muted hover:bg-muted-foreground'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="py-20 bg-gradient-to-r from-[#6FAF2F] to-[#5e9527]">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">Your Support Saves Time — And Time Saves Lives</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
              Every donation helps us maintain our rapid response network and deploy volunteers where they're needed most.
            </p>
            <button
              onClick={() => navigate('/donate')}
              className="bg-white text-[#6FAF2F] px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Donate Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
