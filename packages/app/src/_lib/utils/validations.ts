export const validateOnlyAlphaNumerics = (value: string) =>
  new RegExp("^[A-Záéíóúüñ]+$", "i").test(value);
