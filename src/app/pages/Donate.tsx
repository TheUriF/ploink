import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Shield, Package, Users, Check, CreditCard, Building } from 'lucide-react';

export function Donate() {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [donationAmount, setDonationAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donationPurpose, setDonationPurpose] = useState('general');

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000];

  const purposes = [
    { value: 'general', label: 'Where Most Needed', icon: Heart },
    { value: 'emergency', label: 'Emergency Response Fund', icon: Shield },
    { value: 'volunteer', label: 'Sponsor a Volunteer', icon: Users },
    { value: 'supplies', label: 'Emergency Supply Kits', icon: Package },
  ];

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = customAmount || donationAmount;
    console.log('Donation submitted:', { amount, donationType, donationPurpose });
    alert(`Thank you for your ${donationType} donation of $${amount}!`);
  };

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
            Your Support <span className="text-[#6FAF2F]">Saves Lives</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Every donation helps us maintain our rapid response network and deploy volunteers where they're needed most
          </motion.p>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-8 sm:py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-6 sm:mb-8">Your Impact</h2>
            <div className="grid md:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-background rounded-xl p-4 sm:p-6 text-center shadow-md">
                <div className="text-3xl sm:text-4xl font-bold text-[#6FAF2F] mb-1 sm:mb-2">$25</div>
                <p className="text-sm sm:text-base text-muted-foreground">Provides basic emergency supplies for a family in crisis</p>
              </div>
              <div className="bg-background rounded-xl p-4 sm:p-6 text-center shadow-md">
                <div className="text-3xl sm:text-4xl font-bold text-[#4A86C5] mb-1 sm:mb-2">$100</div>
                <p className="text-sm sm:text-base text-muted-foreground">Supports volunteer deployment and coordination</p>
              </div>
              <div className="bg-background rounded-xl p-4 sm:p-6 text-center shadow-md">
                <div className="text-3xl sm:text-4xl font-bold text-[#9FD36B] mb-1 sm:mb-2">$250</div>
                <p className="text-sm sm:text-base text-muted-foreground">Funds a complete emergency response kit</p>
              </div>
              <div className="bg-background rounded-xl p-4 sm:p-6 text-center shadow-md">
                <div className="text-3xl sm:text-4xl font-bold text-[#6FAF2F] mb-1 sm:mb-2">$500</div>
                <p className="text-sm sm:text-base text-muted-foreground">Sponsors volunteer training and certification</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleDonationSubmit} className="bg-background rounded-xl border border-border p-4 sm:p-8 shadow-lg">
              {/* Donation Type */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4">Choose Donation Type</h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <button
                    type="button"
                    onClick={() => setDonationType('one-time')}
                    className={`p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 ${
                      donationType === 'one-time'
                        ? 'border-[#6FAF2F] bg-[#6FAF2F]/10'
                        : 'border-border hover:border-[#6FAF2F]/50'
                    }`}
                  >
                    <div className="text-base sm:text-lg font-semibold">One-Time</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Make a single donation</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDonationType('monthly')}
                    className={`p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 ${
                      donationType === 'monthly'
                        ? 'border-[#4A86C5] bg-[#4A86C5]/10'
                        : 'border-border hover:border-[#4A86C5]/50'
                    }`}
                  >
                    <div className="text-base sm:text-lg font-semibold">Monthly</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Sustained support</div>
                  </button>
                </div>
              </div>

              {/* Donation Purpose */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4">Support</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {purposes.map((purpose) => {
                    const Icon = purpose.icon;
                    return (
                      <button
                        key={purpose.value}
                        type="button"
                        onClick={() => setDonationPurpose(purpose.value)}
                        className={`p-3 sm:p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                          donationPurpose === purpose.value
                            ? 'border-[#6FAF2F] bg-[#6FAF2F]/10'
                            : 'border-border hover:border-[#6FAF2F]/50'
                        }`}
                      >
                        <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#6FAF2F]" />
                          <div className="font-semibold text-base sm:text-lg">{purpose.label}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4">Select Amount</h3>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 mb-3 sm:mb-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => {
                        setDonationAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`py-2 sm:py-3 px-2 sm:px-3 rounded-lg border transition-all duration-300 ${
                        donationAmount === amount
                          ? 'bg-[#6FAF2F] text-white border-[#6FAF2F]'
                          : 'border-border hover:border-[#6FAF2F]'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</div>
                  <input
                    type="number"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setDonationAmount(null);
                    }}
                    className="w-full pl-6 sm:pl-8 pr-3 sm:pr-4 py-2 sm:py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[#6FAF2F]"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4">Payment Method</h3>
                <div className="space-y-3 sm:space-y-4">
                  <button
                    type="button"
                    className="w-full p-3 sm:p-4 rounded-xl border border-border hover:border-[#6FAF2F] transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5 sm:h-6 sm:w-6 text-[#6FAF2F]" />
                      <span className="text-base sm:text-lg">Credit Card</span>
                    </div>
                    <Check className="h-5 w-5 sm:h-6 sm:w-6 text-[#6FAF2F]" />
                  </button>

                  <button
                    type="button"
                    className="w-full p-3 sm:p-4 rounded-xl border border-border hover:border-[#6FAF2F] transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <Building className="h-5 w-5 sm:h-6 sm:w-6 text-[#4A86C5]" />
                      <span className="text-base sm:text-lg">Bank Transfer</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Card Details (Placeholder) */}
              <div className="mb-8 space-y-4">
                <div>
                  <label htmlFor="cardNumber" className="block mb-2">Card Number</label>
                  <input
                    id="cardNumber"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[#6FAF2F]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiry" className="block mb-2">Expiry Date</label>
                    <input
                      id="expiry"
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[#6FAF2F]"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block mb-2">CVV</label>
                    <input
                      id="cvv"
                      type="text"
                      placeholder="123"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[#6FAF2F]"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="name" className="block mb-2">Cardholder Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Full name on card"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[#6FAF2F]"
                  />
                </div>
              </div>

              {/* Security Notice */}
              <div className="bg-muted rounded-lg p-4 mb-8 flex items-start gap-3">
                <Shield className="h-5 w-5 text-[#6FAF2F] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Secure Payment:</strong> Your donation is processed through encrypted channels. We never store your payment information. All donations are tax-deductible.
                </div>
              </div>

              {/* Submit Button */}

              <button
                type="submit"
                disabled={!donationAmount && !customAmount}
                className="w-full bg-[#6FAF2F] hover:bg-[#5e9527] text-white py-3 sm:py-4 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Donate Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Other Ways */}
      <section className="py-12 sm:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">Other Ways to Give</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Beyond monetary donations, there are many ways to support our mission
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            <div className="bg-background rounded-xl p-4 sm:p-6 border border-border">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#6FAF2F]/10 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-[#6FAF2F]" />
              </div>
              <h3 className="text-base sm:text-xl mb-2 sm:mb-3">Volunteer</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                Join our network of askanim and coordinate help directly.
              </p>
              <a href="/apply" className="text-[#6FAF2F] hover:underline text-sm sm:text-base">
                Learn More →
              </a>
            </div>

            <div className="bg-background rounded-xl p-4 sm:p-6 border border-border">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#4A86C5]/10 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Package className="h-5 w-5 sm:h-6 sm:w-6 text-[#4A86C5]" />
              </div>
              <h3 className="text-base sm:text-xl mb-2 sm:mb-3">In-Kind Donations</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                Donate supplies, equipment, or services for our operations.
              </p>
              <a href="/contact" className="text-[#4A86C5] hover:underline text-sm sm:text-base">
                Learn More →
              </a>
            </div>

            <div className="bg-background rounded-xl p-4 sm:p-6 border border-border">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#9FD36B]/10 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-[#9FD36B]" />
              </div>
              <h3 className="text-base sm:text-xl mb-2 sm:mb-3">Corporate Matching</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                Many companies match employee donations - double your impact!
              </p>
              <a href="/contact" className="text-[#9FD36B] hover:underline text-sm sm:text-base">
                Learn More →
              </a>
            </div>

            <div className="bg-background rounded-xl p-4 sm:p-6 border border-border">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#6FAF2F]/10 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-[#6FAF2F]" />
              </div>
              <h3 className="text-base sm:text-xl mb-2 sm:mb-3">Planned Giving</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                Include us in your will or estate plans for lasting impact.
              </p>
              <a href="/contact" className="text-[#6FAF2F] hover:underline text-sm sm:text-base">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Transparency */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <Shield className="h-12 w-12 sm:h-16 sm:w-16 text-[#6FAF2F] mx-auto mb-3 sm:mb-4" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">Financial Transparency</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                We believe donors deserve complete visibility into how their contributions create impact
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#6FAF2F]/5 to-[#4A86C5]/5 rounded-xl p-4 sm:p-6 md:p-8 border border-border">
              <h3 className="text-xl sm:text-2xl mb-4 sm:mb-6">How We Use Your Donations</h3>
              
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <div>
                  <div className="flex justify-between mb-1 sm:mb-2 text-sm sm:text-base">
                    <span>Direct Program Services</span>
                    <span className="font-semibold">87%</span>
                  </div>
                  <div className="h-2 sm:h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-[#6FAF2F] rounded-full" style={{ width: '87%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1 sm:mb-2 text-sm sm:text-base">
                    <span>Volunteer Training & Support</span>
                    <span className="font-semibold">8%</span>
                  </div>
                  <div className="h-2 sm:h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-[#4A86C5] rounded-full" style={{ width: '8%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1 sm:mb-2 text-sm sm:text-base">
                    <span>Administrative Costs</span>
                    <span className="font-semibold">5%</span>
                  </div>
                  <div className="h-2 sm:h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-[#9FD36B] rounded-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-lg p-4 sm:p-6">
                <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">Our Commitment</h4>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-[#6FAF2F] flex-shrink-0 mt-0.5" />
                    <span>Annual independent audits published publicly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-[#6FAF2F] flex-shrink-0 mt-0.5" />
                    <span>Detailed impact reports for all donors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-[#6FAF2F] flex-shrink-0 mt-0.5" />
                    <span>100% accountability for every dollar</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#6FAF2F] to-[#4A86C5] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">Questions About Donating?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-95">
            Our donor relations team is here to help you make the most meaningful impact possible.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#6FAF2F] px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
