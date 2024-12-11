export const validateOnlyAlphaNumerics = (value: string) =>
  // prettier-ignore
  new RegExp('^[A-Záéíóúüñ ]+$', 'i').test(value);
