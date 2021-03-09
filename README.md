# Tic Tac Toe

### Table of Contents
- [Overview](#overview-and-project-goals)
- [Features](#features)
- [How does this work?](#how-does-this-work)
- [Project Reflection](#project-reflection)
- [How To Contribute](#want-to-contribute)
- [Authors and Contributors](#credits)

## Overview and Project Goals
The [goal](https://frontend.turing.io/projects/module-1/tic-tac-toe-solo.html) of this solo project I did for Mod1 at [Turing School of Software and Design](https://turing.io/) is to build a Tic Tac Toe game from scratch using HTML, CSS, and Vanilla Javascript.

### Why was this project created?
To solidify and demonstrate the understanding of:
1. writing clean and DRY HTML, CSS, and JS
2. understand the difference between the data model and how the data is displayed on the DOM
3. the interaction between multiple class files
4. implementation of client-side data persistence by utilizing JSON and localStorage

## Features
Players can assign their own name when the game loads. Their scores will be saved under their name so even after game being refreshed and as long as the player enters the same name, they're able to continue the previous game. After each round, game will announce a result and auto clears the board. If the player decides to restart the game, they're an option to click the restart button.

**[Back to top](#table-of-contents)**

## How does this work?
- *When the game loads, form will be displayed for user to assign their own unique name (maxlength 8). User won't able to proceed to the game without entering two different names. After clicking on submit button, empty game board, scores assigned to 0, and lets user know who's turn it is.*
![Landing Page](readme-img-folder/landing-pg.gif)

- *First player to get 3 of their makrs in a row (up, down, across, or diagonally) will be the winner. If you win, game will announce the winner for that round and add 1pt to the score for that player. Game board will be auto cleared after 1.5secs of announcing the round result.*
![Win displayed](readme-img-folder/wins.gif)

- *If no one manages to win the round, game will announce it's a draw. Game board will be auto cleared after 1.5secs of announcing the round result*
![Draw displayed](readme-img-folder/draws.gif)

- *When you refresh the game, you will be given the form again. If you had refreshed the page by accident, all you have to do is enter the previous player names and continue as the scores and player names are being stored in the localStorage. If you decide to pick a different player name then the game will restart by clearing up the board and scores with your updated name. If one of the player decides to keep their score then they have to use their same name and the new player has to start from 0pt. It's not fair but it iz what it iz.*
![Upon refresh](readme-img-folder/refresh.gif)

- *When you decide to play with other players then there's an option to restart the entire game. You will be given a form to enter players name after previous data being removed completely.*
![Restart option](readme-img-folder/restart.gif)

**[Back to top](#table-of-contents)**

## Want to contribute?
If you'd like to contribute, please fork this repository and clone it down to your local machine. Once you've successfully implemented the changes in code necessary for your intended contribution without changing any of the current functionality of main, contact the authors to review the changes.

### Technologies Used
## Project Reflection

##### Wins

##### Challenges

##### Overall Impressions

#### Future Features
## Credits
#### Authors
<table>
    <tr>
        <td> Ashish Malla <a href="https://github.com/asiisii">GH</td>
    </tr>
    </tr>
    <td><img src="https://avatars.githubusercontent.com/u/36644181?s=400&u=bac07fd62de7d01a09ce8f27f88590d5caa202df&v=4" alt="Asiisii GH img"
 width="150" height="auto" /></td>
    </tr>
</table>

#### Project Manager
<table>
    <tr>
         <td> Hannah Hudson <a href="https://github.com/hannahhch">GH</td>
    </tr>
    </tr>
    <td><img src="https://avatars.githubusercontent.com/u/26528259?s=400&u=fa83afc7263cd5ba9b3a9f07e8ae78543c359063&v=4" alt="hannahhch GH img"
 width="150" height="auto" /></td>
</tr>
</table>

**************************************************************************
###### This project was created for [Turing School of Software and Design](https://turing.io/)
###### 2021/03/09
**[Back to top](#table-of-contents)**
