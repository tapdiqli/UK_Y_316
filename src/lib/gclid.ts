'use client';

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
  return resolveGclid(searchParams.get('gclid'));
}
