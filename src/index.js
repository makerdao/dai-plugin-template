import SampleService from './SampleService';
import mainnet from '../contracts/addresses/mainnet.json';

const contracts = {
  ['SAMPLE_CONTRACT']: {
    address: mainnet.SAMPLE_CONTRACT,
    abi: require('../contracts/abis/SampleContractAbi.json')
  }
};

export default {
  addConfig: function(config) {
    return {
      ...config,
      additionalServices: ['sample'],
      sample: SampleService,
      smartContract: { contracts }
    };
  }
};
