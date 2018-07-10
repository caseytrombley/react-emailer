# react-emailer
**A simple Node application that posts form data to email**

This app uses Node, Express, Nodemailer and React to collect form data and send it to your email as html and plain text.

The client folder contains a React app which consists of a basic form component. When data is entered into the form, the state object is updated. When the form is submitted an async/await function uses the axios module to post the state to the given route.

The outer Express app handles the post with the given route and uses Nodemailer to format and send the data to the email address or addresses. 
