import { AppState } from '../../store/models/app.model';
import { Process } from '../../store/models/process.model';

export function mapStateToProcess(state: AppState, processId): Process {
  return state.store.processDetails[processId] as Process;
  // return _.chain<ProcessMap>(state.store.processes)
  //   .valuesIn()
  //   .map(p => p as Process)
  //   .value();
};
