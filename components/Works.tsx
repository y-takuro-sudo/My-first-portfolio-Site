import React, { useState } from 'react';
import { WorkItem } from '../types';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const Works: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const works: WorkItem[] = [
    {
      id: 1,
      title: 'Mini India Restaurant',
      url: 'https://project-915b826d.pages.dev/',
      // Authentic Indian Curry image
      imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1600&auto=format&fit=crop', 
      description: '本場のスパイス香るインドカレーレストランのWebサイト。食欲をそそるビジュアルを中心に、メニュー閲覧から予約までスムーズに完結する動線を設計しました。レスポンシブ対応でスマートフォンからのアクセスも快適です。',
      isComingSoon: false,
    },
    {
      id: 2,
      title: 'Coming Soon',
      imageUrl: 'https://picsum.photos/id/180/800/600?grayscale',
      description: '現在開発中の新規プロジェクトです。詳細は近日公開予定です。',
      isComingSoon: true,
    },
    {
      id: 3,
      title: 'Coming Soon',
      imageUrl: 'https://picsum.photos/id/20/800/600?grayscale',
      description: '次期リリースのWebアプリケーション。現在要件定義およびデザインフェーズです。',
      isComingSoon: true,
    },
    {
      id: 4,
      title: 'Coming Soon',
      imageUrl: 'https://picsum.photos/id/26/800/600?grayscale',
      description: '新しいサービス企画を構想中です。',
      isComingSoon: true,
    },
  ];

  const toggleDescription = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div>
      <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">Selected Works</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {works.map((work) => (
          <div key={work.id} className="flex flex-col group">
            {/* Image Card Area */}
            <div className="relative aspect-[4/3] bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 hover:border-neutral-600 transition-colors">
              {/* Image */}
              <img 
                src={work.imageUrl} 
                alt={work.title}
                className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${work.isComingSoon ? 'opacity-30' : 'opacity-90 group-hover:opacity-100'}`}
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none">
                <h3 className="text-xl font-bold text-white mb-1">
                  {work.title}
                </h3>
                
                {!work.isComingSoon && work.url ? (
                  <div className="flex items-center text-cyan-400 text-sm font-medium">
                    View Project <ExternalLink size={14} className="ml-1" />
                  </div>
                ) : (
                  <span className="text-neutral-500 text-sm italic">In Development</span>
                )}
              </div>

              {/* Click area for entire card if valid URL */}
              {!work.isComingSoon && work.url && (
                <a 
                  href={work.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                  aria-label={`View ${work.title}`}
                ></a>
              )}
            </div>

            {/* Expandable Description Area */}
            <div className="mt-3">
              <button
                onClick={() => toggleDescription(work.id)}
                className="flex items-center text-sm text-neutral-400 hover:text-white transition-colors focus:outline-none group/btn"
              >
                <span className="mr-2 uppercase tracking-wider text-xs font-bold group-hover/btn:text-cyan-400 transition-colors">Details</span>
                {expandedId === work.id ? (
                  <ChevronUp size={16} className="text-cyan-400" />
                ) : (
                  <ChevronDown size={16} className="group-hover/btn:text-cyan-400 transition-colors" />
                )}
              </button>

              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedId === work.id ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'
                }`}
              >
                <p className="text-neutral-400 text-sm leading-relaxed border-l-2 border-neutral-800 pl-4 py-1">
                  {work.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;