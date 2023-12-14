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
