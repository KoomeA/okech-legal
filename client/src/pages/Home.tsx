import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, BookOpen, Building2, Download, Gavel, Globe, Scale, Shield, Users } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "wouter";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call to save email
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDialogOpen(false);
      toast.success("Thank you! The profile is downloading.");
      
      // Trigger download
      const link = document.createElement('a');
      link.href = "/Okech_K_and_Co_Advocates_Profile.pdf";
      link.download = "Okech_K_and_Co_Advocates_Profile.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setEmail("");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-secondary selection:text-secondary-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/images/logo_final.png" alt="Okech K & Co Advocates Logo" className="h-12 w-auto" />
            <div className="hidden md:block">
              <h1 className="text-xl font-serif font-bold tracking-tight text-primary">OKECH K & CO</h1>
              <p className="text-xs tracking-widest text-muted-foreground uppercase">Advocates</p>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/practice-areas" className="hover:text-primary transition-colors">Practice Areas</Link>
            <Link href="/team" className="hover:text-primary transition-colors">Team</Link>
            <Link href="/news-insights" className="hover:text-primary transition-colors">News & Insights</Link>
          </div>
          <Link href="/contact">
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-serif">Contact Us</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero_image.jpg" 
            alt="Modern Law Office" 
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        </div>
        
        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="inline-block mb-6 px-4 py-1.5 border border-accent/50 rounded-full bg-accent/10 backdrop-blur-sm">
            <span className="text-sm font-medium text-primary tracking-wider uppercase">Excellence • Strategy • Integrity</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-8 leading-tight">
            Redefining Legal Partnership in a <span className="text-secondary italic">Complex World</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-serif">
            We bridge the gap between rigid legal theory and dynamic business needs by providing accessible, high-quality, and strategic legal representation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg font-serif">
              Our Expertise
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 h-14 px-8 text-lg font-serif" asChild>
              <Link href="/team">Meet the Team</Link>
            </Button>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/5 h-14 px-8 text-lg font-serif gap-2">
                  <Download className="w-5 h-5" /> Download Profile
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="font-serif text-2xl text-primary">Download Firm Profile</DialogTitle>
                  <DialogDescription>
                    Please enter your email address to receive the full firm profile document.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleDownload} className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="name@company.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                    />
                  </div>
                  <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white" disabled={isSubmitting}>
                    {isSubmitting ? "Processing..." : "Download PDF"}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    We respect your privacy. Your email will only be used to send you relevant legal updates.
                  </p>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section id="about" className="py-24 bg-white">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-accent" />
            <img 
              src="/images/legal_services.jpg" 
              alt="Legal Services" 
              className="w-full h-auto shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-accent" />
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Who We Are</h2>
              <h3 className="text-4xl font-serif font-bold text-primary mb-6">Strategic Business Solutions, Not Just Legal Opinions</h3>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Okech K & Co Advocates is a progressive, full-service law firm based in Nairobi, Kenya. In a legal landscape often characterized by opacity and delay, our firm distinguishes itself through a commitment to speed, discretion, and value-addition.
            </p>
            
            <div className="grid gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-primary text-lg">Responsive Communication</h4>
                  <p className="text-muted-foreground">Real-time updates and a "fast approach" policy to eliminate bureaucratic barriers.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-primary text-lg">Absolute Confidentiality</h4>
                  <p className="text-muted-foreground">Strict information security protocols to safeguard sensitive commercial and personal data.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-primary text-lg">Knowledge Partnership</h4>
                  <p className="text-muted-foreground">Bespoke legal training and workshops to keep your business ahead of the legal curve.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/justice_scales.jpg')] bg-cover bg-center bg-fixed mix-blend-overlay" />
        
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Our Ethos</h2>
            <h3 className="text-4xl font-serif font-bold mb-6">Non-Negotiable Standards</h3>
            <p className="text-primary-foreground/80 text-lg">
              At Okech K & Co Advocates, our reputation is built on four pillars that define every client interaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Technical Precision",
                desc: "Law is an exact science. We rely on rigorous research to ensure every opinion is legally sound.",
                icon: Scale
              },
              {
                title: "Preventive Strategy",
                desc: "We are proactive, not reactive. We identify and neutralize risks before they escalate into disputes.",
                icon: Shield
              },
              {
                title: "Commercial Agility",
                desc: "Business moves fast. We leverage technology to reduce turnaround times without compromising quality.",
                icon: Globe
              },
              {
                title: "Absolute Integrity",
                desc: "Trust is our currency. We operate with total transparency regarding fees, timelines, and prospects.",
                icon: Gavel
              }
            ].map((value, i) => (
              <Card key={i} className="bg-primary-foreground/5 border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/10 transition-colors duration-300">
                <CardHeader>
                  <value.icon className="w-10 h-10 text-accent mb-4" />
                  <CardTitle className="text-xl font-serif text-white">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-foreground/70 leading-relaxed">
                    {value.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Partner */}
      <section id="team" className="py-24 bg-background">
        <div className="container">
          <div className="bg-white p-8 md:p-12 shadow-xl border border-border/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            
            <div className="grid md:grid-cols-[1fr_2fr] gap-12">
              <div className="relative">
                <div className="aspect-[3/4] bg-muted w-full relative overflow-hidden shadow-lg">
                  {/* Placeholder for Partner Image - using generic professional image for now */}
                  <img 
                    src="/images/team_collaboration.jpg" 
                    alt="Okech Kennedy" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h4 className="font-serif font-bold text-xl">Okech Kennedy</h4>
                      <p className="text-sm opacity-90">Founding Partner</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-primary">Message from the Founding Partner</h2>
                <blockquote className="text-xl italic text-secondary font-serif border-l-4 border-secondary pl-6 py-2">
                  "We do not just handle files; we engineer solutions."
                </blockquote>
                
                <div className="prose prose-lg text-muted-foreground">
                  <p>
                    When we established this firm, our vision was clear: to build a legal practice that bridges the gap between rigid legal theory and the dynamic needs of modern business. In a world where regulatory frameworks are constantly shifting, clients need a partner who can navigate the storm.
                  </p>
                  <p>
                    My partner, Julius M. Kimulu, and I have cultivated a culture of rigorous analysis and precision. Whether we are advising a startup on intellectual property or defending a multinational corporation in court, our advice is always honest, direct, and geared towards your long-term success.
                  </p>
                </div>

                <div className="pt-6 border-t border-border">
                  <h3 className="font-bold text-primary mb-2">Credentials</h3>
                  <p className="text-sm text-muted-foreground">
                    LL.M (University of Nairobi), LL.B (University of Nairobi), Dip. Law (KSL), Advocate of the High Court of Kenya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice" className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Our Expertise</h2>
            <h3 className="text-4xl font-serif font-bold text-primary mb-6">Specialized Departments</h3>
            <p className="text-muted-foreground text-lg">
              Our expertise is organized into four specialized departments to ensure depth of service and technical excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Building2 className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="text-2xl font-serif text-primary">Corporate, Commercial & Tax</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">Legal infrastructure for sustainable growth for SMEs and established corporations.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-secondary" /> Corporate Structuring & Governance</li>
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-secondary" /> Commercial Contracts & Joint Ventures</li>
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-secondary" /> Tax Advisory & Compliance</li>
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-secondary" /> Technology & Intellectual Property</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Building2 className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="text-2xl font-serif text-primary">Real Estate, Banking & Finance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">End-to-end support in property and financial transactions, ensuring security of tenure.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-secondary" /> Conveyancing & Real Estate Development</li>
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-secondary" /> Banking & Securities Perfection</li>
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-secondary" /> Debt Restructuring</li>
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-secondary" /> Moveable Property Security Rights</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Gavel className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="text-2xl font-serif text-primary">Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">Fearless advocacy for our clients' rights across the Kenyan judicial hierarchy.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-secondary" /> Civil & Commercial Litigation</li>
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-secondary" /> Employment & Labour Relations</li>
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-secondary" /> Environment & Land Court Litigation</li>
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-secondary" /> Arbitration & Mediation (ADR)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Users className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="text-2xl font-serif text-primary">Private Client & Specialized Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">Handling personal legal matters with discretion, empathy, and professionalism.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-secondary" /> Family Law, Succession & Trusts</li>
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-secondary" /> Immigration & Global Mobility</li>
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-secondary" /> Environmental Compliance</li>
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-secondary" /> Criminal Defense</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section id="sectors" className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16">
            <div>
              <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Industries</h2>
              <h3 className="text-4xl font-serif font-bold mb-6">Sector Expertise</h3>
              <p className="text-primary-foreground/80 text-lg mb-8">
                We align our legal services with the specific commercial realities of key economic sectors. By understanding the distinct risks and opportunities in your industry, we provide counsel that is proactive rather than reactive.
              </p>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-primary font-serif">
                View All Sectors
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Real Estate & Construction",
                "Banking & Fintech",
                "Technology & Media (TMT)",
                "Transport & Logistics",
                "Manufacturing & FMCG",
                "NGOs & Civil Society",
                "Hospitality & Tourism"
              ].map((sector, i) => (
                <div key={i} className="flex items-center gap-4 p-4 border border-primary-foreground/10 rounded-lg hover:bg-primary-foreground/5 transition-colors">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span className="font-serif text-lg">{sector}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-foreground text-primary py-16 border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <img src="/images/logo_final.png" alt="Okech K & Co Advocates Logo" className="h-12 w-auto" />
                <div>
                  <h4 className="text-xl font-serif font-bold tracking-tight">OKECH K & CO</h4>
                  <p className="text-xs tracking-widest text-muted-foreground uppercase">Advocates</p>
                </div>
              </div>
              <p className="text-muted-foreground max-w-md">
                A progressive, full-service law firm providing specialized legal advisory and representation. We bridge the gap between rigid legal theory and dynamic business needs.
              </p>
            </div>
            
            <div>
              <h4 className="font-serif font-bold text-lg mb-6">Contact</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li>Nairobi, Kenya</li>
                <li>info@okechadvocates.com</li>
                <li>+254 700 000 000</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li><a href="#about" className="hover:text-primary">About Us</a></li>
                <li><a href="#practice" className="hover:text-primary">Practice Areas</a></li>
                <li><a href="#team" className="hover:text-primary">Our Team</a></li>
                <li><a href="#contact" className="hover:text-primary">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Okech K & Co Advocates. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary">Privacy Policy</a>
              <a href="#" className="hover:text-primary">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
