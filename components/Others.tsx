import React from 'react';
import { Globe } from 'lucide-react';

const Others: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">Others</h2>
      
      <div className="bg-gradient-to-r from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-lg p-8 md:p-10 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
          <Globe size={100} />
        </div>

        <h3 className="text-sm uppercase tracking-widest text-cyan-500 font-bold mb-2">Business Partner</h3>
        
        <h4 className="text-2xl font-bold text-white mb-4">
            Webb Official
        </h4>
        
        <p className="text-neutral-300 mb-8 leading-relaxed max-w-2xl font-light">
          現在、業務委託契約を締結しているパートナー企業です。Web制作やクリエイティブ事業において連携し、価値創造に取り組んでいます。
        </p>
        
        <a 
          href="https://webb-official.notion.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border border-neutral-600 rounded text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          Visit Partner Site
        </a>
      </div>
    </div>
  );
};

export default Others;