# Node.js Express CI/CD Deployment Lab

A small Node.js application used to practice packaging and deployment automation with AWS CodeBuild and AWS Lambda tooling.

## Background

The project began as a minimal Express web server and was paired with an AWS CodeBuild build specification to explore an automated deployment workflow. The application exposes a root HTTP route on port 8080, while the build configuration installs dependencies, creates a ZIP deployment package, and calls the AWS CLI to update Lambda function code.

This repository is an educational CI/CD lab. The current Express server and the commented Lambda handler represent two different execution models, so additional refactoring would be required before treating the application as a deployable Lambda service.

## Application Behavior

When started locally, the Express application:

1. Creates an Express server.
2. Registers a `GET /` route.
3. Returns a short text response.
4. Listens on port `8080`.

A basic Lambda handler example is retained as commented code in `index.js` to show the direction of the deployment experiment.

## CI/CD Workflow

The `buildspec.yml` file defines an AWS CodeBuild workflow that:

1. Installs the Express dependency.
2. Packages `index.js`, `package.json`, and `node_modules` into `function.zip`.
3. Uses the AWS CLI to update an existing Lambda function named `function`.

This demonstrates the basic sequence of dependency installation, artifact packaging, and cloud deployment from a managed build environment.

## Technologies

- Node.js
- JavaScript
- Express
- AWS CodeBuild
- AWS Lambda deployment tooling
- AWS CLI
- YAML
- Git

## Repository Structure

```text
.
├── buildspec.yml
├── index.js
└── package.json
```

- `index.js`: Express server and historical Lambda-handler example.
- `package.json`: Express dependency and application start command.
- `buildspec.yml`: CodeBuild installation, packaging, and Lambda update steps.

## Run Locally

Prerequisites:

- Node.js
- npm

Install dependencies and start the server:

```bash
npm install
npm start
```

Then open:

```text
http://localhost:8080
```

## Skills Demonstrated

- Building a basic HTTP service with Node.js and Express
- Defining repeatable build phases with AWS CodeBuild
- Packaging a Node.js application for cloud deployment
- Calling AWS services from a CI/CD pipeline
- Managing application dependencies with npm
- Using Git to track iterative deployment experiments

## Important Limitations

- The active code runs as an Express server, not as an AWS Lambda handler.
- The Lambda function must already exist before the update command runs.
- The dependency uses an unpinned wildcard version and should be pinned before reuse.
- The artifact configuration references `build-output.zip`, while the build creates `function.zip`.
- The pipeline does not currently include automated tests, linting, or a deployment approval step.
- The CodeBuild service role would need appropriate Lambda permissions.

## Possible Improvements

- Convert the application to a supported Lambda HTTP-handler pattern or deploy Express to a container service
- Pin the Node.js and Express versions
- Commit a lockfile for reproducible dependency installation
- Correct and standardize the build artifact name
- Parameterize the Lambda function name
- Add unit and integration tests
- Add linting and security scanning
- Use least-privilege IAM permissions
- Add deployment verification and rollback handling

## Portfolio Context

This project demonstrates early hands-on work with Node.js, Express, AWS build automation, application packaging, and CI/CD concepts. It is preserved as a transparent learning project, including the gaps that would need to be addressed for production use.
