import { File } from './file';
import { Parameters } from './parameters';

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
