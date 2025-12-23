  const handleSubmit = async (e: React.FormEvent) => {
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

    try {
      // Send registration data to backend API
      const response = await fetch("/api/profile-download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to process registration");
      }

      // Close dialog and show success message
      setIsDialogOpen(false);
      toast.success("Thank you for registering! Your profile is downloading.");

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

    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error instanceof Error ? error.message : "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
