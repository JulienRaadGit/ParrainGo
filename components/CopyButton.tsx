'use client';

import { useState } from 'react';

interface CopyButtonProps {
  code: string;
  appSlug: string;
  className?: string;
}

export default function CopyButton({ code, appSlug, className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      
      // Event Plausible
      if (typeof window !== 'undefined' && (window as any).plausible) {
        (window as any).plausible('copy_code', {
          props: { app: appSlug, code: code }
        });
      }
      
      // Reset after 1.5s
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`px-6 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
        copied
          ? 'bg-gradient-to-r from-accent to-green-500 text-white'
          : 'bg-gradient-to-r from-primary to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'
      } ${className}`}
      aria-live="polite"
      aria-label={copied ? 'Code copié' : 'Copier le code'}
    >
      {copied ? '✅ Copié !' : '📋 Copier le code'}
    </button>
  );
}

