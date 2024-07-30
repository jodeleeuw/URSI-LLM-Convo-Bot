import { JsPsych, JsPsychPlugin, ParameterType, TrialType } from "jspsych";
declare const info: {
    readonly name: "rdk";
    readonly parameters: {
        /** Array containing the valid key(s) that the subject can press to indicate a response. */
        readonly choices: {
            readonly type: ParameterType.KEYS;
            readonly pretty_name: "Choices";
            readonly default: "ALL_KEYS";
        };
        /** Array containing the correct key(s) for that trial. */
        readonly correct_choice: {
            readonly type: ParameterType.KEYS;
            readonly pretty_name: "Correct choice";
            readonly default: any;
        };
        /** The length of stimulus presentation. */
        readonly trial_duration: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Trial duration";
            readonly default: 500;
        };
        /** If true, then any valid key will end the trial. */
        readonly response_ends_trial: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "Response ends trial";
            readonly default: true;
        };
        /** The number of RDK apertures (If more than one, make sure to separate them by setting aperture_center_x and aperture_center_y for each RDK). */
        readonly number_of_apertures: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Number of apertures";
            readonly default: 1;
        };
        /** The number of dots per set in the stimulus. */
        readonly number_of_dots: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Number of dots";
            readonly default: 300;
        };
        /** The number of sets of dots to cycle through. */
        readonly number_of_sets: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Number of sets";
            readonly default: 1;
        };
        /** The direction of coherent motion in degrees. */
        readonly coherent_direction: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Coherent direction";
            readonly default: 0;
        };
        /** The proportion of dots moving in the coherent direction. */
        readonly coherence: {
            readonly type: ParameterType.FLOAT;
            readonly pretty_name: "Coherence";
            readonly default: 0.5;
        };
        /** The proportion of dots moving in the direction opposite of the coherent direction. */
        readonly opposite_coherence: {
            readonly type: ParameterType.FLOAT;
            readonly pretty_name: "Opposite coherence";
            readonly default: 0;
        };
        /** The radius of the dots in pixels */
        readonly dot_radius: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Dot radius";
            readonly default: 2;
        };
        /** The length of the side of a dot in pixels (only when dot_shape is "square") */
        readonly dot_side_length: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Dot side length";
            readonly default: 1;
        };
        /** The number of frames that pass before each dot disappears and reappears somewhere else. */
        readonly dot_life: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Dot life";
            readonly default: -1;
        };
        /** The distance in pixels each dot moves per frame. */
        readonly move_distance: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Move distance";
            readonly default: 1;
        };
        /** The width of the aperture in pixels. */
        readonly aperture_width: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Aperture width";
            readonly default: 600;
        };
        /** The height of the aperture in pixels. */
        readonly aperture_height: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Aperture height";
            readonly default: 400;
        };
        /** The color of the dots. */
        readonly dot_color: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "Dot color";
            readonly default: "white";
        };
        /** The shape of the dots */
        readonly dot_shape: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "Dot shape";
            readonly default: "circle";
        };
        /** The background color of the stimulus. */
        readonly background_color: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "Background color";
            readonly default: "gray";
        };
        /** The type of RDK (refer to documentation for details). */
        readonly RDK_type: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "RDK type";
            readonly default: 3;
        };
        /** The shape of the aperture. */
        readonly aperture_type: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Aperture Type";
            readonly default: 2;
        };
        /** The reinsertion rule for dots that move out of the aperture. */
        readonly reinsert_type: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Reinsert type";
            readonly default: 2;
        };
        /** The x-coordinate of the center of the aperture. */
        readonly aperture_center_x: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Aperture center X";
            readonly default: number;
        };
        /** The y-coordinate of the center of the aperture. */
        readonly aperture_center_y: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Aperture center Y";
            readonly default: number;
        };
        /** If true, then a fixation cross will be present in the middle of the screen. */
        readonly fixation_cross: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "Fixation cross";
            readonly default: false;
        };
        /** The width of the fixation cross in pixels. */
        readonly fixation_cross_width: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Fixation cross width";
            readonly default: 20;
        };
        /** The height of the fixation cross in pixels. */
        readonly fixation_cross_height: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Fixation cross height";
            readonly default: 20;
        };
        /** The color of the fixation cross. */
        readonly fixation_cross_color: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "Fixation cross color";
            readonly default: "black";
        };
        /** The thickness of the fixation cross. */
        readonly fixation_cross_thickness: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Fixation cross thickness";
            readonly default: 1;
        };
        /** The presence of a border around the aperture. */
        readonly border: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "Border";
            readonly default: false;
        };
        /** The thickness of the border in pixels. */
        readonly border_thickness: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Border width";
            readonly default: 1;
        };
        /** The color of the border. */
        readonly border_color: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "Border Color";
            readonly default: 1;
        };
    };
};
type Info = typeof info;
/**
 * **RDK**
 *
 * jsPsych plugin for showing a random-dot kinematogram stimulus and recording a keyboard response
 *
 * @author Sivananda Rajananda
 * @see {@link https://www.jspsych.org/plugins/jspsych-rdk/ RDK plugin documentation on jspsych.org}
 * @copyright
 *
 * This code was created in the Consciousness and Metacognition Lab at UCLA,
 * under the supervision of Brian Odegaard and Hakwan Lau
 *
 * We would appreciate it if you cited this paper when you use the RDK:
 * Rajananda, S., Lau, H. & Odegaard, B., (2018). A Random-Dot Kinematogram for Web-Based Vision Research. Journal of Open Research Software. 6(1), p.6. DOI: [http://doi.org/10.5334/jors.194]
 *
 * ----------------------
 *
 * Copyright (C) 2017  Sivananda Rajananda
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
declare class RdkPlugin implements JsPsychPlugin<Info> {
    private jsPsych;
    static info: {
        readonly name: "rdk";
        readonly parameters: {
            /** Array containing the valid key(s) that the subject can press to indicate a response. */
            readonly choices: {
                readonly type: ParameterType.KEYS;
                readonly pretty_name: "Choices";
                readonly default: "ALL_KEYS";
            };
            /** Array containing the correct key(s) for that trial. */
            readonly correct_choice: {
                readonly type: ParameterType.KEYS;
                readonly pretty_name: "Correct choice";
                readonly default: any;
            };
            /** The length of stimulus presentation. */
            readonly trial_duration: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Trial duration";
                readonly default: 500;
            };
            /** If true, then any valid key will end the trial. */
            readonly response_ends_trial: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "Response ends trial";
                readonly default: true;
            };
            /** The number of RDK apertures (If more than one, make sure to separate them by setting aperture_center_x and aperture_center_y for each RDK). */
            readonly number_of_apertures: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Number of apertures";
                readonly default: 1;
            };
            /** The number of dots per set in the stimulus. */
            readonly number_of_dots: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Number of dots";
                readonly default: 300;
            };
            /** The number of sets of dots to cycle through. */
            readonly number_of_sets: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Number of sets";
                readonly default: 1;
            };
            /** The direction of coherent motion in degrees. */
            readonly coherent_direction: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Coherent direction";
                readonly default: 0;
            };
            /** The proportion of dots moving in the coherent direction. */
            readonly coherence: {
                readonly type: ParameterType.FLOAT;
                readonly pretty_name: "Coherence";
                readonly default: 0.5;
            };
            /** The proportion of dots moving in the direction opposite of the coherent direction. */
            readonly opposite_coherence: {
                readonly type: ParameterType.FLOAT;
                readonly pretty_name: "Opposite coherence";
                readonly default: 0;
            };
            /** The radius of the dots in pixels */
            readonly dot_radius: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Dot radius";
                readonly default: 2;
            };
            /** The length of the side of a dot in pixels (only when dot_shape is "square") */
            readonly dot_side_length: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Dot side length";
                readonly default: 1;
            };
            /** The number of frames that pass before each dot disappears and reappears somewhere else. */
            readonly dot_life: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Dot life";
                readonly default: -1;
            };
            /** The distance in pixels each dot moves per frame. */
            readonly move_distance: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Move distance";
                readonly default: 1;
            };
            /** The width of the aperture in pixels. */
            readonly aperture_width: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Aperture width";
                readonly default: 600;
            };
            /** The height of the aperture in pixels. */
            readonly aperture_height: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Aperture height";
                readonly default: 400;
            };
            /** The color of the dots. */
            readonly dot_color: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "Dot color";
                readonly default: "white";
            };
            /** The shape of the dots */
            readonly dot_shape: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "Dot shape";
                readonly default: "circle";
            };
            /** The background color of the stimulus. */
            readonly background_color: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "Background color";
                readonly default: "gray";
            };
            /** The type of RDK (refer to documentation for details). */
            readonly RDK_type: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "RDK type";
                readonly default: 3;
            };
            /** The shape of the aperture. */
            readonly aperture_type: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Aperture Type";
                readonly default: 2;
            };
            /** The reinsertion rule for dots that move out of the aperture. */
            readonly reinsert_type: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Reinsert type";
                readonly default: 2;
            };
            /** The x-coordinate of the center of the aperture. */
            readonly aperture_center_x: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Aperture center X";
                readonly default: number;
            };
            /** The y-coordinate of the center of the aperture. */
            readonly aperture_center_y: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Aperture center Y";
                readonly default: number;
            };
            /** If true, then a fixation cross will be present in the middle of the screen. */
            readonly fixation_cross: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "Fixation cross";
                readonly default: false;
            };
            /** The width of the fixation cross in pixels. */
            readonly fixation_cross_width: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Fixation cross width";
                readonly default: 20;
            };
            /** The height of the fixation cross in pixels. */
            readonly fixation_cross_height: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Fixation cross height";
                readonly default: 20;
            };
            /** The color of the fixation cross. */
            readonly fixation_cross_color: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "Fixation cross color";
                readonly default: "black";
            };
            /** The thickness of the fixation cross. */
            readonly fixation_cross_thickness: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Fixation cross thickness";
                readonly default: 1;
            };
            /** The presence of a border around the aperture. */
            readonly border: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "Border";
                readonly default: false;
            };
            /** The thickness of the border in pixels. */
            readonly border_thickness: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Border width";
                readonly default: 1;
            };
            /** The color of the border. */
            readonly border_color: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "Border Color";
                readonly default: 1;
            };
        };
    };
    constructor(jsPsych: JsPsych);
    trial(display_element: HTMLElement, trial: TrialType<Info>): void;
}
export default RdkPlugin;
