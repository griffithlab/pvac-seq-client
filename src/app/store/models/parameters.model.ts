export interface Parameters {
  // required
  readonly action: string;
  readonly sample_name: string;
  readonly alleles: Array<string>;
  readonly prediction_algorithms: Array<string>;

  // optional
  readonly additional_input_files?: Array<string>;
  readonly binding_threshold?: number;
  readonly downstream_sequence_length?: number;
  readonly epitope_lengths?: Array<number>;
  readonly expression_cutoff?: number;
  readonly fasta_size?: number;
  readonly iedb_retries?: number;
  readonly input_file?: string;
  readonly minimum_fold_change?: number;
  readonly net_chop_method?: string;
  readonly netchop_threshold?: number;
  readonly netmhc_stab?: number;
  readonly normal_coverage_cutoff?: number;
  readonly normal_vaf_cutoff?: number;
  readonly output_directory?: string;
  readonly peptide_sequence_length?: number;
  readonly top_result_per_mutation?: number;
  readonly top_score_metric?: string;
  readonly tumor_dna_coverage_cutoff?: number;
  readonly tumor_dna_vaf_cutoff?: number;
  readonly tumor_rna_coverage_cutoff?: number;
  readonly tumor_rna_vaf_cutoff?: number;
}
