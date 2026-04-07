import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** className merge helper used by every primitive. clsx + tailwind-merge. */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
