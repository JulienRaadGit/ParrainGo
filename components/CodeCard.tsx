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
    <div className="card-premium relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5"></div>
      
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="bg-gradient-to-r from-accent to-green-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              Code de l&apos;éditeur
            </span>
          </div>
        </div>
        
        <div className="mb-8">
          {code.code && (
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 mb-4 border border-gray-200/50 shadow-lg">
              <div className="text-sm text-muted mb-2 font-medium">Code parrainage</div>
              <div className="text-3xl font-bold font-poppins text-ink tracking-wider">
                {code.code}
              </div>
            </div>
          )}
          
          {code.note && (
            <p className="text-muted text-base italic text-center">
              {code.note}
            </p>
          )}
        </div>
        
        <div className="flex gap-4">
          {code.code && (
            <CopyButton 
              code={code.code} 
              appSlug={app.slug}
              className="flex-1"
            />
          )}
          <button
            onClick={handleUseCode}
            className={`px-6 py-4 rounded-xl font-semibold bg-gradient-to-r from-accent to-green-500 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 ${code.code ? 'flex-1' : 'w-full'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            Utiliser le code
          </button>
        </div>
      </div>
    </div>
  );
}

