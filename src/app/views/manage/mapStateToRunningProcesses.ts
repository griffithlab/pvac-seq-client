import { AppState } from '../../store/models/app.model';
import { Process, ProcessMap } from '../../store/models/process.model';

import * as _ from 'lodash';

export function mapStateToRunningProcesses(state: AppState): number {
  return _.chain<ProcessMap>(state.store.processes)
    .valuesIn()
    .reduce((acc: number, process: Process) => {
      return process.attached ? acc + 1 : acc;
    }, 0)
    .value();
}
