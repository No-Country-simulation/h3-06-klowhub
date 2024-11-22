// Extend tailwind merge not needed

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// If we need to extend tailwind-merge, change for this code

// import { clsx, ClassValue } from 'clsx';
// import { extendTailwindMerge } from 'tailwind-merge';

// const twMergeConfigExtention = {
//   classGroups: {
//     'font-size': [{ text: ['small', 'base', 'medium', 'big'] }],
//   },
// prefix: "kh-",
//};

// const twMerge = extendTailwindMerge(twMergeConfigExtention);

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(...inputs));}
