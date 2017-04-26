import { Component, Input, Output, OnInit } from '@angular/core';
import { File } from '../../../store/models/store.model';
import { Observable } from 'rxjs/Rx';

import * as _ from 'lodash';

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
      .select(state => state.store.fileList[this.processId])
      .map((fileMap) => {
        // convert fileMap to array of files with '.tsv' extension
        return _.chain(fileMap)
          .valuesIn<File>()
          .filter((file) => {
            return _(file.display_name).split('.').last() === 'tsv';
            // return _.chain(file.display_name).split('.').last().value() === 'tsv';
          })
          .value();
      });
  }

  loadFiles() {
    this.store.dispatch(new LoadFilesAction(this.processId));
  }

  ngOnInit() {
    this.loadFiles();
  }

}
