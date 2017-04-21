import { File } from './store.model';

export interface Process {
  readonly attached: boolean;
  readonly command: string;
  readonly files: { [key: number]: File };
  readonly id: number;
  readonly last_message: string;
  readonly log?: string[];
  readonly output: string;
  readonly parameters: Parameters;
  readonly pid: number;
  readonly results_url: string;
  readonly running: boolean;
  readonly status: number;
  readonly url: string;
}

export interface Parameters {
  // required
  readonly input: string;
  readonly action: string;
  readonly samplename: string;
  readonly alleles: Array<string>;
  readonly prediction_algorithms: Array<string>;

  // optional
  readonly additional_input_file_list?: Array<string>;
  readonly binding_threshold?: number;
  readonly downstream_sequence_length?: number;
  readonly epitope_lengths?: Array<number>;
  readonly expn_val?: number;
  readonly fasta_size?: number;
  readonly iedb_install_dir?: string;
  readonly iedb_retries?: number;
  readonly keep_tmp_files?: boolean;
  readonly minimum_fold_change?: number;
  readonly net_chop_method?: string;
  readonly netchop_threshold?: number;
  readonly netmhc_stab?: number;
  readonly normal_cov?: number;
  readonly normal_vaf?: number;
  readonly output?: string;
  readonly peptide_sequence_length?: number;
  readonly tdna_cov?: number;
  readonly tdna_vaf?: number;
  readonly top_result_per_mutation?: boolean;
  readonly top_score_metric?: string;
  readonly trna_cov?: number;
  readonly trna_vaf?: number;
}

export interface ProcessSummaryVM {
  readonly id: number;
  readonly samplename: string;
  readonly input_filename: string;
  readonly running: boolean;
  readonly alleles: string;
  readonly prediction_algorithms: string;
  readonly epitope_lengths: string;
  readonly status: number;
}

export interface ProcessMap {
  [key: number]: Process;
}
