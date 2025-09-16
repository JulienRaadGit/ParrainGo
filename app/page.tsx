'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { APPS } from '@/data/apps';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredApps = useMemo(() => {
    if (!searchTerm) return APPS;
    
    return APPS.filter(app => 
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.shortDesc.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-primary/10 rounded-full blur-3xl floating-animation" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <span className="text-sm font-medium">✨ Nouveaux codes 2025 disponibles</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-8 leading-tight">
              Code parrainage{' '}
              <span className="bg-gradient-to-r from-accent via-green-400 to-blue-400 bg-clip-text text-transparent">
                2025
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Découvrez les meilleurs codes parrainage et obtenez des <span className="text-accent font-semibold">bonus immédiats</span> sur vos applications préférées
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto animate-slide-up">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Rechercher une app (TheFork, Vinted, PayPal...)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-8 py-6 rounded-2xl text-ink text-lg border-0 focus:ring-4 focus:ring-accent/50 focus:outline-none shadow-2xl bg-white/95 backdrop-blur-sm transition-all duration-300 group-hover:shadow-3xl"
                />
                <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
                  <svg className="w-6 h-6 text-muted group-hover:text-primary transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="relative py-24 -mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-ink mb-6">
              {searchTerm ? (
                <>
                  Résultats pour <span className="gradient-text">&quot;{searchTerm}&quot;</span>
                </>
              ) : (
                <>
                  Applications <span className="gradient-text">Premium</span>
                </>
              )}
            </h2>
            <p className="text-muted text-xl max-w-2xl mx-auto">
              {searchTerm 
                ? `${filteredApps.length} résultat${filteredApps.length > 1 ? 's' : ''} trouvé${filteredApps.length > 1 ? 's' : ''}`
                : 'Sélectionnez votre application et obtenez votre bonus immédiatement'
              }
            </p>
          </div>

          {filteredApps.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredApps.map((app, index) => (
                <Link
                  key={app.slug}
                  href={`/app/${app.slug}`}
                  className="card-premium group animate-slide-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="text-center">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 rounded-2xl mx-auto flex items-center justify-center bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        <Image
                          src={`/images/${app.slug}.png`}
                          alt={`Logo ${app.name}`}
                          width={56}
                          height={56}
                          className="rounded-xl"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-accent to-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold font-poppins text-ink mb-3 group-hover:gradient-text transition-all duration-300">
                      {app.name}
                    </h3>
                    
                    <p className="text-muted text-base mb-6 leading-relaxed">
                      {app.shortDesc}
                    </p>
                    
                    <div className="bg-gradient-to-r from-accent to-green-500 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-lg group-hover:shadow-xl transform group-hover:-translate-y-0.5 transition-all duration-300">
                      🎁 Obtenir le bonus
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 animate-fade-in">
              <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <svg className="w-16 h-16 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 6.291A7.962 7.962 0 0012 5c-2.34 0-4.29 1.009-5.824 2.709" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4">
                Aucun résultat trouvé
              </h3>
              <p className="text-muted text-lg max-w-md mx-auto">
                Essayez avec d&apos;autres mots-clés ou explorez nos applications populaires.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-ink mb-6">
              Comment ça <span className="gradient-text">marche</span> ?
            </h2>
            <p className="text-muted text-xl max-w-2xl mx-auto">
              Obtenez votre bonus en 3 étapes simples et rapides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group animate-slide-up">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 text-white rounded-2xl mx-auto flex items-center justify-center text-2xl font-bold shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                  1
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-accent to-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold font-poppins text-ink mb-4 group-hover:gradient-text transition-all duration-300">
                Trouvez votre app
              </h3>
              <p className="text-muted text-lg leading-relaxed">
                Recherchez l&apos;application qui vous intéresse et découvrez le code parrainage disponible.
              </p>
            </div>

            <div className="text-center group animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 text-white rounded-2xl mx-auto flex items-center justify-center text-2xl font-bold shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                  2
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-accent to-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold font-poppins text-ink mb-4 group-hover:gradient-text transition-all duration-300">
                Copiez le code
              </h3>
              <p className="text-muted text-lg leading-relaxed">
                Cliquez sur &quot;Copier le code&quot; pour l&apos;utiliser lors de votre inscription.
              </p>
            </div>

            <div className="text-center group animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-green-500 text-white rounded-2xl mx-auto flex items-center justify-center text-2xl font-bold shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                  3
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold font-poppins text-ink mb-4 group-hover:gradient-text transition-all duration-300">
                Recevez votre bonus
              </h3>
              <p className="text-muted text-lg leading-relaxed">
                Suivez les étapes d&apos;inscription et bénéficiez immédiatement de votre bonus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

