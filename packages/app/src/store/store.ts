export type TState = 'PENDING' | 'SUCCESS' | 'ERROR';
import { create } from 'zustand';
export type publishCoursState = {
  currentStep: number;
  form1: TState;
  form2: TState;
  form3: TState;
  form4: TState;
};

export type State: {
  currentStep: 1;
  form1: 'PENDING'
  form2: 'PENDING'
  form3: 'PENDING'
  form4: 'PENDING'
}

export type Actions = {
  setState: (state: publishCoursState) => void;
};
export const useTaskStore = create<State & Actions>()(() => ({}));
