export let reportersConf = process.env.REPOTER === 'true' ? { 
    reporters: ["spec",
        ["allure",{
                outputDir: "allure-results",
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
            },
        ],
    ],

} : {}