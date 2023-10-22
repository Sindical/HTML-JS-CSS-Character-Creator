'use strict'

// Number variables for keeping track of what image to display
let currentSkinColour = 1;
let currentHat = 1;
let currentVisor = 1;
let currentOutfit = 1;
let currentBackpack = 1;
let currentRole = 1;

// Displaying the Among Us logo
document.getElementById('TitleLogo').src = 'Assets/-\ Background \-/Logo.png'


/// Skin Section ///

// Function to change skin color slideshow depending on what number is selected
function skinColour(){
    if (currentSkinColour == 1) {
        document.getElementById('SkinPicture').src = 'Assets/Skins/Skin1.png';
    } else if (currentSkinColour == 2) {
        document.getElementById('SkinPicture').src = 'Assets/Skins/Skin2.png';
    } else if (currentSkinColour == 3) {
        document.getElementById('SkinPicture').src = 'Assets/Skins/Skin3.png';
    } else if (currentSkinColour == 4) {
        document.getElementById('SkinPicture').src = 'Assets/Skins/Skin4.png';
    } else if (currentSkinColour == 5) {
        document.getElementById('SkinPicture').src = 'Assets/Skins/Skin5.png';
    } else if (currentSkinColour == 6) {
        document.getElementById('SkinPicture').src = 'Assets/Skins/Skin6.png';
    } else if (currentSkinColour == 7) {
        document.getElementById('SkinPicture').src = 'Assets/Skins/Skin7.png';
    } else if (currentSkinColour == 8) {
        document.getElementById('SkinPicture').src = 'Assets/Skins/Skin8.png';
    } else if (currentSkinColour == 9) {
        document.getElementById('SkinPicture').src = 'Assets/Skins/Skin9.png';
    } else if (currentSkinColour == 10) {
        document.getElementById('SkinPicture').src = 'Assets/Skins/Skin10.png';
    }
}

// Function to move to the next skin color image depending on how many times button is clicked
function nextSkin(){
    currentSkinColour = currentSkinColour + 1;

    if (currentSkinColour > 10){
        currentSkinColour = 1;
    }

    skinColour();
}

// Function to move to the previous skin color depending on how many times button is clicked
function backSkin(){
    currentSkinColour = currentSkinColour - 1;

    if (currentSkinColour < 1){
        currentSkinColour = 10;
    }

    skinColour();
}


/// Visor Section ///

// Function to change visor image slideshow depending on what number is selected
function visorColour() {
    if (currentVisor == 1){
        document.getElementById('VisorPicture').src = 'Assets/Visors/Visor1.png';
    } else if (currentVisor == 2) {
        document.getElementById('VisorPicture').src = 'Assets/Visors/Visor2.png';
    } else if (currentVisor == 3) {
        document.getElementById('VisorPicture').src = 'Assets/Visors/Visor3.png';
    } else if (currentVisor == 4) {
        document.getElementById('VisorPicture').src = 'Assets/Visors/Visor4.png';
    } else if (currentVisor == 5) {
        document.getElementById('VisorPicture').src = 'Assets/Visors/Visor5.png';
    } else if (currentVisor == 6) {
        document.getElementById('VisorPicture').src = 'Assets/Visors/Visor6.png';
    } else if (currentVisor == 7) {
        document.getElementById('VisorPicture').src = 'Assets/Visors/Visor7.png';
    } else if (currentVisor == 8) {
        document.getElementById('VisorPicture').src = 'Assets/Visors/Visor8.png';
    } else if (currentVisor == 9) {
        document.getElementById('VisorPicture').src = 'Assets/Visors/Visor9.png';
    } else if (currentVisor == 10) {
        document.getElementById('VisorPicture').src = 'Assets/Visors/Visor10.png';
    } 
}

// Function to move to the next visor image depending on how many times button is clicked
function nextVisor() {
    currentVisor = currentVisor + 1;

    if (currentVisor > 10) {
        currentVisor = 1;
    }

    visorColour();
}

// Function to move to the previous visor image depending on how many times button is clicked
function backVisor() {
    currentVisor = currentVisor - 1;

    if (currentVisor < 1) {
        currentVisor = 10;
    }

    visorColour();
}


/// Hat Section ///

// Function to change hat image slideshow depending on what number is selected
function hatType() {
    if (currentHat == 1) {
        document.getElementById('HatPicture').src = 'Assets/Hats/Hat1.png';
    } else if (currentHat == 2) {
        document.getElementById('HatPicture').src = 'Assets/Hats/Hat2.png';
    } else if (currentHat == 3) {
        document.getElementById('HatPicture').src = 'Assets/Hats/Hat3.png';
    } else if (currentHat == 4) {
        document.getElementById('HatPicture').src = 'Assets/Hats/Hat4.png';
    } else if (currentHat == 5) {
        document.getElementById('HatPicture').src = 'Assets/Hats/Hat5.png';
    } else if (currentHat == 6) {
        document.getElementById('HatPicture').src = 'Assets/Hats/Hat6.png';
    } else if (currentHat == 7) {
        document.getElementById('HatPicture').src = 'Assets/Hats/Hat7.png';
    } else if (currentHat == 8) {
        document.getElementById('HatPicture').src = 'Assets/Hats/Hat8.png';
    } else if (currentHat == 9) {
        document.getElementById('HatPicture').src = 'Assets/Hats/Hat9.png';
    } else if (currentHat == 10) {
        document.getElementById('HatPicture').src = 'Assets/Hats/Hat10.png';
    }
}

// Function to move to the next hat image depending on how many times button is clicked
function nextHat() {
    currentHat = currentHat + 1;

    if (currentHat > 10) {
        currentHat = 1;
    }

    hatType();
}

// Function to move to the previous hat image depending on how many times button is clicked
function backHat() {
    currentHat = currentHat - 1;

    if (currentHat < 1) {
        currentHat = 10;
    }

    hatType();
}

/// Outfit Section ///

// Function to change outfit image slideshow depending on what number is selected
function outfitType() {
    if (currentOutfit == 1) {
        document.getElementById('OutfitPicture').src = 'Assets/Outfits/Outfit1.png';
    } else if (currentOutfit == 2) {
        document.getElementById('OutfitPicture').src = 'Assets/Outfits/Outfit2.png';
    } else if (currentOutfit == 3) {
        document.getElementById('OutfitPicture').src = 'Assets/Outfits/Outfit3.png';
    } else if (currentOutfit == 4) {
        document.getElementById('OutfitPicture').src = 'Assets/Outfits/Outfit4.png';
    } else if (currentOutfit == 5) {
        document.getElementById('OutfitPicture').src = 'Assets/Outfits/Outfit5.png';
    } else if (currentOutfit == 6) {
        document.getElementById('OutfitPicture').src = 'Assets/Outfits/Outfit6.png';
    } else if (currentOutfit == 7) {
        document.getElementById('OutfitPicture').src = 'Assets/Outfits/Outfit7.png';
    } else if (currentOutfit == 8) {
        document.getElementById('OutfitPicture').src = 'Assets/Outfits/Outfit8.png';
    } else if (currentOutfit == 9) {
        document.getElementById('OutfitPicture').src = 'Assets/Outfits/Outfit9.png';
    } else if (currentOutfit == 10) {
        document.getElementById('OutfitPicture').src = 'Assets/Outfits/Outfit10.png';
    }
}

// Function to move to the next outfit image depending on how many times button is clicked
function nextOutfit() {
    currentOutfit = currentOutfit + 1;

    if (currentOutfit > 10) {
        currentOutfit = 1;
    }

    outfitType();
}

// Function to move to the previous outfit image depending on how many times button is clicked
function backOutfit() {
    currentOutfit = currentOutfit - 1;

    if (currentOutfit < 1) {
        currentOutfit = 10;
    }

    outfitType();
}


/// Backpack Section ///

// Function to change backpack image slideshow depending on what number is selected
function backpackColour() {
    if (currentBackpack == 1) {
        document.getElementById('BackpackPicture').src = 'Assets/Backpacks/Backpack1.png';
    } else if (currentBackpack == 2) {
        document.getElementById('BackpackPicture').src = 'Assets/Backpacks/Backpack2.png';
    } else if (currentBackpack == 3) {
        document.getElementById('BackpackPicture').src = 'Assets/Backpacks/Backpack3.png';
    } else if (currentBackpack == 4) {
        document.getElementById('BackpackPicture').src = 'Assets/Backpacks/Backpack4.png';
    } else if (currentBackpack == 5) {
        document.getElementById('BackpackPicture').src = 'Assets/Backpacks/Backpack5.png';
    } else if (currentBackpack == 6) {
        document.getElementById('BackpackPicture').src = 'Assets/Backpacks/Backpack6.png';
    } else if (currentBackpack == 7) {
        document.getElementById('BackpackPicture').src = 'Assets/Backpacks/Backpack7.png';
    } else if (currentBackpack == 8) {
        document.getElementById('BackpackPicture').src = 'Assets/Backpacks/Backpack8.png';
    } else if (currentBackpack == 9) {
        document.getElementById('BackpackPicture').src = 'Assets/Backpacks/Backpack9.png';
    } else if (currentBackpack == 10) {
        document.getElementById('BackpackPicture').src = 'Assets/Backpacks/Backpack10.png';
    }
}

// Function to move to the next backpack image depending on how many times button is clicked
function nextBackpack() {
    currentBackpack = currentBackpack + 1;

    if (currentBackpack > 10) {
        currentBackpack = 1;
    }

    backpackColour();
}

// Function to move to the previous backpack image depending on how many times button is clicked
function backBackpack() {
    currentBackpack = currentBackpack - 1;

    if (currentBackpack < 1) {
        currentBackpack = 10;
    }

    backpackColour();
}

/// Role Section ///

// Function to change role image slideshow depending on what number is selected
function roleType () {
    if (currentRole == 1) {
        document.getElementById('RolePicture').src = 'Assets/Roles/Role1.png';
    } else if (currentRole == 2) {
        document.getElementById('RolePicture').src = 'Assets/Roles/Role2.png';
    } else if (currentRole == 3) {
        document.getElementById('RolePicture').src = 'Assets/Roles/Role3.png';
    } else if (currentRole == 4) {
        document.getElementById('RolePicture').src = 'Assets/Roles/Role4.png';
    } else if (currentRole == 5) {
        document.getElementById('RolePicture').src = 'Assets/Roles/Role5.png';
    } else if (currentRole == 6) {
        document.getElementById('RolePicture').src = 'Assets/Roles/Role6.png';
    } else if (currentRole== 7) {
        document.getElementById('RolePicture').src = 'Assets/Roles/Role7.png';
    } else if (currentRole == 8) {
        document.getElementById('RolePicture').src = 'Assets/Roles/Role8.png';
    } else if (currentRole == 9) {
        document.getElementById('RolePicture').src = 'Assets/Roles/Role9.png';
    } else if (currentRole == 10) {
        document.getElementById('RolePicture').src = 'Assets/Roles/Role10.png';
    }
}

// Function to move to the next role image depending on how many times button is clicked
function nextRole() {
    currentRole = currentRole + 1;

    if (currentRole > 10) {
        currentRole = 1;
    }

    roleType();
}

// Function to move to the previous role image depending on how many times button is clicked
function backRole() {
    currentRole = currentRole - 1;

    if (currentRole < 1) {
        currentRole = 10;
    }

    roleType();
}

// Function to get a random number between 10 and 20
let pointsAvailable = getRandomInt(10, 20);
let stats = {
    hp: 0,
    speed: 0,
    stealth: 0,
    strength: 0,
    iq: 0,
    luck: 0
};

document.getElementById('pointsAvailable').innerText = pointsAvailable;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to adjust a stat based on the users input
function adjustStat(stat, value) {
    if (value === 1 && pointsAvailable > 0) {
        stats[stat]++;
        pointsAvailable--;
    } else if (value === -1 && stats[stat] > 0) {
        stats[stat]--;
        pointsAvailable++;
    }

    document.getElementById(stat).innerText = stats[stat];
    document.getElementById('pointsAvailable').innerText = pointsAvailable;

    // Show the Create Character button when all points are spent
    if (pointsAvailable == 0) {
        document.getElementById('createCharacterButton').style.display = 'block';

    if (pointsAvailable >= 1) {
        document.getElementById('createCharacterButton').style.display = 'none'
    }
}
}

// Function to change the webpage from index.html to confirm.html after pressing the button
function createCharacterPage(){
    window.location.href = 'confirm.html';
}

// Will display the same image that the user selected in both index.html and confirm.html
function createCharacterPage() {
    // Remembering the current images selected to use later 
    const queryString = `?skin=${currentSkinColour}&hat=${currentHat}&visor=${currentVisor}&outfit=${currentOutfit}&backpack=${currentBackpack}&role=${currentRole}`;

    // Redirecting to confirm.html
    window.location.href = 'confirm.html' + queryString;
}

// Function to display the credits in an alert
function creditsButton() {
    alert(`Coded By: Benjamin Pevie
Sprites By: Benjamin Pevie

References: 
https://www.w3schools.com/css/
https://www.w3.org/wiki/Creating_multiple_pages_with_navigation_menus
https://www.youtube.com/watch?v=HFG3BKOqOlE
https://stackoverflow.com/questions/65033461/buttons-in-grid-layout-css
`);
}

// Function to go back to index.html when clicking on the "Create New Character Button"
function newCharacter(){
    window.location.href = 'index.html'
}