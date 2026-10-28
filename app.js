import { Time } from "./game/ui/clock.js";

const clock = new Time();


document.getElementById("start-game").addEventListener("click", start);

function start() {
    alert("game started");
    clock.show();
    setTimeout(() => {
        clock.setTime(12, 30);
    }, 2000);
}
