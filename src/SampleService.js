import { PublicService } from '@makerdao/services-core';

export default class SampleService extends PublicService {
  constructor(name = 'sample') {
    super(name, ['proxy', 'someOtherService']);
  }

  // put yer code here
}
