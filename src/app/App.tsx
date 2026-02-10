import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { EmergencyButton } from '@/app/components/EmergencyButton';
import { Home } from '@/app/pages/Home';
import { About } from '@/app/pages/About';
import { WhatWeDo } from '@/app/pages/WhatWeDo';
import { GetHelp } from '@/app/pages/GetHelp';
import { Apply } from '@/app/pages/Apply';
import { GlobalOperations } from '@/app/pages/GlobalOperations';
import { Donate } from '@/app/pages/Donate';
import { News } from '@/app/pages/News';
import { Contact } from '@/app/pages/Contact';
import { NotFound } from '@/app/pages/NotFound';

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/what-we-do" element={<WhatWeDo />} />
              <Route path="/get-help" element={<GetHelp />} />
              <Route path="/apply" element={<Apply />} />
              <Route path="/global-operations" element={<GlobalOperations />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <EmergencyButton />
        </div>
      </Router>
    </ThemeProvider>
  );
}
