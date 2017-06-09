import { ProcessMap } from './process.model';

// export
export interface StoreState {
  serverRequests: ServerRequestMap;
  processes: ProcessMap;
  processDetail: ProcessMap;
  fileList: FileListMap;
  inputs: FileMap;
}

export const INITIAL_STORE_STATE: StoreState = {
  serverRequests: {},
  processes: {},
  processDetail: {},
  inputs: {},
  fileList: {}
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

export interface ServerRequestMap {
  [key: string]: ServerRequest;
}

export interface ServerRequest {
  readonly element;
  readonly operation;
  readonly path;
  readonly url;
  readonly headers;
  readonly params;
  active: boolean;
  response?: ServerResponse;
}

export interface ServerResponse {
  readonly data;
  readonly operation;
  readonly what;
  readonly url;
  readonly response;
}
