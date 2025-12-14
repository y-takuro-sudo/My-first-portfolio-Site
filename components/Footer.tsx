import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-neutral-800 text-center text-neutral-600 text-xs">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Takuro Yoshio. All rights reserved.</p>
        <p className="mt-2">Designed inspired by A24 Films aesthetic.</p>
      </div>
    </footer>
  );
};

export default Footer;