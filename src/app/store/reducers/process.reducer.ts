export const processes = (state: any = [], {type, payload}) => {
  switch (type) {
    case 'ADD_ITEMS':
      return payload;
    default:
      return state;
  }
};

export const selectedProcess = (state: any = null, {type, payload}) => {
  switch (type) {
    case 'SELECT_PROCESS':
      return payload;
    default:
      return state;
  }
};
