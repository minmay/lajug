import { Speaker } from './speaker.model';
import { Company } from './company.model';
import {YouTube} from './you_tube.model';

export interface Meeting {
  isNext: boolean;
  date: string;
  time?: string;
  topic: string;
  speaker: Speaker;
  abstract: string;
  location: string;
  company?: Company;
  youtube?: YouTube;
  slides?: string;
}
