import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "wouter";
import { ChatWidget } from "@/components/ChatWidget";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Message sent successfully! We will get back to you shortly.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

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
            <Link href="/team" className="hover:text-primary transition-colors">Team</Link>
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
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl font-serif">
            Get in touch with our legal team to discuss your case or business requirements. We are committed to providing prompt and professional assistance.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">Get in Touch</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Whether you have a specific legal question or need comprehensive representation, our team is ready to help. Visit our offices or reach out via phone or email.
                </p>
              </div>

              <div className="grid gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-primary mb-1">Our Office</h3>
                    <p className="text-muted-foreground">
                      5th Floor, Corporate Tower<br />
                      Upper Hill Road, Nairobi<br />
                      Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-primary mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      +254 700 000 000<br />
                      +254 20 000 0000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-primary mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      info@okechadvocates.com<br />
                      consult@okechadvocates.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-primary mb-1">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: By Appointment Only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-none shadow-xl bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+254 700 000 000" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Legal Inquiry regarding..." required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please describe your legal matter briefly..." 
                      className="min-h-[150px]" 
                      required 
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-secondary hover:bg-secondary/90 text-white h-12 text-lg font-serif"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    By submitting this form, you agree to our privacy policy. Your information is kept strictly confidential.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Chat Widget */}
      <ChatWidget />

      {/* Map Placeholder */}
      <section className="h-[400px] bg-muted w-full relative">
        <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
          <p className="text-muted-foreground font-serif text-lg">Interactive Map Integration</p>
        </div>
        {/* In a real implementation, Google Maps iframe or component would go here */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819917806043!2d36.81483597496564!3d-1.281895998705904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d22f28f0c1%3A0x2b8e35c7d84f4e8!2sUpper%20Hill%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1697634567890!5m2!1sen!2ske" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale opacity-80 hover:opacity-100 transition-opacity duration-500"
        ></iframe>
      </section>
    </div>
  );
}
