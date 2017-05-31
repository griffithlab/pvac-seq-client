export interface UserInterfaceState {
  selectedProcessId: number;
  currentError: {};
  currentSuccess: {};
  serverRequestActive: boolean;
}

export const INITIAL_UI_STATE: UserInterfaceState = {
  selectedProcessId: undefined,
  currentError: undefined,
  currentSuccess: undefined,
  serverRequestActive: false
};
