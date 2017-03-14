import { UserInterface } from './user-interface.model.ts';
import { Process } from './process.model';

export interface AppState {
  processes: Process[];
  ui: UserInterface;
  selectedProcess: Process;
}
