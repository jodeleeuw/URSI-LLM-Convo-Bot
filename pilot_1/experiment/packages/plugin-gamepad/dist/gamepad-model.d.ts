export declare class GamepadModel {
    private gamepad;
    private size;
    constructor(gamepad: Gamepad, parent: HTMLElement, size: number);
    private canvas;
    private context;
    private draw_call_list;
    draw_outline: (context: CanvasRenderingContext2D) => void;
    draw_component(component: ComponentPath, axes_id: number, button_id: number): void;
    update(gamepad: Gamepad | null): void;
}
type ComponentPath = Path2D | {
    x: number;
    y: number;
    radius: number;
};
type GamepadTemplate = (gamepad: Gamepad, parent: HTMLElement) => GamepadModel;
export declare let GamepadModels: {
    [prop: string]: GamepadTemplate;
};
export {};
