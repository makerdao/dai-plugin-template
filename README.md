<h1 align="center">
Dai Plugin Template
</h1>

Fork this repository and replace the sample code with your own to easily build a plugin for dai.js.

* `src/SampleService.js` is an example of how to structure your plugin's services
* `src/index.js` is an example of how to package your services and contracts into a plugin (so you can inject it into a Maker instance)
* `test/src/SampleService.spec.js` is an example of how to create a Maker instance with your plugin injected, and how to access services from your new plugin

___

Get started developing with:

* `yarn` to install dependencies

* `yarn testchain` will launch a ganache testchain with all relevant Maker contracts deployed

* Add tests with the suffix `*.spec.js` in the `test` directory and run them with `yarn test`

* Build the code for production with `yarn build`