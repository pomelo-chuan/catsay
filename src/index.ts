import { bubble } from './bubble';
import { getCat } from './getCat';
import type { CatInput, CatOptions } from './types';

function normalizeInput(input: CatInput, fallbackOptions: CatOptions): { text: string; options: CatOptions } {
  if (typeof input === 'string' || typeof input === 'number') {
    return {
      text: String(input),
      options: fallbackOptions,
    };
  }

  return {
    text: input.text === undefined ? '' : String(input.text),
    options: input,
  };
}

export function catsay(text: CatInput, options: CatOptions = {}, type: 'say' | 'think' = 'say'): string {
  const normalized = normalizeInput(text, options);

  return (
    bubble(normalized.text, {
      type,
      B: normalized.options.B,
      boxStyle: normalized.options.boxStyle,
      padding: normalized.options.padding,
      maxWidth: normalized.options.maxWidth,
      W: normalized.options.W,
    }) + getCat(normalized.options)
  );
}

export function say(text: CatInput, options?: CatOptions): string {
  return catsay(text, options, 'say');
}

export function think(text: CatInput, options?: CatOptions): string {
  return catsay(text, options, 'think');
}

export type { BubbleStyle, CatInput, CatOptions } from './types';
