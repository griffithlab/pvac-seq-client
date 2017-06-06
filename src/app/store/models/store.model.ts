import { ProcessMap } from './process.model';

// export
export interface StoreState {
  processes: ProcessMap;
  processDetail: ProcessMap;
  fileList: FileListMap;
  inputs: FileMap;
  requests: RequestMap;
  currentError: Error;
}

export const INITIAL_STORE_STATE: StoreState = {
  processes: {},
  processDetail: {},
  inputs: {},
  fileList: {},
  requests: {},
  currentError: null
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

export interface FileListMap {
  [key: number]: FileMap;
}

export interface Error {
  readonly id: string;
  readonly action: string;
  readonly summary?: string;
  readonly detail?: string;
}

export interface Request {
  readonly id: string;
  readonly active: boolean;
  readonly request: {};
  response?: Response;
}

export interface RequestMap {
  [key: string]: Request;
}

export interface Response {
  readonly id: string;
  readonly request_id: string;
  readonly status: number;
  readonly content: string;
}
