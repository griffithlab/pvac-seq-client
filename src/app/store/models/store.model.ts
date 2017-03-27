import { ProcessMap } from './process.model';

export interface StoreState {
  processes: ProcessMap;
  processDetail: ProcessMap;
}

export const INITIAL_STORE_STATE: StoreState = {
  processes: {},
  processDetail: {}
};
