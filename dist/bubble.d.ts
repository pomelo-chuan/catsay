import type { BubbleStyle } from './types';
interface BubbleOptions {
    padding?: number;
    maxWidth?: number;
    W?: number;
    type?: 'say' | 'think';
    boxStyle?: BubbleStyle;
    B?: BubbleStyle;
}
export declare function bubble(text: string, { padding, maxWidth, W, type, boxStyle, B }?: BubbleOptions): string;
export {};
