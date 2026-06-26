'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const GCLID_STORAGE_KEY = 'gclid';

export function persistGclid(gclid: string | null): void {
  if (typeof window === 'undefined' || !gclid) return;
  sessionStorage.setItem(GCLID_STORAGE_KEY, gclid);
}

export function getStoredGclid(): string | null {
  if (typeof window === 'undefined') return null;
  return sessionStorage.getItem(GCLID_STORAGE_KEY);
}

export function resolveGclid(urlGclid: string | null): string | null {
  if (urlGclid) {
    persistGclid(urlGclid);
    return urlGclid;
  }
  return getStoredGclid();
}

export function appendGclidToUrl(url: string, gclid: string | null): string {
  if (!gclid) return url;
  return `${url}${encodeURIComponent(gclid)}`;
}

export function appendGclidToPath(path: string, gclid: string | null): string {
  if (!gclid) return path;
  return `${path}${encodeURIComponent(gclid)}`;
}

export function usePersistedGclid(): string | null {
  const searchParams = useSearchParams();
  const [gclid, setGclid] = useState<string | null>(null);

  useEffect(() => {
    setGclid(resolveGclid(searchParams.get('gclid')));
  }, [searchParams]);

  return gclid ?? resolveGclid(searchParams.get('gclid'));
}

export function usePartnerUrl(partnerUrl: string): string {
  const searchParams = useSearchParams();
  const [linkUrl, setLinkUrl] = useState(partnerUrl);

  useEffect(() => {
    const gclid = resolveGclid(searchParams.get('gclid'));
    setLinkUrl(appendGclidToUrl(partnerUrl, gclid));
  }, [partnerUrl, searchParams]);

  return linkUrl;
}
