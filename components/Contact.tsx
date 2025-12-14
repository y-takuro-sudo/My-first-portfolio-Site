import React from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Contact Form</h2>
      
      <p className="text-neutral-400 mb-10 leading-relaxed">
        個人でのご依頼、ビジネスパートナー、業務提携、その他のお問い合わせは、<br className="hidden md:block"/>
        以下のGoogleフォームよりお気軽にご連絡ください。
      </p>
      
      <a 
        href="https://docs.google.com/forms/d/e/1FAIpQLSdaJM5Kf4JyMUt1a-hdfzTHrqKSSivXskgkwpGXIQrvWVoNRw/viewform?usp=header"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-3 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-cyan-900/20"
      >
        <Mail className="w-5 h-5" />
        <span>Open Contact Form</span>
      </a>
      
      <div className="mt-16 pt-8 border-t border-neutral-800 text-left">
        <h3 className="text-sm font-bold text-neutral-300 uppercase tracking-wider mb-4">
          Built With
        </h3>
        <ul className="flex flex-wrap gap-4 text-sm text-neutral-500 font-mono">
          <li className="px-3 py-1 border border-neutral-800 rounded">TypeScript</li>
          <li className="px-3 py-1 border border-neutral-800 rounded">React</li>
          <li className="px-3 py-1 border border-neutral-800 rounded">Tailwind CSS</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;