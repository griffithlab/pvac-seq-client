import { Action } from '@ngrx/store';

import { Notice } from '../models/ui.model';

export const CREATE_NOTICE_ACTION: string = 'DISPLAY_NOTICE_ACTION';
export const DELETE_NOTICE_ACTION: string = 'REMOVE_NOTICE_ACTION';

export class CreateNoticeAction implements Action {
  readonly type = CREATE_NOTICE_ACTION;

  constructor(public notice: Notice) { }
}

export class DeleteNoticeAction implements Action {
  readonly type = DELETE_NOTICE_ACTION;

  constructor(public id: number) { }
}
