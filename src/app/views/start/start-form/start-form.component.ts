import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

import * as _ from 'lodash';

import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/models/app.model';
import { File } from '../../../store/models/store.model';
import { LoadInputsAction } from '../../../store/actions/store.actions';

import { InputService } from '../../../services/input.service';

import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'pvs-start-form',
  templateUrl: './start-form.component.html',
  styleUrls: ['./start-form.component.scss']
})
export class StartFormComponent implements OnInit {
  inputs$: Observable<SelectItem[]>;
  startForm: FormGroup;

  netChopMethodOptions: SelectItem[];
  topScoreMetricOptions: SelectItem[];

  constructor(private store: Store<AppState>, private inputService: InputService, private fb: FormBuilder) {
    this.netChopMethodOptions = [
      { label: 'C term 3.0', value: 'cterm' },
      { label: '20S 3.0', value: '20s' },
    ];

    this.topScoreMetricOptions = [
      { label: 'Median Score', value: 'median' },
      { label: 'Lowest Score', value: 'lowest' },
    ];

    // <option value="median" selected>Median Score</option>
    // <option value="lowest">Lowest Score</option>
    this.inputs$ = store
      .select(state => state.store.inputs)
      .map(fileMap => _.chain(fileMap)
        .valuesIn()
        .map((f: File) => {
          return { label: f.display_name, value: f.fileID };
        })
        .value()
      );

    const startFormGroup = {
      'inputVCF': [null, [Validators.required]],
      'samplename': [null, [Validators.required]],
      'alleles': [null, [Validators.required]],
      'prediction_algorithms': [null, [Validators.required]],
      'epitope_lengths': ['10', [Validators.required]],
      'peptide_sequence_length': [21, [Validators.required]],
      'gene_expn_file': [null, []],
      'transcript_expn_file': [null, []],
      'normal_snvs_coverage_file': [null, []],
      'normal_indels_coverage_file': [null, []],
      'tdna_snvs_coverage_file': [null, []],
      'tdna_indels_coverage_file': [null, []],
      'trna_snvs_coverage_file': [null, []],
      'trna_indels_coverage_file': [null, []],
      'net_chop_method': [null, []],
      'net_chop_threshold': [0.5, []],
      'netmhc_stab': [false, []],
      'top_result_per_mutation': [false, []],
      'top_score_metric': ['median', []],
    };

    this.startForm = fb.group(startFormGroup);
  }

  loadInputs(): void {
    this.inputService.query()
      .subscribe(inputs => this.store.dispatch(new LoadInputsAction(inputs)));
  }

  ngOnInit() {
    this.loadInputs();
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }
}
