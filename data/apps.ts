export type AppItem = {
  name: string;
  slug: string;
  shortDesc: string;
  howTo: string[];
  terms: string[];
  codes: {
    id: string;
    owner: "editor";
    code?: string;
    referralUrl: string;
    note?: string;
  }[];
};

export const APPS: AppItem[] = [
  {
    name: "TheFork",
    slug: "thefork",
    shortDesc: "Gagne des Yums en réservant au resto.",
    howTo: [
      "Crée/ouvre ton compte TheFork.",
      "Entre le code 84B7799 ou passe par le lien.",
      "Réserve via l'app et honore ta 1ʳᵉ réservation."
    ],
    terms: [
      "Bonus en Yums, campagnes périodiques susceptibles d'évoluer.",
      "Crédités après la 1ʳᵉ réservation honorée.",
      "Offre réservée aux nouveaux comptes selon conditions TheFork."
    ],
    codes: [
      {
        id: "main",
        owner: "editor",
        code: "84B7799",
        referralUrl: "https://tfk.io/5zqj9x3a",
        note: "Utilise le code ou clique sur le lien."
      }
    ]
  },
  {
    name: "Vinted",
    slug: "vinted",
    shortDesc: "Avantages de bienvenue via parrainage.",
    howTo: [
      "Clique sur le lien d'invitation.",
      "Crée ton compte Vinted.",
      "Suis les étapes indiquées dans l'app."
    ],
    terms: [
      "Réservé aux nouveaux comptes.",
      "Montant/conditions variables selon pays et périodes."
    ],
    codes: [
      {
        id: "main",
        owner: "editor",
        referralUrl: "https://www.vinted.fr/invite/julienraad",
        note: "Parrainage via lien direct."
      }
    ]
  },
  {
    name: "PayPal",
    slug: "paypal",
    shortDesc: "Prime après 1ʳᵉ dépense du filleul.",
    howTo: [
      "Ouvre ton compte via le lien.",
      "Vérifie ton compte si demandé.",
      "Effectue une dépense éligible."
    ],
    terms: [
      "Offre annoncée jusqu'au 31 décembre 2025.",
      "Conditions et montants susceptibles d'évoluer selon PayPal.",
      "Le filleul doit réaliser une dépense éligible sous 30 jours (à vérifier dans l'app)."
    ],
    codes: [
      {
        id: "main",
        owner: "editor",
        referralUrl: "https://py.pl/3z5JGQiM3Ib",
        note: "Offre limitée dans le temps."
      }
    ]
  },
  {
    name: "Revolut",
    slug: "revolut",
    shortDesc: "Bonus après inscription et premières actions.",
    howTo: [
      "Inscris-toi via le lien.",
      "Vérifie ton identité (KYC) et alimente le compte.",
      "Commande la carte et effectue des achats éligibles."
    ],
    terms: [
      "Conditions fréquemment mises à jour par Revolut.",
      "Toutes les étapes peuvent être requises pour libérer la prime."
    ],
    codes: [
      {
        id: "main",
        owner: "editor",
        referralUrl: "https://revolut.com/referral/?referral-code=jraad_18&geo-redirect",
        note: "Parrainage via lien direct."
      }
    ]
  },
  {
    name: "Wise",
    slug: "wise",
    shortDesc: "Avantages après 1ʳᵉ utilisation.",
    howTo: [
      "Ouvre le compte via le lien.",
      "Vérifie ton identité si demandé.",
      "Effectue un premier transfert/usage éligible."
    ],
    terms: [
      "Conditions et seuils variables selon la région.",
      "Vérifie les détails dans l'app Wise."
    ],
    codes: [
      {
        id: "main",
        owner: "editor",
        referralUrl: "https://wise.com/invite/dic/julienr983",
        note: "Lien de parrainage direct."
      }
    ]
  }
];