import "@mediapipe/face_mesh";
import { JsPsych, JsPsychExtension, JsPsychExtensionInfo } from "jspsych";
import { Euler, Vector3 } from "three";
interface IFaceTrackingResult {
    frame_id: number;
    transformation: number[];
    rotation: Euler;
    translation: Vector3;
}
declare class MediapipeFacemeshExtension implements JsPsychExtension {
    private jsPsych;
    static info: JsPsychExtensionInfo;
    private recordedChunks;
    private animationFrameId;
    mediaStream: MediaStream;
    private videoElement;
    private canvasElement;
    private faceMesh;
    private onResultCallbacks;
    private recordTracks;
    constructor(jsPsych: JsPsych);
    initialize: (params: any) => Promise<void>;
    on_start: () => void;
    on_load: (params: any) => void;
    on_finish: () => {
        face_mesh: IFaceTrackingResult[];
    };
    /**
     * Stop the current animation frame to prevent performance leakage.
     */
    private stopAnimationFrame;
    private processFrame;
    addTrackingResultCallback(callback: (ITrackingResult: any) => void): void;
    removeTrackingResultCallback(callback: (ITrackingResult: any) => void): void;
    private onMediaPipeResult;
}
export default MediapipeFacemeshExtension;
