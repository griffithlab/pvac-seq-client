import { Process } from './process.model';

export interface AppState {
  processes: Process[];
  selectedProcess: Process;
}
