import type { CatInput, CatOptions } from './types';
export declare function catsay(text: CatInput, options?: CatOptions, type?: 'say' | 'think'): string;
export declare function say(text: CatInput, options?: CatOptions): string;
export declare function think(text: CatInput, options?: CatOptions): string;
export type { BubbleStyle, CatInput, CatOptions } from './types';
