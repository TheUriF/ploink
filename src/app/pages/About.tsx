import { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, Users, Award, Eye, Target, Scale, Phone, Shield, Package, Activity, MapPin } from 'lucide-react';

const serviceAreas = [
  {
    title: 'Crisis Dispatch',
    description: '24/7 triage and routing so urgent calls quickly reach the right regional responders.',
    icon: Phone,
    color: 'text-[#6FAF2F]',
  },
  {
    title: 'Medical & Safety Support',
    description: 'Coordination with trained volunteers, clinicians, and local emergency partners.',
    icon: Shield,
    color: 'text-[#4A86C5]',
  },
  {
    title: 'Family & Community Aid',
    description: 'Practical support such as supplies, transportation, and continuity care for families.',
    icon: Package,
    color: 'text-[#9FD36B]',
  },
];

interface Region {
  name: string;
  coordinator: string;
  volunteers: number;
  languages: string[];
  activeOps: number;
}

const regions: Region[] = [
  {
    name: 'North America',
    coordinator: 'Michel Chavez',
    volunteers: 1300,
    languages: ['English', 'Spanish', 'French'],
    activeOps: 39,
  },
  {
    name: 'Europe',
    coordinator: 'Sarah Levine',
    volunteers: 640,
    languages: ['English', 'French', 'German', 'Russian', 'Italian'],
    activeOps: 21,
  },
  {
    name: 'Middle East',
    coordinator: 'David Ben-Ami',
    volunteers: 709,
    languages: ['Hebrew', 'Arabic', 'English'],
    activeOps: 23,
  },
  {
    name: 'Asia Pacific',
    coordinator: 'Dr. Rachel Chen',
    volunteers: 300,
    languages: ['English', 'Mandarin', 'Japanese', 'Hindi'],
    activeOps: 14,
  },
  {
    name: 'Latin America',
    coordinator: 'Carlos Martinez',
    volunteers: 205,
    languages: ['Spanish', 'Portuguese', 'English'],
    activeOps: 7,
  },
  {
    name: 'Africa',
    coordinator: 'Dr. Miriam Adeyemi',
    volunteers: 46,
    languages: ['English', 'French', 'Swahili', 'Arabic'],
    activeOps: 3,
  },
];

export function About() {
  const [selectedRegion, setSelectedRegion] = useState<Region>(regions[0]);
  const maxVolunteers = Math.max(...regions.map((region) => region.volunteers));

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
            About <span className="text-[#6FAF2F]">Askunai Ha'ir</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            One unified overview of who we are, what we do, and how our global operations are coordinated.
          </motion.p>
        </div>
      </section>

      {/* Mission + Story */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 text-center">Our Mission</h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Askunai Ha'ir exists to coordinate fast, compassionate humanitarian response in moments of crisis.
                We connect people in urgent need with trained volunteers, local partners, and practical resources.
              </p>
            </div>

            <div className="bg-muted rounded-xl p-5 sm:p-8 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-[#6FAF2F]" />
                <h3 className="text-xl sm:text-2xl">Our Story</h3>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Askunai Ha'ir was founded by Sruly Pfeiffer on a simple yet powerful belief: in moments of crisis, coordinated action saves lives. What began as a small group of community organizers responding to local emergencies has grown into a global humanitarian network spanning 87 countries.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
The name "Askunai Ha'ir" translates to "community activists," a title that captures the essence of our mission. We are askunim: community coordinators, organizers, and first responders who dedicate ourselves to serving others.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
Today, our network includes over 3,000 trained volunteers ready to respond at a moment's notice. From natural disasters to medical emergencies, from family crises to community-wide challenges, we coordinate resources, deploy volunteers, and provide critical support when communities need it most.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
Our strength lies not in any single individual, but in our coordinated network. When crisis strikes anywhere in the world, our askunim activate a web of resources, expertise, and compassionate action that can make the difference between tragedy and hope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">What We Do</h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Three core service domains guide every response.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {serviceAreas.map((service) => {
                const Icon = service.icon;
                return (
                  <article key={service.title} className="bg-background rounded-xl p-5 sm:p-6 border border-border h-full">
                    <Icon className={`h-7 w-7 sm:h-8 sm:w-8 mb-3 ${service.color}`} />
                    <h3 className="text-lg sm:text-xl mb-2">{service.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{service.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Global Operations */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#4A86C5] rounded-full flex items-center justify-center">
                <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl">Global Operations</h2>
                <p className="text-sm sm:text-base text-muted-foreground">Regional coverage and language readiness</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="lg:col-span-1 space-y-2 sm:space-y-3">
                {regions.map((region) => (
                  <button
                    key={region.name}
                    onClick={() => setSelectedRegion(region)}
                    className={`w-full text-left rounded-xl border p-3 sm:p-4 transition-all ${
                      selectedRegion.name === region.name
                        ? 'bg-[#6FAF2F] text-white border-[#6FAF2F] shadow-md'
                        : 'bg-background border-border hover:border-[#6FAF2F]'
                    }`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                      <div className="flex-1">
                        <div className="font-semibold text-sm sm:text-base">{region.name}</div>
                        <div className={`text-xs sm:text-sm ${selectedRegion.name === region.name ? 'text-white/85' : 'text-muted-foreground'}`}>
                          {region.volunteers.toLocaleString()} volunteers
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="lg:col-span-2 rounded-xl border border-border bg-background p-4 sm:p-6">
                <div className="flex items-start justify-between gap-4 mb-4 sm:mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl">{selectedRegion.name}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mt-1">
                      Regional coordinator: {selectedRegion.coordinator}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-lg bg-[#6FAF2F]/10 text-[#6FAF2F] px-3 py-1.5 text-xs sm:text-sm font-semibold">
                    <Activity className="h-4 w-4 animate-pulse" />
                    {selectedRegion.activeOps} active ops
                  </div>
                </div>

                <div className="space-y-3 mb-5 sm:mb-6">
                  {regions.map((region) => (
                    <div key={region.name}>
                      <div className="flex items-center justify-between text-xs sm:text-sm mb-1.5">
                        <span className="text-muted-foreground">{region.name}</span>
                        <span className="font-medium">{region.volunteers.toLocaleString()}</span>
                      </div>
                      <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            region.name === selectedRegion.name ? 'bg-[#6FAF2F]' : 'bg-[#4A86C5]/70'
                          }`}
                          style={{ width: `${(region.volunteers / maxVolunteers) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <div className="text-sm sm:text-base font-semibold mb-2">Language support</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedRegion.languages.map((language) => (
                      <span key={language} className="px-2.5 py-1 rounded-full bg-muted text-xs sm:text-sm">
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance + Transparency */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5 sm:gap-6">
            <div className="bg-background rounded-xl p-5 sm:p-6 border border-border">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <Award className="h-6 w-6 text-[#6FAF2F]" />
                <h3 className="text-xl sm:text-2xl">Leadership Model</h3>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                A global coordination council aligns standards, while regional coordinators lead operations closest to
                communities in need.
              </p>
            </div>

            <div className="bg-background rounded-xl p-5 sm:p-6 border border-border">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <Scale className="h-6 w-6 text-[#4A86C5]" />
                <h3 className="text-xl sm:text-2xl">Ethics & Accountability</h3>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We prioritize dignity, privacy, and safety while maintaining transparent operations and oversight.
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mt-5 sm:mt-6 bg-background rounded-xl p-5 sm:p-6 border border-border">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <Eye className="h-6 w-6 text-[#9FD36B]" />
              <h3 className="text-xl sm:text-2xl">Transparency</h3>
              <Target className="h-6 w-6 text-[#6FAF2F]" />
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              We share impact reporting, financial visibility, and operational standards so supporters understand how
              resources are used and where they make the greatest difference.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
