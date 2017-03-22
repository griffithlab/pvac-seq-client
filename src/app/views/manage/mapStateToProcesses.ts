import { AppState } from '../../store/models/app.model';
import { Process, ProcessMap } from '../../store/models/process.model';

import * as _ from 'lodash';

export function mapStateToProcesses(state: AppState): Process[] {
  return _.chain<ProcessMap>(state.store.processes)
    .valuesIn()
    .map(p => p as Process)
    .value();
};
