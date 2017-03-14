import { Process } from './process.model';

export interface Store {
  processes: { [key: number]: Process };
}

export const INITIAL_STORE_STATE: Store = {
  processes: {}
}
