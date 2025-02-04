import React from 'react';

export const TestimonialSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#2A1B3D] to-[#130B1D]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-['Inter'] font-bold mb-16 text-white text-center">
          Turning Conversations into Content
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8 bg-[#1F1528] rounded-2xl p-8">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0">
            <img
              src="/akinyemi-headshot.jpg"
              alt="Akinyemi Bajulaiye"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <blockquote className="text-xl md:text-2xl font-['Inter'] text-gray-300 mb-6">
              "So many of us find ourselves in meetings where we take notes, transcribe discussions, and capture action steps. But the tech available today enables us to take it much further. That's what I set out to do with Content Catalyst."
            </blockquote>
            <div className="flex items-center gap-4">
              <div>
                <p className="font-['Inter'] font-semibold text-white text-lg">Akinyemi Bajulaiye</p>
                <p className="text-gray-400">Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 