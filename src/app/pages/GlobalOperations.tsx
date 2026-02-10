import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Users, Phone, Globe, Activity } from 'lucide-react';

interface Region {
  name: string;
  coordinator: string;
  volunteers: number;
  languages: string[];
  activeOps: number;
  contact: string;
}

export function GlobalOperations() {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  const regions: Record<string, Region> = {
    'North America': {
      name: 'North America',
      coordinator: 'Rabbi Michael Goldstein',
      volunteers: 4200,
      languages: ['English', 'Spanish', 'French'],
      activeOps: 23,
      contact: 'northamerica@askunaihair.org'
    },
    'Europe': {
      name: 'Europe',
      coordinator: 'Sarah Levine',
      volunteers: 3800,
      languages: ['English', 'French', 'German', 'Russian', 'Italian'],
      activeOps: 31,
      contact: 'europe@askunaihair.org'
    },
    'Middle East': {
      name: 'Middle East',
      coordinator: 'David Ben-Ami',
      volunteers: 2900,
      languages: ['Hebrew', 'Arabic', 'English'],
      activeOps: 18,
      contact: 'middleeast@askunaihair.org'
    },
    'Asia Pacific': {
      name: 'Asia Pacific',
      coordinator: 'Dr. Rachel Chen',
      volunteers: 2100,
      languages: ['English', 'Mandarin', 'Japanese', 'Hindi'],
      activeOps: 14,
      contact: 'asiapacific@askunaihair.org'
    },
    'Latin America': {
      name: 'Latin America',
      coordinator: 'Carlos Martinez',
      volunteers: 1600,
      languages: ['Spanish', 'Portuguese', 'English'],
      activeOps: 12,
      contact: 'latinamerica@askunaihair.org'
    },
    'Africa': {
      name: 'Africa',
      coordinator: 'Dr. Miriam Adeyemi',
      volunteers: 820,
      languages: ['English', 'French', 'Swahili', 'Arabic'],
      activeOps: 9,
      contact: 'africa@askunaihair.org'
    }
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
            <span className="text-[#6FAF2F]">Global</span> Operations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Our worldwide network of volunteers and coordinators operating across 87 countries
          </motion.p>
        </div>
      </section>

      {/* Global Stats */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-background rounded-xl p-6 text-center shadow-md">
              <div className="text-4xl font-bold text-[#6FAF2F] mb-2">87</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
            <div className="bg-background rounded-xl p-6 text-center shadow-md">
              <div className="text-4xl font-bold text-[#4A86C5] mb-2">15,420</div>
              <div className="text-muted-foreground">Volunteers</div>
            </div>
            <div className="bg-background rounded-xl p-6 text-center shadow-md">
              <div className="text-4xl font-bold text-[#9FD36B] mb-2">107</div>
              <div className="text-muted-foreground">Active Operations</div>
            </div>
            <div className="bg-background rounded-xl p-6 text-center shadow-md">
              <div className="text-4xl font-bold text-[#6FAF2F] mb-2">32+</div>
              <div className="text-muted-foreground">Languages</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Regional Operations</h2>
            <p className="text-lg text-muted-foreground">
              Click on a region to learn about local operations and coordinators
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Region Buttons */}
            <div className="lg:col-span-1 space-y-3">
              {Object.values(regions).map((region) => (
                <button
                  key={region.name}
                  onClick={() => setSelectedRegion(region)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                    selectedRegion?.name === region.name
                      ? 'bg-[#6FAF2F] text-white border-[#6FAF2F] shadow-lg'
                      : 'bg-background border-border hover:border-[#6FAF2F] hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin className={`h-5 w-5 ${selectedRegion?.name === region.name ? 'text-white' : 'text-[#6FAF2F]'}`} />
                    <div className="flex-1">
                      <div className="font-semibold">{region.name}</div>
                      <div className={`text-sm ${selectedRegion?.name === region.name ? 'text-white/80' : 'text-muted-foreground'}`}>
                        {region.volunteers.toLocaleString()} volunteers
                      </div>
                    </div>
                    {region.activeOps > 0 && (
                      <div className={`px-2 py-1 rounded text-xs ${
                        selectedRegion?.name === region.name
                          ? 'bg-white/20 text-white'
                          : 'bg-[#6FAF2F]/10 text-[#6FAF2F]'
                      }`}>
                        {region.activeOps} active
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Region Details */}
            <div className="lg:col-span-2">
              {selectedRegion ? (
                <motion.div
                  key={selectedRegion.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-background rounded-xl border border-border p-8 shadow-lg"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl mb-2">{selectedRegion.name}</h3>
                      <p className="text-muted-foreground">Regional Operations Center</p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#6FAF2F]/10 rounded-lg">
                      <Activity className="h-5 w-5 text-[#6FAF2F] animate-pulse" />
                      <span className="text-[#6FAF2F] font-semibold">{selectedRegion.activeOps} Active Operations</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-5 w-5 text-[#4A86C5]" />
                        <h4 className="font-semibold">Regional Coordinator</h4>
                      </div>
                      <p className="text-muted-foreground ml-7">{selectedRegion.coordinator}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-5 w-5 text-[#6FAF2F]" />
                        <h4 className="font-semibold">Volunteer Network</h4>
                      </div>
                      <p className="text-muted-foreground ml-7">
                        {selectedRegion.volunteers.toLocaleString()} trained volunteers ready for deployment
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Globe className="h-5 w-5 text-[#9FD36B]" />
                        <h4 className="font-semibold">Language Support</h4>
                      </div>
                      <div className="ml-7 flex flex-wrap gap-2">
                        {selectedRegion.languages.map((lang) => (
                          <span
                            key={lang}
                            className="px-3 py-1 bg-muted rounded-full text-sm"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Phone className="h-5 w-5 text-[#4A86C5]" />
                        <h4 className="font-semibold">Contact</h4>
                      </div>
                      <a
                        href={`mailto:${selectedRegion.contact}`}
                        className="text-[#4A86C5] hover:underline ml-7"
                      >
                        {selectedRegion.contact}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="bg-background rounded-xl border border-border p-12 text-center">
                  <Globe className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground">
                    Select a region to view detailed operations information
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Active Response Zones */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Current Active Response Zones</h2>
            <p className="text-lg text-muted-foreground">
              Areas where our teams are currently coordinating emergency assistance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-background rounded-xl p-6 border-l-4 border-[#6FAF2F]">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-3 h-3 bg-[#6FAF2F] rounded-full mt-1.5 animate-pulse"></div>
                <div>
                  <h3 className="font-semibold">Eastern Europe - Refugee Support</h3>
                  <p className="text-sm text-muted-foreground">Ongoing since Feb 2024</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Coordinating shelter, medical care, and family reunification services
              </p>
            </div>

            <div className="bg-background rounded-xl p-6 border-l-4 border-[#4A86C5]">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-3 h-3 bg-[#4A86C5] rounded-full mt-1.5 animate-pulse"></div>
                <div>
                  <h3 className="font-semibold">Pacific Islands - Disaster Recovery</h3>
                  <p className="text-sm text-muted-foreground">Active since Jan 2026</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Rebuilding efforts following tropical cyclone damage
              </p>
            </div>

            <div className="bg-background rounded-xl p-6 border-l-4 border-[#9FD36B]">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-3 h-3 bg-[#9FD36B] rounded-full mt-1.5 animate-pulse"></div>
                <div>
                  <h3 className="font-semibold">Central Africa - Medical Mission</h3>
                  <p className="text-sm text-muted-foreground">Deployed Dec 2025</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Mobile medical clinics and health infrastructure support
              </p>
            </div>

            <div className="bg-background rounded-xl p-6 border-l-4 border-[#6FAF2F]">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-3 h-3 bg-[#6FAF2F] rounded-full mt-1.5 animate-pulse"></div>
                <div>
                  <h3 className="font-semibold">South Asia - Flood Response</h3>
                  <p className="text-sm text-muted-foreground">Emergency deployment Jan 2026</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Water purification, emergency shelter, and food distribution
              </p>
            </div>

            <div className="bg-background rounded-xl p-6 border-l-4 border-[#4A86C5]">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-3 h-3 bg-[#4A86C5] rounded-full mt-1.5 animate-pulse"></div>
                <div>
                  <h3 className="font-semibold">North America - Winter Storm Relief</h3>
                  <p className="text-sm text-muted-foreground">Active since Jan 2026</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Power outage support, warming centers, and emergency supplies
              </p>
            </div>

            <div className="bg-background rounded-xl p-6 border-l-4 border-[#9FD36B]">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-3 h-3 bg-[#9FD36B] rounded-full mt-1.5 animate-pulse"></div>
                <div>
                  <h3 className="font-semibold">Middle East - Community Rebuilding</h3>
                  <p className="text-sm text-muted-foreground">Ongoing coordination</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Infrastructure repair and psychological support services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coordination Centers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Regional Coordination Centers</h2>
            <p className="text-lg text-muted-foreground">
              Physical hubs where our askanim coordinate responses and train volunteers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { city: 'New York', country: 'USA', region: 'North America' },
              { city: 'Jerusalem', country: 'Israel', region: 'Middle East' },
              { city: 'London', country: 'UK', region: 'Europe' },
              { city: 'São Paulo', country: 'Brazil', region: 'Latin America' },
              { city: 'Mumbai', country: 'India', region: 'Asia Pacific' },
              { city: 'Johannesburg', country: 'South Africa', region: 'Africa' },
            ].map((center) => (
              <div key={center.city} className="bg-background rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-[#6FAF2F]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#6FAF2F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{center.city}</h3>
                    <p className="text-muted-foreground">{center.country}</p>
                    <p className="text-sm text-[#4A86C5] mt-2">{center.region}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#6FAF2F] to-[#4A86C5] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-6">Join Our Global Network</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Become part of a worldwide community of volunteers making a real difference
          </p>
          <a
            href="/apply"
            className="inline-block bg-white text-[#6FAF2F] px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Apply to Volunteer
          </a>
        </div>
      </section>
    </div>
  );
}
