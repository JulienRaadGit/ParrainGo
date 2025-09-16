import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { APPS } from '@/data/apps';
import CodeCard from '@/components/CodeCard';
import Faq from '@/components/Faq';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return APPS.map((app) => ({
    slug: app.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const app = APPS.find((app) => app.slug === params.slug);
  
  if (!app) {
    return {
      title: 'App non trouvée',
    };
  }

  const title = `Code parrainage ${app.name} 2025 — bonus immédiat | ParrainGo`;
  const description = `Code parrainage ${app.name} 2025. ${app.shortDesc}. Bonus immédiat garanti avec le code officiel ParrainGo.`;

  return {
    title,
    description,
    keywords: [`code parrainage ${app.name}`, `${app.name} bonus`, `${app.name} réduction`, 'parrainage 2025'],
    openGraph: {
      title,
      description,
      url: `https://parraingo.fr/app/${app.slug}`,
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/app/${app.slug}`,
    },
  };
}

export default function AppPage({ params }: PageProps) {
  const app = APPS.find((app) => app.slug === params.slug);

  if (!app) {
    notFound();
  }

  const editorCode = app.codes.find(code => code.owner === 'editor');

  if (!editorCode) {
    notFound();
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent/10 to-blue-500/10 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="relative mb-8">
            <div className="w-24 h-24 rounded-3xl mx-auto flex items-center justify-center bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 shadow-2xl">
              <Image
                src={`/images/${app.slug}.png`}
                alt={`Logo ${app.name}`}
                width={72}
                height={72}
                className="rounded-2xl"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-accent to-green-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold font-poppins text-ink mb-6 leading-tight">
            Code parrainage{' '}
            <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
              {app.name}
            </span>
            <br />
            <span className="text-3xl md:text-4xl text-muted">2025 — bonus immédiat</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted mb-8 max-w-3xl mx-auto leading-relaxed">
            {app.shortDesc}
          </p>
        </div>

        {/* Bandeau spécial PayPal */}
        {app.slug === 'paypal' && (
          <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white rounded-2xl p-6 mb-12 text-center shadow-2xl animate-slide-up">
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-lg font-bold">Offre annoncée jusqu&apos;au 31/12/2025</span>
            </div>
          </div>
        )}

        {/* Code Card */}
        <div className="mb-16 animate-slide-up">
          <CodeCard app={app} code={editorCode} />
        </div>

        {/* How to use */}
        <div className="card-premium mb-12 animate-slide-up">
          <h2 className="text-3xl font-bold font-poppins text-ink mb-8 text-center">
            Comment utiliser le code parrainage{' '}
            <span className="gradient-text">{app.name}</span> ?
          </h2>
          <div className="space-y-6">
            {app.howTo.map((step, index) => (
              <div key={index} className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 text-white rounded-2xl flex items-center justify-center text-lg font-bold flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  {index + 1}
                </div>
                <p className="text-muted text-lg leading-relaxed pt-2">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Terms */}
        <div className="card-premium mb-12 animate-slide-up">
          <h2 className="text-3xl font-bold font-poppins text-ink mb-8 text-center">
            Conditions d&apos;<span className="gradient-text">utilisation</span>
          </h2>
          <div className="space-y-4">
            {app.terms.map((term, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="w-3 h-3 bg-gradient-to-r from-accent to-green-500 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                <p className="text-muted text-base leading-relaxed">
                  {term}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <Faq app={app} />

        {/* CTA */}
        <div className="text-center mt-16 animate-slide-up">
          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white shadow-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                Prêt à bénéficier de votre bonus{' '}
                <span className="bg-gradient-to-r from-accent via-green-400 to-blue-400 bg-clip-text text-transparent">
                  {app.name}
                </span> ?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Utilisez le code parrainage ci-dessus et recevez votre bonus immédiatement.
              </p>
              <a
                href={`/api/go?app=${app.slug}&code=${editorCode.id}`}
                className="inline-block bg-gradient-to-r from-accent to-green-500 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                🎁 Utiliser le code maintenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
