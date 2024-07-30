import { JsPsych, JsPsychPlugin, ParameterType, TrialType } from "jspsych";
declare const info: {
    readonly name: "image-array-keyboard-response";
    readonly parameters: {
        /** The image to be displayed */
        readonly stimulus: {
            readonly type: ParameterType.IMAGE;
            readonly pretty_name: "Stimulus";
            readonly default: any;
        };
        /** Set the image rectangle in pixels */
        readonly stimulus_rect: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Image rectangle";
            readonly default: any;
        };
        /** Maintain the aspect ratio after setting width or height */
        readonly maintain_aspect_ratio: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "Maintain aspect ratio";
            readonly default: true;
        };
        /** Array containing the key(s) the subject is allowed to press to respond to the stimulus. */
        readonly choices: {
            readonly type: ParameterType.KEYS;
            readonly pretty_name: "Choices";
            readonly default: "ALL_KEYS";
        };
        /** How long to show the stimulus. */
        readonly stimulus_duration: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Stimulus duration";
            readonly default: any;
        };
        /** How long to show trial before it ends */
        readonly trial_duration: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Trial duration";
            readonly default: any;
        };
        /** If true, trial will end when subject makes a response. */
        readonly response_ends_trial: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "Response ends trial";
            readonly default: true;
        };
        /**
         * If true, the image will be drawn onto a canvas element (prevents blank screen between consecutive images in some browsers).
         * If false, the image will be shown via an img element.
         */
        readonly render_on_canvas: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "Render on canvas";
            readonly default: true;
        };
    };
};
type Info = typeof info;
/**
 * **image-array-keyboard-response**
 *
 * jsPsych plugin for displaying an image array and getting a keyboard response
 *
 * @author Younes Strittmatter
 * @see {@link https://github.com/jspsych/jspsych-contrib/blob/main/packages/plugin-image-array-keyboard-response/README.md image-array-keyboard-response plugin documentation on github.com}
 */
declare class ImageArrayKeyboardResponsePlugin implements JsPsychPlugin<Info> {
    private jsPsych;
    static info: {
        readonly name: "image-array-keyboard-response";
        readonly parameters: {
            /** The image to be displayed */
            readonly stimulus: {
                readonly type: ParameterType.IMAGE;
                readonly pretty_name: "Stimulus";
                readonly default: any;
            };
            /** Set the image rectangle in pixels */
            readonly stimulus_rect: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Image rectangle";
                readonly default: any;
            };
            /** Maintain the aspect ratio after setting width or height */
            readonly maintain_aspect_ratio: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "Maintain aspect ratio";
                readonly default: true;
            };
            /** Array containing the key(s) the subject is allowed to press to respond to the stimulus. */
            readonly choices: {
                readonly type: ParameterType.KEYS;
                readonly pretty_name: "Choices";
                readonly default: "ALL_KEYS";
            };
            /** How long to show the stimulus. */
            readonly stimulus_duration: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Stimulus duration";
                readonly default: any;
            };
            /** How long to show trial before it ends */
            readonly trial_duration: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Trial duration";
                readonly default: any;
            };
            /** If true, trial will end when subject makes a response. */
            readonly response_ends_trial: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "Response ends trial";
                readonly default: true;
            };
            /**
             * If true, the image will be drawn onto a canvas element (prevents blank screen between consecutive images in some browsers).
             * If false, the image will be shown via an img element.
             */
            readonly render_on_canvas: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "Render on canvas";
                readonly default: true;
            };
        };
    };
    constructor(jsPsych: JsPsych);
    trial(display_element: HTMLElement, trial: TrialType<Info>): void;
    simulate(trial: TrialType<Info>, simulation_mode: any, simulation_options: any, load_callback: () => void): void;
    private simulate_data_only;
    private simulate_visual;
    private create_simulation_data;
}
export default ImageArrayKeyboardResponsePlugin;
