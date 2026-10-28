import { Time } from "./game/ui/clock.js";
import { UI } from "./game/ui/ui.js";

const clock = new Time();
const ui = new UI();


document.getElementById("start-game").addEventListener("click", start);

function start() {
    ui.hideStartScreen();
    clock.show();
    setTimeout(() => {
        clock.setTime(12, 30);
    }, 2000);
}

ui.showStartScreen();
