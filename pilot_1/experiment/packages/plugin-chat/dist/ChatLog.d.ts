export declare class ChatLog {
    private conversation_log;
    private final_data;
    private prompt;
    constructor();
    setPrompt(prompt: any): void;
    getPrompt(): {
        role: string;
        content: string;
    }[];
    getChatLogs(): {
        role: string;
        content: string;
        time: number;
        keyPressLog?: any;
    }[];
    updateConversationLog(content: any, role: any, keyPressLog?: any, message?: any): void;
    logMessage(message: any, role: any): void;
    cleanConversation(): {}[];
    cleanSystem(prompt: any, message?: any): {
        role: string;
        content: string;
    }[];
}
