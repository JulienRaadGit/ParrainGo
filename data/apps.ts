export type AppItem = {
  name: string;
  slug: string;
  shortDesc: string;
  howTo: string[];
  terms: string[];
  codes: {
    id: string;
    owner: "editor";
    code: string;
    referralUrl: string;
    note?: string;
  }[];
};

export const APPS: AppItem[] = [
  {
    name: "Uber",
    slug: "uber",
    shortDesc: "Transport VTC avec bonus de bienvenue",
    howTo: [
      "Téléchargez l'application Uber",
      "Créez votre compte",
      "Entrez le code parrainage lors de l'inscription",
      "Effectuez votre premier trajet",
      "Recevez votre bonus immédiatement"
    ],
    terms: [
      "Code valable pour les nouveaux utilisateurs uniquement",
      "Bonus crédité après le premier trajet payant",
      "Montant du bonus variable selon les promotions en cours",
      "Offre non cumulable avec d'autres promotions"
    ],
    codes: [
      {
        id: "uber-editor-2025",
        owner: "editor",
        code: "UBER2025",
        referralUrl: "https://www.uber.com/fr/fr/",
        note: "Code officiel ParrainGo - Bonus garanti"
      }
    ]
  },
  {
    name: "Uber Eats",
    slug: "uber-eats",
    shortDesc: "Livraison de repas avec réduction",
    howTo: [
      "Téléchargez l'application Uber Eats",
      "Créez votre compte",
      "Entrez le code parrainage",
      "Passez votre première commande",
      "Bénéficiez de la réduction immédiate"
    ],
    terms: [
      "Code valable pour les nouveaux utilisateurs",
      "Réduction appliquée sur la première commande",
      "Montant minimum de commande requis",
      "Offre limitée dans le temps"
    ],
    codes: [
      {
        id: "uber-eats-editor-2025",
        owner: "editor",
        code: "EATS2025",
        referralUrl: "https://www.ubereats.com/fr",
        note: "Code officiel ParrainGo - Réduction garantie"
      }
    ]
  },
  {
    name: "Vinted",
    slug: "vinted",
    shortDesc: "Vente et achat de vêtements d'occasion",
    howTo: [
      "Téléchargez l'application Vinted",
      "Créez votre compte",
      "Entrez le code parrainage",
      "Effectuez votre premier achat",
      "Recevez votre crédit de bienvenue"
    ],
    terms: [
      "Code valable pour les nouveaux utilisateurs",
      "Crédit crédité après le premier achat validé",
      "Montant du crédit variable selon les promotions",
      "Crédit utilisable sur la plateforme uniquement"
    ],
    codes: [
      {
        id: "vinted-editor-2025",
        owner: "editor",
        code: "VINTED2025",
        referralUrl: "https://www.vinted.fr/",
        note: "Code officiel ParrainGo - Crédit garanti"
      }
    ]
  },
  {
    name: "Revolut",
    slug: "revolut",
    shortDesc: "Banque mobile avec carte gratuite",
    howTo: [
      "Téléchargez l'application Revolut",
      "Créez votre compte",
      "Entrez le code parrainage",
      "Commandez votre carte",
      "Recevez votre bonus après activation"
    ],
    terms: [
      "Code valable pour les nouveaux utilisateurs",
      "Bonus crédité après activation de la carte",
      "Montant du bonus variable selon les promotions",
      "Conditions d'éligibilité à vérifier"
    ],
    codes: [
      {
        id: "revolut-editor-2025",
        owner: "editor",
        code: "REVOLUT2025",
        referralUrl: "https://www.revolut.com/fr/",
        note: "Code officiel ParrainGo - Bonus garanti"
      }
    ]
  },
  {
    name: "Lydia",
    slug: "lydia",
    shortDesc: "Paiement mobile entre amis",
    howTo: [
      "Téléchargez l'application Lydia",
      "Créez votre compte",
      "Entrez le code parrainage",
      "Effectuez votre premier paiement",
      "Recevez votre bonus de bienvenue"
    ],
    terms: [
      "Code valable pour les nouveaux utilisateurs",
      "Bonus crédité après le premier paiement",
      "Montant du bonus fixe selon les promotions",
      "Offre limitée dans le temps"
    ],
    codes: [
      {
        id: "lydia-editor-2025",
        owner: "editor",
        code: "LYDIA2025",
        referralUrl: "https://lydia-app.com/",
        note: "Code officiel ParrainGo - Bonus garanti"
      }
    ]
  },
  {
    name: "Wise",
    slug: "wise",
    shortDesc: "Transferts d'argent internationaux",
    howTo: [
      "Téléchargez l'application Wise",
      "Créez votre compte",
      "Entrez le code parrainage",
      "Effectuez votre premier transfert",
      "Recevez votre bonus de bienvenue"
    ],
    terms: [
      "Code valable pour les nouveaux utilisateurs",
      "Bonus crédité après le premier transfert",
      "Montant minimum de transfert requis",
      "Offre limitée géographiquement"
    ],
    codes: [
      {
        id: "wise-editor-2025",
        owner: "editor",
        code: "WISE2025",
        referralUrl: "https://wise.com/fr/",
        note: "Code officiel ParrainGo - Bonus garanti"
      }
    ]
  }
];

