import { ParameterType } from 'jspsych';

function xbox_360_controller(gamepad, parent) {
    let model = new GamepadModel(gamepad, parent, 441);
    model.draw_outline = (context) => {
        context.save();
        context.lineWidth = 3;
        let outline_left = new Path2D("M220.5 323.5L150 323.5C105 323.5 81.5 407.5 49.5 407.5C17.5 407.5 4 392.9 4 346.5C4 300.1 43.5 194.5 55 166.5C66.5 138.5 95.5 121 128 121L220.5 121");
        let outline_right = new Path2D("M220.5 323.5L291 323.5C336 323.5 359.5 407.5 391.5 407.5C423.5 407.5 437 392.9 437 346.5C437 300.1 397.5 194.5 386 166.5C374.5 138.5 345.5 121 313 121L220.5 121");
        context.stroke(outline_left);
        context.stroke(outline_right);
        let ls_outline = new Path2D();
        ls_outline.arc(113, 189, 37.5, 0, Math.PI * 2);
        context.stroke(ls_outline);
        let rs_outline = new Path2D();
        rs_outline.arc(278, 267, 37.5, 0, Math.PI * 2);
        context.stroke(rs_outline);
        let d_outline = new Path2D();
        d_outline.arc(163, 267, 37.5, 0, Math.PI * 2);
        context.stroke(d_outline);
        context.restore();
    };
    model.draw_component({ x: 113, y: 189, radius: 30 }, 0, 10); // left stick
    model.draw_component({ x: 278, y: 267, radius: 30 }, 1, 11); // right stick
    model.draw_component({ x: 328, y: 207, radius: 8 }, -1, 0); // A
    model.draw_component({ x: 346, y: 189, radius: 8 }, -1, 1); // B
    model.draw_component({ x: 310, y: 189, radius: 8 }, -1, 2); // X
    model.draw_component({ x: 328, y: 171, radius: 8 }, -1, 3); // Y
    model.draw_component(new Path2D("M111.5 90.5L152.5 90.5C160 90.5 160 103.5 152.5 103.5L111.5 103.5C104 103.5 104 90.5 111.5 90.5"), -1, 4); // LB
    model.draw_component(new Path2D("M329.5 90.5L288.5 90.5C281 90.5 281 103.5 288.5 103.5L329.5 103.5C337 103.5 337 90.5 329.5 90.5"), -1, 5); // RB
    model.draw_component(new Path2D("M152.5 66C152.5 70 149 73.5 145 73.5H132C128 73.5 124.5 70 124.5 66V45.5C124.5 38 131 31.5 138.5 31.5C146 31.5 152.5 38 152.5 45.5V66Z"), -1, 6); // LT
    model.draw_component(new Path2D("M288.5 66C289.5 70 292 73.5 296 73.5H309C313 73.5 316.5 70 316.5 66V45.5C316.5 38 310 31.5 302.5 31.5C295 31.5 288.5 38 288.5 45.5V66Z"), -1, 7); // RT
    model.draw_component({ x: 185, y: 191, radius: 8 }, -1, 8); // Left meta
    model.draw_component({ x: 259, y: 191, radius: 8 }, -1, 9); // Right meta
    model.draw_component({ x: 163, y: 249, radius: 8 }, -1, 12); // DUp
    model.draw_component({ x: 163, y: 285, radius: 8 }, -1, 13); // DDown
    model.draw_component({ x: 145, y: 267, radius: 8 }, -1, 14); // DLeft
    model.draw_component({ x: 181, y: 267, radius: 8 }, -1, 15); // DRight
    return model;
}

class GamepadModel {
    constructor(gamepad, parent, size) {
        this.gamepad = gamepad;
        this.size = size;
        this.draw_call_list = [];
        this.draw_outline = (_context) => { };
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.size;
        this.canvas.height = this.size;
        this.canvas.style.width = "100%";
        parent.appendChild(this.canvas);
        this.context = this.canvas.getContext("2d", { willReadFrequently: true });
    }
    // set button_id to -1 if the current component cannot be pressed
    draw_component(component, axes_id, button_id) {
        if (component instanceof Path2D) {
            this.draw_call_list.push(() => {
                var _a;
                this.context.save();
                this.context.fillStyle = `rgba(0, 0, 0, ${(_a = this.gamepad.buttons[button_id]) === null || _a === void 0 ? void 0 : _a.value})`;
                this.context.lineWidth = 3;
                this.context.stroke(component);
                this.context.fill(component);
                this.context.restore();
            });
        }
        else {
            this.draw_call_list.push(() => {
                var _a;
                let axes_1 = axes_id === -1 ? 0 : this.gamepad.axes[axes_id * 2];
                let axes_2 = axes_id === -1 ? 0 : this.gamepad.axes[axes_id * 2 + 1];
                let path = new Path2D();
                path.arc(component.x + (axes_1 * component.radius) / 2, component.y + (axes_2 * component.radius) / 2, component.radius, 0, Math.PI * 2);
                this.context.stroke(path);
                this.context.save();
                this.context.fillStyle = `rgba(0, 0, 0, ${(_a = this.gamepad.buttons[button_id]) === null || _a === void 0 ? void 0 : _a.value})`;
                this.context.lineWidth = 3;
                this.context.stroke(path);
                this.context.fill(path);
                this.context.restore();
            });
        }
    }
    update(gamepad) {
        if (gamepad !== null) {
            this.gamepad = gamepad;
        }
        this.context.clearRect(0, 0, this.size, this.size);
        this.draw_outline(this.context);
        for (let func of this.draw_call_list) {
            func();
        }
    }
}
let GamepadModels = {
    "Xbox 360 Controller (XInput STANDARD GAMEPAD)": xbox_360_controller,
};

const info = {
    name: "jspsych-gamepad",
    parameters: {
        /**
         * The size of the canvas element
         */
        canvas_size: {
            type: ParameterType.INT,
            default: [500, 500],
            array: true,
        },
        /**
         * Whether to display a minature gamepad on the page.
         * If set to true, a minature gamepad would be rendered, which simultaneously reflects the button presses and
         * joystick movements of the gamepad.
         * This should only be used for debug purposes, though.
         * Note: at the current stage, there is only limited support to this feature
         */
        display_minature_gamepad: {
            type: ParameterType.BOOL,
            default: false,
        },
        /**
         * The function which, when returning true, would terminate the current trial.
         * This function is called once every frame.
         *
         * @param {CanvasRenderingContext2D} context: The context to draw upon
         * @param {Gamepad} gamepad: The gamepad object connected
         * @param {number} time_stamp: The milliseconds that have elapsed since the first frame
         * @param {number} delta_time: The milliseconds that have elapsed since the last frame
         */
        end_trial: {
            type: ParameterType.FUNCTION,
            default: (_context, _gamepad, _time_stamp, _delta_time) => {
                return _time_stamp > 2000;
            },
        },
        /**
         * The message to display above the canvas when no gamepad is connected or when connection is lost.
         */
        gamepad_connection_prompt: {
            type: ParameterType.STRING,
            default: "Awaiting gamepad connection...",
        },
        /**
         * The function that runs in every frame update.
         *
         * @param {CanvasRenderingContext2D} context: The context to draw upon
         * @param {Gamepad} gamepad: The gamepad object connected
         * @param {number} time_stamp: The milliseconds that have elapsed since the first frame
         * @param {number} delta_time: The milliseconds that have elapsed since the last frame
         */
        on_frame_update: {
            type: ParameterType.FUNCTION,
            default: (_context, _gamepad, _time_stamp, _delta_time) => { },
        },
        /**
         * The function to draw on the canvas.
         * This function automatically takes a canvas context as its only argument
         * The content of the stimulus is only drawn once in the first frame, and is then copy-pasted in subsequent frames.
         * Therefore, this parameter is best suited for drawing contents that does not change throughout the entire trial.
         * One can return a Promise object with the function, which will be automatically detected by the plugin.
         */
        stimulus: {
            type: ParameterType.FUNCTION,
            default: (_context) => { },
        },
    },
};
/**
 * **jspsych-gamepad**
 *
 * A jsPsych plugin for using gamepad in behavioral experiments.
 *
 * @author Shaobin Jiang
 */
class GamepadPlugin {
    constructor(jsPsych) {
        this.jsPsych = jsPsych;
        this.gamepad_is_connected = false;
        this.minature_gamepad = null;
        this.start_time_stamp = 0;
        this.last_frame_time_stamp = 0;
        this.animation_frame_id = -1;
        this.frame_request_callback = (_time) => { };
        this.gamepad_inputs = [];
    }
    find_gamepad() {
        var _a;
        this.gamepad = null;
        this.gamepad_is_connected = false;
        for (let gamepad of navigator.getGamepads()) {
            if (gamepad instanceof Gamepad) {
                let previous_gamepad_id = (_a = this.gamepad) === null || _a === void 0 ? void 0 : _a.id;
                this.gamepad = gamepad;
                this.gamepad_is_connected = true;
                if (gamepad.id !== previous_gamepad_id) {
                    this.minature_gamepad_wrapper.innerHTML = "";
                    this.minature_gamepad = GamepadModels[gamepad.id](gamepad, this.minature_gamepad_wrapper);
                }
                break;
            }
        }
    }
    trial(display_element, trial, on_load) {
        // Initialize the canvas element
        let canvas = document.createElement("canvas");
        canvas.width = trial.canvas_size[0];
        canvas.height = trial.canvas_size[1];
        // Initialize the prompt element
        let gamepad_connection_prompt = document.createElement("p");
        gamepad_connection_prompt.style.textAlign = "center";
        gamepad_connection_prompt.innerHTML = trial.gamepad_connection_prompt;
        display_element.appendChild(canvas);
        display_element.appendChild(gamepad_connection_prompt);
        this.minature_gamepad_wrapper = document.createElement("div");
        this.minature_gamepad_wrapper.id = "gamepad-model-wrapper";
        this.minature_gamepad_wrapper.style.width = "10%";
        this.minature_gamepad_wrapper.style.position = "absolute";
        this.jsPsych.getDisplayContainerElement().appendChild(this.minature_gamepad_wrapper);
        let context = canvas.getContext("2d", { willReadFrequently: true });
        let stimulus = trial.stimulus(context);
        let promise;
        if (stimulus instanceof Promise) {
            promise = stimulus;
        }
        else {
            promise = Promise.resolve(stimulus);
        }
        promise.then(() => {
            let image_data = context.getImageData(0, 0, canvas.width, canvas.height);
            this.frame_request_callback = (now) => {
                var _a;
                if (this.start_time_stamp === 0) {
                    this.start_time_stamp = now;
                }
                this.find_gamepad();
                // If gamepad_is_connected is true, then gamepad_connection_prompt should be empty and vice versa
                gamepad_connection_prompt.style.visibility = this.gamepad_is_connected ? "hidden" : "";
                let time_stamp = now - this.start_time_stamp;
                let delta = this.last_frame_time_stamp === 0 ? 0 : now - this.last_frame_time_stamp;
                context.putImageData(image_data, 0, 0);
                trial.on_frame_update(context, this.gamepad, time_stamp, delta);
                if (trial.display_minature_gamepad && this.minature_gamepad_wrapper !== null) {
                    (_a = this.minature_gamepad) === null || _a === void 0 ? void 0 : _a.update(this.gamepad);
                }
                this.gamepad_inputs.push(this.gamepad);
                if (trial.end_trial(context, this.gamepad, time_stamp, delta)) {
                    finish_trial({
                        rt: time_stamp,
                        input: this.gamepad_inputs,
                    });
                }
                this.last_frame_time_stamp = now;
                this.animation_frame_id = window.requestAnimationFrame(this.frame_request_callback);
            };
            on_load();
            this.animation_frame_id = window.requestAnimationFrame(this.frame_request_callback);
        });
        let finish_trial = (data) => {
            window.cancelAnimationFrame(this.animation_frame_id);
            display_element.innerHTML = "";
            this.minature_gamepad_wrapper.remove();
            this.jsPsych.finishTrial(data);
        };
    }
}
GamepadPlugin.info = info;

export { GamepadPlugin as default };
//# sourceMappingURL=index.js.map
