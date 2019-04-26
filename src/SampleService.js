import PublicService from '@makerdao/services-core';

export default class SampleService extends PublicService {
  constructor(name = 'sample') {
    super(name, ['proxy', 'someOtherSampleDependency']);
  }

  // put yer code here
}