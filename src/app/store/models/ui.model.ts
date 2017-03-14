import { Process } from './process.model';

export interface UserInterface {
  selectedProcessId: number;
}

export const INITIAL_UI_STATE: UserInterface = {
  selectedProcessId: undefined
}
