import Maker from '@makerdao/dai';
import SampleService from '../../src';

async function makerInstance(preset = 'test', network = 'testnet') {
  const maker = await Maker.create(preset, {
    plugins: [[SampleService, { network }]],
    web3: {
      pollingInterval: 100
    }
  });
  await maker.authenticate();
  return maker;
}

test('getUserInfo', async () => {
  const maker = await makerInstance();
  const info = await maker.service('sample').getUserInfo();

  expect(info.address).toBe('0x16fb96a5fa0427af0c8f7cf1eb4870231c8154b6');
  expect(info.daiBalance.toNumber()).toBe(0);
  expect(info.proxyAddress).toBe('0x570074CCb147ea3dE2E23fB038D4d78324278886');
});
