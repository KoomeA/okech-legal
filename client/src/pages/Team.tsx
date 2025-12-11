import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Team() {
  const { hero, philosophy, founder, hrPhilosophy } = teamContent;

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

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">{hero.title}</h1>
          <p className="text-xl md:text-2xl font-serif text-secondary mb-8">{hero.subtitle}</p>
          <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
            {hero.description}
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">{philosophy.title}</h2>
            <Separator className="w-24 h-1 bg-secondary mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {philosophy.content.map((item, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-serif font-bold text-primary mb-4">{item.heading}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Profile Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-[400px_1fr] gap-12 items-start">
            {/* Founder Image & Quick Info */}
            <div className="space-y-6">
              <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-xl relative group">
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <p className="font-serif text-lg italic">"Redefining Legal Partnership in a Complex World"</p>
                  </div>
                </div>
              </div>
              
              <Card className="bg-primary text-primary-foreground border-none">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-serif font-bold text-xl mb-2">Contact</h3>
                  <div className="space-y-3">
                    <a href={`mailto:${founder.contact.email}`} className="flex items-center gap-3 hover:text-secondary transition-colors">
                      <Mail className="w-5 h-5" />
                      <span className="text-sm">{founder.contact.email}</span>
                    </a>
                    <a href={founder.contact.linkedin} className="flex items-center gap-3 hover:text-secondary transition-colors">
                      <Linkedin className="w-5 h-5" />
                      <span className="text-sm">LinkedIn Profile</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Founder Bio & Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">{founder.name}</h2>
                <p className="text-xl text-secondary font-medium uppercase tracking-wider mb-6">{founder.role}</p>
                <Separator className="w-full max-w-md bg-border mb-8" />
              </div>

              <div className="prose prose-lg text-muted-foreground max-w-none">
                {founder.bio.map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-8 pt-8">
                <div>
                  <h3 className="font-serif font-bold text-xl text-primary mb-4">Credentials & Education</h3>
                  <ul className="space-y-3">
                    {founder.credentials.map((cred, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span>{cred}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-xl text-primary mb-4">Core Competencies</h3>
                  <div className="flex flex-wrap gap-2">
                    {founder.competencies.map((comp, index) => (
                      <Badge key={index} className="bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm font-normal">
                        {comp}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HR Philosophy / Join Us */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{hrPhilosophy.title}</h2>
              <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                {hrPhilosophy.description}
              </p>
              <Button className="bg-secondary hover:bg-secondary/90 text-white font-serif h-12 px-8 text-lg">
                View Career Opportunities
              </Button>
            </div>
            <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10">
              <h3 className="font-serif font-bold text-xl mb-6 text-secondary">Our Culture & Values</h3>
              <ul className="space-y-4">
                {hrPhilosophy.values.map((value, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="text-lg">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
