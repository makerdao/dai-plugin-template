import SampleService from './SampleService';
import mainnet from '../contracts/addresses/mainnet.json';
import SampleContractAbi from '../contracts/abis/SampleContract.json';

const contracts = {
  ['SAMPLE_CONTRACT']: {
    address: mainnet.SAMPLE_CONTRACT,
    abi: SampleContractAbi
  }
};

export default {
  addConfig: function(config) {
    return {
      ...config,
      additionalServices: ['sample'],
      sample: SampleService,
      smartContract: { contracts }
    }
  }
}