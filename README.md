# supreme-couscous-scheduler-ultra

## Description

The Supreme Couscous Scheduler Ultra application was birthed into creation out of a need to not use alarms constantly instead i want to have a static browser application that I need to go check to see what I need to get done.... google tasks is for the weak.

It certainly solves the need to quickly check out a simple browser app and see what needs to be done and use the color to quickly skim through then add your next days activities at the end of day

My takeaway from this one was don't do so much to achive so little in regards to functions and local storage (especially local storage), if I can do the same thing with 4 lines of code I am trying to do with twenty and the four liner will work better why make that monstousity a reality also google better.


The live link for this if you'd like to give it a look is as follows: https://loudwhisperer.github.io/supreme-couscous-scheduler-ultra/

## Installation

- To install the Supreme Couscous Scheduler Ultra application simply pull the SSH Link from the bright green code button in GitHub.
- Open up your terminal on your local machine and naviage to a directory you would like to store the code for this in type git clone then paste the SSH Link and hit enter
- Once done you will have the full repo then it is just a matter of changing directories to the Supreme Couscous Scheduler Ultra and use your preffered method for opening it in a code editor

## Usage

When the end user opens the page they will see the current day and date at the top followed by a series of inputs descending from 9am to 5pm with a save button to the right as shown below:

![screenshot](/assets/images/page-intro.png)

![screenshot](/assets/images/to-five.png)

The user can add text into any of these inputs then click the save function to save that text to that input and into their browsers local storage so it will show up even on refreshing the page the only way to change it is to save something new.

As shown below for brevity the times that are red have already past, the time in grey is the current hour and the times in green are future times as shown below:

![screenshot](/assets/images/.png)


## License
MIT License

## Features

- The current date and day is stationed at the top of the page and changes dynamically. 
- The Scheduler features a 9AM to 5PM work day, each time will be correspondingly red if it already passed, grey for the current time and green for the future.
- You can enter in any task that is text you wish to each time and it will save to your local storage once the save icon is pressed so if you come back you can see past tasks, you can also save a new task to overwrite the old one for a new day.