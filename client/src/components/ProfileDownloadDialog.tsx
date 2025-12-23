import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Download } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ProfileDownloadDialogProps {
  triggerLabel?: string;
  triggerVariant?: "default" | "outline" | "secondary";
  profileFileName?: string;
  profilePath?: string;
}

export function ProfileDownloadDialog({
  triggerLabel = "Download Profile",
  triggerVariant = "outline",
  profileFileName = "Okech_K_and_Co_Advocates_Profile.pdf",
  profilePath = "/Okech_K_and_Co_Advocates_Profile.pdf"
}: ProfileDownloadDialogProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call to save registration data
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDialogOpen(false);
      toast.success("Thank you for registering! Your profile is downloading.");

      // Log the data (in a real application, this would be sent to a backend API)
      console.log("Registration Data:", formData);

      // Trigger download
      const link = document.createElement('a');
      link.href = profilePath;
      link.download = profileFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: ""
      });
    }, 1000);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          variant={triggerVariant}
          className={`${
            triggerVariant === "secondary"
              ? "border-secondary text-secondary hover:bg-secondary/5"
              : triggerVariant === "outline"
              ? "border-secondary text-secondary hover:bg-secondary/5"
              : ""
          } h-14 px-8 text-lg font-serif gap-2`}
        >
          <Download className="w-5 h-5" />
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-primary">
            Download Firm Profile
          </DialogTitle>
          <DialogDescription>
            Please provide your details to receive our comprehensive firm profile document.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+254 700 000 000"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="name@company.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message / Request for Services *</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your legal needs or interest in our services..."
              value={formData.message}
              onChange={handleInputChange}
              className="min-h-[100px] resize-none"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-secondary hover:bg-secondary/90 text-white font-serif"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Download PDF"}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            We respect your privacy. Your information will be kept strictly confidential and used only to provide you with relevant legal updates and services.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
