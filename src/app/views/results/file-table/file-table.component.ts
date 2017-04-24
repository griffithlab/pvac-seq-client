import { Component, Input, OnInit } from '@angular/core';
import { File } from '../../../store/models/store.model';
import { Observable } from 'rxjs/Rx';

import { Store } from '@ngrx/store';

import { AppState } from '../../../store/models/app.model';

@Component({
  selector: 'pvs-file-table',
  templateUrl: './file-table.component.html',
  styleUrls: ['./file-table.component.scss']
})

export class FileTableComponent implements OnInit {
  @Input() processId: number;

  files$: Observable<File[]>;

  constructor() { }

  ngOnInit() {
  }

}
