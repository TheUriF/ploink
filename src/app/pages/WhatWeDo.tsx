import { motion } from 'motion/react';
import { Phone, Shield, Heart, Package, Radio, Truck, Users, Building2, MapPin } from 'lucide-react';

export function WhatWeDo() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#6FAF2F]/10 to-[#4A86C5]/10">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6"
          >
            <span className="text-[#6FAF2F]">What We Do</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Comprehensive humanitarian coordination across five core domains of service
          </motion.p>
        </div>
      </section>

      {/* Crisis Dispatch System */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#6FAF2F] rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl">Crisis Dispatch System</h2>
              </div>
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-muted-foreground">
                <p>
                  Our 24/7 crisis dispatch system is the nerve center of Askunai Ha'ir's operations. When emergency calls come in, our trained coordinators immediately assess the situation and activate the appropriate response.
                </p>
                <p>
                  Within minutes, we connect those in crisis with:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#6FAF2F] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Nearest available trained volunteers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#6FAF2F] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Emergency medical services and first responders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#6FAF2F] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Mental health crisis counselors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#6FAF2F] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Community resources and support services</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#6FAF2F]/10 to-transparent rounded-2xl p-4 sm:p-6 md:p-8 border border-border"
            >
              <h3 className="text-xl sm:text-2xl mb-4 sm:mb-6">How Our Dispatch Works</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#6FAF2F] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Emergency Contact</div>
                    <div className="text-muted-foreground">Call received through hotline, app, or regional coordinator</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#6FAF2F] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Rapid Assessment</div>
                    <div className="text-muted-foreground">Trained dispatcher evaluates urgency and needed resources</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#6FAF2F] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Resource Activation</div>
                    <div className="text-muted-foreground">Nearest qualified volunteers notified and deployed</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#6FAF2F] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Ongoing Coordination</div>
                    <div className="text-muted-foreground">Continuous monitoring and resource adjustment as needed</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Field Volunteer Coordination */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-2"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#4A86C5] rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl">Field Volunteer Coordination</h2>
              </div>
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-muted-foreground">
                <p>
                  Our global network of 3,000+ volunteers represents diverse skills and expertise. Coordinating this distributed workforce requires sophisticated systems and experienced askunim.
                </p>
                <p>
                  We maintain detailed volunteer profiles including:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#4A86C5] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Professional certifications and specialized skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#4A86C5] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Language capabilities and cultural expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#4A86C5] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Availability windows and deployment preferences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#4A86C5] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Past deployment experience and performance</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-1"
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-background rounded-xl p-4 sm:p-6 border border-border">
                  <Radio className="h-8 w-8 text-[#4A86C5] mb-3" />
                  <div className="text-2xl font-semibold mb-1">Real-Time</div>
                  <div className="text-muted-foreground">GPS tracking and status updates</div>
                </div>
                <div className="bg-background rounded-xl p-6 border border-border">
                  <Shield className="h-8 w-8 text-[#6FAF2F] mb-3" />
                  <div className="text-2xl font-semibold mb-1">Safety First</div>
                  <div className="text-muted-foreground">Comprehensive volunteer protection</div>
                </div>
                <div className="bg-background rounded-xl p-6 border border-border">
                  <MapPin className="h-8 w-8 text-[#9FD36B] mb-3" />
                  <div className="text-2xl font-semibold mb-1">Strategic</div>
                  <div className="text-muted-foreground">Optimized deployment routing</div>
                </div>
                <div className="bg-background rounded-xl p-6 border border-border">
                  <Building2 className="h-8 w-8 text-[#4A86C5] mb-3" />
                  <div className="text-2xl font-semibold mb-1">Connected</div>
                  <div className="text-muted-foreground">Integrated coordination hubs</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Logistics */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#9FD36B] rounded-xl flex items-center justify-center">
                  <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl">Emergency Logistics</h2>
              </div>
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-muted-foreground">
                <p>
                  Effective humanitarian response requires more than good intentions — it demands sophisticated logistics. We maintain strategic supply depots, transportation networks, and distribution systems across our operational areas.
                </p>
                <div className="bg-background rounded-xl p-4 sm:p-6 border border-border">
                  <h3 className="text-lg sm:text-xl text-foreground mb-3 sm:mb-4">Our Logistics Capabilities</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Package className="h-5 w-5 text-[#9FD36B] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground">Pre-Positioned Supplies</div>
                        <div className="text-sm">Medical kits, food, water, shelter materials stored strategically</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Truck className="h-5 w-5 text-[#9FD36B] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground">Transport Network</div>
                        <div className="text-sm">Partnerships with logistics providers for rapid deployment</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-[#9FD36B] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground">Distribution Hubs</div>
                        <div className="text-sm">Regional centers for efficient resource allocation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-[#9FD36B]/10 to-transparent rounded-2xl p-4 sm:p-6 md:p-8 border border-border">
                <h3 className="text-xl sm:text-2xl mb-4 sm:mb-6">Typical Emergency Kit Contents</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center gap-3 pb-3 border-b border-border">
                    <div className="w-8 h-8 bg-[#9FD36B]/20 rounded flex items-center justify-center flex-shrink-0">
                      <Shield className="h-4 w-4 text-[#9FD36B]" />
                    </div>
                    <span>Medical supplies and first aid equipment</span>
                  </div>
                  <div className="flex items-center gap-3 pb-3 border-b border-border">
                    <div className="w-8 h-8 bg-[#9FD36B]/20 rounded flex items-center justify-center flex-shrink-0">
                      <Package className="h-4 w-4 text-[#9FD36B]" />
                    </div>
                    <span>Non-perishable food and water purification</span>
                  </div>
                  <div className="flex items-center gap-3 pb-3 border-b border-border">
                    <div className="w-8 h-8 bg-[#9FD36B]/20 rounded flex items-center justify-center flex-shrink-0">
                      <Heart className="h-4 w-4 text-[#9FD36B]" />
                    </div>
                    <span>Hygiene and sanitation supplies</span>
                  </div>
                  <div className="flex items-center gap-3 pb-3 border-b border-border">
                    <div className="w-8 h-8 bg-[#9FD36B]/20 rounded flex items-center justify-center flex-shrink-0">
                      <Radio className="h-4 w-4 text-[#9FD36B]" />
                    </div>
                    <span>Communication equipment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#9FD36B]/20 rounded flex items-center justify-center flex-shrink-0">
                      <Shield className="h-4 w-4 text-[#9FD36B]" />
                    </div>
                    <span>Emergency shelter and blankets</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Family & Community Support */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#6FAF2F] rounded-xl flex items-center justify-center">
                <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl">Family & Community Support</h2>
            </div>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground">
              <p>
                Crisis doesn't end when the immediate emergency passes. Families and communities need ongoing support to rebuild, recover, and regain stability. Our askunim coordinate long-term assistance programs tailored to each situation.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-background rounded-xl p-4 sm:p-6 border border-border">
                  <h3 className="text-[#6FAF2F] text-lg sm:text-xl mb-2 sm:mb-3">Emotional Support</h3>
                  <p>Trauma counseling, grief support groups, and mental health services coordinated with local professionals</p>
                </div>
                <div className="bg-background rounded-xl p-6 border border-border">
                  <h3 className="text-[#4A86C5] text-xl mb-3">Financial Guidance</h3>
                  <p>Assistance navigating insurance, emergency funds, and community financial support programs</p>
                </div>
                <div className="bg-background rounded-xl p-6 border border-border">
                  <h3 className="text-[#9FD36B] text-xl mb-3">Housing Coordination</h3>
                  <p>Temporary shelter, housing assistance, and rebuilding support for displaced families</p>
                </div>
                <div className="bg-background rounded-xl p-6 border border-border">
                  <h3 className="text-[#6FAF2F] text-xl mb-3">Community Rebuilding</h3>
                  <p>Volunteer coordination for community infrastructure repair and restoration</p>
                </div>
              </div>

              <p className="text-foreground font-semibold">
                Our community support extends for weeks, months, or years as needed — because true recovery takes time, and no one should face it alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Border Humanitarian Aid */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#4A86C5] rounded-xl flex items-center justify-center">
                <Package className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl">Cross-Border Humanitarian Aid</h2>
            </div>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground">
              <p>
                When disasters strike or crises emerge, borders should never be barriers to compassion. Askunai Ha'ir maintains partnerships, legal frameworks, and logistics capabilities to coordinate rapid international humanitarian responses.
              </p>

              <div className="bg-gradient-to-br from-[#4A86C5]/10 to-[#6FAF2F]/10 rounded-xl p-4 sm:p-6 md:p-8 border border-border">
                <h3 className="text-xl sm:text-2xl text-foreground mb-4 sm:mb-6">International Coordination Includes:</h3>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h4 className="text-foreground mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#4A86C5] rounded-full"></div>
                      Disaster Response
                    </h4>
                    <p>Rapid deployment teams for natural disasters, coordinating with local governments and international organizations</p>
                  </div>
                  <div>
                    <h4 className="text-foreground mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#6FAF2F] rounded-full"></div>
                      Refugee Support
                    </h4>
                    <p>Assistance programs for displaced populations, working within established humanitarian frameworks</p>
                  </div>
                  <div>
                    <h4 className="text-foreground mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#9FD36B] rounded-full"></div>
                      Medical Missions
                    </h4>
                    <p>Coordination of medical volunteers and supplies to underserved areas during crises</p>
                  </div>
                  <div>
                    <h4 className="text-foreground mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#4A86C5] rounded-full"></div>
                      Infrastructure Support
                    </h4>
                    <p>Technical expertise and resources for rebuilding critical community infrastructure</p>
                  </div>
                </div>
              </div>

              <p>
                Our international operations adhere strictly to all applicable laws, customs regulations, and humanitarian standards. We work in partnership with local organizations and respect local leadership while providing coordinated support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#6FAF2F] to-[#4A86C5] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">See These Services in Action</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-95">
            Whether you need help or want to become part of our volunteer network, we're here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="/get-help"
              className="bg-white text-[#6FAF2F] px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg inline-block min-h-[44px] flex items-center justify-center"
            >
              Request Assistance
            </a>
            <a
              href="/apply"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 hover:bg-white/20 inline-block min-h-[44px] flex items-center justify-center"
            >
              Join Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
