import { JsPsych, JsPsychExtension, JsPsychExtensionInfo } from "jspsych";
interface OnStartParameters {
    format: (time: number) => string;
    time: number;
    update_time: number;
}
/**
 * **Extension-Countdown**
 *
 * jsPsych extension for adding a countdown for a trial
 *
 * @author Shaobin Jiang
 */
declare class CountdownExtension implements JsPsychExtension {
    private jsPsych;
    static info: JsPsychExtensionInfo;
    constructor(jsPsych: JsPsych);
    private format;
    private time;
    private update_time;
    private countdown_element;
    private timer;
    private last_recorded_time;
    private time_elapsed;
    private is_running;
    initialize: () => Promise<void>;
    on_start: ({ format, time, update_time, }: OnStartParameters) => void;
    on_load: () => void;
    on_finish: () => {};
    pause: () => void;
    resume: () => void;
    get_time_left: () => number;
}
export default CountdownExtension;
