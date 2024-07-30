import { JsPsych, JsPsychExtension, JsPsychExtensionInfo } from "jspsych";
declare class DeviceMotionExtension implements JsPsychExtension {
    private jsPsych;
    static info: JsPsychExtensionInfo;
    constructor(jsPsych: JsPsych);
    private currentTrialData;
    private currentTrialStartTime;
    initialize: () => Promise<void>;
    on_start: () => void;
    on_load: () => void;
    on_finish: () => {
        device_motion_data: object[];
    };
    private deviceMotionEventHandler;
}
export default DeviceMotionExtension;
