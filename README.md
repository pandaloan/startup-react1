 # notes
[notes to be used on test](notes.md)


# startup
CS 260 Web Application Startup Project
[startup specification](startupSpec.md)

### Elevator Pitch
Want to keep your brain healthy by incorporating logical thinking into your daily routine? Want to have fun? Then "Connect4 - Connected to the Internet" is the game for you! Have fun while playing one of your favorite old-school games and strengthening your critical thinking skills, all from the comfort of your computer or mobile device. Will you connect?

### Key Features
- Secure login over HTTPS
- Display of game board
- Ability to select a column to place a playing chip in it
- Player vs Player local gameplay
- Notification of game win
- Game results are persistently stored
- Ability to restart game
- Ability to view all player high scores
- Ability to see when other players start a game

### Technology Use
I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for application. Four HTML pages. One for login, one for gameplay, one for scores, and one for information.
- **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
- **JavaScript** - Provides login, playing chip insertion, display other users' game initiation and high scores.
- **Service** - Backend service with endpoints for:
  - login
  - retrieving player column selection
  - submitting column selection
  - retrieving game/win status
- **DB** - Store users, column options, and user column selection in database.
- **Login** - Register and login users. Credentials securely stored in database. Can't play unless authenticated.
- **WebSocket** - As each user starts a game, their game status is broadcast to all other users.
- **React** - Application ported to use the React web framework.



### Sketches
**HOME PAGE**
![Home](https://github.com/pandaloan/startup/assets/112591146/551197b5-fa95-4d6d-8953-bc2c36d86f2d)
**INFORMATION PAGE**
![Information](https://github.com/pandaloan/startup/assets/112591146/5068e62f-49fa-4fc6-97d0-e9e828e466af)
**HIGH SCORES PAGE**
![High Scores](https://github.com/pandaloan/startup/assets/112591146/f44b2609-eaaa-44ec-acd6-54662b24fe1d)
**PLAY! PAGE** 
![Play!](https://github.com/pandaloan/startup/assets/112591146/7d08651d-52f3-4df0-b432-2c286921ae28)


## HTML deliverable

For this deliverable I built out the structure of my application using HTML.

- **HTML pages** - Four HTML pages that represent the ability to login, learn about the game, view player scores, and play Connect4.
- **Links** - Each page links to each of the other three pages and to my GitHub repo.
- **Text** - The About page has text describing the game.
- **Images** - An image of a quokka is included on the About page. Later, random quokka pictures will be placed there, a different one each time the page is loaded. SVGs are included on the Play! page.
- **Login** - Input box and submit button for login on Home page.
- **Database** - The previous player scores listed on the Scores page represent data pulled from the database.
- **WebSocket** - The display of other players' games and wins on the Play! page represent realtime player activity.

## CSS deliverable

For this deliverable I built out the style of my application using CSS.

- **Header, footer, and main content body** - I changed the color and made them 'sticky'.
- **Navigation elements** - I changed the color and changed the format to row rather than column.
- **Responsive to window resizing** - My website changes appearance and element size based on window size and device.
- **Application elements** - Used color, contrast, and whitespace.
- **Application text content** - Consistent fonts.
- **Application images** - Image in browser bar and on About page.

## Javascript deliverable

For this deliverable I built out the funcitonality of my application using Javascript.

- **Javascript support for future login** - I made it so that clicking the login button brings the user to the Play! page.
- **JavaScript support for future database data** - The scores page is set up to receive and display data from the database.
- **JavaScript support for future WebSocket** - The About page will eventually use WebSocket to retrieve and display information.
- **JavaScript support for your application's interaction logic** - The Connect4 game works and notifies the user when a player color has won.

## Service deliverable

For this deliverable I added backend endpoints that store and display username and player scores. A random quote is retrieved and displayed on the About page.

 - **Node.js/Express HTTP service** - done!
 - **Static middleware for frontend** - done!
 - **Calls to third party endpoints** - A random quote is retrieved and displayed on the About page.
 - **Backend service endpoints** - Placeholders for login that stores the current user on the server.
 - **Frontend calls service endpoints** - I did this using the fetch function.

## DB deliverable

For this deliverable I stored the scores in the database.

 - **MongoDB Atlas database created** - done!
 - **Endpoints for data** - endpoints process the data and send it to Mongo.
 - **Stores data in MongoDB** - done!

## Login deliverable

For this deliverable I associate the scores with the logged in user.

- **User registration** - Creates a new account in the database.
- **Existing user** - Stores the username ans password under the same user if the user already exists.
- **Use MongoDB to store credentials** - Stores both user and their scores.
- **Restricts functionality** - You cannot play, visit the About page, or visit the Scores page until you have logged in.

## WebSocket deliverable

For this deliverable I used webSocket to update the player scores and status on the frontend in realtime.

- **Backend listens for WebSocket connection** - done!
- **Frontend makes WebSocket connection** - done!
- **Data sent over WebSocket connection** - done!
- **WebSocket data displayed** - All user player scores and status display in realtime.




