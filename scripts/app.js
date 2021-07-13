/* SECTION: == Specifications ==

Create a repo for your tomagotchi pet

Make a commit after you finish each one of the following:

Instatiate your Tomagotchi

Display a character of your choice on the screen to represent your pet

Display the following metrics for your pet:

- Hunger (1-10 scale)
- Sleepiness (1-10 scale)
- Boredom (1-10 scale)
- Age

Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.

/* NOTE: MORE DETAILS 
- What is the increment of each aspect (both when you press X button and when it drains)?
- For age how quickly will pet age?
*/

// Add the ability to name your pet.

// Style the page.

// Increase your pet's age every x minutes

/* NOTE: MORE DETAILS 
- will we keep the increment at minutes?
- will we have a timer of some sort that will showcase in real time the age of the pet?
- will we choose to evolve the pet at X minutes? 
*/

// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.

/* NOTE: MORE DETAILS 
- If the scale is between 1-10 which way would it flow? i.e. will it drain or will it gain?
*/

// You pet should die if Hunger, Boredom, or Sleepiness hits 10.

/* NOTE: MORE DETAILS 
- If pet hits 10 at on any of the properties and dies will we have a reset button? 
- Will we reset the game or leave a prompt that states the pet has died?
- Will this be a user click event or will it start after a set time?
*/

// Morph your pet at certain ages.

/* NOTE: MORE DETAILS 
- How many morphs will we have?
- What age will trigger these morphs?
- Will we give user the ability to morph the pet? 
*/

// Animate your pet across the screen while it's alive.

/* NOTE: MORE DETAILS
- In the most simplest way how will we choose to anime the pet?
- Will it be moved around or stay in play?
- Will hunger, boredom, or sleepiness showcase different pictures based on its level? 
*/

// SECTION: Feature Creep //
// NOTE: This will list any features that come to mind along the way to be included after MVP

// Make a starting evolution = egg
    // Have a button that will start the evolution and move on to the first stage


// SECTION: Milestones // 

// create our game object --> name, hunger, sleepiness, boredom, age -- NOTE: DONE!
// create the prompt that will ask user to input pet's name -- NOTE: DONE!
    // Have the user input change html text when given -- NOTE: DONE!
    // After user name input have the prompt disappear -- NOTE: DONE!
// create a progress bar or someway to show case decrease in hunger, sleepiness, and boredom (increase these bars at a set intervals)
// create timer to showase age of pet --> when will the pet evolve? how will we increment timer?
// create the buttons that user will use in game (hunger, sleepiness, boredom, lights) --> what value will each button hold when user press? 
// create triggers for killing pet (when any of the properties hits 10 trigger death)
// Morph the pet at X minutes
// Animate the pet
// Style the page

/*
    1. create our tomagotchi class --> this will hold the following: name, hunger, sleepiness, bordedom, & age
*/

const Tomagotchi = {
        hungerLevel: 100,
        sleepLevel: 100,
        boredomLevel: 100,
        age: 0,

    // SECTION: METHODS //

    enterName() {
        const petName = $(`#fill_pet_name`).val();
        $(`#pet_name h2`).text(`Hello World! My name is ${petName}!`);
        $(`#fill_pet_name`).val(``);
    },

    hungerDeplete() {
        setInterval(this.reduceHunger, 1000);
    },

    reduceHunger() {
        this.hungerLevel-=5;
        $(`#hunger_level`).text(this.hungerLevel);
    },
};

// SECTION: BUTTONS //
$(`#click_me`).on(`click`, Tomagotchi.enterName);
$(`#click_me`).on(`click`, Tomagotchi.hungerDeplete);


