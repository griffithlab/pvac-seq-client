import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';

import { Observable } from 'rxjs/Rx';

import { Store } from '@ngrx/store';
import { AppState } from '../../store/models/app.model';
import { File } from '../../store/models/store.model';
import { Parameters } from '../../store/models/process.model';
import { LoadInputsAction } from '../../store/actions/store.actions';

import { InputService } from '../../services/input.service';

import { SelectItem } from 'primeng/primeng';

@Component({
  templateUrl: 'start.component.html',
  providers: []
})

export class StartComponent implements OnInit {
  inputs$: Observable<SelectItem[]>;
  parameters: {};

  constructor(private store: Store<AppState>, private inputService: InputService) {
    this.inputs$ = store
      .select(state => state.store.inputs)
      .map(fileMap => _.chain(fileMap)
        .valuesIn()
        .map((f: File) => {
          return { label: f.display_name, value: { id: f.fileID } };
        })
        .value()
      );

    this.parameters = {
      fileID: undefined
    };

  }

  loadInputs(): void {
    this.inputService.query()
      .subscribe(inputs => this.store.dispatch(new LoadInputsAction(inputs)));
  }

  ngOnInit() {
    this.loadInputs();
  }

}
