import { JsPsych, JsPsychPlugin, ParameterType, TrialType } from "jspsych";
declare const info: {
    readonly name: "chat";
    readonly parameters: {
        readonly ai_prompt: {
            readonly type: ParameterType.STRING;
            readonly default: any;
        };
        readonly ai_model: {
            readonly type: ParameterType.STRING;
            readonly default: "gpt-4o";
        };
        readonly chat_field_placeholder: {
            readonly type: ParameterType.STRING;
            readonly default: "Type your message here...";
        };
        readonly continue_button: {
            readonly type: ParameterType.COMPLEX;
            readonly default: {
                readonly message_trigger: 0;
            };
            readonly nested: {
                readonly timer_trigger: {
                    readonly type: ParameterType.INT;
                };
                readonly message_trigger: {
                    readonly type: ParameterType.INT;
                };
                readonly message: {
                    readonly type: ParameterType.STRING;
                };
            };
        };
        readonly additional_prompts: {
            readonly type: ParameterType.COMPLEX;
            readonly array: true;
            readonly default: any;
            readonly nested: {
                readonly message: {
                    readonly type: ParameterType.STRING;
                    readonly default: "";
                };
                readonly prompt: {
                    readonly type: ParameterType.STRING;
                    readonly default: any;
                };
                readonly role: {
                    readonly type: ParameterType.STRING;
                    readonly default: "system-prompt";
                };
                readonly message_trigger: {
                    readonly type: ParameterType.INT;
                    readonly default: any;
                };
                readonly timer_trigger: {
                    readonly type: ParameterType.INT;
                    readonly default: any;
                };
            };
        };
        readonly prompt_chain: {
            readonly type: ParameterType.COMPLEX;
            readonly default: readonly [];
            readonly nested: {
                readonly prompts: {
                    readonly type: ParameterType.STRING;
                    readonly array: true;
                    readonly default: readonly [];
                };
                readonly message_trigger: {
                    readonly type: ParameterType.INT;
                    readonly default: 1e+23;
                };
                readonly timer_trigger: {
                    readonly type: ParameterType.INT;
                    readonly default: any;
                };
            };
        };
        readonly selection_prompt: {
            readonly type: ParameterType.COMPLEX;
            readonly default: {};
            readonly nested: {
                readonly prompts: {
                    readonly type: ParameterType.STRING;
                    readonly array: true;
                    readonly default: readonly [];
                };
                readonly selection_prompt: {
                    readonly type: ParameterType.STRING;
                    readonly default: "Select one of these prompts:";
                };
                readonly message_trigger: {
                    readonly type: ParameterType.INT;
                    readonly default: 1e+23;
                };
                readonly timer_trigger: {
                    readonly type: ParameterType.INT;
                    readonly default: any;
                };
            };
        };
    };
};
type Info = typeof info;
/**
 * **chat**
 *
 * Chat interface for running experiments using LLMs
 *
 * @author Victor Zhang and Niranjan Baskaran
 * @see {@link https://github.com/jspsych/jspsych-contrib/packages/plugin-chat/README.md}}
 */
declare class ChatPlugin implements JsPsychPlugin<Info> {
    private jsPsych;
    static info: {
        readonly name: "chat";
        readonly parameters: {
            readonly ai_prompt: {
                readonly type: ParameterType.STRING;
                readonly default: any;
            };
            readonly ai_model: {
                readonly type: ParameterType.STRING;
                readonly default: "gpt-4o";
            };
            readonly chat_field_placeholder: {
                readonly type: ParameterType.STRING;
                readonly default: "Type your message here...";
            };
            readonly continue_button: {
                readonly type: ParameterType.COMPLEX;
                readonly default: {
                    readonly message_trigger: 0;
                };
                readonly nested: {
                    readonly timer_trigger: {
                        readonly type: ParameterType.INT;
                    };
                    readonly message_trigger: {
                        readonly type: ParameterType.INT;
                    };
                    readonly message: {
                        readonly type: ParameterType.STRING;
                    };
                };
            };
            readonly additional_prompts: {
                readonly type: ParameterType.COMPLEX;
                readonly array: true;
                readonly default: any;
                readonly nested: {
                    readonly message: {
                        readonly type: ParameterType.STRING;
                        readonly default: "";
                    };
                    readonly prompt: {
                        readonly type: ParameterType.STRING;
                        readonly default: any;
                    };
                    readonly role: {
                        readonly type: ParameterType.STRING;
                        readonly default: "system-prompt";
                    };
                    readonly message_trigger: {
                        readonly type: ParameterType.INT;
                        readonly default: any;
                    };
                    readonly timer_trigger: {
                        readonly type: ParameterType.INT;
                        readonly default: any;
                    };
                };
            };
            readonly prompt_chain: {
                readonly type: ParameterType.COMPLEX;
                readonly default: readonly [];
                readonly nested: {
                    readonly prompts: {
                        readonly type: ParameterType.STRING;
                        readonly array: true;
                        readonly default: readonly [];
                    };
                    readonly message_trigger: {
                        readonly type: ParameterType.INT;
                        readonly default: 1e+23;
                    };
                    readonly timer_trigger: {
                        readonly type: ParameterType.INT;
                        readonly default: any;
                    };
                };
            };
            readonly selection_prompt: {
                readonly type: ParameterType.COMPLEX;
                readonly default: {};
                readonly nested: {
                    readonly prompts: {
                        readonly type: ParameterType.STRING;
                        readonly array: true;
                        readonly default: readonly [];
                    };
                    readonly selection_prompt: {
                        readonly type: ParameterType.STRING;
                        readonly default: "Select one of these prompts:";
                    };
                    readonly message_trigger: {
                        readonly type: ParameterType.INT;
                        readonly default: 1e+23;
                    };
                    readonly timer_trigger: {
                        readonly type: ParameterType.INT;
                        readonly default: any;
                    };
                };
            };
        };
    };
    private researcher_prompts;
    private prompt_chain;
    private selection_prompt;
    private messages_sent;
    private timer_start;
    private ai_model;
    private chatLog;
    constructor(jsPsych: JsPsych);
    trial(display_element: HTMLElement, trial: TrialType<Info>): void;
    initializeTrialVariables(trial: TrialType<Info>): void;
    fetchGPT(messages: any, chatBox: any, newMessage?: any): Promise<string | import("openai/resources").ChatCompletionContentPart[]>;
    addMessage(role: any, message: any, chatBox: any, keyPressLog?: any): void;
    updateAndProcessGPT(chatBox: any, prompt?: any): Promise<any>;
    checkResearcherPrompts(chatBox: any, continueButton: any): void;
    private checkCondition;
    private chainPrompts;
    private selectionPrompt;
}
export default ChatPlugin;
