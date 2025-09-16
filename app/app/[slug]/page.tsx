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
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center bg-white border border-gray-200 shadow-sm">
            <Image
              src={`/images/${app.slug}.png`}
              alt={`Logo ${app.name}`}
              width={64}
              height={64}
              className="rounded-xl"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-ink mb-4">
            Code parrainage {app.name} 2025 — bonus immédiat
          </h1>
          <p className="text-xl text-muted mb-6">
            {app.shortDesc}
          </p>
        </div>

        {/* Bandeau spécial PayPal */}
        {app.slug === 'paypal' && (
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl p-4 mb-8 text-center">
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Offre annoncée jusqu&apos;au 31/12/2025</span>
            </div>
          </div>
        )}

        {/* Code Card */}
        <div className="mb-12">
          <CodeCard app={app} code={editorCode} />
        </div>

        {/* How to use */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <h2 className="text-2xl font-bold font-poppins text-ink mb-6">
            Comment utiliser le code parrainage {app.name} ?
          </h2>
          <div className="space-y-4">
            {app.howTo.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-muted leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Terms */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <h2 className="text-2xl font-bold font-poppins text-ink mb-6">
            Conditions d&apos;utilisation
          </h2>
          <div className="space-y-3">
            {app.terms.map((term, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted text-sm leading-relaxed">
                  {term}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <Faq app={app} />

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold font-poppins mb-4">
              Prêt à bénéficier de votre bonus {app.name} ?
            </h2>
            <p className="text-blue-100 mb-6">
              Utilisez le code parrainage ci-dessus et recevez votre bonus immédiatement.
            </p>
            <a
              href={`/api/go?app=${app.slug}&code=${editorCode.id}`}
              className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors duration-200"
            >
              Utiliser le code maintenant
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
