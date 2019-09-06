import { PublicService } from '@makerdao/services-core';

export default class SampleService extends PublicService {
  constructor(name = 'sample') {
    super(name, ['proxy', 'token', 'web3']);
  }

  async getUserInfo() {
    const dai = this.get('token').getToken('DAI');
    const currentAddress = this.get('web3').currentAddress();
    const balance = await dai.balanceOf(currentAddress);
    const proxyAddress = await this.get('proxy').currentProxy();

    return {
      address: currentAddress,
      daiBalance: balance,
      proxyAddress: proxyAddress
    };
  }
}
