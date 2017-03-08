import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Store } from '@ngrx/store';

import { AppState } from '../store/models/app.model';
import { Process } from '../store/models/process.model';

import { ConfigService } from './config.service';

@Injectable()
export class ProcessService {
  public items: Observable<Array<Process>>;
  public selected: Observable<Process>;
  private api: string;

  constructor(
    private http: Http,
    private config: ConfigService,
    private store: Store<AppState>
  ) {
    this.api = config.apiUrl();
    this.items = store.select('processes');
    // this.items = store.select((appState) => {
    //   console.log('items select called.');
    //   return appState.processes;
    // });
    this.selected = store.select('selectedProcess')
    this.store.dispatch({ type: 'ADD_ITEMS', payload: [] });
  }

  // fetch a list of all processes
  query() {
    this.http.get(`${this.api}/processes`)
      .map(mapProcesses)
      .map(payload => ({ type: 'ADD_ITEMS', payload }))
      .subscribe(action => this.store.dispatch(action));
    // return this.http
    //   .get(this.api + '/processes')
    //   .map(mapProcesses)
    //   // .do((data) => {
    //   //   console.log('process service data:')
    //   //   console.log(data);
    //   // })
    //   .catch(handleError);
  }
}

function mapProcesses(res: Response) {
  return res.json().map(toProcess)
}

function toProcess(p: any) {
  let process = p as Process;
  return process;
}

function handleError(error: any) {
  let errMsg: string;
  if (error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
}

const INITIAL_PROCESSES: Array<Process> = [
  {
    "attached": false,
    "command": "pvacseq run /Users/jmcmichael/Documents/pVAC-Seq Output/Merck010-reduced-short-A/Staging/input.vcf Merck010-reduced-short-A HLA-A*01:01,HLA-A*03:01,HLA-B*07:02,HLA-B*08:01,HLA-C*07:02,HLA-C*07:137 NNalign NetMHC NetMHCIIpan NetMHCpan PickPocket SMM SMMPMBEC SMMalign /Users/jmcmichael/Documents/pVAC-Seq Output/Merck010-reduced-short-A -e 8 -l 21 -m median -b 500 -c 0 --normal-cov 5 --tdna-cov 5 --trna-cov 5 --normal-vaf 5 --tdna-vaf 5 --trna-vaf 5 --expn-val 1 -s 200 -r 5 -d 1000",
    "files": [
      {
        "description": "Processed data from IEDB, but with no filtering or extra data",
        "display_name": "MHC_Class_I/Merck010-reduced-short-A.combined.parsed.tsv",
        "fileID": 0,
        "url": "/api/v1/processes/1/results/0"
      },
      {
        "description": "Processed data filtered by binding strength",
        "display_name": "MHC_Class_I/Merck010-reduced-short-A.filtered.binding.tsv",
        "fileID": 1,
        "url": "/api/v1/processes/1/results/1"
      },
      {
        "description": "Final output data",
        "display_name": "MHC_Class_I/Merck010-reduced-short-A.final.tsv",
        "fileID": 2,
        "url": "/api/v1/processes/1/results/2"
      },
      {
        "description": "Raw input data parsed out of the input vcf",
        "display_name": "MHC_Class_I/Merck010-reduced-short-A.tsv",
        "fileID": 3,
        "url": "/api/v1/processes/1/results/3"
      }
    ],
    "id": 1,
    "output": "/Users/jmcmichael/Documents/pVAC-Seq Output/Merck010-reduced-short-A",
    "parameters": {
      "action": "run",
      "additional_input_files": [
        ""
      ],
      "alleles": [
        "HLA-A*01:01",
        "HLA-A*03:01",
        "HLA-B*07:02",
        "HLA-B*08:01",
        "HLA-C*07:02",
        "HLA-C*07:137"
      ],
      "binding_threshold": 500,
      "downstream_sequence_length": 1000,
      "epitope_lengths": [
        "8"
      ],
      "expression_cutoff": 1,
      "fasta_size": 200,
      "iedb_retries": 5,
      "input_file": "/Users/jmcmichael/Documents/pVAC-Seq Output/Merck010-reduced-short-A/Staging/input.vcf",
      "minimum_fold_change": 0,
      "net_chop_method": "",
      "netchop_threshold": 0.5,
      "netmhc_stab": 0,
      "normal_coverage_cutoff": 5,
      "normal_vaf_cutoff": 5,
      "output_directory": "/Users/jmcmichael/Documents/pVAC-Seq Output/Merck010-reduced-short-A",
      "peptide_sequence_length": 21,
      "prediction_algorithms": [
        "NNalign",
        "NetMHC",
        "NetMHCIIpan",
        "NetMHCpan",
        "PickPocket",
        "SMM",
        "SMMPMBEC",
        "SMMalign"
      ],
      "sample_name": "Merck010-reduced-short-A",
      "top_result_per_mutation": 0,
      "top_score_metric": "median",
      "tumor_dna_coverage_cutoff": 5,
      "tumor_dna_vaf_cutoff": 5,
      "tumor_rna_coverage_cutoff": 5,
      "tumor_rna_vaf_cutoff": 5
    },
    "pid": 8698,
    "results_url": "api/v1/processes/1/results",
    "running": false,
    "url": "/api/v1/processes/1"
  },
  {
    "attached": false,
    "command": "pvacseq run /Users/jmcmichael/Documents/pVAC-Seq Output/Merck010-reduced-short-B/Staging/input.vcf Merck010-reduced-short-B HLA-A*01:01,HLA-A*03:01,HLA-B*07:02,HLA-B*08:01,HLA-C*07:02,HLA-C*07:137 NNalign NetMHC NetMHCIIpan NetMHCpan PickPocket SMM SMMPMBEC SMMalign /Users/jmcmichael/Documents/pVAC-Seq Output/Merck010-reduced-short-B -e 8,9 -l 21 -m median -b 500 -c 0 --normal-cov 5 --tdna-cov 5 --trna-cov 5 --normal-vaf 5 --tdna-vaf 5 --trna-vaf 5 --expn-val 1 -s 200 -r 5 -d 1000",
    "files": [
      {
        "description": "Raw input data parsed out of the input vcf",
        "display_name": "MHC_Class_I/Merck010-reduced-short-B.tsv",
        "fileID": 0,
        "url": "/api/v1/processes/2/results/0"
      }
    ],
    "id": 2,
    "output": "/Users/jmcmichael/Documents/pVAC-Seq Output/Merck010-reduced-short-B",
    "parameters": {
      "action": "run",
      "additional_input_files": [
        ""
      ],
      "alleles": [
        "HLA-A*01:01",
        "HLA-A*03:01",
        "HLA-B*07:02",
        "HLA-B*08:01",
        "HLA-C*07:02",
        "HLA-C*07:137"
      ],
      "binding_threshold": 500,
      "downstream_sequence_length": 1000,
      "epitope_lengths": [
        "8",
        "9"
      ],
      "expression_cutoff": 1,
      "fasta_size": 200,
      "iedb_retries": 5,
      "input_file": "/Users/jmcmichael/Documents/pVAC-Seq Output/Merck010-reduced-short-B/Staging/input.vcf",
      "minimum_fold_change": 0,
      "net_chop_method": "",
      "netchop_threshold": 0.5,
      "netmhc_stab": 0,
      "normal_coverage_cutoff": 5,
      "normal_vaf_cutoff": 5,
      "output_directory": "/Users/jmcmichael/Documents/pVAC-Seq Output/Merck010-reduced-short-B",
      "peptide_sequence_length": 21,
      "prediction_algorithms": [
        "NNalign",
        "NetMHC",
        "NetMHCIIpan",
        "NetMHCpan",
        "PickPocket",
        "SMM",
        "SMMPMBEC",
        "SMMalign"
      ],
      "sample_name": "Merck010-reduced-short-B",
      "top_result_per_mutation": 0,
      "top_score_metric": "median",
      "tumor_dna_coverage_cutoff": 5,
      "tumor_dna_vaf_cutoff": 5,
      "tumor_rna_coverage_cutoff": 5,
      "tumor_rna_vaf_cutoff": 5
    },
    "pid": 94791,
    "results_url": "api/v1/processes/2/results",
    "running": false,
    "url": "/api/v1/processes/2"
  }
].map(toProcess);
