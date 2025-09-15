'use client';

import CopyButton from './CopyButton';
import { AppItem } from '@/data/apps';

interface CodeCardProps {
  app: AppItem;
  code: AppItem['codes'][0];
}

export default function CodeCard({ app, code }: CodeCardProps) {
  const handleUseCode = () => {
    // Event Plausible pour outbound click
    if (typeof window !== 'undefined' && (window as any).plausible) {
      (window as any).plausible('outbound_click', {
        props: { app: app.slug, code: code.id }
      });
    }
    
    // Redirection vers l'API
    window.location.href = `/api/go?app=${app.slug}&code=${code.id}`;
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="bg-accent text-white text-xs font-medium px-2 py-1 rounded-full">
            Code de l&apos;éditeur
          </span>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="bg-gray-50 rounded-lg p-4 mb-3">
          <div className="text-sm text-muted mb-1">Code parrainage</div>
          <div className="text-2xl font-bold font-poppins text-ink">
            {code.code}
          </div>
        </div>
        
        {code.note && (
          <p className="text-sm text-muted italic">
            {code.note}
          </p>
        )}
      </div>
      
      <div className="flex gap-3">
        <CopyButton 
          code={code.code} 
          appSlug={app.slug}
          className="flex-1"
        />
        <button
          onClick={handleUseCode}
          className="flex-1 px-4 py-2 rounded-lg font-medium bg-accent text-white hover:bg-green-600 transition-colors duration-200"
        >
          Utiliser le code
        </button>
      </div>
    </div>
  );
}

