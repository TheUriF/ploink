import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import logo from '../../assets/logo.png';

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Askunai Ha'ir" className="h-10 w-10 sm:h-12 sm:w-12" />
              <div className="flex flex-col">
                <span className="font-semibold text-base sm:text-lg text-[#6FAF2F]">
                  Askunai Ha'ir
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              A global volunteer humanitarian and first-response organization coordinating help when it matters most.
            </p>
            <div className="flex gap-2 sm:gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-background active:bg-background/80 transition-colors touch-manipulation"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/Yitzy_27"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-background active:bg-background/80 transition-colors touch-manipulation"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-background active:bg-background/80 transition-colors touch-manipulation"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-background active:bg-background/80 transition-colors touch-manipulation"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-background active:bg-background/80 transition-colors touch-manipulation"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 sm:mb-4 text-base sm:text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground active:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/what-we-do" className="text-muted-foreground hover:text-foreground active:text-foreground transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <Link to="/global-operations" className="text-muted-foreground hover:text-foreground active:text-foreground transition-colors">
                  Global Operations
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-muted-foreground hover:text-foreground active:text-foreground transition-colors">
                  News & Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="mb-3 sm:mb-4 text-base sm:text-lg">Get Involved</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link to="/get-help" className="text-muted-foreground hover:text-foreground active:text-foreground transition-colors">
                  Get Help
                </Link>
              </li>
              <li>
                <Link to="/apply" className="text-muted-foreground hover:text-foreground active:text-foreground transition-colors">
                  Become a Volunteer
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-muted-foreground hover:text-foreground active:text-foreground transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground active:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-3 sm:mb-4 text-base sm:text-lg">Legal & Policies</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground active:text-foreground transition-colors">
                  Transparency Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground active:text-foreground transition-colors">
                  Volunteer Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground active:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground active:text-foreground transition-colors">
                  Donation Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border text-center text-xs sm:text-sm text-muted-foreground">
          <p>© 2026 Askunai Ha'ir. All rights reserved. A global humanitarian organization.</p>
        </div>
      </div>
    </footer>
  );
}
