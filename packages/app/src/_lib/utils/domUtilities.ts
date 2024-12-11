export function focusNextElement(): void {
  const allFocusableElements = document.querySelectorAll(
    'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
  );
  const currentlyFocusedElement = document.activeElement as HTMLElement;

  // Encuentra el índice del elemento actualmente enfocado en la lista de elementos enfocables
  const currentIndex = Array.from(allFocusableElements).indexOf(
    currentlyFocusedElement,
  );

  // Si el elemento actualmente enfocado no se encuentra o es el último elemento, enfoque el primero
  if (currentIndex === -1 || currentIndex === allFocusableElements.length - 1) {
    (allFocusableElements[0] as HTMLElement).focus();
  } else {
    // En caso contrario, enfoque el siguiente elemento en la lista
    (allFocusableElements[currentIndex + 1] as HTMLElement).focus();
  }
}
export function focusPreviousElement(): void {
  const allFocusableElements = document.querySelectorAll(
    'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
  );
  const currentlyFocusedElement = document.activeElement as HTMLElement;

  // Encuentra el índice del elemento actualmente enfocado en la lista de elementos enfocables
  const currentIndex = Array.from(allFocusableElements).indexOf(
    currentlyFocusedElement,
  );

  // Si el elemento actualmente enfocado no se encuentra o es el primer elemento, enfoque el último
  if (currentIndex === -1 || currentIndex === 0) {
    const lastIndex = allFocusableElements.length - 1;
    (allFocusableElements[lastIndex] as HTMLElement).focus();
  } else {
    // En caso contrario, enfoque el elemento anterior en la lista
    (allFocusableElements[currentIndex - 1] as HTMLElement).focus();
  }
}

export const deleteArrayfromArrayById = <T extends { id: string }>(
  a: T[],
  b: T[],
): T[] => {
  return a.filter((elementoA) => {
    return !b.some((elementoB) => elementoB.id === elementoA.id);
  });
};

export const isAnArrayOfStrings = (array: unknown[]) => {
  return array.every((element) => typeof element === "string");
};

/** Remove an elemnt from the array */
export const removeFromArray = <T>(array: T[], element: T) => {
  return array.filter((el) => el !== element);
};
