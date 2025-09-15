import { NextRequest, NextResponse } from 'next/server';
import { APPS } from '@/data/apps';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const appSlug = searchParams.get('app');
  const codeId = searchParams.get('code');

  if (!appSlug || !codeId) {
    return NextResponse.json(
      { error: 'Paramètres manquants' },
      { status: 400 }
    );
  }

  // Trouver l'app correspondante
  const app = APPS.find(app => app.slug === appSlug);
  if (!app) {
    return NextResponse.json(
      { error: 'Application non trouvée' },
      { status: 404 }
    );
  }

  // Trouver le code correspondant
  const code = app.codes.find(c => c.id === codeId);
  if (!code) {
    return NextResponse.json(
      { error: 'Code non trouvé' },
      { status: 404 }
    );
  }

  // Construire l'URL avec les paramètres UTM
  const referralUrl = new URL(code.referralUrl);
  referralUrl.searchParams.set('utm_source', 'parraingo');
  referralUrl.searchParams.set('utm_medium', 'referral');
  referralUrl.searchParams.set('utm_campaign', `app-${appSlug}`);

  // Redirection 302
  return NextResponse.redirect(referralUrl.toString(), 302);
}

