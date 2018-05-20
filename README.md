# Udacity Front-end Development Nano-degree

# Google Scholarship

## Table of Contents

* [1. Introduction](#introduction)
* [2. Arcade Game Clone: how does it work?](#howtoplay)
* [2.1. Basic functionalities](#basicfunctionalities)
* [2.2. Additional functionalities](#additionalfunctionalities)
* [3. Arcade Game Clone: how to run it?](#howtorun)
* [4. Contributing](#contributing)

## 1. Introduction
This projects is a result of an assignment in a Udacity course for a front-end developers. Its objective was to run a Arcade Game using functions that are object-oriented class functions or class prototype functions. Another important specification that a project should to meet is a use of the "this" keyword.

![alt text](https://preview.ibb.co/nf3Rko/Arcade_Game.png)

## 2. Arcade Game Clone: how does it work?

### 2.1. Basic functionalities
In this game a user has a Player and Enemies (Bugs). The goal of the player is to reach the water, without colliding into any one of the enemies. The player can move left, right, up and down. The enemies move in varying speeds on the paved block portion of the scene. Once a the player collides with an enemy, the game is reset and the player moves back to the start square. Once the player reaches the water the game is won and he/she gains 50 scores.

### 2.2. Additional functionalities
In this game, a player has 4 lives that are represented as hearts in the left top corner. When a player collides with an enemy, he/she looses a life and comes back to the start point.
The game finishes with "Game over" message and the number of scores that have been gain.
Each time when a player arrives to the water without a collision, he/she wins 50 points. The update of won scores in visible in a right top corner.

## 3. Arcade Game Clone: how to run it?
Clone or download this repository, then open index.html in your browser after starting a simple web server.
The easiest way is to use SimpleHTTPServer if you already have Python installed (it comes pre-installed on most Mac OS X and Linux computers). In a terminal window, cd into the downloaded directory and run the following command:

python -m SimpleHTTPServer

After it starts, you can navigate to http://0.0.0.0:8000/index.html in your preferred browser.

## 4. Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
