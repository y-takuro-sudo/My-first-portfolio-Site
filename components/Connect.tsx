import React from 'react';
import { SocialLink } from '../types';
import { Facebook, BookOpen } from 'lucide-react';

// Custom X (formerly Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Connect: React.FC = () => {
  const socials: SocialLink[] = [
    {
      platform: 'Facebook',
      username: '吉尾拓朗',
      url: 'https://www.facebook.com/people/%E5%90%89%E5%B0%BE%E6%8B%93%E6%9C%97/pfbid0CkHB4jDacC2QsLmtPJibns99K1QA',
      description: 'Join Facebook to connect with me.',
      iconName: 'Facebook',
    },
    {
      platform: 'X (Twitter)',
      username: '@mirainovalue',
      url: 'https://x.com/mirainovalue',
      description: 'Follow for latest updates and thoughts.',
      iconName: 'Twitter',
    },
    {
      platform: 'Note',
      username: 'Takuroのリンク集',
      url: 'https://note.com/tak_yoshiro0525/portal',
      description: 'Takuroさんのリンク集です。',
      iconName: 'BookOpen',
    },
  ];

  const getIcon = (name: string) => {
    switch(name) {
      case 'Facebook': return <Facebook className="w-8 h-8" />;
      case 'Twitter': return <XIcon className="w-8 h-8" />;
      case 'BookOpen': return <BookOpen className="w-8 h-8" />;
      default: return <BookOpen className="w-8 h-8" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">Connect / SNS</h2>
      
      <div className="grid gap-6">
        {socials.map((social) => (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 md:p-8 bg-neutral-900/50 border border-neutral-800 rounded-lg hover:bg-neutral-800 transition-all hover:border-neutral-600"
          >
            <div className="flex items-start md:items-center space-x-6">
              <div className="p-4 bg-neutral-950 rounded-full text-neutral-300 group-hover:text-cyan-400 transition-colors border border-neutral-800">
                {getIcon(social.iconName)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
                  {social.platform}
                </h3>
                <p className="text-sm font-medium text-neutral-400 mb-2">{social.username}</p>
                {social.description && (
                  <p className="text-sm text-neutral-500 font-light leading-relaxed">
                    {social.description}
                  </p>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Connect;