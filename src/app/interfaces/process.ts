// TODO: finish defining Process Interface
export interface Process {
  attached: boolean;
  command: string;
  files: Array<any>;
  id: number;
  output: string;
  // "attached": true,
  // "command": "pvacseq run /Users/jmcmichael/Documents/pVAC-Seq Output/Merck010-reduced-short-A/Staging/input.vcf Merck010-reduced-short-A HLA-A*01:01,HLA-A*03:01,HLA-B*07:02,HLA-B*08:01,HLA-C*07:02,HLA-C*07:137 NNalign NetMHC NetMHCIIpan NetMHCpan PickPocket SMM SMMPMBEC SMMalign /Users/jmcmichael/Documents/pVAC-Seq Output/Merck010-reduced-short-A -e 8 -l 21 -m median -b 500 -c 0 --normal-cov 5 --tdna-cov 5 --trna-cov 5 --normal-vaf 5 --tdna-vaf 5 --trna-vaf 5 --expn-val 1 -s 200 -r 5 -d 1000",
  // "files": [],
  // "id": 1,
  // "output": "/Users/jmcmichael/Documents/pVAC-Seq Output/Merck010-reduced-short-A",
  // "parameters": {},
  // "pid": 8698,
  // "results_url": "api/v1/processes/1/results",
  // "running": false,
  // "url": "/api/v1/processes/1"

}
