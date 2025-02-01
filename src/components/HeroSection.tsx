import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [transcript, setTranscript] = useState("");
  const [speakerName, setSpeakerName] = useState("");
  const [topics, setTopics] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const payload = {
      email,
      transcript,
      speakerName,
      topics,
    };
    
    console.log("Preparing to submit payload:", payload);

    try {
      const response = await fetch('https://hook.us2.make.com/qfpu82dk67gwqbq0sc5otfy21ecy0w8i', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log("Webhook response status:", response.status);
      
      const responseText = await response.text();
      console.log("Webhook response body:", responseText);

      if (!response.ok) {
        throw new Error(`Webhook failed with status ${response.status}: ${responseText}`);
      }

      console.log("Form submitted successfully");
      toast({
        title: "Success!",
        description: "Your transcript has been submitted successfully.",
      });

      // Clear form
      setEmail("");
      setTranscript("");
      setSpeakerName("");
      setTopics("");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit your transcript. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-32 mt-16">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text">
          Effortlessly Fill Your Content Calendar—No Extra Time Required
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-400">
          Create consistent, quality content from your calls
        </p>
        <Button 
          size="lg" 
          className="bg-transparent border-2 border-white hover:bg-brand-hover-blue hover:border-brand-hover-blue transition-colors mb-16 text-white"
          onClick={scrollToPricing}
        >
          Implement the Content Catalyst
        </Button>

        <div className="bg-[#1A1A2E] p-8 rounded-2xl mt-12 text-left">
          <h2 className="text-2xl font-semibold mb-6 text-white text-center">
            Paste Your Transcript
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Textarea
                placeholder="Paste your transcript here..."
                value={transcript}
                onChange={(e) => setTranscript(e.target.value)}
                className="min-h-[150px] bg-[#13131f] border-[#2a2a3c] text-white placeholder:text-gray-400 rounded-xl"
                disabled={isSubmitting}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#13131f] border-[#2a2a3c] text-white placeholder:text-gray-400 rounded-xl"
                  disabled={isSubmitting}
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2">Speaker Name in the Transcript</label>
                <Input
                  placeholder="Usually Your Full Name"
                  value={speakerName}
                  onChange={(e) => setSpeakerName(e.target.value)}
                  className="bg-[#13131f] border-[#2a2a3c] text-white placeholder:text-gray-400 rounded-xl"
                  disabled={isSubmitting}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-white mb-2">Topics You Post About</label>
              <Input
                placeholder="e.g., SaaS, Biotech, Leadership"
                value={topics}
                onChange={(e) => setTopics(e.target.value)}
                className="bg-[#13131f] border-[#2a2a3c] text-white placeholder:text-gray-400 rounded-xl"
                disabled={isSubmitting}
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-[#13131f] border-2 border-white hover:bg-brand-hover-blue hover:border-brand-hover-blue transition-colors text-lg py-6 rounded-xl text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Give Me Content Right Now"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};