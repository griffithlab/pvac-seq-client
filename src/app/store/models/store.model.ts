import { ProcessMap } from './process.model';

// export
export interface StoreState {
  processes: ProcessMap;
  processDetail: ProcessMap;
  inputs: FileMap;
}

export const INITIAL_STORE_STATE: StoreState = {
  processes: {},
  processDetail: {},
  inputs: {}
};

export interface File {
  readonly description: string;
  readonly display_name: string;
  readonly fileID: number;
  readonly url: string;
  readonly rows?: number;
  readonly size?: number;
}

export interface FileMap {
  [key: number]: File;
}
