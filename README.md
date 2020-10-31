# Mail_App
API to send mails with authentication using OAuth 2.0 and the GMAIL REST API 

## How to use the API:
1. npm init -> in working directory
2. npm install express nodemon nodemailer
3. Open https://console.cloud.google.com and create a new project.
4. Click on library (under APIs and services) on the left hand side and search for the GMAIL REST API and click on 'enable'.
5. Configure the consent screen with default options.
6. Click on credentials and click 'Create Credentials' and select 'OAuth client ID' in the drop down menu.
7. Select application type as 'web application'. Name the web client as your choice and add the URL: 'https://developers.google.com/oauthplayground/' under 'Authorized redirect URIs' and click on create.
8. Note down the Client ID and the Client secret and visit https://developers.google.com/oauthplayground/.
9. Under 'Select & authorize APIs' input 'https://mail.google.com/' and click on 'authorize APIs'.
10. Click 'Exchange authorization code for tokens' and note down the Refresh token and the Access token( Note: Access has to be granted by a GMAIL account to view and modify the Inbox).
11. Replace the example values in 'server.js' with Client ID, Client secret and the Refresh token noted down.
12. To send an email, open Postman and select the POST HTTP command. Add the URL: 'http://localhost:3002' (replace port number accordingly).
13. Under Authorization Tab select type as 'OAuth 2.0' and copy paste the Access token earlier noted down.
14. Under the 'Body' tab, select 'x-www-form-urlencoded' and input the three key value pairs we have chosen as part of the request body (name, email and message).
15. Click on send and the Email will be sent !
