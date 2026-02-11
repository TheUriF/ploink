import { motion } from 'motion/react';
import { Globe, Users, Award, Eye, Target, Scale } from 'lucide-react';

export function About() {
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
            About <span className="text-[#6FAF2F]">Askunai Ha'ir</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            We are a global network of dedicated volunteers united by one mission: coordinate help when it matters most.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-6 text-center">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Askunai Ha'ir was founded by Sruly Pfeiffer on a simple yet powerful belief: in moments of crisis, coordinated action saves lives. What began as a small group of community organizers responding to local emergencies has grown into a global humanitarian network spanning 87 countries.
              </p>
              <p>
                The name "Askunai Ha'ir" translates to "community activists," a title that captures the essence of our mission. We are askunim: community coordinators, organizers, and first responders who dedicate ourselves to serving others.
              </p>
              <p>
                Today, our network includes over 3,000 trained volunteers ready to respond at a moment's notice. From natural disasters to medical emergencies, from family crises to community-wide challenges, we coordinate resources, deploy volunteers, and provide critical support when communities need it most.
              </p>
              <p>
                Our strength lies not in any single individual, but in our coordinated network. When crisis strikes anywhere in the world, our askunim activate a web of resources, expertise, and compassionate action that can make the difference between tragedy and hope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Role of Askanim */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-[#6FAF2F] rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl">The Role of Askunim</h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                An <span className="text-foreground font-semibold">askan</span> (plural: askunim) is more than a volunteer — they are community coordinators who take personal responsibility for ensuring help reaches those who need it. Askunim serve as the vital link between crisis and response.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-background rounded-xl p-6 border border-border">
                  <h3 className="text-[#6FAF2F] mb-3">24/7 Coordination</h3>
                  <p>Askunim maintain round-the-clock availability to receive emergency calls and coordinate immediate response.</p>
                </div>
                <div className="bg-background rounded-xl p-6 border border-border">
                  <h3 className="text-[#4A86C5] mb-3">Resource Mobilization</h3>
                  <p>They activate networks of volunteers, supplies, and services tailored to each unique situation.</p>
                </div>
                <div className="bg-background rounded-xl p-6 border border-border">
                  <h3 className="text-[#9FD36B] mb-3">Local Expertise</h3>
                  <p>Operating within their communities, askunim understand local needs, customs, and resources intimately.</p>
                </div>
                <div className="bg-background rounded-xl p-6 border border-border">
                  <h3 className="text-[#6FAF2F] mb-3">Compassionate Leadership</h3>
                  <p>Beyond logistics, askunim provide emotional support and guidance during the most difficult moments.</p>
                </div>
              </div>

              <p>
                Our askunim come from all walks of life — medical professionals, logistics experts, counselors, emergency responders, and community leaders. What unites them is an unwavering commitment to service and the skills to coordinate effective, compassionate responses under pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Leadership Model */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-[#4A86C5] rounded-full flex items-center justify-center">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl">Global Leadership Model</h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Askunai Ha'ir operates through a decentralized yet highly coordinated leadership structure. Our dual headquarters in the United States and Israel serve as coordination hubs, but real decision-making power resides with regional coordinators who understand their communities' unique needs.
              </p>

              <div className="bg-background rounded-xl p-8 border border-border my-8">
                <h3 className="text-2xl text-foreground mb-6">Our Leadership Structure</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#6FAF2F]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Award className="h-6 w-6 text-[#6FAF2F]" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Global Coordination Council</div>
                      <div>Oversees strategy, training standards, and cross-border operations</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#4A86C5]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Globe className="h-6 w-6 text-[#4A86C5]" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Regional Directors</div>
                      <div>Lead operations across continents and major geographic regions</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#9FD36B]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="h-6 w-6 text-[#9FD36B]" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Community Coordinators</div>
                      <div>Askunim on the ground managing local volunteer networks and responses</div>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                This structure ensures rapid, locally-appropriate responses while maintaining consistency in training, ethics, and coordination standards across our global network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ethics & Accountability */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-[#6FAF2F] rounded-full flex items-center justify-center">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl">Ethics & Accountability</h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Trust is the foundation of effective humanitarian work. We hold ourselves to the highest ethical standards and maintain rigorous accountability measures at every level of our organization.
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-background rounded-xl p-6 border border-border">
                  <div className="text-2xl text-[#6FAF2F] mb-3">Dignity First</div>
                  <p>Every person we serve is treated with respect, privacy, and compassion regardless of background or circumstance.</p>
                </div>
                <div className="bg-background rounded-xl p-6 border border-border">
                  <div className="text-2xl text-[#4A86C5] mb-3">Non-Partisan</div>
                  <p>We provide aid based solely on need, never on political affiliation, religious background, or other criteria.</p>
                </div>
                <div className="bg-background rounded-xl p-6 border border-border">
                  <div className="text-2xl text-[#9FD36B] mb-3">Financial Integrity</div>
                  <p>All donations are tracked, audited, and used exclusively for their stated humanitarian purposes.</p>
                </div>
              </div>

              <p>
                Our volunteer coordinators undergo comprehensive background checks and regular ethics training. We maintain an independent oversight board and publish annual transparency reports detailing our operations, finances, and impact metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-[#4A86C5] rounded-full flex items-center justify-center">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl">Our Commitment to Transparency</h2>
            </div>

            <div className="bg-gradient-to-br from-[#6FAF2F]/5 to-[#4A86C5]/5 rounded-xl p-8 border border-border">
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Transparency is not just a policy for us — it's a core value. We believe that those who support our mission deserve complete visibility into how their contributions create impact.
                </p>

                <div className="bg-background rounded-lg p-6">
                  <h3 className="text-foreground text-xl mb-4">We Publicly Share:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#6FAF2F] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Annual financial statements audited by independent third parties</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#6FAF2F] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Detailed impact reports showing how donations are used</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#6FAF2F] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Leadership and governance structure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#6FAF2F] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Response metrics and operational statistics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#6FAF2F] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Volunteer training standards and certification requirements</span>
                    </li>
                  </ul>
                </div>

                <p className="text-foreground font-semibold">
                  Questions about our operations? We welcome them. Contact our transparency team at transparency@askunaihair.org
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-[#6FAF2F] to-[#4A86C5] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <Target className="h-16 w-16 mx-auto mb-6" />
              <h2 className="text-4xl mb-6">Our Mission</h2>
              <p className="text-xl opacity-95">
                To coordinate rapid, compassionate humanitarian responses by mobilizing skilled volunteers and resources to communities in crisis, ensuring that help arrives when and where it's needed most.
              </p>
            </div>

            <div className="border-t border-white/20 pt-12">
              <Eye className="h-16 w-16 mx-auto mb-6" />
              <h2 className="text-4xl mb-6">Our Vision</h2>
              <p className="text-xl opacity-95">
                A world where no person faces crisis alone — where coordinated networks of volunteers stand ready to respond with compassion, expertise, and unwavering commitment to human dignity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
