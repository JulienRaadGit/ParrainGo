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
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
        copied
          ? 'bg-accent text-white'
          : 'bg-primary text-white hover:bg-blue-700'
      } ${className}`}
      aria-live="polite"
      aria-label={copied ? 'Code copié' : 'Copier le code'}
    >
      {copied ? 'Copié ✅' : 'Copier le code'}
    </button>
  );
}

