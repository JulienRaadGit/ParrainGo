import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'ParrainGo - Codes parrainage 2025',
    template: '%s | ParrainGo'
  },
  description: 'Découvrez les meilleurs codes parrainage 2025 pour Uber, Vinted, Revolut, Lydia et bien plus. Bonus immédiat garanti !',
  keywords: ['code parrainage', 'bonus', 'réduction', 'Uber', 'Vinted', 'Revolut', 'Lydia', 'Wise'],
  authors: [{ name: 'ParrainGo' }],
  creator: 'ParrainGo',
  publisher: 'ParrainGo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://parraingo.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://parraingo.fr',
    title: 'ParrainGo - Codes parrainage 2025',
    description: 'Découvrez les meilleurs codes parrainage 2025 pour Uber, Vinted, Revolut, Lydia et bien plus. Bonus immédiat garanti !',
    siteName: 'ParrainGo',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ParrainGo - Codes parrainage 2025',
    description: 'Découvrez les meilleurs codes parrainage 2025 pour Uber, Vinted, Revolut, Lydia et bien plus. Bonus immédiat garanti !',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script 
          defer 
          data-domain="parraingo.fr" 
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body className={`${inter.className} bg-bg text-ink antialiased`}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <a href="/" className="flex items-center space-x-2">
                    <img src="/logo.svg" alt="ParrainGo" className="h-8" />
                  </a>
                </div>
                <nav className="hidden md:flex space-x-8">
                  <a href="/" className="text-muted hover:text-ink transition-colors">
                    Accueil
                  </a>
                  <a href="/mentions-legales" className="text-muted hover:text-ink transition-colors">
                    Mentions légales
                  </a>
                  <a href="/confidentialite" className="text-muted hover:text-ink transition-colors">
                    Confidentialité
                  </a>
                  <a href="/cgu" className="text-muted hover:text-ink transition-colors">
                    CGU
                  </a>
                </nav>
              </div>
            </div>
          </header>
          
          <main className="flex-1">
            {children}
          </main>
          
          <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                  <img src="/logo.svg" alt="ParrainGo" className="h-8 mb-4" />
                  <p className="text-muted text-sm">
                    ParrainGo vous aide à trouver les meilleurs codes parrainage 2025 
                    pour bénéficier de bonus et réductions immédiates.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-ink mb-4">Légal</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="/mentions-legales" className="text-muted hover:text-ink text-sm transition-colors">
                        Mentions légales
                      </a>
                    </li>
                    <li>
                      <a href="/confidentialite" className="text-muted hover:text-ink text-sm transition-colors">
                        Politique de confidentialité
                      </a>
                    </li>
                    <li>
                      <a href="/cgu" className="text-muted hover:text-ink text-sm transition-colors">
                        Conditions générales
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-ink mb-4">Contact</h3>
                  <p className="text-muted text-sm">
                    Pour toute question, contactez-nous via notre formulaire de contact.
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-200 mt-8 pt-8 text-center">
                <p className="text-muted text-sm">
                  © 2025 ParrainGo. Tous droits réservés.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

