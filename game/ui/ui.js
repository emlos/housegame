export class UI {
    constructor() {
        this.screens = {
            'start' : document.getElementById("screen-start"),
            'game' : document.getElementById("screen-game"),
        }

        this.floorplan = document.getElementById("floor-plan-map");
    }

    hideStartScreen() {
        this.screens.start.style.display = "none";
        this.screens.game.style.display = "block";
    }   

    showStartScreen() {
        this.screens.start.style.display = "flex";
        this.screens.game.style.display = "none";
    }


}