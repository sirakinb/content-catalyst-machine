import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-brand-deep-purple py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h3 className="text-xl font-semibold text-white">Pentridge Media</h3>
          <p className="text-gray-300">Where creativity meets technology.</p>
          <p className="text-sm text-gray-400 mt-4">© {new Date().getFullYear()} Pentridge Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};