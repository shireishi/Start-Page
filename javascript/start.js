console.log("Welcome back, Ma'am");

/*
 * Fix the rendering component to make the site work on mobile devices.
 * also change the layout of everything to make it look less different and 
 * clunked together whenever it is on mobile or small computer screens
 */

let debug = false;

let totoroGif = "file:///home/elarajade/Documents/Projects/HTML/startpage/images/totoro.gif";
let spiritedGif = "file:///home/elarajade/Documents/Projects/HTML/startpage/images/spirited.gif";

function oppositeGif(currentGif) {
    if (currentGif == totoroGif) {
        return spiritedGif;
    } else {
        return totoroGif;
    }
}

function imageClick() {
    imageBox = document.getElementById("headerImage");
    let source = imageBox.src;
    let oppGif = oppositeGif(source);

    if (debug == true) {
        console.log(`Current gif file : ${source}`);
        console.log(`Opposite gif file : ${oppGif}`);

    }
    
    imageBox.src = oppGif;

}
