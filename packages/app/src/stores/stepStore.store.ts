import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type TStatus = 'VALID' | 'PENDING' | 'ERROR';
export type TStep = {
  id: number;
  name: string;
  state: 'PENDING' | 'VALID' | 'ERROR';
  show: boolean;
};
const stepConfig: TStep[] = [
  {
    id: 1,
    name: 'Información General',
    state: 'PENDING',
    show: true,
  },
  {
    id: 2,
    name: 'Detalles del curso',
    state: 'PENDING',
    show: true,
  },
  {
    id: 3,
    name: 'Módulos y lecciones',
    state: 'PENDING',
    show: true,
  },
  {
    id: 4,
    name: 'Promociones',
    state: 'PENDING',
    show: true,
  },
];
export type State = {
  steps: TStep[];
  currentStep: number;
};

export type Actions = {
  loadSteps: (steps: TStep[]) => void;
  updateStepState: (newState: Partial<TStep>) => void;
  clearSteps: () => void;
  getStep: (stepId: number) => TStep;
  getSteps: () => TStep[];
  resetCurrentStep: () => void;
  getCurrentStep: () => number;
  nextStep: () => number;
  prevStep: () => number;
};

export const useStepStore = create<State & Actions>()(
  persist(
    (set) => ({
      steps: stepConfig as TStep[],
      currentStep: 1,
      loadSteps: (newSteps: TStep[]) => {
        if (useStepStore.getState().steps.length !== 0) {
          set({ steps: newSteps });
        }
      },
      updateStepState: (newStepState: Partial<TStep>) => {
        const stepId = useStepStore.getState().currentStep;
        set((state) => ({
          steps: state.steps.map((step: TStep) =>
            step.id === stepId ? { ...step, ...newStepState } : step,
          ),
        }));
      },

      clearSteps: () => {
        set({ steps: [] as TStep[] });
      },
      getStep: (): TStep => {
        return (
          useStepStore
            .getState()
            .steps.find(
              (step: TStep) => step.id === useStepStore.getState().currentStep,
            ) || {
            id: 0,
            name: 'esto no funciona',
            state: 'ERROR',
            show: false,
          }
        );
      },
      getSteps: (): TStep[] => useStepStore.getState().steps,
      getCurrentStep: (): number => useStepStore.getState().currentStep || 1,
      nextStep: (): number => {
        set((state) => ({ currentStep: state.currentStep + 1 }));
        return useStepStore.getState().currentStep;
      },
      prevStep: (): number => {
        set((state) => ({ currentStep: state.currentStep - 1 }));
        return useStepStore.getState().currentStep;
      },
      resetCurrentStep: () => set({ currentStep: 1 }),
    }),
    {
      name: 'step-store',
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    },
  ),
);
