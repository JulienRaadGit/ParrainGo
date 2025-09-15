import { AppItem } from '@/data/apps';

interface FaqProps {
  app: AppItem;
}

export default function Faq({ app }: FaqProps) {
  const faqs = [
    {
      question: `Comment utiliser le code parrainage ${app.name} ?`,
      answer: `Pour utiliser le code parrainage ${app.name}, suivez les étapes suivantes : ${app.howTo.join(', ')}.`
    },
    {
      question: `Le code parrainage ${app.name} est-il gratuit ?`,
      answer: `Oui, le code parrainage ${app.name} est entièrement gratuit. Il vous permet de bénéficier d'un bonus de bienvenue sans aucun coût supplémentaire.`
    },
    {
      question: `Quand vais-je recevoir mon bonus ${app.name} ?`,
      answer: `Le bonus ${app.name} est généralement crédité immédiatement après avoir rempli les conditions requises (premier achat, inscription, etc.).`
    },
    {
      question: `Puis-je utiliser plusieurs codes parrainage ${app.name} ?`,
      answer: `Non, les codes parrainage ${app.name} ne sont valables que pour les nouveaux utilisateurs et ne peuvent être utilisés qu'une seule fois.`
    },
    {
      question: `Le code parrainage ${app.name} a-t-il une date d'expiration ?`,
      answer: `Les codes parrainage ${app.name} peuvent avoir une durée de validité limitée. Nous vous recommandons de l'utiliser rapidement après l'avoir obtenu.`
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold font-poppins text-ink mb-6">
          Questions fréquentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
              <h3 className="font-semibold text-ink mb-2">
                {faq.question}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

