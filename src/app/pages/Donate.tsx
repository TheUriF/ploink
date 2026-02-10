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
      <section className="py-20 bg-gradient-to-br from-[#6FAF2F]/10 to-[#4A86C5]/10">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl mb-6"
          >
            Your Support <span className="text-[#6FAF2F]">Saves Lives</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Every donation helps us maintain our rapid response network and deploy volunteers where they're needed most
          </motion.p>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl text-center mb-8">Your Impact</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-background rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-[#6FAF2F] mb-2">$25</div>
                <p className="text-muted-foreground text-sm">Provides basic emergency supplies for a family in crisis</p>
              </div>
              <div className="bg-background rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-[#4A86C5] mb-2">$100</div>
                <p className="text-muted-foreground text-sm">Supports volunteer deployment and coordination</p>
              </div>
              <div className="bg-background rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-[#9FD36B] mb-2">$250</div>
                <p className="text-muted-foreground text-sm">Funds a complete emergency response kit</p>
              </div>
              <div className="bg-background rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-[#6FAF2F] mb-2">$500</div>
                <p className="text-muted-foreground text-sm">Sponsors volunteer training and certification</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleDonationSubmit} className="bg-background rounded-xl border border-border p-8 shadow-lg">
              {/* Donation Type */}
              <div className="mb-8">
                <h3 className="text-2xl mb-4">Choose Donation Type</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setDonationType('one-time')}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      donationType === 'one-time'
                        ? 'border-[#6FAF2F] bg-[#6FAF2F]/10'
                        : 'border-border hover:border-[#6FAF2F]/50'
                    }`}
                  >
                    <div className="text-lg font-semibold">One-Time</div>
                    <div className="text-sm text-muted-foreground">Make a single donation</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDonationType('monthly')}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      donationType === 'monthly'
                        ? 'border-[#4A86C5] bg-[#4A86C5]/10'
                        : 'border-border hover:border-[#4A86C5]/50'
                    }`}
                  >
                    <div className="text-lg font-semibold">Monthly</div>
                    <div className="text-sm text-muted-foreground">Sustained impact</div>
                  </button>
                </div>
              </div>

              {/* Donation Purpose */}
              <div className="mb-8">
                <h3 className="text-2xl mb-4">Where Should Your Donation Go?</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {purposes.map((purpose) => {
                    const Icon = purpose.icon;
                    return (
                      <button
                        key={purpose.value}
                        type="button"
                        onClick={() => setDonationPurpose(purpose.value)}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                          donationPurpose === purpose.value
                            ? 'border-[#6FAF2F] bg-[#6FAF2F]/10'
                            : 'border-border hover:border-[#6FAF2F]/50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            donationPurpose === purpose.value
                              ? 'bg-[#6FAF2F] text-white'
                              : 'bg-muted'
                          }`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold">{purpose.label}</div>
                          </div>
                          {donationPurpose === purpose.value && (
                            <Check className="h-5 w-5 text-[#6FAF2F]" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <h3 className="text-2xl mb-4">Select Amount</h3>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => {
                        setDonationAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        donationAmount === amount && !customAmount
                          ? 'border-[#6FAF2F] bg-[#6FAF2F]/10'
                          : 'border-border hover:border-[#6FAF2F]/50'
                      }`}
                    >
                      <div className="text-2xl font-bold">${amount}</div>
                    </button>
                  ))}
                </div>
                <div>
                  <label className="block mb-2">Or enter custom amount:</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setDonationAmount(null);
                      }}
                      className="w-full pl-8 pr-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[#6FAF2F]"
                      placeholder="Enter amount"
                      min="1"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-8">
                <h3 className="text-2xl mb-4">Payment Method</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="p-4 rounded-xl border-2 border-[#6FAF2F] bg-[#6FAF2F]/10 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-6 w-6 text-[#6FAF2F]" />
                      <div className="text-left">
                        <div className="font-semibold">Credit/Debit Card</div>
                        <div className="text-sm text-muted-foreground">Secure payment</div>
                      </div>
                    </div>
                  </button>
                  <button
                    type="button"
                    className="p-4 rounded-xl border-2 border-border hover:border-[#4A86C5]/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <Building className="h-6 w-6 text-[#4A86C5]" />
                      <div className="text-left">
                        <div className="font-semibold">Bank Transfer</div>
                        <div className="text-sm text-muted-foreground">Direct deposit</div>
                      </div>
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
                className="w-full bg-[#6FAF2F] hover:bg-[#5e9527] text-white py-4 rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {donationType === 'monthly' ? 'Start Monthly Donation' : 'Complete Donation'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl text-center mb-12">Other Ways to Give</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background rounded-xl p-6 border border-border">
                <div className="w-12 h-12 bg-[#6FAF2F]/10 rounded-full flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-[#6FAF2F]" />
                </div>
                <h3 className="text-xl mb-3">Corporate Partnerships</h3>
                <p className="text-muted-foreground mb-4">
                  Partner with us to make large-scale impact through corporate giving programs.
                </p>
                <a href="/contact" className="text-[#6FAF2F] hover:underline">
                  Learn More →
                </a>
              </div>

              <div className="bg-background rounded-xl p-6 border border-border">
                <div className="w-12 h-12 bg-[#4A86C5]/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-[#4A86C5]" />
                </div>
                <h3 className="text-xl mb-3">Legacy Giving</h3>
                <p className="text-muted-foreground mb-4">
                  Leave a lasting impact through planned giving and estate donations.
                </p>
                <a href="/contact" className="text-[#4A86C5] hover:underline">
                  Learn More →
                </a>
              </div>

              <div className="bg-background rounded-xl p-6 border border-border">
                <div className="w-12 h-12 bg-[#9FD36B]/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#9FD36B]" />
                </div>
                <h3 className="text-xl mb-3">Fundraise for Us</h3>
                <p className="text-muted-foreground mb-4">
                  Start your own fundraising campaign and engage your community.
                </p>
                <a href="/contact" className="text-[#9FD36B] hover:underline">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Transparency */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Shield className="h-16 w-16 text-[#6FAF2F] mx-auto mb-4" />
              <h2 className="text-4xl mb-4">Financial Transparency</h2>
              <p className="text-lg text-muted-foreground">
                We believe donors deserve complete visibility into how their contributions create impact
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#6FAF2F]/5 to-[#4A86C5]/5 rounded-xl p-8 border border-border">
              <h3 className="text-2xl mb-6">How We Use Your Donations</h3>
              
              <div className="space-y-4 mb-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Direct Program Services</span>
                    <span className="font-semibold">87%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-[#6FAF2F] rounded-full" style={{ width: '87%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Volunteer Training & Support</span>
                    <span className="font-semibold">8%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-[#4A86C5] rounded-full" style={{ width: '8%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Administrative Costs</span>
                    <span className="font-semibold">5%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-[#9FD36B] rounded-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-lg p-6">
                <h4 className="font-semibold mb-3">Our Commitment</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#6FAF2F] flex-shrink-0 mt-0.5" />
                    <span>Annual independent audits published publicly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#6FAF2F] flex-shrink-0 mt-0.5" />
                    <span>Detailed impact reports for all donors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#6FAF2F] flex-shrink-0 mt-0.5" />
                    <span>100% accountability for every dollar</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#6FAF2F] to-[#4A86C5] text-white">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl mb-6">Questions About Donating?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Our donor relations team is here to help you make the most meaningful impact possible.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#6FAF2F] px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
