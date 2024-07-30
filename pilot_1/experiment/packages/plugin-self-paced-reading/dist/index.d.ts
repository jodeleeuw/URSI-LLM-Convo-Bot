import { JsPsych, JsPsychPlugin, ParameterType, TrialType } from "jspsych";
declare const info: {
    readonly name: "self-paced-reading";
    readonly parameters: {
        readonly sentence: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "Sentence";
            readonly default: any;
        };
        readonly font_family: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "Font family";
            readonly default: "monospace";
        };
        readonly font_size: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "Font size";
            readonly default: "24px";
        };
        readonly font_weight: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "Font weight";
            readonly default: "normal";
        };
        readonly font_colour: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "Font colour";
            readonly default: "black";
        };
        readonly mask_type: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Mask type";
            readonly default: 1;
        };
        readonly mask_character: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "Mask character";
            readonly default: "_";
        };
        readonly mask_on_word: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "Mask word";
            readonly default: true;
        };
        readonly mask_gap_character: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "Mask gap character.";
            readonly default: " ";
        };
        readonly mask_offset: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Mask offset";
            readonly default: 0;
        };
        readonly mask_weight: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "Mask weight";
            readonly default: "normal";
        };
        readonly mask_colour: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "Mask colour";
            readonly default: "black";
        };
        readonly line_height: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Line height";
            readonly default: 80;
        };
        readonly canvas_colour: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "Canvas colour";
            readonly default: "white";
        };
        readonly canvas_size: {
            readonly type: ParameterType.INT;
            readonly array: true;
            readonly pretty_name: "Canvas size";
            readonly default: readonly [1280, 960];
        };
        readonly canvas_border: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "Canvas border";
            readonly default: "0px solid black";
        };
        readonly canvas_clear_border: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "Clear canvas border";
            readonly default: false;
        };
        readonly translate_origin: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "Translate origin";
            readonly default: true;
        };
        readonly choices: {
            readonly type: ParameterType.KEYS;
            readonly pretty_name: "Keys";
            readonly default: readonly [" "];
        };
        readonly xy_position: {
            readonly type: ParameterType.INT;
            readonly array: true;
            readonly pretty_name: "XY position";
            readonly default: readonly [0, 0];
        };
        readonly x_align: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "X alignment";
            readonly default: "center";
        };
        readonly y_align: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "Y alignment";
            readonly default: "top";
        };
        readonly inter_word_interval: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "inter-word-interval";
            readonly default: 0;
        };
    };
};
type Info = typeof info;
/**
 * **self-paced-reading**
 *
 * jsPsych plugin for self paced reading paradigms.
 *
 * @author igmmgi
 * @see {@link https://www.jspsych.org/plugins/jspsych-self-paced-reading/ self-paced-reading plugin documentation on jspsych.org}
 */
declare class SelfPacedReadingPlugin implements JsPsychPlugin<Info> {
    private jsPsych;
    static info: {
        readonly name: "self-paced-reading";
        readonly parameters: {
            readonly sentence: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "Sentence";
                readonly default: any;
            };
            readonly font_family: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "Font family";
                readonly default: "monospace";
            };
            readonly font_size: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "Font size";
                readonly default: "24px";
            };
            readonly font_weight: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "Font weight";
                readonly default: "normal";
            };
            readonly font_colour: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "Font colour";
                readonly default: "black";
            };
            readonly mask_type: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Mask type";
                readonly default: 1;
            };
            readonly mask_character: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "Mask character";
                readonly default: "_";
            };
            readonly mask_on_word: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "Mask word";
                readonly default: true;
            };
            readonly mask_gap_character: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "Mask gap character.";
                readonly default: " ";
            };
            readonly mask_offset: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Mask offset";
                readonly default: 0;
            };
            readonly mask_weight: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "Mask weight";
                readonly default: "normal";
            };
            readonly mask_colour: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "Mask colour";
                readonly default: "black";
            };
            readonly line_height: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Line height";
                readonly default: 80;
            };
            readonly canvas_colour: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "Canvas colour";
                readonly default: "white";
            };
            readonly canvas_size: {
                readonly type: ParameterType.INT;
                readonly array: true;
                readonly pretty_name: "Canvas size";
                readonly default: readonly [1280, 960];
            };
            readonly canvas_border: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "Canvas border";
                readonly default: "0px solid black";
            };
            readonly canvas_clear_border: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "Clear canvas border";
                readonly default: false;
            };
            readonly translate_origin: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "Translate origin";
                readonly default: true;
            };
            readonly choices: {
                readonly type: ParameterType.KEYS;
                readonly pretty_name: "Keys";
                readonly default: readonly [" "];
            };
            readonly xy_position: {
                readonly type: ParameterType.INT;
                readonly array: true;
                readonly pretty_name: "XY position";
                readonly default: readonly [0, 0];
            };
            readonly x_align: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "X alignment";
                readonly default: "center";
            };
            readonly y_align: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "Y alignment";
                readonly default: "top";
            };
            readonly inter_word_interval: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "inter-word-interval";
                readonly default: 0;
            };
        };
    };
    constructor(jsPsych: JsPsych);
    trial(display_element: HTMLElement, trial: TrialType<Info>): void;
}
export default SelfPacedReadingPlugin;
