import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder
} from '@angular/forms';

import * as _ from 'lodash';

import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/models/app.model';
import { File } from '../../../store/models/store.model';
import {
  LoadInputsAction,
  StartProcessAction
} from '../../../store/actions/store.actions';

import { ServerRequestStartedAction } from '../../../store/actions/store.actions';

import { InputService } from '../../../services/input.service';

import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'pvs-start-form',
  templateUrl: './start-form.component.html',
  styleUrls: ['./start-form.component.scss']
})
export class StartFormComponent implements OnInit {
  inputs$: Observable<SelectItem[]>;
  success$: Observable<{}>;
  error$: Observable<{}>;
  serverRequestActive$: Observable<boolean>;
  submitIcon: string;

  startForm: FormGroup;

  netChopMethodOptions: SelectItem[];
  topScoreMetricOptions: SelectItem[];

  constructor(private store: Store<AppState>,
    private inputService: InputService,
    private fb: FormBuilder) {

    this.netChopMethodOptions = [
      { label: 'C term 3.0', value: 'cterm' },
      { label: '20S 3.0', value: '20s' },
    ];

    this.topScoreMetricOptions = [
      { label: 'Median Score', value: 'median' },
      { label: 'Lowest Score', value: 'lowest' },
    ];

    this.inputs$ = store
      .select(state => state.store.inputs)
      .map(fileMap => _.chain(fileMap)
        .valuesIn()
        .map((f: File) => {
          return { label: f.display_name, value: f.fileID };
        })
        .value()
      );

    this.error$ = store
      .select<{}>(state => state.ui.currentError);

    this.success$ = store
      .select<{}>(state => state.ui.currentSuccess);

    this.serverRequestActive$ = store
      .select<boolean>(state => state.ui.serverRequestActive);

    this.serverRequestActive$.subscribe(active => {
      this.submitIcon = active ? 'fa-spinner' : 'fa-play';
    });

    const startFormGroup = {
      'input': [null, [Validators.required]],
      'samplename': ['sample-name-N', [Validators.required]],
      'alleles': ['HLA-A*01:01,HLA-A*03:01,HLA-B*07:02,HLA-B*08:01,HLA-C*07:02,HLA-C*07:137', [Validators.required]],
      'prediction_algorithms': ['NNalign,NetMHC,NetMHCIIpan,NetMHCcons,NetMHCpan,PickPocket,SMM,SMMPMBEC,SMMalign', [Validators.required]],
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
      'binding_threshold': [500, []],
      'minimum_fold_change': [0, []],
      'expn_val': [1, []],
      'normal_cov': [5, []],
      'tdna_cov': [5, []],
      'trna_cov': [5, []],
      'normal_vaf': [5, []],
      'tdna_vaf': [5, []],
      'trna_vaf': [5, []],
      'fasta_size': [200, []],
      'iedb_retries': [5, []],
      'downstream_sequence_length': [1000, []],
      'keep_tmp_files': [false, []],
    };

    this.startForm = fb.group(startFormGroup);
  }

  loadInputs(): void {
    this.store.dispatch(new LoadInputsAction());
  }

  ngOnInit() {
    this.loadInputs();
  }

  onSubmit(form: any): void {
    console.log('you submitted form:', form);
    this.store.dispatch(new ServerRequestStartedAction());
    this.store.dispatch(new StartProcessAction(form));
  }
}
