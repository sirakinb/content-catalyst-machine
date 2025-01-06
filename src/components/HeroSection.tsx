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
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text">
          Effortlessly Fill Your Content Calendar—No Extra Time Required
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-amber-300">
          We help you create consistent, quality content from your calls so you can focus on building your business.
        </p>
        <Button 
          size="lg" 
          className="bg-transparent border-2 border-white hover:bg-brand-purple transition-colors mb-16 text-white"
        >
          Implement the Content Catalyst
        </Button>

        <div className="bg-dark-100 p-8 rounded-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-white">
            Send a transcript, get back 4 LinkedIn posts you can publish now
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Textarea
                placeholder="Paste your transcript here..."
                value={transcript}
                onChange={(e) => setTranscript(e.target.value)}
                className="min-h-[100px] bg-black border-white text-white placeholder:text-gray-400"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-black border-white text-white placeholder:text-gray-400"
              />
              <Input
                placeholder="Speaker name in transcript"
                value={speakerName}
                onChange={(e) => setSpeakerName(e.target.value)}
                className="bg-black border-white text-white placeholder:text-gray-400"
              />
            </div>
            <Input
              placeholder="Topics you post about"
              value={topics}
              onChange={(e) => setTopics(e.target.value)}
              className="bg-black border-white text-white placeholder:text-gray-400"
            />
            <Button 
              type="submit" 
              className="w-full bg-transparent border-2 border-white hover:bg-brand-purple transition-colors text-white"
            >
              Give Me Content
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};