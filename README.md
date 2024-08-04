# Introduction
This project is a single-page application built with React and TypeScript as the front end.  
Graphql as the api layer.   
This project was taken from a previously created project and adapted to the DVT assessment needs.  
The user can register and log in with your user details as this is saved in the database.  
The cart only persists during a session as it is not added to the database yet. At which point a cart and user would be linked based on user id.  
At checkout, only a modal is shown as there is no payment gateway added.

# Getting Started
## Prerequisites
Node.js (>= 14.x) (https://nodejs.org/)  
npm (>= 6.x)  

## Installation
### Clone the repository:
git clone https://github.com/Vanrenen/derivco-app.git  
cd derivco-app

## Running the app
The app can be run from root by typing "npm start". With the help of "concurrently", this will trigger both the UI and server to run.  
Alternatively, you can navigate in to the ui and server folders respectively and run "npm start" from each folder to run the ui and server.


# Introduction
This project is a single-page application built with React and TypeScript as the front end.   
It follows the path of login in or register a new user.  
When succesfull, you will be greeted with a list of available products which can be filtered by category.  
When selecting a product, you will navigate to the product page that shows more details of the product.   
Interaction with the cart can be done at either these pages, which is accessible via a button at the top right of the header.  
Log in status persists via a token until the logout button is selected from the header.

# Getting Started
## Prerequisites
Node.js (>= 14.x) (https://nodejs.org/)  
npm (>= 6.x)  

# Installation
## Install dependencies:
npm install

## Techstack
React (^17.0.2)  
Typescript (^4.9.5)  
Emotion/React (^11.13.0)  
MUI/material (^5.16.5)  

## Setup environment variables:
Create a .env file in the root directory and add your environment variables:  
.env  
This file contains environment-specific settings. Here's a sample:  
GRAPHQL_API_API=

# Caching
React-query is used for caching in the frontend.

# Testing
Testing is done using jest where some simple unit tests were included.
To run the tests simply type in "npm run test"
