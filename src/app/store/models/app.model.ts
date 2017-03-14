import { UserInterface, INITIAL_UI_STATE } from './ui.model';
import { Store, INITIAL_STORE_STATE } from './store.model';

export interface AppState {
  ui: UserInterface;
  store: Store;
}

export const INITIAL_APPLICATION_STATE: AppState = {
  ui: INITIAL_UI_STATE,
  store: INITIAL_STORE_STATE
}
