# Thinkific Identifier Api


# Technology Stack
The API is created using Node js, ES6 and Claudia Js.


# API routes / methods :
There are three methods that get called in the API :
1. /v1/next :
It is a GET request. It generates and returns a value greater than current value by 1 for the identifier.
2. /v1/current :
It is a GET request and returns the current value of the identifier.
3. /v1/current :
It is a PUT request. It allows you to pass a json object in the below format to set the current value to a non negative number 
rather than generating the identifier automatically.
{ current: 1000 }

The api url is mentioned below :
https://ih7zr6gilj.execute-api.us-east-1.amazonaws.com/latest



# Behind the Scenes :
Within the Nodejs API, I have used a package the Claudia API Builder package in order to create the methods in the API.
Claudia API Builder also helps to directly generate and publish the API routes to AWS API Gateway.

Install claudia and claudia js
npm install -g claudia
npm install claudia-api-builder -S

Once the API is written, we need to make sure that it builds properly and then execute the below command using Claudia js.
claudia create --region us-east-1 --api-module thinkific-identifier-api

If you make changes to the API or its routes, use Claudia's update command instead to publish the API to AWS API Gateway.
claudia update --region us-east-1 --api-module thinkific-identifier-api

This will publish the API to AWS API Gateway. When the AWS API Gateway shows the Identifier API routes, deploy the API to make it available to the users.
