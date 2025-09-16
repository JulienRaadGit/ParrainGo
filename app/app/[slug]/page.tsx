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
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="relative mb-8">
            <div className="w-20 h-20 rounded-2xl mx-auto flex items-center justify-center bg-white border border-gray-200 shadow-lg">
              <Image
                src={`/images/${app.slug}.png`}
                alt={`Logo ${app.name}`}
                width={64}
                height={64}
                className="rounded-xl"
              />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-gray-800 mb-6 leading-tight">
            Code parrainage{' '}
            <span className="text-blue-600">
              {app.name}
            </span>
            <br />
            <span className="text-2xl md:text-3xl text-gray-600">2025 — bonus immédiat</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            {app.shortDesc}
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 max-w-2xl mx-auto">
            <p className="text-blue-700 text-sm font-medium">
              💡 <strong>Conseil :</strong> Ce code parrainage vous permet de bénéficier d&apos;un bonus immédiat lors de votre inscription. N&apos;hésitez pas à l&apos;utiliser !
            </p>
          </div>
        </div>

        {/* Bandeau spécial PayPal */}
        {app.slug === 'paypal' && (
          <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-xl p-4 mb-12 text-center shadow-lg animate-slide-up">
            <div className="flex items-center justify-center gap-3">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-semibold">Offre annoncée jusqu&apos;au 31/12/2025</span>
            </div>
          </div>
        )}

        {/* Code Card */}
        <div className="mb-16 animate-slide-up">
          <CodeCard app={app} code={editorCode} />
        </div>

        {/* How to use */}
        <div className="card-premium mb-12 animate-slide-up">
          <h2 className="text-2xl font-bold font-poppins text-gray-800 mb-8 text-center">
            Comment utiliser le code parrainage{' '}
            <span className="text-blue-600">{app.name}</span> ?
          </h2>
          <div className="space-y-6">
            {app.howTo.map((step, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-blue-500 text-white rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-md">
                  {index + 1}
                </div>
                <p className="text-gray-600 text-base leading-relaxed pt-1">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Terms */}
        <div className="card-premium mb-12 animate-slide-up">
          <h2 className="text-2xl font-bold font-poppins text-gray-800 mb-8 text-center">
            Conditions d&apos;<span className="text-blue-600">utilisation</span>
          </h2>
          <div className="space-y-3">
            {app.terms.map((term, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 text-sm leading-relaxed">
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
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-4">
              Prêt à bénéficier de votre bonus{' '}
              <span className="text-yellow-300">
                {app.name}
              </span> ?
            </h2>
            <p className="text-blue-100 text-base mb-6 max-w-2xl mx-auto leading-relaxed">
              Utilisez le code parrainage ci-dessus et recevez votre bonus immédiatement.
            </p>
            <a
              href={`/api/go?app=${app.slug}&code=${editorCode.id}`}
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold text-base shadow-md hover:shadow-lg transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              Utiliser le code maintenant
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
