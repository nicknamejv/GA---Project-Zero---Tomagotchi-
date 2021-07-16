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
        tomagotchi.themeSong();
    },

    // SECTION: NAME //
    enterName() {
        petName = $(`#fill_pet_name`).val();
        $(`#pet_name h2`).text(`Hello World! My name is ${petName}!`);
        $(`#starter_page`).css(`visibility`, `hidden`);
        $(`#game_music`).css(`visibility`, `hidden`);
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
            $(`#pet_image`).attr(`src`, `http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/1c5de380c0d107a.png`);
        } else if (tomagotchi.age === 10) {
            $(`#pet_image`).attr(`src`, `http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/3846b31fd64b59f.png`);
        }
    },

    // SECTION: HUNGER //
    hunger: 0,

    hungerDeplete() {
        hunger = setInterval(tomagotchi.reduceHunger, 1000); // TODO: CHANGE INTERVAL AT END
    },

    reduceHunger() {
        tomagotchi.hungerLevel-=5;
        $(`#hunger_level`).text(`${tomagotchi.hungerLevel}`);
        $(`#hunger_bar`).attr(`value`, `${tomagotchi.hungerLevel}`);
        if (tomagotchi.hungerLevel <= 0) {
            $(`#pet_image`).attr(`src`, `https://media.giphy.com/media/fdGbhuUQpGQkkuuzIr/giphy.gif`);
            tomagotchi.deathButton();
            tomagotchi.gameOver();
            tomagotchi.stopTheme();
            clearInterval(this.sleep);
            clearInterval(this.hunger);
            clearInterval(this.play);
            clearInterval(this.time);
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
        play = setInterval(tomagotchi.reduceBoredom, 1500); // TODO: CHANGE INTERVAL AT END
    },

    reduceBoredom() {
        tomagotchi.boredomLevel-=10;
        $(`#play_level`).text(`${tomagotchi.boredomLevel}`);
        $(`#play_bar`).attr(`value`, `${tomagotchi.boredomLevel}`);
        if (tomagotchi.boredomLevel <= 0) {
            $(`#pet_image`).attr(`src`, `https://media.giphy.com/media/fdGbhuUQpGQkkuuzIr/giphy.gif`);
            tomagotchi.deathButton();
            tomagotchi.gameOver();
            tomagotchi.stopTheme();
            clearInterval(this.sleep);
            clearInterval(this.hunger);
            clearInterval(this.play);
            clearInterval(this.time);
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
        sleep = setInterval(tomagotchi.reduceSleep, 1200); // TODO: CHANGE INTERVAL AT END
    },

    reduceSleep() {
        tomagotchi.sleepLevel-=10;
        $(`#sleep_level`).text(`${tomagotchi.sleepLevel}`);
        $(`#sleep_bar`).attr(`value`, `${tomagotchi.sleepLevel}`);
        if (tomagotchi.sleepLevel <= 0) {
            $(`#pet_image`).attr(`src`, `https://media.giphy.com/media/fdGbhuUQpGQkkuuzIr/giphy.gif`);
            tomagotchi.deathButton();
            tomagotchi.gameOver();
            tomagotchi.stopTheme();
            clearInterval(this.sleep);
            clearInterval(this.hunger);
            clearInterval(this.play);
            clearInterval(this.time);
        } 
    },

    sleepMe() {
        if (tomagotchi.sleepLevel < 100) {
            tomagotchi.sleepLevel+=5;
            $(`#sleep_level`).text(`${tomagotchi.sleepLevel}`);
            $(`#sleep_bar`).attr(`value`, `${tomagotchi.sleepLevel}`);
        }
    },

    // SECTION: PLAY SONG //
    themeSong() {
        themeAudio = document.getElementById(`8_bit`);
        themeAudio.play();
        themeAudio.volume = 0.1;
    },

    // SECTION: STOP SONG //
    stopTheme() {
        stopTheme = document.getElementById(`8_bit`);
        stopTheme.pause();
        stopTheme.currentTime = 0;
    },

    // SECTION: OFF BUTTONS ON DEATH //
    deathButton() {
    $(`#play_button`).off(`click`);
    $(`#sleep_button`).off(`click`);
    $(`#hunger_button`).off(`click`);
    },

    // SECTION: GAMEOVER //
    gameOver() {
        gameOverSound = new Audio (`/sounds/Game Over (8-Bit Music).mp3`);
        gameOverSound.play();
        gameOverSound.volume = 0.1;
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


