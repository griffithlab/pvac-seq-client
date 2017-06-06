export interface UserInterfaceState {
  notices: NoticeMap;
}

export const INITIAL_UI_STATE: UserInterfaceState = {
  notices: {},
};

export interface Notice {
  readonly id: string;
  readonly severity: string;
  readonly summary: string;
  readonly detail: string;
}

export interface NoticeMap {
  [key: string]: Notice;
}
