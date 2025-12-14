import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="min-h-[45vh] flex flex-col items-center justify-center relative overflow-hidden rounded-lg bg-gradient-to-b from-neutral-900 to-[#171717] border border-neutral-800">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] opacity-10 bg-cover bg-center"></div>
      
      <div className="z-10 text-center px-4">
        {/* Modern typographic logo representation */}
        <h1 className="text-[15vw] leading-none font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 select-none animate-pulse">
          MNV
        </h1>
        <p className="mt-4 text-neutral-400 text-lg md:text-xl font-light tracking-widest uppercase">
          Mirai No Value
        </p>
      </div>
    </div>
  );
};

export default Hero;