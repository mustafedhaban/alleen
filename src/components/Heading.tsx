
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const Heading: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  centered = true, 
  light = false 
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 font-serif ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl text-lg ${centered ? 'mx-auto' : ''} ${light ? 'text-blue-100' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-accent mt-6 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default Heading;
