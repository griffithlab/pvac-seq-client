import { Process } from './process.model';

export interface StoreState {
  processes: { [key: number]: Process };
}

export const INITIAL_STORE_STATE: StoreState = {
  processes: {}
}
