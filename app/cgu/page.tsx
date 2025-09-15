import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Conditions générales d\'utilisation',
  description: 'Conditions générales d\'utilisation de ParrainGo - Règles et conditions d\'utilisation du site.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function CguPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold font-poppins text-ink mb-8">
          Conditions générales d'utilisation
        </h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-poppins text-ink mb-4">
              Objet
            </h2>
            <p className="text-muted leading-relaxed">
              Les présentes conditions générales d'utilisation (CGU) régissent l'utilisation du site ParrainGo, accessible à l'adresse parraingo.fr. L'utilisation du site implique l'acceptation pleine et entière des présentes CGU.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-poppins text-ink mb-4">
              Définitions
            </h2>
            <ul className="text-muted space-y-2">
              <li><strong>Site :</strong> Le site web ParrainGo accessible à l'adresse parraingo.fr</li>
              <li><strong>Utilisateur :</strong> Toute personne accédant au site</li>
              <li><strong>Éditeur :</strong> ParrainGo, éditeur du site</li>
              <li><strong>Codes parrainage :</strong> Codes promotionnels permettant d'obtenir des avantages lors de l'inscription à des services tiers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-poppins text-ink mb-4">
              Accès au site
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Le site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet. Tous les frais supportés par l'utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.
            </p>
            <p className="text-muted leading-relaxed">
              ParrainGo se réserve le droit d'interrompre temporairement ou définitivement l'accès au site pour des raisons de maintenance, de mise à jour ou pour toute autre raison.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-poppins text-ink mb-4">
              Utilisation du site
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              L'utilisateur s'engage à utiliser le site de manière conforme à sa destination et s'interdit notamment de :
            </p>
            <ul className="text-muted space-y-2">
              <li>Utiliser le site à des fins illégales ou non autorisées</li>
              <li>Transmettre des contenus illicites, offensants ou diffamatoires</li>
              <li>Tenter de contourner les mesures de sécurité du site</li>
              <li>Utiliser des robots ou scripts automatisés pour accéder au site</li>
              <li>Perturber le fonctionnement du site</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-poppins text-ink mb-4">
              Codes parrainage
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              ParrainGo met à disposition des codes parrainage pour diverses applications et services. L'utilisateur reconnaît que :
            </p>
            <ul className="text-muted space-y-2">
              <li>Les codes parrainage sont fournis à titre informatif</li>
              <li>La validité et les conditions des codes dépendent des services tiers</li>
              <li>ParrainGo ne peut garantir la disponibilité ou la validité des codes</li>
              <li>L'utilisateur est seul responsable de l'utilisation des codes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-poppins text-ink mb-4">
              Propriété intellectuelle
            </h2>
            <p className="text-muted leading-relaxed">
              L'ensemble du contenu du site (textes, images, vidéos, logos, etc.) est protégé par le droit d'auteur et appartient à ParrainGo ou à ses partenaires. Toute reproduction, distribution ou utilisation non autorisée est interdite.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-poppins text-ink mb-4">
              Responsabilité
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              ParrainGo s'efforce de fournir des informations exactes et à jour, mais ne peut garantir :
            </p>
            <ul className="text-muted space-y-2">
              <li>L'exactitude des informations publiées</li>
              <li>La disponibilité continue du site</li>
              <li>L'absence d'erreurs ou de virus</li>
              <li>La validité des codes parrainage</li>
            </ul>
            <p className="text-muted leading-relaxed mt-4">
              ParrainGo ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-poppins text-ink mb-4">
              Liens externes
            </h2>
            <p className="text-muted leading-relaxed">
              Le site peut contenir des liens vers des sites externes. ParrainGo n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leur politique de confidentialité.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-poppins text-ink mb-4">
              Modification des CGU
            </h2>
            <p className="text-muted leading-relaxed">
              ParrainGo se réserve le droit de modifier les présentes CGU à tout moment. Les modifications entrent en vigueur dès leur publication sur le site. Il appartient à l'utilisateur de consulter régulièrement les CGU.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-poppins text-ink mb-4">
              Droit applicable et juridiction
            </h2>
            <p className="text-muted leading-relaxed">
              Les présentes CGU sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-poppins text-ink mb-4">
              Contact
            </h2>
            <p className="text-muted leading-relaxed">
              Pour toute question concernant ces conditions générales d'utilisation, vous pouvez nous contacter à : contact@parraingo.fr
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
