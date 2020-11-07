<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://hannahong.dev/#contact">
    <img src="images/favicon.png" alt="Logo" width="80" height="80">
  </a>

  <h1 align="center" style="border:none" >Hannah Ong Website's Contact API</h1>

  <p align="center">
    The contact API for my personal website made using Gatsby.
    <br />
    <br />
    <a href="https://hannahong.dev/#contact">View Site</a>
    ·
    <a href="https://github.com/duchess-toffee/hannah-ong-contact-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/duchess-toffee/hannah-ong-contact-api/issues">Suggest Feature</a>
  </p>
  
<br/><hr/><br/>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- :sparkles: [About the Project](#sparkles-about-the-project)
  - :wrench: [Built With](#wrench-built-with)
- :ocean: [Workflow](#ocean-workflow)
- :traffic_light: [Roadmap](#traffic_light-roadmap)
- :phone: [Contact](#phone-contact)
- :books: [Resources](#books-resources)

<br /><hr/><br/>

<!-- ABOUT THE PROJECT -->

## :sparkles: About The Project

I built the API using the below tools to configure the emails between sent from my personal website to my email.

<br/>

### :wrench: Built With

The API was built using the following:

- [Serverless/TypeScript Starter](https://www.jamestharpe.com/serverless-typescript-getting-started/): the initial starter used for this project
- [Serverless dotenv plugin](https://www.serverless.com/plugins/serverless-dotenv-plugin): to have Serverless look for the dotenv file and use the environment variables.
- [Nodemailer](https://nodemailer.com/): to configure emails
- [Serverless](https://www.serverless.com/): to send emails through AWS instead of Express.js
- [AWS](https://aws.amazon.com/): more specifically [AWS IAM](https://aws.amazon.com/iam/) & [AWS SES SMTP](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-smtp.html) to set up credentials and send emails

<br/><hr/><br/>

<!-- WORKFLOW -->

## :ocean: Workflow

Here's some notes to myself on how to get started and running :)

1. `npm i -g serverless` if you dont have serverless, install the CLI
2. `serverless config credentials --provider aws --key <KEY> --secret <SECRET> --profile serverless-admin --profile <PROFILE> --overwrite` if you need to config/overwrite credentials

When you're ready to deploy, follow the below steps: 1.`serverless deploy -v` deploys the project to development 2. `serverless deploy -v --stage production` deploys the project to production 3. `$ curl -X POST https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/contact` (change the x's to the returned endpoint URL from your deploy) 3. Don't forget to `git add`, `git commit`, and `git push` to the repo as well to save your progress.

_Go to [Personal Website Repo](https://github.com/duchess-toffee/duchess-toffee.github.io) for more information on how it all fits together_

<br/><hr/><br/>

<!-- ROADMAP -->

## :traffic_light: Roadmap

See the [open issues](https://github.com/duchess-toffee/hannah-ong-contact-api/issues) for a list of upcoming features (and known issues).

<br/><hr/><br/>

<!-- CONTACT -->

## :phone: Contact

- :mega: [@duchess_toffee](https://twitter.com/duchess_toffee)
- :mailbox: hchai1991@gmail.com
- :octocat: [Contact API Github Repo](https://github.com/duchess-toffee/hannah-ong-contact-api)

<br/><hr/><br/>

<!-- RESOURCES -->

## :books: Resources

- [Nodemailer](https://nodemailer.com/about/)
- [Serverless](https://www.serverless.com/)
- [AWS](https://aws.amazon.com/)
- [AWS IAM](https://aws.amazon.com/iam/)
- [AWS SES SMTP](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-smtp.html)
