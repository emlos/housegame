export class Time {
  constructor(hours, minutes) {
    this.time = 10 * 60 + 10;

    if (hours != null && minutes != null) {
      this.time = hours * 60 + minutes;
    }

    this.clock = document.getElementById("clock");
    this.drawClock();
  }

  setTime(hours, minutes) {
    this.time = hours * 60 + minutes;
    this.drawClock();
  }

  changeTime(deltaMinutes) {
    this.time += deltaMinutes;
    this.drawClock();
  }

  show() {
    this.clock.style.display = "block";
  }

  hide() {
    this.clock.style.display = "none";
  }

  drawClock() {
    const t = ((this.time % 1440) + 1440) % 1440;
    const hours = Math.floor(t / 60);
    const minutes = t % 60;

    this.clock.querySelector("#hour").style.transform =
      `rotate(${(hours % 12) * 30 + minutes * 0.5}deg)`;

    this.clock.querySelector("#minute").style.transform =
      `rotate(${minutes * 6}deg)`;

    for (let i = 1; i < 12; i++) {
      if (i % 3 === 0) continue;

      const tick = document.createElement("div");
      tick.className = "tick";
      tick.style.transform = `rotate(${i * 30}deg)`;
      this.clock.appendChild(tick);
    }
  }
}
