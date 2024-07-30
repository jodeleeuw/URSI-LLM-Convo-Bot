import { JsPsych, JsPsychPlugin, ParameterType, TrialType } from "jspsych";
declare const info: {
    readonly name: "vsl-animate-occlusion";
    readonly parameters: {
        /** Array containing path(s) to image file(s). */
        readonly stimuli: {
            readonly type: ParameterType.IMAGE;
            readonly pretty_name: "Stimuli";
            readonly default: any;
            readonly array: true;
        };
        /** Array containing the key(s) that the subject is allowed to press in order to respond to the stimulus. */
        readonly choices: {
            readonly type: ParameterType.KEYS;
            readonly pretty_name: "Choices";
            readonly default: "ALL_KEYS";
        };
        /** Array specifying the width and height of the area that the animation will display in. */
        readonly canvas_size: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Canvas size";
            readonly array: true;
            readonly default: readonly [400, 400];
        };
        /** Array specifying the width and height of the images to show. */
        readonly image_size: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Image size";
            readonly array: true;
            readonly default: readonly [100, 100];
        };
        /** Which direction the stimulus should move first. */
        readonly initial_direction: {
            readonly type: ParameterType.SELECT;
            readonly pretty_name: "Initial direction";
            readonly choices: readonly ["left", "right"];
            readonly default: "left";
        };
        /** If true, display a rectangle in the center of the screen that is just wide enough to occlude the image completely as it passes behind. */
        readonly occlude_center: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "Occlude center";
            readonly default: true;
        };
        /** How long it takes for a stimulus in the sequence to make a complete cycle. */
        readonly cycle_duration: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Cycle duration";
            readonly default: 1000;
        };
        /** How long to wait before the stimuli starts moving from behind the center rectangle. */
        readonly pre_movement_duration: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Pre movement duration";
            readonly default: 500;
        };
    };
};
type Info = typeof info;
/**
 * **vsl-animate-occlusion**
 *
 * jsPsych plugin for showing animations that mimic the experiment described in
 * Fiser, J., & Aslin, R. N. (2002). Statistical learning of higher-order
 * temporal structure from visual shape sequences. Journal of Experimental
 * Psychology: Learning, Memory, and Cognition, 28(3), 458.
 *
 * @author Josh de Leeuw
 * @see {@link https://www.jspsych.org/plugins/jspsych-vsl-animate-occlusion/ vsl-animate-occlusion plugin documentation on jspsych.org}
 */
declare class VslAnimateOcclusionPlugin implements JsPsychPlugin<Info> {
    private jsPsych;
    static info: {
        readonly name: "vsl-animate-occlusion";
        readonly parameters: {
            /** Array containing path(s) to image file(s). */
            readonly stimuli: {
                readonly type: ParameterType.IMAGE;
                readonly pretty_name: "Stimuli";
                readonly default: any;
                readonly array: true;
            };
            /** Array containing the key(s) that the subject is allowed to press in order to respond to the stimulus. */
            readonly choices: {
                readonly type: ParameterType.KEYS;
                readonly pretty_name: "Choices";
                readonly default: "ALL_KEYS";
            };
            /** Array specifying the width and height of the area that the animation will display in. */
            readonly canvas_size: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Canvas size";
                readonly array: true;
                readonly default: readonly [400, 400];
            };
            /** Array specifying the width and height of the images to show. */
            readonly image_size: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Image size";
                readonly array: true;
                readonly default: readonly [100, 100];
            };
            /** Which direction the stimulus should move first. */
            readonly initial_direction: {
                readonly type: ParameterType.SELECT;
                readonly pretty_name: "Initial direction";
                readonly choices: readonly ["left", "right"];
                readonly default: "left";
            };
            /** If true, display a rectangle in the center of the screen that is just wide enough to occlude the image completely as it passes behind. */
            readonly occlude_center: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "Occlude center";
                readonly default: true;
            };
            /** How long it takes for a stimulus in the sequence to make a complete cycle. */
            readonly cycle_duration: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Cycle duration";
                readonly default: 1000;
            };
            /** How long to wait before the stimuli starts moving from behind the center rectangle. */
            readonly pre_movement_duration: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Pre movement duration";
                readonly default: 500;
            };
        };
    };
    constructor(jsPsych: JsPsych);
    trial(display_element: HTMLElement, trial: TrialType<Info>): void;
}
export default VslAnimateOcclusionPlugin;
