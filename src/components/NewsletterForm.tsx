import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast.success("Thank you for subscribing! We'll keep you updated.");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 w-full max-w-md">
      <Input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-black/30 backdrop-blur-sm border-gray-700 text-white placeholder:text-gray-400"
      />
      <Button 
        type="submit"
        disabled={isSubmitting}
        className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium"
      >
        {isSubmitting ? "Subscribing..." : "Notify Me"}
      </Button>
    </form>
  );
};

export default NewsletterForm;