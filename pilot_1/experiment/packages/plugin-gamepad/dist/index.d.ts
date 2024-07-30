import { JsPsych, JsPsychPlugin, ParameterType, TrialType } from "jspsych";
declare const info: {
    readonly name: "jspsych-gamepad";
    readonly parameters: {
        /**
         * The size of the canvas element
         */
        readonly canvas_size: {
            readonly type: ParameterType.INT;
            readonly default: readonly [500, 500];
            readonly array: true;
        };
        /**
         * Whether to display a minature gamepad on the page.
         * If set to true, a minature gamepad would be rendered, which simultaneously reflects the button presses and
         * joystick movements of the gamepad.
         * This should only be used for debug purposes, though.
         * Note: at the current stage, there is only limited support to this feature
         */
        readonly display_minature_gamepad: {
            readonly type: ParameterType.BOOL;
            readonly default: false;
        };
        /**
         * The function which, when returning true, would terminate the current trial.
         * This function is called once every frame.
         *
         * @param {CanvasRenderingContext2D} context: The context to draw upon
         * @param {Gamepad} gamepad: The gamepad object connected
         * @param {number} time_stamp: The milliseconds that have elapsed since the first frame
         * @param {number} delta_time: The milliseconds that have elapsed since the last frame
         */
        readonly end_trial: {
            readonly type: ParameterType.FUNCTION;
            readonly default: (_context: CanvasRenderingContext2D, _gamepad: Gamepad, _time_stamp: number, _delta_time: number) => boolean;
        };
        /**
         * The message to display above the canvas when no gamepad is connected or when connection is lost.
         */
        readonly gamepad_connection_prompt: {
            readonly type: ParameterType.STRING;
            readonly default: "Awaiting gamepad connection...";
        };
        /**
         * The function that runs in every frame update.
         *
         * @param {CanvasRenderingContext2D} context: The context to draw upon
         * @param {Gamepad} gamepad: The gamepad object connected
         * @param {number} time_stamp: The milliseconds that have elapsed since the first frame
         * @param {number} delta_time: The milliseconds that have elapsed since the last frame
         */
        readonly on_frame_update: {
            readonly type: ParameterType.FUNCTION;
            readonly default: (_context: CanvasRenderingContext2D, _gamepad: Gamepad, _time_stamp: number, _delta_time: number) => void;
        };
        /**
         * The function to draw on the canvas.
         * This function automatically takes a canvas context as its only argument
         * The content of the stimulus is only drawn once in the first frame, and is then copy-pasted in subsequent frames.
         * Therefore, this parameter is best suited for drawing contents that does not change throughout the entire trial.
         * One can return a Promise object with the function, which will be automatically detected by the plugin.
         */
        readonly stimulus: {
            readonly type: ParameterType.FUNCTION;
            readonly default: (_context: CanvasRenderingContext2D) => void;
        };
    };
};
type Info = typeof info;
/**
 * **jspsych-gamepad**
 *
 * A jsPsych plugin for using gamepad in behavioral experiments.
 *
 * @author Shaobin Jiang
 */
declare class GamepadPlugin implements JsPsychPlugin<Info> {
    private jsPsych;
    static info: {
        readonly name: "jspsych-gamepad";
        readonly parameters: {
            /**
             * The size of the canvas element
             */
            readonly canvas_size: {
                readonly type: ParameterType.INT;
                readonly default: readonly [500, 500];
                readonly array: true;
            };
            /**
             * Whether to display a minature gamepad on the page.
             * If set to true, a minature gamepad would be rendered, which simultaneously reflects the button presses and
             * joystick movements of the gamepad.
             * This should only be used for debug purposes, though.
             * Note: at the current stage, there is only limited support to this feature
             */
            readonly display_minature_gamepad: {
                readonly type: ParameterType.BOOL;
                readonly default: false;
            };
            /**
             * The function which, when returning true, would terminate the current trial.
             * This function is called once every frame.
             *
             * @param {CanvasRenderingContext2D} context: The context to draw upon
             * @param {Gamepad} gamepad: The gamepad object connected
             * @param {number} time_stamp: The milliseconds that have elapsed since the first frame
             * @param {number} delta_time: The milliseconds that have elapsed since the last frame
             */
            readonly end_trial: {
                readonly type: ParameterType.FUNCTION;
                readonly default: (_context: CanvasRenderingContext2D, _gamepad: Gamepad, _time_stamp: number, _delta_time: number) => boolean;
            };
            /**
             * The message to display above the canvas when no gamepad is connected or when connection is lost.
             */
            readonly gamepad_connection_prompt: {
                readonly type: ParameterType.STRING;
                readonly default: "Awaiting gamepad connection...";
            };
            /**
             * The function that runs in every frame update.
             *
             * @param {CanvasRenderingContext2D} context: The context to draw upon
             * @param {Gamepad} gamepad: The gamepad object connected
             * @param {number} time_stamp: The milliseconds that have elapsed since the first frame
             * @param {number} delta_time: The milliseconds that have elapsed since the last frame
             */
            readonly on_frame_update: {
                readonly type: ParameterType.FUNCTION;
                readonly default: (_context: CanvasRenderingContext2D, _gamepad: Gamepad, _time_stamp: number, _delta_time: number) => void;
            };
            /**
             * The function to draw on the canvas.
             * This function automatically takes a canvas context as its only argument
             * The content of the stimulus is only drawn once in the first frame, and is then copy-pasted in subsequent frames.
             * Therefore, this parameter is best suited for drawing contents that does not change throughout the entire trial.
             * One can return a Promise object with the function, which will be automatically detected by the plugin.
             */
            readonly stimulus: {
                readonly type: ParameterType.FUNCTION;
                readonly default: (_context: CanvasRenderingContext2D) => void;
            };
        };
    };
    constructor(jsPsych: JsPsych);
    private gamepad;
    private gamepad_is_connected;
    private minature_gamepad;
    private minature_gamepad_wrapper;
    private start_time_stamp;
    private last_frame_time_stamp;
    private animation_frame_id;
    private frame_request_callback;
    private gamepad_inputs;
    private find_gamepad;
    trial(display_element: HTMLElement, trial: TrialType<Info>, on_load: Function): void;
}
export default GamepadPlugin;
