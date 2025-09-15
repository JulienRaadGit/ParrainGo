import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales de ParrainGo - Informations sur l\'éditeur du site et les conditions d\'utilisation.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold font-poppins text-ink mb-8">
          Mentions légales
        </h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-poppins text-ink mb-4">
              Éditeur du site
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Le site ParrainGo est édité par :
            </p>
            <ul className="text-muted space-y-2">
              <li><strong>Raison sociale :</strong> ParrainGo</li>
              <li><strong>Adresse :</strong> France</li>
              <li><strong>Email :</strong> contact@parraingo.fr</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-poppins text-ink mb-4">
              Hébergement
            </h2>
            <p className="text-muted leading-relaxed">
              Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-poppins text-ink mb-4">
              Propriété intellectuelle
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              L'ensemble du contenu du site ParrainGo (textes, images, vidéos, etc.) est protégé par le droit d'auteur et appartient à ParrainGo ou à ses partenaires.
            </p>
            <p className="text-muted leading-relaxed">
              Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces éléments est strictement interdite sans l'accord exprès par écrit de ParrainGo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-poppins text-ink mb-4">
              Responsabilité
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              ParrainGo s'efforce de fournir des informations exactes et à jour. Cependant, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur le site.
            </p>
            <p className="text-muted leading-relaxed">
              ParrainGo ne saurait être tenu responsable des dommages directs ou indirects causés au matériel de l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications requises, soit de l'apparition d'un bug ou d'une incompatibilité.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-poppins text-ink mb-4">
              Liens externes
            </h2>
            <p className="text-muted leading-relaxed">
              Le site ParrainGo peut contenir des liens vers d'autres sites web. ParrainGo n'est pas responsable du contenu de ces sites externes et ne peut être tenu responsable des dommages résultant de leur utilisation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-poppins text-ink mb-4">
              Droit applicable
            </h2>
            <p className="text-muted leading-relaxed">
              Le présent site est soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-poppins text-ink mb-4">
              Contact
            </h2>
            <p className="text-muted leading-relaxed">
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter à l'adresse : contact@parraingo.fr
            </p>
          </section>

          <p className="text-sm text-muted mt-8">
            Dernière mise à jour : Janvier 2025
          </p>
        </div>
      </div>
    </div>
  );
}
