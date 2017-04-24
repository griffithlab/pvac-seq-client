import { Component, Input, OnInit } from '@angular/core';
import { File } from '../../../store/models/store.model';
import { Observable } from 'rxjs/Rx';

import { Store } from '@ngrx/store';
import { LoadFilesAction } from '../../../store/actions/store.actions';

import { AppState } from '../../../store/models/app.model';

@Component({
  selector: 'pvs-file-table',
  templateUrl: './file-table.component.html',
  styleUrls: ['./file-table.component.scss']
})

export class FileTableComponent implements OnInit {
  @Input() processId: number;

  files$: Observable<File[]>;

  constructor(private store: Store<AppState>) {
    this.files$ = store
      .select(state => state.store.fileList[this.processId]);
  }
  loadFiles() {
    this.store.dispatch(new LoadFilesAction(this.processId));
  }
  ngOnInit() {
    this.loadFiles();
  }

}
