'use strict';

/**
 * **Extension-Countdown**
 *
 * jsPsych extension for adding a countdown for a trial
 *
 * @author Shaobin Jiang
 */
class CountdownExtension {
    constructor(jsPsych) {
        this.jsPsych = jsPsych;
        this.time_elapsed = 0;
        this.is_running = true;
        this.initialize = () => {
            return new Promise((resolve, _) => {
                resolve();
            });
        };
        this.on_start = ({ format = (time) => String(Math.floor(time / 1000)), time, update_time = 50, }) => {
            this.format = format;
            this.time = time;
            this.update_time = update_time;
            this.time_elapsed = 0;
            this.countdown_element = document.createElement("div");
            this.countdown_element.innerHTML = this.format(time);
            this.countdown_element.className = "jspsych-extension-countdown";
            this.countdown_element.style.cssText = "font-size: 18px; position: fixed; top: 5%; right: 5%;";
        };
        this.on_load = () => {
            this.jsPsych.getDisplayContainerElement().appendChild(this.countdown_element);
            this.last_recorded_time = performance.now();
            this.timer = window.setInterval(() => {
                let now = performance.now();
                if (this.is_running) {
                    this.time_elapsed += now - this.last_recorded_time;
                }
                this.last_recorded_time = now;
                let time_left = this.time - this.time_elapsed;
                if (time_left <= 0) {
                    window.clearInterval(this.timer);
                }
                else {
                    this.countdown_element.innerHTML = this.format(time_left);
                }
            }, this.update_time);
        };
        this.on_finish = () => {
            window.clearInterval(this.timer);
            this.countdown_element.remove();
            return {};
        };
        this.pause = () => {
            this.is_running = false;
        };
        this.resume = () => {
            this.is_running = true;
        };
        this.get_time_left = () => {
            return this.time - this.time_elapsed;
        };
    }
}
CountdownExtension.info = {
    name: "countdown",
};

module.exports = CountdownExtension;
//# sourceMappingURL=index.cjs.map
