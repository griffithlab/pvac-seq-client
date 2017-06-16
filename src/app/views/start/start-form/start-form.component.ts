import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';

import * as _ from 'lodash';

import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/models/app.model';
import { File, ServerRequest } from '../../../store/models/store.model';
import {
  LoadInputsAction,
  StartProcessAction
} from '../../../store/actions/store.actions';

import { InputService } from '../../../services/input.service';

import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'pvs-start-form',
  templateUrl: './start-form.component.html',
  styleUrls: ['./start-form.component.scss']
})
export class StartFormComponent implements OnInit {
  id: string; // unique ID for this component
  startForm: FormGroup;

  // observables
  startFormRequests$: Observable<ServerRequest[]>; // all server requests made from start-form
  stagingRequest$: Observable<ServerRequest>; // staging requests
  inputsRequest$: Observable<ServerRequest>; // input requests
  inputs$: Observable<SelectItem[]>; // file inputs for VCF dropdown

  // last server requests
  lastStagingRequest: ServerRequest;
  lastStagingRequestOK: boolean;
  lastInputsRequest: ServerRequest;
  lastInputsrequestOK: boolean;

  // UI classes, etc
  submitButtonClass = 'ui-button-primary';
  submitButtonIcon = 'fa-play';

  netChopMethodOptions: SelectItem[];
  topScoreMetricOptions: SelectItem[];

  constructor(private store: Store<AppState>,
    private inputService: InputService,
    private fb: FormBuilder) {

    this.id = 'start-form';

    this.netChopMethodOptions = [
      { label: 'C term 3.0', value: 'cterm' },
      { label: '20S 3.0', value: '20s' },
    ];

    this.topScoreMetricOptions = [
      { label: 'Median Score', value: 'median' },
      { label: 'Lowest Score', value: 'lowest' },
    ];

    this.inputs$ = store.select(state => state.store.inputs)
      .map(fileMap => _.valuesIn(fileMap))
      .map(files => _.map(files, (f: File) => { return { label: f.display_name, value: f.fileID }; }));

    // monitors all start-form server requests
    this.startFormRequests$ = store.select(state => state.store.serverRequests)
      .map(reqMap => _.valuesIn(reqMap)) // convert to array from object
      .filter(reqs => reqs.length > 0) // filter empty array
      .map(reqs => _.filter(reqs, req => req.component === this.id));

    // monitors all staging server requests
    this.stagingRequest$ = this.startFormRequests$
      .map((reqs) => {
        return _.find(reqs, (req) => _.includes(req.url, 'staging'));
      })
      .filter(req => _.isObject(req));

    // monitors all inputs server requests
    this.inputsRequest$ = this.startFormRequests$
      .map((reqs) => {
        return _.find(reqs, (req) => _.includes(req.url, 'input'));
      })
      .filter(req => _.isObject(req));

    this.stagingRequest$.subscribe(
      (request) => {
        this.submitButtonIcon = request.active ? 'fa-spinner fa-spin' : 'fa-play';
        if (!_.isUndefined(request.response.ok)) {
          this.lastStagingRequestOK = request.response.ok;
        }
        this.lastStagingRequest = request;
      }
    );

    this.inputsRequest$.subscribe(
      (request) => { this.lastInputsRequest = request; }
    );

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
    this.store.dispatch(new LoadInputsAction(this.id));
  }

  ngOnInit() {
    this.loadInputs();
  }

  onSubmit(form: any): void {
    console.log('you submitted form:', form);
    this.store.dispatch(new StartProcessAction({ parameters: form, component: 'start-form' }));
  }
}
