<h1 align="center">
Dai Plugin Template
</h1>

Fork this repository and replace the sample code with your own. Check `src/SampleService.js` and `src/index.js` for examples of how to structure your services and configuration, and `test/src/SampleService.spec.js` for an example of how to create a Maker instance with your plugin injected.

___

Get started with:

```
$ yarn
```

* `yarn testchain` will launch a ganache testchain with all relevant Maker contracts deployed. Additional contracts will need to be added manually to the scripts in the testchain submodule, but it would be cool to have a script for injecting them at some point.

* Add tests with the suffix `*.spec.js` in the `test` directory and run them with `yarn test`.

* Build the code for production with `yarn build`.