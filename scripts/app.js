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

// TODO: Feature Creep //
// NOTE: This will list any features that come to mind along the way to be included after MVP

// Make a starting evolution = egg
    // Have a button that will start the evolution and move on to the first stage
// Add progress bar instead to show decreasing properties -- NOTE: DONE
// Create a way to restart the game i.e. button
// No repeating buttons. Must choose button other than what was  -- NOTE: DONE
// Animate the pet in a more complex manner


// SECTION: Milestones // 

// create our game object --> name, hunger, sleepiness, boredom, age -- NOTE: DONE!
// create the prompt that will ask user to input pet's name -- NOTE: DONE!
    // Have the user input change html text when given -- NOTE: DONE!
    // After user name input have the prompt disappear -- NOTE: DONE!
// createsomeway to show case decrease in:
    // hunger-- NOTE: DONE
    // sleepiness-- NOTE:DONE
    // boredom-- NOTE: DONE
// create timer to showase age of pet --> when will the pet evolve? how will we increment timer? -- NOTE: DONE
    // Morph the pet at X minutes -- NOTE: DONE
// create the buttons that user will use in game  --> what value will each button hold when user press? 
    // hunger -- NOTE: DONE!
    // sleepiness -- NOTE: DONE! 
    // boredom -- NOTE: DONE
    // lights -- 
// create triggers for killing pet (when any of the properties hits 10 trigger death)
    // HUNGER -- NOTE: DONE!
    // SLEEP -- NOTE: DONE!
    // BORDEOM -- NOTE: DONE!
// Animate the pet -- TODO: DONE! but could be improved on!
// Style the page -- TODO
// WHAT IS THE WIN CONDITON? -- TODO
// ADJUST LIGHT BUTTON TO DARKEN BACKGROUND AND IMAGE -- NOTE: DONE


const tomagotchi = {
        hungerLevel: 100,
        sleepLevel: 100,
        boredomLevel: 100,
        petName: ``,

    // SECTION: STARTGAME //
    startGame() {
        tomagotchi.enterName();
        tomagotchi.evolutionStart();
        tomagotchi.hungerDeplete();
        tomagotchi.playDeplete();
        tomagotchi.sleepDeplete();
    },

    // SECTION: NAME //
    enterName() {
        petName = $(`#fill_pet_name`).val();
        $(`#pet_name h2`).text(`Hello World! My name is ${petName}!`);
    },

    // SECTION: EVOLUTION //
    age: 0,
    time: 0,

    evolutionStart() {
        time = setInterval(tomagotchi.whenToEvolve, 1000); // TODO: CHANGE INTERVAL AT END
    },

    whenToEvolve() {
        tomagotchi.time++;
        $(`#timer`).text(`Timer: ${tomagotchi.time}`);
        if (tomagotchi.time % 10 === 0) {
            tomagotchi.age++;
            $(`#age`).text(`Age: ${tomagotchi.age}`);
        } else if (tomagotchi.age === 5) {
            $(`img`).attr(`src`, `http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/1c5de380c0d107a.png`);
        } else if (tomagotchi.age === 10) {
            $(`img`).attr(`src`, `http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/3846b31fd64b59f.png`);
        }
    },

    // SECTION: HUNGER //
    hunger: 0,

    hungerDeplete() {
        hunger = setInterval(tomagotchi.reduceHunger, 2000); // TODO: CHANGE INTERVAL AT END
    },

    reduceHunger() {
        tomagotchi.hungerLevel-=5;
        $(`#hunger_level`).text(`${tomagotchi.hungerLevel}`);
        $(`#hunger_bar`).attr(`value`, `${tomagotchi.hungerLevel}`);
        if (tomagotchi.hungerLevel <= 0) {
            alert (`${petName} has died of hunger!`);
            clearInterval(this.hunger);
        }
    },

    feedMe() {
        if (tomagotchi.hungerLevel < 100) {
            tomagotchi.hungerLevel+=5;
            $(`#hunger_level`).text(`${tomagotchi.hungerLevel}`);
            $(`#hunger_bar`).attr(`value`, `${tomagotchi.hungerLevel}`);
        }
    },

    // SECTION: PLAY //
    play: 0,

    playDeplete() {
        play = setInterval(tomagotchi.reduceBoredom, 2000); // TODO: CHANGE INTERVAL AT END
    },

    reduceBoredom() {
        tomagotchi.boredomLevel-=10;
        $(`#play_level`).text(`${tomagotchi.boredomLevel}`);
        $(`#play_bar`).attr(`value`, `${tomagotchi.boredomLevel}`);
        if (tomagotchi.boredomLevel <= 0) {
            alert (`${petName} has died of boredom!`);
            clearInterval(this.play);
        }
    },

    playMe() {
        if (tomagotchi.boredomLevel < 100) {
            tomagotchi.boredomLevel+=5;
            $(`#play_level`).text(`${tomagotchi.boredomLevel}`);
            $(`#play_bar`).attr(`value`, `${tomagotchi.boredomLevel}`);
        }
    },

    // SECTION: SLEEP //
    sleep: 0,

    sleepDeplete() {
        sleep = setInterval(tomagotchi.reduceSleep, 2000); // TODO: CHANGE INTERVAL AT END
    },

    reduceSleep() {
        tomagotchi.sleepLevel-=15;
        $(`#sleep_level`).text(`${tomagotchi.sleepLevel}`);
        $(`#sleep_bar`).attr(`value`, `${tomagotchi.sleepLevel}`);
        if (tomagotchi.sleepLevel <= 0) {
            alert (`${petName} has died from lost of sleep!`);
            clearInterval(this.sleep);
        }
    },

    sleepMe() {
        if (tomagotchi.sleepLevel < 100) {
            tomagotchi.sleepLevel+=5;
            $(`#sleep_level`).text(`${tomagotchi.sleepLevel}`);
            $(`#sleep_bar`).attr(`value`, `${tomagotchi.sleepLevel}`);
        }
    },

    // SECTION: Light Switch //
    lightSwitchOff() {
        $(`.image`).toggleClass(`.turn_off`);
    },

    lightSwitchOn() {
        $(`.image`).toggleClass(`.turn_on`);
    },
};



// SECTION: BUTTON START GAME //
$(`#click_me`).on(`click`, tomagotchi.startGame);


// SECTION: BUTTONS TO INCREASE //
$(`#hunger_button`).on(`click`, tomagotchi.feedMe);
$(`#play_button`).on(`click`, tomagotchi.playMe);
$(`#sleep_button`).on(`click`, tomagotchi.sleepMe);



// SECTION: LIGHTS BUTTON //
$(document).ready(function() {
    $(`#light_button`).on(`click`, function() {
        $(`#pet_image`).toggleClass(`turn_off`);
        $(`.image`).toggleClass(`turn_on`);
    });
});


