import { JsPsych, JsPsychPlugin, ParameterType, TrialType } from "jspsych";
declare const info: {
    readonly name: "vsl-grid-scene";
    readonly parameters: {
        /** An array of images that defines a grid. */
        readonly stimuli: {
            readonly type: ParameterType.IMAGE;
            readonly pretty_name: "Stimuli";
            readonly array: true;
            readonly default: any;
        };
        /** Array specifying the width and height of the images to show. */
        readonly image_size: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Image size";
            readonly array: true;
            readonly default: readonly [100, 100];
        };
        /** How long to show the stimulus for in milliseconds. */
        readonly trial_duration: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Trial duration";
            readonly default: 2000;
        };
    };
};
type Info = typeof info;
/**
 * **vsl-grid-scene**
 *
 * jsPsych plugin for showing scenes that mimic the experiments described in
 * Fiser, J., & Aslin, R. N. (2001). Unsupervised statistical learning of
 * higher-order spatial structures from visual scenes. Psychological science,
 * 12(6), 499-504.
 *
 * @author Josh de Leeuw
 * @see {@link https://www.jspsych.org/plugins/jspsych-vsl-grid-scene/ vsl-grid-scene plugin documentation on jspsych.org}
 */
declare class VslGridScenePlugin implements JsPsychPlugin<Info> {
    private jsPsych;
    static info: {
        readonly name: "vsl-grid-scene";
        readonly parameters: {
            /** An array of images that defines a grid. */
            readonly stimuli: {
                readonly type: ParameterType.IMAGE;
                readonly pretty_name: "Stimuli";
                readonly array: true;
                readonly default: any;
            };
            /** Array specifying the width and height of the images to show. */
            readonly image_size: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Image size";
                readonly array: true;
                readonly default: readonly [100, 100];
            };
            /** How long to show the stimulus for in milliseconds. */
            readonly trial_duration: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Trial duration";
                readonly default: 2000;
            };
        };
    };
    constructor(jsPsych: JsPsych);
    trial(display_element: HTMLElement, trial: TrialType<Info>): void;
    static generate_stimulus(pattern: any, image_size: number[]): string;
}
export default VslGridScenePlugin;
