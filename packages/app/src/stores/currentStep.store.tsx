import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type State = {
  currentStep: number;
};

export type Actions = {
  resetCurrentStep: () => void;
  getCurrentStep: () => number;
  nextStep: () => number;
  prevStep: () => number;
};

export const useCurrentStepStore = create<State & Actions>()(
  persist(
    (set) => ({
      currentStep: 1,
      getCurrentStep: (): number =>
        useCurrentStepStore.getState().currentStep || 1,
      nextStep: (): number => {
        set((state) => ({ currentStep: state.currentStep + 1 }));
        return useCurrentStepStore.getState().currentStep;
      },
      prevStep: (): number => {
        set((state) => ({ currentStep: state.currentStep - 1 }));
        return useCurrentStepStore.getState().currentStep;
      },
      resetCurrentStep: () => set({ currentStep: 1 }),
    }),
    {
      name: 'current-step-store',
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    },
  ),
);
