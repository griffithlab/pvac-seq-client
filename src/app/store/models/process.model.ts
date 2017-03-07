import { File } from './file.model';
import { Parameters } from './parameters.model';

export interface Process {
  readonly attached: boolean;
  readonly command: string;
  readonly files: Array<File>;
  readonly id: number;
  readonly output: string;
  readonly parameters: Parameters;
  readonly pid: number;
  readonly results_url: string;
  readonly running: boolean;
  readonly url: string;
}
