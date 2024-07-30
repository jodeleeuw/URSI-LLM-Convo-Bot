import { JsPsych, JsPsychPlugin, ParameterType, TrialType } from "jspsych";
declare const info: {
    readonly name: "audio-swipe-response";
    readonly parameters: {
        /** The HTML string to be displayed. */
        readonly stimulus: {
            readonly type: ParameterType.HTML_STRING;
            readonly pretty_name: "Stimulus";
            readonly default: any;
        };
        /** Array containing the key(s) the subject is allowed to press to respond to the stimulus. */
        readonly keyboard_choices: {
            readonly type: ParameterType.KEYS;
            readonly pretty_name: "Keyboard Choices";
            readonly default: readonly ["ArrowLeft", "ArrowRight"];
        };
        /** Any content here will be displayed below the stimulus. */
        readonly prompt: {
            readonly type: ParameterType.HTML_STRING;
            readonly pretty_name: "Prompt";
            readonly default: any;
        };
        /** How long to show trial before it ends. */
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
        /** If true, then the trial will end as soon as the audio file finishes playing. */
        readonly trial_ends_after_audio: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "Trial ends after audio";
            readonly default: false;
        };
        /** If true, then responses are allowed while the audio is playing. If false, then the audio must finish playing before a response is accepted. */
        readonly response_allowed_while_playing: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "Response allowed while playing";
            readonly default: true;
        };
        /** How far away from the center should the subject have to swipe for a
         * left/right response to be recorded. */
        readonly swipe_threshold: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Swipe translation threshold";
            readonly default: 20;
        };
        /** The offscreen coordinate for the swipe animation */
        readonly swipe_offscreen_coordinate: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Swipe offscreen coordinate";
            readonly default: 1000;
        };
        /** How much should the swipe animation rotate the stimulus */
        readonly swipe_animation_max_rotation: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Swipe animation max rotation";
            readonly default: 20;
        };
        /** How long should the swipe animation last in milliseconds. Set this to
         * zero to disable the animation. This will not be included in the reaction
         * time. */
        readonly swipe_animation_duration: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Swipe animation duration (ms)";
            readonly default: 250;
        };
    };
};
type Info = typeof info;
/**
 * **audio-swipe-response**
 * jsPsych plugin for playing an audio file and getting a swipe response
 * @author Adam Richie-Halford
 * @see {@link https://www.jspsych.org/plugins/jspsych-audio-swipe-response/ audio-swipe-response plugin documentation on jspsych.org}
 */
declare class AudioSwipeResponsePlugin implements JsPsychPlugin<Info> {
    private jsPsych;
    static info: {
        readonly name: "audio-swipe-response";
        readonly parameters: {
            /** The HTML string to be displayed. */
            readonly stimulus: {
                readonly type: ParameterType.HTML_STRING;
                readonly pretty_name: "Stimulus";
                readonly default: any;
            };
            /** Array containing the key(s) the subject is allowed to press to respond to the stimulus. */
            readonly keyboard_choices: {
                readonly type: ParameterType.KEYS;
                readonly pretty_name: "Keyboard Choices";
                readonly default: readonly ["ArrowLeft", "ArrowRight"];
            };
            /** Any content here will be displayed below the stimulus. */
            readonly prompt: {
                readonly type: ParameterType.HTML_STRING;
                readonly pretty_name: "Prompt";
                readonly default: any;
            };
            /** How long to show trial before it ends. */
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
            /** If true, then the trial will end as soon as the audio file finishes playing. */
            readonly trial_ends_after_audio: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "Trial ends after audio";
                readonly default: false;
            };
            /** If true, then responses are allowed while the audio is playing. If false, then the audio must finish playing before a response is accepted. */
            readonly response_allowed_while_playing: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "Response allowed while playing";
                readonly default: true;
            };
            /** How far away from the center should the subject have to swipe for a
             * left/right response to be recorded. */
            readonly swipe_threshold: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Swipe translation threshold";
                readonly default: 20;
            };
            /** The offscreen coordinate for the swipe animation */
            readonly swipe_offscreen_coordinate: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Swipe offscreen coordinate";
                readonly default: 1000;
            };
            /** How much should the swipe animation rotate the stimulus */
            readonly swipe_animation_max_rotation: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Swipe animation max rotation";
                readonly default: 20;
            };
            /** How long should the swipe animation last in milliseconds. Set this to
             * zero to disable the animation. This will not be included in the reaction
             * time. */
            readonly swipe_animation_duration: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Swipe animation duration (ms)";
                readonly default: 250;
            };
        };
    };
    private audio;
    constructor(jsPsych: JsPsych);
    trial(display_element: HTMLElement, trial: TrialType<Info>, on_load: () => void): Promise<unknown>;
    simulate(trial: TrialType<Info>, simulation_mode: any, simulation_options: any, load_callback: () => void): void;
    private create_simulation_data;
    private simulate_data_only;
    private simulate_visual;
}
export default AudioSwipeResponsePlugin;
