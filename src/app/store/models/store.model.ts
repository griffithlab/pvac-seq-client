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
  readonly size?: string;
}

export interface FileMap {
  [key: number]: File;
}


// {
// "description": "A temporary file to cache a subset of the data when working with IEDB",
// "display_name": "MHC_Class_I/Merck010_reduced_short_5.tsv_201-270",
// "fileID": "6",
// "rows": 70,
// "size": "105.633 KB",
// "url": "/api/v1/processes/17/results/6"
// },
