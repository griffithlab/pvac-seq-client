export interface UserInterfaceState {
  selectedProcessId: number;
  currentError: string;
  currentSuccess: string;
}

export const INITIAL_UI_STATE: UserInterfaceState = {
  selectedProcessId: undefined,
  currentError: undefined,
  currentSuccess: undefined
};
