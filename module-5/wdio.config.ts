export const config = {
    maxInstances: 1,
    services: ['chromedriver'],
    specs: ['./module-5/**/*.test.ts'],
    logLevel: 'trace',
    waitforTimeout: 20000,
    framework: 'mocha',
    onnectionRetryCount: 0,
    mochaOpts: {
        timeout: 60000,
    },
    reporters: ['spec'],
    autoCompileOpts: {
        autoCompileOpts: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: './module-5/tsconfig.json',
        },
        tsConfigPathsOpts: {
            baseUrl: './',
        },
    },
    runner: 'local',
    capabilities: [{
        browserName: 'chrome',
    }],
}




