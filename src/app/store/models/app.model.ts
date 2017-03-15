import { UserInterfaceState, INITIAL_UI_STATE } from './ui.model';
import { StoreState, INITIAL_STORE_STATE } from './store.model';

export interface AppState {
  ui: UserInterfaceState;
  store: StoreState;
}

export const INITIAL_APPLICATION_STATE: AppState = {
  ui: INITIAL_UI_STATE,
  store: INITIAL_STORE_STATE
}
