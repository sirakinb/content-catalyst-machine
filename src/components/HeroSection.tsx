import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [transcript, setTranscript] = useState("");
  const [speakerName, setSpeakerName] = useState("");
  const [topics, setTopics] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { email, transcript, speakerName, topics });
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
          className="bg-transparent border-2 border-white hover:bg-brand-purple transition-colors mb-16 text-white"
        >
          Implement the Content Catalyst
        </Button>

        <div className="bg-[#1A1A2E] p-8 rounded-2xl mt-12 text-left">
          <h2 className="text-2xl font-semibold mb-6 text-white">
            Paste Your Transcript
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Textarea
                placeholder="Paste your transcript here..."
                value={transcript}
                onChange={(e) => setTranscript(e.target.value)}
                className="min-h-[150px] bg-[#13131f] border-[#2a2a3c] text-white placeholder:text-gray-400 rounded-xl"
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
                />
              </div>
              <div>
                <label className="block text-white mb-2">Speaker Name</label>
                <Input
                  placeholder="John Doe"
                  value={speakerName}
                  onChange={(e) => setSpeakerName(e.target.value)}
                  className="bg-[#13131f] border-[#2a2a3c] text-white placeholder:text-gray-400 rounded-xl"
                />
              </div>
            </div>
            <div>
              <label className="block text-white mb-2">Topics You Post About</label>
              <Input
                placeholder="e.g., SaaS, Marketing, Leadership"
                value={topics}
                onChange={(e) => setTopics(e.target.value)}
                className="bg-[#13131f] border-[#2a2a3c] text-white placeholder:text-gray-400 rounded-xl"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-transparent border-2 border-white hover:bg-white/10 transition-colors text-lg py-6 rounded-xl text-white"
            >
              Give Me Content ✨
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};