# rig-unit-test
A rig containing tasks used for running unit tests

## How to use
1. Install rigs package: `npm install rigs`
2. Install rig-unit-test: `npm install rig-unit-test`

## Available tasks in rig-unit-test
- `rig-unit-test__karma`: A task which runs Karma with the specific configuration
  - properties:
    - `karma`: Object, contains Karma configuration. More info on [karma website](https://karma-runner.github.io/0.13/index.html)

    ```
    {
        taskname: 'rig-unit-test__karma',
        dependency: [],
        karma: {
            basePath: './',
            frameworks: [ 'jasmine', 'browserify' ],
            preprocessors: {
                '/spec/unit/**/*.js': [ 'browserify' ]
            },
            files: [
                '/spec/unit/**/*.js'
            ],
            exclude: [],
            browserify: {
                debug: true,
                transform: [ 'browserify-ngannotate', require( 'browserify-istanbul' )( {
                    ignore: [
                        '**/node_modules/**',
                        '**/spec/**'
                    ]
                } ) ]
            },
            reporters: [ 'progress', 'coverage' ],
            coverageReporter: {
                reporters: [ {
                    type: 'text'
                }, {
                    type: 'text-summary'
                }, {
                    type: 'cobertura',
                    dir: './coverage/unit/'
                }, {
                    type: 'html',
                    dir: './coverage/unit/'
                } ]
            },
            port: 9876,
            colors: true,
            autoWatch: true,
            browsers: [ 'PhantomJS' ],
            singleRun: true
        }
    }
    ```

### Generated using [webcase-rig](https://www.npmjs.com/package/webcase-rig) version 1.0.0
