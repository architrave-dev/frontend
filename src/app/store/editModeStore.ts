import { create } from "zustand";

interface EditState {
  isEditMode: boolean;
  toggleEditMode: () => void;
}

const useEditStore = create<EditState>((set) => ({
  isEditMode: false,
  toggleEditMode: () => set((state) => ({ isEditMode: !state.isEditMode })),
}));

export { useEditStore };
