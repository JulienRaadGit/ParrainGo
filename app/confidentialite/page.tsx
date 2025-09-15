import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité de ParrainGo - Comment nous collectons, utilisons et protégeons vos données personnelles.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold font-poppins text-ink mb-8">
          Politique de confidentialité
        </h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-poppins text-ink mb-4">
              Collecte des données
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              ParrainGo collecte des données de manière limitée et transparente :
            </p>
            <ul className="text-muted space-y-2">
              <li><strong>Données de navigation :</strong> Adresse IP, type de navigateur, pages visitées</li>
              <li><strong>Données d'utilisation :</strong> Codes copiés, clics sur les liens de redirection</li>
              <li><strong>Cookies :</strong> Cookies techniques pour le fonctionnement du site</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-poppins text-ink mb-4">
              Utilisation des données
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Nous utilisons vos données pour :
            </p>
            <ul className="text-muted space-y-2">
              <li>Améliorer le fonctionnement du site</li>
              <li>Analyser l'utilisation des codes parrainage</li>
              <li>Fournir des statistiques anonymisées</li>
              <li>Assurer la sécurité du site</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-poppins text-ink mb-4">
              Partage des données
            </h2>
            <p className="text-muted leading-relaxed">
              ParrainGo ne vend pas, ne loue pas et ne partage pas vos données personnelles avec des tiers, sauf dans les cas suivants :
            </p>
            <ul className="text-muted space-y-2 mt-4">
              <li>Avec votre consentement explicite</li>
              <li>Pour respecter une obligation légale</li>
              <li>Avec nos prestataires de services (hébergement, analytics) sous contrat de confidentialité</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-poppins text-ink mb-4">
              Analytics et cookies
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Nous utilisons Plausible Analytics, un service respectueux de la vie privée qui :
            </p>
            <ul className="text-muted space-y-2">
              <li>Ne collecte pas de données personnelles</li>
              <li>Ne place pas de cookies de tracking</li>
              <li>Respecte le RGPD</li>
              <li>Fournit des statistiques anonymisées</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-poppins text-ink mb-4">
              Sécurité des données
            </h2>
            <p className="text-muted leading-relaxed">
              Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données contre la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, l'altération ou la destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-poppins text-ink mb-4">
              Vos droits
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="text-muted space-y-2">
              <li><strong>Droit d'accès :</strong> Connaître les données que nous détenons sur vous</li>
              <li><strong>Droit de rectification :</strong> Corriger des données inexactes</li>
              <li><strong>Droit d'effacement :</strong> Demander la suppression de vos données</li>
              <li><strong>Droit à la portabilité :</strong> Récupérer vos données dans un format structuré</li>
              <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-poppins text-ink mb-4">
              Conservation des données
            </h2>
            <p className="text-muted leading-relaxed">
              Nous conservons vos données uniquement le temps nécessaire aux finalités pour lesquelles elles ont été collectées, ou conformément aux obligations légales applicables.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-poppins text-ink mb-4">
              Contact
            </h2>
            <p className="text-muted leading-relaxed">
              Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, contactez-nous à : contact@parraingo.fr
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
