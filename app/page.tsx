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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
              Code parrainage <span className="text-accent">2025</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Bonus immédiat garanti sur vos apps préférées
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher une app (Uber, Vinted, Revolut...)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 rounded-lg text-ink text-lg border-0 focus:ring-2 focus:ring-accent focus:outline-none"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-6 h-6 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-ink mb-4">
              {searchTerm ? `Résultats pour &quot;${searchTerm}&quot;` : 'Applications populaires'}
            </h2>
            <p className="text-muted text-lg">
              {searchTerm 
                ? `${filteredApps.length} résultat${filteredApps.length > 1 ? 's' : ''} trouvé${filteredApps.length > 1 ? 's' : ''}`
                : 'Découvrez les meilleurs codes parrainage 2025'
              }
            </p>
          </div>

          {filteredApps.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredApps.map((app) => (
                <Link
                  key={app.slug}
                  href={`/app/${app.slug}`}
                  className="card hover:shadow-lg transition-shadow duration-200 group"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center bg-white border border-gray-200 shadow-sm">
                      <Image
                        src={`/images/${app.slug}.png`}
                        alt={`Logo ${app.name}`}
                        width={48}
                        height={48}
                        className="rounded-lg"
                      />
                    </div>
                    <h3 className="text-xl font-semibold font-poppins text-ink mb-2 group-hover:text-primary transition-colors">
                      {app.name}
                    </h3>
                    <p className="text-muted text-sm mb-4">
                      {app.shortDesc}
                    </p>
                    <div className="bg-accent text-white px-4 py-2 rounded-lg text-sm font-medium">
                      Voir le code
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 6.291A7.962 7.962 0 0012 5c-2.34 0-4.29 1.009-5.824 2.709" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-ink mb-2">
                Aucun résultat trouvé
              </h3>
              <p className="text-muted">
                Essayez avec d&apos;autres mots-clés ou explorez nos applications populaires.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-ink mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-muted text-lg">
              Obtenez votre bonus en 3 étapes simples
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold font-poppins text-ink mb-2">
                Trouvez votre app
              </h3>
              <p className="text-muted">
                Recherchez l&apos;application qui vous intéresse et découvrez le code parrainage disponible.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold font-poppins text-ink mb-2">
                Copiez le code
              </h3>
              <p className="text-muted">
                Cliquez sur &quot;Copier le code&quot; pour l&apos;utiliser lors de votre inscription.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-white rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold font-poppins text-ink mb-2">
                Recevez votre bonus
              </h3>
              <p className="text-muted">
                Suivez les étapes d&apos;inscription et bénéficiez immédiatement de votre bonus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

