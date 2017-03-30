import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';

import { Observable } from 'rxjs/Rx';

import { Store } from '@ngrx/store';
import { AppState } from '../../store/models/app.model';
import { File } from '../../store/models/store.model';
import { LoadInputsAction } from '../../store/actions/store.actions';

import { InputService } from '../../services/input.service';

@Component({
  templateUrl: 'start.component.html',
  providers: []
})

export class StartComponent implements OnInit {
  inputs$: Observable<File[]>;

  constructor(private store: Store<AppState>, private inputService: InputService) {
    console.log('StartComponent loaded.');
    this.inputs$ = store
      .select(state => state.store.inputs)
      .do((inputs) => {
        console.log('inputs: ' + inputs)
      })
      .map(fileMap => _.chain(fileMap).valuesIn().map(f => f as File).value());
  }

  loadInputs(): void {
    this.inputService.query()
      .subscribe(inputs => this.store.dispatch(new LoadInputsAction(inputs)));
  }

  ngOnInit() {
    this.loadInputs();
  }

}
