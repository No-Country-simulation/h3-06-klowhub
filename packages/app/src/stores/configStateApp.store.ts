import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type TConfigStateApp = 'VENDEDOR' | 'EXPLORADOR';

export type State = {
  stateSellerWitcherMode: TConfigStateApp;
};

export type Actions = {
  getSellerMode: () => TConfigStateApp;
  updateSellerModeState: (newState: TConfigStateApp) => void;
  clearSellerMode: () => void;
};

export const useConfigStateAppStore = create<State & Actions>()(
  persist(
    (set) => ({
      stateSellerWitcherMode: 'EXPLORADOR',
      updateSellerModeState: (newState: TConfigStateApp) => {
        set({ stateSellerWitcherMode: newState });
      },

      clearSellerMode: () => {
        set({ stateSellerWitcherMode: 'EXPLORADOR' });
      },
      getSellerMode: (): TConfigStateApp => {
        return useConfigStateAppStore.getState().stateSellerWitcherMode;
      },
    }),
    {
      name: 'config-state-app-store',
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    },
  ),
);
