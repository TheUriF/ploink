import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Tag, ChevronRight } from 'lucide-react';

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  region: string;
  category: string;
  image: string;
  featured: boolean;
}

export function News() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const categories = [
    'all',
    'Emergency Response',
    'Volunteer Stories',
    'Global Operations',
    'Training',
    'Community Impact',
  ];

  const regions = [
    'all',
    'North America',
    'Europe',
    'Middle East',
    'Asia Pacific',
    'Latin America',
    'Africa',
  ];

  const articles: NewsArticle[] = [
    {
      id: 1,
      title: 'Rapid Response Team Deploys to Pacific Islands After Cyclone',
      excerpt: 'Within 24 hours of the cyclone making landfall, our coordinated network of 200 volunteers mobilized emergency supplies and medical support to affected communities.',
      date: 'February 1, 2026',
      region: 'Asia Pacific',
      category: 'Emergency Response',
      image: 'https://images.unsplash.com/photo-1764239652391-e1153c215236?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkaXNhc3RlciUyMHJlc3BvbnNlfGVufDF8fHx8MTc3MDAwNjU4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true,
    },
    {
      id: 2,
      title: 'Meet Rabbi Cohen: Coordinating Hope in Times of Crisis',
      excerpt: 'For 15 years, Rabbi David Cohen has served as an askan in New York, coordinating emergency responses and training the next generation of volunteer coordinators.',
      date: 'January 28, 2026',
      region: 'North America',
      category: 'Volunteer Stories',
      image: 'https://images.unsplash.com/photo-1605714007165-c15eac9c647b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbml0YXJpYW4lMjBhaWQlMjB3b3JrZXJzJTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NzAwMDY1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true,
    },
    {
      id: 3,
      title: 'New Training Program Launches for Medical Volunteers',
      excerpt: 'Askunai Ha\'ir announces expanded training curriculum for medical volunteers, including trauma response and field hospital coordination.',
      date: 'January 25, 2026',
      region: 'Global',
      category: 'Training',
      image: 'https://images.unsplash.com/photo-1653508311277-1ecf6ee52c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdm9sdW50ZWVyJTIwdGVhbXxlbnwxfHx8fDE3NzAwMDY1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
    },
    {
      id: 4,
      title: 'Winter Storm Response: 5,000 Families Supported',
      excerpt: 'Our North American teams coordinated warming centers, power outage support, and emergency supplies for communities affected by severe winter weather.',
      date: 'January 22, 2026',
      region: 'North America',
      category: 'Community Impact',
      image: 'https://images.unsplash.com/photo-1605714007165-c15eac9c647b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbml0YXJpYW4lMjBhaWQlMjB3b3JrZXJzJTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NzAwMDY1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
    },
    {
      id: 5,
      title: 'Europe Expands Regional Coordination Network',
      excerpt: 'Three new coordination centers open across Eastern Europe to enhance rapid response capabilities and volunteer training infrastructure.',
      date: 'January 20, 2026',
      region: 'Europe',
      category: 'Global Operations',
      image: 'https://images.unsplash.com/photo-1764239652391-e1153c215236?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkaXNhc3RlciUyMHJlc3BvbnNlfGVufDF8fHx8MTc3MDAwNjU4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
    },
    {
      id: 6,
      title: 'Volunteer Spotlight: Sarah Goldstein\'s Medical Mission',
      excerpt: 'Tel Aviv coordinator Sarah Goldstein shares her experience leading a medical volunteer team during a complex emergency deployment.',
      date: 'January 18, 2026',
      region: 'Middle East',
      category: 'Volunteer Stories',
      image: 'https://images.unsplash.com/photo-1653508311277-1ecf6ee52c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdm9sdW50ZWVyJTIwdGVhbXxlbnwxfHx8fDE3NzAwMDY1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
    },
  ];

  const filteredArticles = articles.filter((article) => {
    const categoryMatch = selectedCategory === 'all' || article.category === selectedCategory;
    const regionMatch = selectedRegion === 'all' || article.region === selectedRegion || article.region === 'Global';
    return categoryMatch && regionMatch;
  });

  const featuredArticles = filteredArticles.filter((a) => a.featured);
  const regularArticles = filteredArticles.filter((a) => !a.featured);

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
            News & <span className="text-[#6FAF2F]">Updates</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Stories from the field, volunteer spotlights, and updates from our global operations
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-muted border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Filter by Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-[#6FAF2F] text-white'
                        : 'bg-background border border-border hover:border-[#6FAF2F]'
                    }`}
                  >
                    {category === 'all' ? 'All Categories' : category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Filter by Region</h3>
              <div className="flex flex-wrap gap-2">
                {regions.map((region) => (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedRegion === region
                        ? 'bg-[#4A86C5] text-white'
                        : 'bg-background border border-border hover:border-[#4A86C5]'
                    }`}
                  >
                    {region === 'all' ? 'All Regions' : region}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      {featuredArticles.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl mb-8">Featured Stories</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredArticles.map((article) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-background rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-[#6FAF2F] text-white rounded-full text-sm">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{article.region}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl mb-3 group-hover:text-[#6FAF2F] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-muted rounded-full text-sm flex items-center gap-1">
                          <Tag className="h-3 w-3" />
                          {article.category}
                        </span>
                        <button className="text-[#6FAF2F] hover:underline flex items-center gap-1">
                          Read More
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Stories */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl mb-8">All Stories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularArticles.map((article) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{article.region}</span>
                      </div>
                    </div>
                    <h3 className="text-lg mb-2 group-hover:text-[#6FAF2F] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-1 bg-muted rounded text-xs flex items-center gap-1">
                        <Tag className="h-3 w-3" />
                        {article.category}
                      </span>
                      <button className="text-[#6FAF2F] hover:underline text-sm flex items-center gap-1">
                        Read
                        <ChevronRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">
                  No articles found matching your filters. Try adjusting your selection.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl mb-4">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest stories, updates, and volunteer opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[#6FAF2F]"
              />
              <button className="bg-[#6FAF2F] hover:bg-[#5e9527] text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
