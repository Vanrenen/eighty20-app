# Introduction
This project is a single-page application built with React and TypeScript as the front end.  
Users are created and stored against Firebase.  
Logging in will take you to the welcome page where you can navigate to the profile page. 
Log in status persists via a token until the logout button is selected from the header.  
On the profile page you can update your password that persists per session.

## Design
Simplicity as an architectural virtue and a development practice was at teh core of this design, by avoiding unnecessary obfiscation and not using unnecesary libraries that would add to the complexity of the application.  
User state is determined at app.tsx level as this is the closest common parent used for auth.  
The app consists of 4 page components.  
API calls are done through custom hooks to limit reusibility.  
All calls are done as close to the component executing the call to limit state changes that causes re-renders.  
Styles are done using SASS.  
State management is done close to source where needed and unnecesary libraries were not used to avoid an overcomplicated UI.  

# Getting Started
## Prerequisites
Node.js (>= 14.x) (https://nodejs.org/)  
npm (>= 6.x)

## Installation
### Clone the repository:
git clone git@github.com:Vanrenen/eighty20-app.git  
cd eighty20-app

## Install dependencies:
npm install

## Techstack
React (^18.3.1)  
Typescript (^4.9.5)  
Emotion/React (^11.13.0)  
MUI/material (^5.16.5)
