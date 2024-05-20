# TERP Weather System

The TERP Weather System is a web application that provides weather updates and forecasts for the University of Maryland, College Park. Users can view daily and weekly weather forecasts, navigate the website using voice commands, and also be able to submit tickets through a form to get help with technical issues.

The Target Browsers are all browsers, including iPhone and Android phones as well as Desktop Browsers, with this web application providing weather information, it is not tailored to just one device or browser.

## [Developer Manual](#developer-manual)

---

# Developer Manual

## Introduction
This document is intended for future developers who will maintain and enhance the TERP Weather System. It assumes a general understanding of web development concepts but no prior knowledge of this specific application. 

## Setup

### 1. Clone the Repository
https://github.com/Gabriellew417/377-final

### 2. Install Dependencies
Install node.js and npm which can be done by downloading node.js online and then install Express, Nodemon, body-parser, and Supabase
We also used ChartJS and Annyang in our application

## Running the Application

1. In your terminal, cd into the "ExpressProjectApp" folder/directory and run "npm start" command to start the API
2. Open a new browser tab and run "http://127.0.0.1:3000/"

## Running Tests
To run tests, we have an HTML file and JavaScript file, projecttest.html and projecttest.js and to test if the features of the application works.

## API Endpoints

1. GET `/mission`: This endpoint retrieves the mission statement from the server. It responds with a JSON object containing the mission statement.

2. GET `/values`: This endpoint retrieves the values statement from the server. It responds with a JSON object containing the values statement.

3. GET `/ticket_data`: This endpoint fetches all submitted tickets from the database. It responds with a JSON array of ticket objects.

4. POST `/ticket_input`: This endpoint submits a new help ticket to the database. The request body must include a JSON object containing the name, date, and description of the ticket. It responds with a JSON object of the newly created ticket.

## Known Issues
Known issues with the web application are around Annyang and the voice commands and how it may not work for some devices or in some cases.

## Future Development
For future development, ideas that can be worked on or improved are more weather information and include features such as alerts with weather changes, along with improving the voice commands and/or adding more commands such as asking for weather for a certain date.

## Deployment on Vercel

Connect the GitHub Repository to Vercel, and Vercel automatically builds and deploys the application, providing you with a public URL.

This is our current web application deployed on Vercel, https://inst377-project-repo.vercel.app/.

