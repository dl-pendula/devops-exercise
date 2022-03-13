# Prologue - This is not an exam

We recognise that you're likely interviewing for multiple positions while also keeping up with your current job, family, and social life. 
Your time is valuable, and we don't want to take up too much of it. 

The questions below are not an exam. There's no pass/fail score and you won't be graded on anything.
You won't lose marks for missing some details. There's no trick questions and no time limits.

Put as much or a little time into this as you feel comfortable with. 
If you don't have time to complete it, that's ok. If you're busy, we're happy to just skip this and jump straight into a face to face interview. 
Feel free to deviate from the questions if you feel like it. 

We simply want to give you the opportunity to write some code in a low stress environment as part of the interview process, 
and we'll use that as a starting point to drive the discussion in a followup interview.

# Overview

This repository contains a node http server that returns the time. 
The server has a dependency on a postgres database which must be deployed separately as a backing service.

# Instructions

1. Fork this repository
2. Add a Dockerfile to create a docker image for the application (see build and run commands below)
3. Configure github actions to build the docker image and push the image to the github docker registry
4. Use a tool like Terraform or Pulumi to deploy the app to Kubernetes (you may want to use Minikube to test). This does not need to be deployed using github actions - just include the Terraform or Pulumi project in a `deployment` subdirectory.
5. Update the deployment project to deploy 3 replicas/pods running the application
6. Update the deployment project to deploy a postgres databse with a PersistentVolumeClaim

In the follow up interview, describe what you would do differently for a production deployment of the app to AWS.

# Commands

## Build

```
yarn install
```

## Run

```
yarn start
```

# Required env vars
- `DB_URL` : URL for the postgres database (e.g. `postgresql://dbuser:secretpassword@database.server.com:3211/postgres`)
- `PORT`   : Port that the http server should bind to

# Testing

Once deployed, the following `curl` command should respond with a HTTP 200 and the current time in the body

```
curl http://<hostname>:<port>/time
```
