import { IEssentialProperties } from '../../common/common.interface';
import { Status } from './task.constant';

export interface ITask extends IEssentialProperties {
  name: string;
  description: string;
  status: Status;
}
