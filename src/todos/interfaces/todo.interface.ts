import { ExecSyncOptionsWithBufferEncoding } from 'child_process';

export interface Todo {
  id: number;
  title: string;
  description?: string;
  done: boolean;
}
