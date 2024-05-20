# ita-qate-aol-automation

## Prerequisites

Before starting project check your [system requirements](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements).

To format cucumber json result install [Cucumber JSON formatter](https://github.com/cucumber/json-formatter).

## Quick start

After cloning this repo navigate to frontend/automation path and launch this command

```
npm install
```

```
npx cypress run
```

If you want to run cypress tests in a specific environment you can use this command

```
npx cypress run --config-file cypress.dev.config.ts
```

## Run Cypress in Docker

To run Cypress tests in docker you can launch this command

```
docker run -it -v $PWD:/e2e -w /e2e --entrypoint=cypress cypress/included:12.2.0 run --browser chrome
```

If you want to run cypress tests in a specific environment you can use this command

```
docker run -it -v $PWD:/e2e -w /e2e --entrypoint=cypress cypress/included:12.2.0 run --browser chrome --config-file cypress.dev.config.ts
```

## Create report with Allure

### Prerequisites

To create Allure report you must have installed on your system Java 8 and allure

On Allure site we have this [guide](https://docs.qameta.io/allure-report/#_installing_a_commandline).

### Generate report

To generate the report for the first time, after launch

```
npx cypress run
```

you can launch this command from the project root

```
allure generate --clean
```

To open report launch

```
allure open
```

If you want to relaunch the test suite without losing the history, just run the following bash script from the root of the project

```
./keepHistory.sh
```
