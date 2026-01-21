import { CheckCircle, Shield, Clock, DollarSign } from 'lucide-react';

export const ClutchValidation = () => {
  return (
    <section className="py-16 md:py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Trust Badges */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
                <Shield className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-secondary">Clutch Verified Vendor</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Trusted by <span className="gradient-text">Enterprise Teams</span>
              </h2>
              
              <p className="text-muted-foreground text-lg">
                We're structured for Clutch AI & Data categories with verified rates and processes.
              </p>

              <div className="space-y-4">
                {[
                  { icon: CheckCircle, text: 'Clutch profile verified', color: 'text-green-500' },
                  { icon: CheckCircle, text: 'Review process initiated', color: 'text-green-500' },
                  { icon: CheckCircle, text: 'Structured for Clutch AI & Data categories', color: 'text-green-500' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <span className="text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Stats Card */}
            <div className="card-gradient-border">
              <div className="p-8 space-y-6">
                {/* Clutch Badge Mockup */}
                <div className="flex items-center justify-center">
                  <div className="relative px-8 py-6 rounded-xl bg-muted/50 border border-border">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary-foreground">C</span>
                      </div>
                      <div>
                        <p className="text-foreground font-semibold">Qorynta</p>
                        <p className="text-sm text-muted-foreground">AI & ML Development</p>
                        <div className="flex items-center gap-1 mt-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className="w-4 h-4 text-primary"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Clutch-ready badge */}
                    <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                      Clutch-Ready
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-muted/30 border border-border text-center">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <DollarSign className="w-5 h-5 text-primary" />
                      <span className="text-2xl font-bold text-foreground">$25-49</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Verified Rate/hr</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30 border border-border text-center">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <Clock className="w-5 h-5 text-secondary" />
                      <span className="text-2xl font-bold text-foreground">$1K</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Min Engagement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
