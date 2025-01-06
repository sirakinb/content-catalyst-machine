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
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
          Effortlessly Fill Your Content Calendar—No Extra Time Required
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12">
          We help you create consistent, quality content from your calls so you can focus on building your business.
        </p>
        <Button size="lg" className="bg-brand-purple hover:bg-brand-pink transition-colors mb-16">
          Implement the Content Catalyst
        </Button>

        <div className="bg-dark-100 p-8 rounded-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">
            Send a transcript, get back 4 LinkedIn posts you can publish now
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Textarea
                placeholder="Paste your transcript here..."
                value={transcript}
                onChange={(e) => setTranscript(e.target.value)}
                className="min-h-[100px]"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="Speaker name in transcript"
                value={speakerName}
                onChange={(e) => setSpeakerName(e.target.value)}
              />
            </div>
            <Input
              placeholder="Topics you post about"
              value={topics}
              onChange={(e) => setTopics(e.target.value)}
            />
            <Button type="submit" className="w-full bg-brand-purple hover:bg-brand-pink transition-colors">
              Give Me Content
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};