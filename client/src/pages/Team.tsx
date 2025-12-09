import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Team() {
  const team = [
    {
      name: "Okech Kennedy",
      role: "Founding Partner",
      image: "/images/team_collaboration.jpg", // Placeholder
      credentials: "LL.M (UoN), LL.B (UoN), Dip. Law (KSL), CPS (K)",
      specialization: ["Corporate Law", "Commercial Litigation", "Real Estate"],
      bio: "Okech Kennedy is the Founding Partner of the firm. With over 15 years of experience in high-stakes commercial litigation and corporate structuring, he has successfully represented leading financial institutions and multinational corporations. He holds a Master of Laws (LL.M) in International Trade & Investment Law from the University of Nairobi.",
      email: "okech@okechadvocates.com",
      linkedin: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-secondary selection:text-secondary-foreground pt-20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/images/logo_final.png" alt="Okech K & Co Advocates Logo" className="h-12 w-auto" />
              <div className="hidden md:block">
                <h1 className="text-xl font-serif font-bold tracking-tight text-primary">OKECH K & CO</h1>
                <p className="text-xs tracking-widest text-muted-foreground uppercase">Advocates</p>
              </div>
            </div>
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/practice-areas" className="hover:text-primary transition-colors">Practice Areas</Link>
            <Link href="/team" className="text-primary font-bold">Team</Link>
            <Link href="/news-insights" className="hover:text-primary transition-colors">News & Insights</Link>
          </div>
          <Link href="/contact">
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-serif">Contact Us</Button>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Team</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl font-serif">
            Meet the legal minds dedicated to your success. Our team combines deep industry knowledge with a commitment to excellence.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden bg-white">
                    <div className="aspect-[3/4] overflow-hidden relative">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-0 left-0 p-6 text-white">
                        <h3 className="font-serif font-bold text-xl mb-1">{member.name}</h3>
                        <p className="text-sm font-medium text-accent uppercase tracking-wider">{member.role}</p>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                        {member.bio}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.specialization.slice(0, 2).map((spec, i) => (
                          <Badge key={i} variant="secondary" className="text-xs font-normal bg-primary/5 text-primary hover:bg-primary/10">
                            {spec}
                          </Badge>
                        ))}
                        {member.specialization.length > 2 && (
                          <Badge variant="secondary" className="text-xs font-normal bg-primary/5 text-primary hover:bg-primary/10">
                            +{member.specialization.length - 2}
                          </Badge>
                        )}
                      </div>
                      <Button variant="outline" className="w-full border-primary/20 hover:bg-primary hover:text-white transition-colors">
                        View Profile
                      </Button>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                
                <DialogContent className="max-w-3xl p-0 overflow-hidden bg-white">
                  <div className="grid md:grid-cols-[2fr_3fr]">
                    <div className="relative h-64 md:h-full">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-primary/10" />
                    </div>
                    <div className="p-8 md:p-10 space-y-6 overflow-y-auto max-h-[80vh]">
                      <DialogHeader>
                        <DialogTitle className="text-3xl font-serif font-bold text-primary mb-2">{member.name}</DialogTitle>
                        <DialogDescription className="text-lg font-medium text-secondary uppercase tracking-wider">
                          {member.role}
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold text-primary text-sm uppercase tracking-wide mb-2">Credentials</h4>
                          <p className="text-muted-foreground text-sm">{member.credentials}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-primary text-sm uppercase tracking-wide mb-2">Biography</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {member.bio}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-bold text-primary text-sm uppercase tracking-wide mb-2">Areas of Specialization</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.specialization.map((spec, i) => (
                              <Badge key={i} className="bg-primary text-white hover:bg-primary/90">
                                {spec}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="pt-6 border-t border-border flex gap-4">
                          <Button variant="outline" className="gap-2" asChild>
                            <a href={`mailto:${member.email}`}>
                              <Mail className="w-4 h-4" /> Email
                            </a>
                          </Button>
                          <Button variant="outline" className="gap-2" asChild>
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                              <Linkedin className="w-4 h-4" /> LinkedIn
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">Join Our Team</h2>
          <p className="text-muted-foreground mb-8">
            We are always looking for exceptional legal talent to join our growing practice. If you share our commitment to excellence and integrity, we'd love to hear from you.
          </p>
          <Button className="bg-secondary hover:bg-secondary/90 text-white">View Careers</Button>
        </div>
      </section>
    </div>
  );
}
