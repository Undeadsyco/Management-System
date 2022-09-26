# Management-System
Project Includes:

1. run all files in data folder to setup database for project
   { !!! IMPORTANT !!! }
   I am using MySQL Workbench for my Database. 
   While i know there are many databases using SQL language, i am not sure if my files can be used in them.
   May require MySQL Workbench.

2. cd into each respective folder and run npm i to install all dependecies

3. cd into server folder and use command nodemon to start up server

4. For pos system - 
  cd into the respective folder 
  and run npm run react-start to start up react project
  or npm start to start up electron and react project
  (pos system is a work in progress but has many features implemented)
  (some features can not be implemented due to lack of hardware, such as recipt printer, card reader, etc..)
  Features:
    1. Login using 8 digit pass phrase (4 digit identifier + 4 digit password - see database for user ids and passwords)
    2. Clocking in if not already
    3. Taking customer order, including:
      A. Selecting pizza size
      B. Selecting pizza
      C. Adding/Removing pizza { !!! current bug reading list length in state reducer !!! }
      D. Adding/Removing toppings/comments/discounts to pizza
      E. Accept "cash" payments
      F. Complete order once paymant has been completed

5. for inventory system - cd into respective folder and run npm start to run react project.
  (inventory system is a work in progress and does not have many features implimented)
