// import { ProcessActions } from '../actions/process.actions';

export const processes = (state: any = [], { type, payload }) => {
  switch (type) {
    // case ProcessActions.ADD_PROCESSES:
    //   return payload;
    default:
      return state;
  }
};

export const selectedProcess = (state: any = null, { type, payload }) => {
  switch (type) {
    case 'SELECT_PROCESS':
      return payload;
    default:
      return state;
  }
};
